var BrowserWindow, alert, app, chokidar, globalShortcut, ipc, main_window, request;

app = require('app');

BrowserWindow = require('browser-window');

ipc = require('ipc');

request = require('request-promise');

chokidar = require('chokidar');

globalShortcut = require('global-shortcut');

main_window = null;

app.on('ready', function() {
  main_window = new BrowserWindow({
    width: 1000,
    height: 700
  });
  main_window.loadUrl('file://' + __dirname + '/index.html');
  return main_window.openDevTools();
});

alert = function(what) {
  return main_window.webContents.send('alert', what);
};

ipc.on('start-listening-to-dir', function(e, config) {
  return chokidar.watch(config.dir, {
    ignored: /[\/\\]\./
  }).on('change', function(path, stats) {
    return e.sender.send('file-change', {
      path: path,
      stats: stats
    });
  });
});
