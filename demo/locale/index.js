var lang = 'ru';

var vars = require('./' + lang);

module.exports = {
    _buttons: {
        newtab: {
            icon: 'plus',
            title: vars.winButtons.newtab
        },
        devtools: {
            icon: 'code',
            title: vars.winButtons.devtools
        },
        pin: {
            icon: 'thumb-tack',
            title: vars.winButtons.pin
        },
        minimize: {
            icon: 'chevron-down',
            title: vars.winButtons.minimize
        },
        maximize: {
            icon: 'chevron-up',
            title: vars.winButtons.maximize
        },
        fullscreen: {
            icon: 'arrows-alt',
            title: vars.winButtons.fullscreen
        },
        close: {
            icon: 'times',
            title: vars.winButtons.close
        }
    },

    winTitle: {
        text: vars.appName,
        button: true,
        icon: 'tachometer'
    },
    winButtons: [
        //'newtab',
        'devtools',
        //'reload',
        //'pin',
        'minimize',
        'maximize',
        //'fullscreen',
        'close'
    ],
    winTabs: [
        {
            text: 'Basic controls',
            title: 'Buttons, checkboxes,<br />input, output',
            active: true
        },
        {
            text: 'Menus'
        },
        {
            text: 'Containers',
            title: 'Tabbed panels, hiders,<br />lists, tables, trees'
        },
        {
            text: 'Toolbars'
        },
        {
            text: 'Markup',
            title: 'HTML and markdown, special attributes'
        }
    ]
};
