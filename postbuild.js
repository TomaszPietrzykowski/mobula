const fs = require('fs');
console.log('\x1b[38;5;87mRunning post-build script.\x1b[0m');
// Define paths
const nxBuild = `dist/apps`;
const backendBuildDir = `${nxBuild}/api`;
const frontendBuildDir = `${nxBuild}/mobula`;
const destinationDir = `dist/temp`;

try {
    // Ensure the destination directory exists
    if (!fs.existsSync(destinationDir)) {
        fs.mkdirSync(destinationDir);
    }

    // Copy backend build to destination directory
    fs.cpSync(backendBuildDir, destinationDir, {
        recursive: true,
    });

    // Create a directory for frontend build within the destination directory
    const frontendDestDir = `${destinationDir}/view`;
    if (!fs.existsSync(frontendDestDir)) {
        fs.mkdirSync(frontendDestDir);
    }

    // Copy frontend build to the frontend directory inside the destination directory
    fs.cpSync(frontendBuildDir, frontendDestDir, { recursive: true });

    // Delete original backend build directory
    fs.rmSync(nxBuild, { recursive: true });
    if (fs.existsSync('dist/libs')) {
        fs.rmSync('dist/libs', { recursive: true });
    }
    // flatten the build to dist folder
    fs.cpSync('dist/temp', 'dist', {
        recursive: true,
    });
    fs.rmSync('dist/temp', { recursive: true });

    console.log(
        '\x1b[38;5;83mPost-build success. Copy content of \x1b[38;5;214mdist\x1b[38;5;83m folder directly to the server.\n\x1b[0m'
    );
} catch (err) {
    console.error('Error during post-build:', err);
    process.exit(1);
}
