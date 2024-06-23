const fs = require('fs');
console.log('\x1b[38;5;87mRunning post-build script.\x1b[0m');
console.log('\x1b[38;5;87mPreparing server output.\x1b[0m');
// Define paths
const backendBuildDir = 'dist/apps/api';
const frontendBuildDir = 'dist/apps/mobula';
const destinationDir = 'dist/deploy';

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

    console.log('\x1b[38;5;83mPost build steps completed successfully.\x1b[0m');
    console.log(
        '\x1b[38;5;83mContent of \x1b[38;5;214mdist/deploy\x1b[38;5;83m can be copied directly to the server.\n\x1b[0m'
    );
} catch (err) {
    console.error('Error during post-build:', err);
    process.exit(1);
}
