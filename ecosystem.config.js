module.exports = {
  apps: [{
    name: 'Thunder-Downloader',  // Application name
    script: 'dist/bundle.js', // Path to your main script
    cwd: __dirname, // Current directory (important!)
    instances: 1, // Number of instances to run (usually 1)
    autorestart: true, // Automatically restart on crashes
    watch: false, // Disable file watching (optional)
    // You can also set environment variables here if needed
    // env: {
    //   MY_ENV_VAR: 'my_value'
    // },
    // log_file: 'dist/log.txt', // Path to log file (optional)
  }]
};