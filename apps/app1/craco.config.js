// absolute imports configuration
const path = require("path")

module.exports = {
    reactScriptsVersion: "react-scripts" /* (default value) */,
    webpack: {
        alias: {
            "@app1/helpers": path.resolve(__dirname, "src/helpers")
        },
    }
};