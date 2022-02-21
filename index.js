const core = require('@actions/core');
const github = require('@actions/github');

try {
    const input = core.getInput('input-teste')
    console.log(input)
    const output = core.setOutput('output-teste', 'skore')
    console.log(output)
} catch (error) {
    core.setFailed(error.message);
}