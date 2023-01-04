const core = require("@actions/core");
const github = require("@actions/github");


try {
    const token = core.getInput("token",{
        required: true,
        trimWhitespace: true
    });

    if (token.length == 0 || token == null){
        core.error("Token is required");
        process.exit(1);
    }        
} catch (error) {
    core.error(error.message);
    process.exit(1);
}