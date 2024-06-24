const fs = require('fs');
const path = require('path');
const { Client } = require('ssh2');
const env = require('./mydevil.config');

const conn = new Client();
const localDistPath = path.join(__dirname, 'dist');
const remotePath = `domains/${env.APP_DOMAIN}/public_nodejs`;

console.log(
    '\x1b[38;5;87mStarting pipeline: \x1b[38;5;214mmydevil\x1b[38;5;83m\n\x1b[0m'
);
conn.on('ready', () => {
    console.log('\x1b[38;5;87mConnection established.\n\x1b[0m');
    // 1. Remove old build
    console.log('\x1b[38;5;87mRemoving old build.\n\x1b[0m');
    conn.exec(`find ${remotePath} -mindepth 1 -delete`, (err, stream) => {
        if (err) throw err;

        stream
            .on('close', (code, signal) => {})
            .on('data', (data) => {
                console.log('STDOUT: ' + data);
            })
            .stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
    });
    // 2. Upload build
    console.log('\x1b[38;5;87mCopying files.\n\x1b[0m');
    conn.sftp((err, sftp) => {
        if (err) throw err;

        const uploadDir = (localDir, remoteDir) => {
            fs.readdir(localDir, (err, files) => {
                if (err) throw err;

                files.forEach((file) => {
                    const localFilePath = path.join(localDir, file);
                    const remoteFilePath = path
                        .join(remoteDir, file)
                        .replace(/\\/g, '/');

                    fs.stat(localFilePath, (err, stats) => {
                        if (err) throw err;

                        if (stats.isDirectory()) {
                            sftp.mkdir(
                                remoteFilePath,
                                { mode: '0755' },
                                (err) => {
                                    if (err && err.code !== 4) throw err; // Ignore "failure" error
                                    uploadDir(localFilePath, remoteFilePath);
                                }
                            );
                        } else {
                            sftp.fastPut(
                                localFilePath,
                                remoteFilePath,
                                (err) => {
                                    if (err) throw err;
                                    if (env.VERBOSE_LOG) {
                                        console.log(
                                            `\x1b[38;5;83mUploaded: ${localFilePath} to ${remoteFilePath}\x1b[0m`
                                        );
                                    }
                                }
                            );
                        }
                    });
                });
            });
        };

        uploadDir(localDistPath, remotePath);
    });

    // 3. Run npm install in the remote build directory
    console.log('\x1b[38;5;87mInstalling dependencies...\n\x1b[0m');
    conn.exec(`cd ${remotePath} && npm install`, (err, stream) => {
        if (err) throw err;
        stream
            .on('close', (code, signal) => {
                console.log(`\x1b[38;5;87mnpm install complete.\n\x1b[0m`);
                console.log(
                    `\x1b[38;5;83mDeployment to \x1b[38;5;214mmydevil \x1b[38;5;83msuccessful.\n\x1b[0m`
                );
                conn.end(); // Close the connection
            })
            .on('data', (data) => {
                if (env.VERBOSE_LOG) {
                    console.log(`\x1b[38;5;87m${data}\n\x1b[0m`);
                }
            })
            .stderr.on('data', (data) => {
                console.log(`\x1b[38;5;87m${data}\n\x1b[0m`);
            });
    });
})
    .on('error', (error) => {
        console.log(error);
    })
    .on(
        'keyboard-interactive',
        (name, instructions, instructionsLang, prompts, finish) => {
            // Assume that the server expects the password to be provided in response to the first prompt
            if (
                prompts.length > 0 &&
                prompts[0].prompt.toLowerCase().includes('password')
            ) {
                finish([env.MY_DEVIL_PASSWORD]);
            } else {
                finish([]);
            }
        }
    )
    .connect({
        host: env.MY_DEVIL_HOST,
        username: env.MY_DEVIL_USER,
        port: 22,
        tryKeyboard: true,
    });
