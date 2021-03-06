const common = [
    'src/test/features/**/*.feature',                // Specify our feature files
    '--require-module ts-node/register',    // Load TypeScript module
    '--publish-quiet',
    '--require src/test/step-definitions/**/*.ts',   // Load step definitions
    '--format progress-bar',                // Load custom formatter
    '--format @cucumber/pretty-formatter' // Load custom formatter
].join(' ');

module.exports = {
    default: common
};