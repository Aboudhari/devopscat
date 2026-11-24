const test = require('node:test');
const assert = require('node:assert');

test('WebApp project name is correct', () => {
    const projectName = 'WebApp Project';
    assert.strictEqual(projectName, 'WebApp Project');
});