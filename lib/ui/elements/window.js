var firstRun = true;
module.exports = function (hf) {
    if (firstRun) firstRun = false; else return;

    require('../../dom')(hf);
    require('../nw')(hf);

    window.on('jade', function () {
        (function () {
            var maximized, button = $('.win-button.maximize'), grid = $('.win-grid');

            // Делаем заглушку на тот случай, если нужная кнопка не показана
            button = button ? button : { addClass: hf.nop, removeClass: hf.nop };

            // Load state
            maximized = window.localStorage.getItem('gui.maximized');
            if (maximized == null)
                maximized = hf.app.manifest.window.maximized;
            else
                maximized = maximized == 'true';

            hf.win.on('maximize', function () {
                maximized = true;
                window.localStorage.setItem('gui.maximized', true);
                button.addClass('checked');
                grid.addClass('maximized');
            });

            hf.win.on('unmaximize', function () {
                maximized = false;
                window.localStorage.setItem('gui.maximized', false);
                button.removeClass('checked');
                grid.removeClass('maximized');
            });

            if (maximized) {
                hf.win.maximize();
                button.addClass('checked');
                grid.addClass('maximized');
            } else {
                hf.win.unmaximize();
            }
        })();

        (function () {
            var minimized;

            // Load state
            minimized = window.localStorage.getItem('gui.minimized');
            if (minimized == null)
                minimized = hf.app.manifest.window.minimized;
            else
                minimized = minimized == 'true';

            hf.win.on('minimize', function () {
                minimized = true;
                window.localStorage.setItem('gui.minimized', true);
            });

            hf.win.on('restore', function () {
                minimized = false;
                window.localStorage.setItem('gui.minimized', false);
            });

            if (minimized)
                hf.win.minimize();
            else
                hf.win.restore();
        })();

        hf.on('.win-button.close', 'click', function () {
            hf.win.close();
        });

        hf.on('.win-button.minimize', 'click', function () {
            hf.win.minimize();
        });

        hf.on('.win-button.pin', 'click', function () {
            //
        });

        hf.on('.win-button.devtools', 'click', function () {
            hf.win.showDevTools();
        });

        hf.on('.win-button.maximize', 'click', function (b) {
            hf.win.toggleMaximized();
        });
    });
};