var path = require('path');
var tl = require('vso-task-lib');

var echo = new tl.ToolRunner(tl.which('echo', true));

var lvPrjPath = tl.getPathInput('lvPrjPath', true);
echo.arg(lvPrjPath);

var lvPrjTarget = tl.getInput('lvPrjTarget', true);
echo.arg(lvPrjTarget);

var lvPrjBldName = tl.getInput('lvPrjBldName', true);

//check console out
echo.arg("Hello world!");
echo.arg(lvPrjBldName);

// will error and fail task if project doesn't exist
tl.checkPath(lvPrjPath, 'lvPrjPath');


echo.exec({ failOnStdErr: false})
.then(function(code) {
    tl.exit(code);
})
.fail(function(err) {
    console.error(err.message);
    tl.debug('taskRunner fail');
    tl.exit(1);
})
