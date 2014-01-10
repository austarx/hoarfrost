var jade         = require('jade'),
    fs           = require('fs'),
    gui          = window.nwDispatcher.requireNwGui(),
    stylus       = require('stylus');

var firstRun = true;
module.exports = function (hf) {
    if (firstRun) firstRun = false; else return;

    require('../dom')(hf);

    var setStyle = function (css, file) {
        var style = $('style[data-file="' + file + '"]');
        if (style) {
            style.html = css;
        } else {
            style = hf.tag('style');
            style.attr('type', 'text/css');
            style.dataset.file = file;
            style.html = css;

            $('head').add(style);
        }

        hf.sendEvent(window, 'stylus', file);
    };

    hf.win           = gui.Window.get();
    hf.clipboard     = gui.Clipboard.get();

    hf.app           = gui.App;
    hf.shell         = gui.Shell;

    hf.Tray          = gui.Tray;
    hf.Window        = gui.Window;
    hf.Menu          = gui.Menu;
    hf.MenuItem      = gui.MenuItem;

    hf.stylus = function (file) {
        fs.readFile(file, { encoding: 'utf8' }, function (err, text) {
            if (err) throw err;

            var css = '';
            try { css = stylus(text).set('filename', file).render(); }
            catch (err) { throw err; }

            setStyle(css, file);
        });
    };

    hf.jade = function (file, locals) {
        fs.readFile(file, function (err, text) {
            if (err) throw err;

            var template;

            try { template = jade.compile(text, { filename: file, debug: false }); }
            catch (err) { throw err; }

            var body = $('body');
            if (!body) {
                body = hf.tag('body');
                $('html').add(body);
            }

            try { body.html = template(locals); }
            catch (e) { return; }
            hf.sendEvent(window, 'jade', file);
        });
    };

    (function () {
        var maximized;
        hf.win.on('maximize', function () {
            maximized = true;
        });

        hf.win.on('unmaximize', function () {
            maximized = false;
        });

        hf.win.isMaximized = function () {
            return maximized;
        };

        hf.win.toggleMaximized = function () {
            if (maximized)
                hf.win.unmaximize();
            else
                hf.win.maximize();
        };
    })();

    (function () {
        var minimized;

        hf.win.on('minimize', function () {
            minimized = true;
        });

        hf.win.on('restore', function () {
            minimized = false;
        });

        hf.win.isMinimized = function () {
            return minimized;
        };
    })();
};
