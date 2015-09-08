var chokidar = require('chokidar');


chokidar.watch(".", {ignored: /[\/\\]\./}).on('all', function(event, path) {
  console.log(event, path);
});
