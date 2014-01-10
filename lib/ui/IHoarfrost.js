// TODO: Write docs for Hoarfrost class

var Hoarfrost = function () {};

Hoarfrost.Window = function () {};

/**
 * @param {Window} window
 * @returns {Hoarfrost.Window}
 */
Hoarfrost.Window.prototype.get = function (window) {
    return new Hoarfrost.Window();
};

/**
 * @param {string} url
 * @param {*} [options]
 * @returns {Hoarfrost.Window}
 */
Hoarfrost.Window.prototype.open = function (url, options) {
    return new Hoarfrost.Window();
};

/** @type {Window} */
Hoarfrost.Window.prototype.window = window;

/** @type {number} */
Hoarfrost.Window.prototype.x = 0;

/** @type {number} */
Hoarfrost.Window.prototype.y = 0;

/** @type {number} */
Hoarfrost.Window.prototype.width = 0;

/** @type {number} */
Hoarfrost.Window.prototype.height = 0;

/** @type {string} */
Hoarfrost.Window.prototype.title = '';

/** @type {boolean} */
Hoarfrost.Window.prototype.isFullscreen = false;

/** @type {boolean} */
Hoarfrost.Window.prototype.isKioskMode = false;

/** @type {number} */
Hoarfrost.Window.prototype.zoomLevel = 0;

/**
 * @param {number} x
 * @param {number} y
 */
Hoarfrost.Window.prototype.moveTo = function (x, y) {};

/**
 * @param {number} x
 * @param {number} y
 */
Hoarfrost.Window.prototype.moveBy = function (x, y) {};

/**
 * @param {number} width
 * @param {number} height
 */
Hoarfrost.Window.prototype.resizeTo = function (width, height) {};

/**
 * @param {number} width
 * @param {number} height
 */
Hoarfrost.Window.prototype.resizeBy = function (width, height) {};

Hoarfrost.Window.prototype.focus = function () {};
Hoarfrost.Window.prototype.blur = function () {};

/**
 * @param {boolean} [show]
 */
Hoarfrost.Window.prototype.show = function (show) {};

Hoarfrost.Window.prototype.hide = function () {};

/**
 * @param {boolean} [force]
 */
Hoarfrost.Window.prototype.close = function (force) {};

Hoarfrost.Window.prototype.reload = function () {};
Hoarfrost.Window.prototype.reloadIgnoringCache = function () {};
Hoarfrost.Window.prototype.maximize = function () {};
Hoarfrost.Window.prototype.unmaximize = function () {};
Hoarfrost.Window.prototype.minimize = function () {};
Hoarfrost.Window.prototype.restore = function () {};
Hoarfrost.Window.prototype.enterFullscreen = function () {};
Hoarfrost.Window.prototype.leaveFullscreen = function () {};
Hoarfrost.Window.prototype.toggleFullscreen = function () {};
Hoarfrost.Window.prototype.enterKioskMode = function () {};
Hoarfrost.Window.prototype.leaveKioskMode = function () {};
Hoarfrost.Window.prototype.toggleKioskMode = function () {};

/**
 * @param {string|Node|HTMLElement} [id]
 * @param {boolean} [headless]
 * @returns {Hoarfrost.Window|undefined}
 */
Hoarfrost.Window.prototype.showDevTools = function (id, headless) {};
Hoarfrost.Window.prototype.closeDevTools = function () {};

/**
 * @returns {boolean}
 */
Hoarfrost.Window.prototype.isDevToolsOpen = function () {
    return false;
};

/**
 * @param {number} width
 * @param {number} height
 */
Hoarfrost.Window.prototype.setMaximumSize = function (width, height) {};

/**
 * @param {number} width
 * @param {number} height
 */
Hoarfrost.Window.prototype.setMinimumSize = function (width, height) {};

/**
 * @param {boolean} resizable
 */
Hoarfrost.Window.prototype.setResizable = function (resizable) {};

/**
 * @param {boolean} top
 */
Hoarfrost.Window.prototype.setAlwaysOnTop = function (top) {};

/**
 * @param {string} position
 */
Hoarfrost.Window.prototype.setPosition = function (position) {};

/**
 * @param {boolean} attention
 */
Hoarfrost.Window.prototype.requestAttention = function (attention) {};

Hoarfrost.Window.prototype.cookies = {
    /**
     * @param {*} details
     * @param {function} callback
     */
    get: function (details, callback) {},
    /**
     * @param {*} details
     * @param {function} callback
     */
    getAll: function (details, callback) {},
    /**
     * @param {*} details
     * @param {function} [callback]
     */
    set: function (details, callback) {},
    /**
     * @param {*} details
     * @param {function} [callback]
     */
    remove: function (details, callback) {},
    onChanged: {
        /**
         * @param {function} callback
         */
        addListener: function (callback) {},
        /**
         * @param {function} callback
         */
        removeListener: function (callback) {}
    }
};

Hoarfrost.Clipboard = function () {};

/**
 * @param {'text'} [type]
 * @returns {string}
 */
Hoarfrost.Clipboard.prototype.get = function (type) {
    return '';
};

/**
 * @param {string} data
 * @param {'text'} [type]
 */
Hoarfrost.Clipboard.prototype.set = function (data, type) {};

Hoarfrost.Clipboard.prototype.clear = function () {};

Hoarfrost.App = function () {};

/** @type {string[]} */
Hoarfrost.App.prototype.argv = [];

/** @type {string[]} */
Hoarfrost.App.prototype.fullArgv = [];

/** @type {string} */
Hoarfrost.App.prototype.dataPath = '';

/** @type {*} */
Hoarfrost.App.prototype.manifest = {};

Hoarfrost.App.prototype.clearCache = function () {};
Hoarfrost.App.prototype.closeAllWindows = function () {};
Hoarfrost.App.prototype.crashBrowser = function () {};
Hoarfrost.App.prototype.crashRenderer = function () {};

/**
 * @param {string} url
 * @returns {string}
 */
Hoarfrost.App.prototype.getProxyForURL = function (url) {
    return '';
};

Hoarfrost.App.prototype.quit = function () {};

/**
 * @param {string} dir
 */
Hoarfrost.App.prototype.setCrashDumpDir = function (dir) {};

/**
 * @param {*} [options]
 * @constructor
 */
Hoarfrost.MenuItem = function (options) {};

/** @type {string} */
Hoarfrost.MenuItem.prototype.type = '';

/** @type {string} */
Hoarfrost.MenuItem.prototype.label = '';

/** @type {string} */
Hoarfrost.MenuItem.prototype.icon = '';

/** @type {string} */
Hoarfrost.MenuItem.prototype.tooltip = '';

/** @type {boolean} */
Hoarfrost.MenuItem.prototype.checked = false;

/** @type {boolean} */
Hoarfrost.MenuItem.prototype.enabled = true;

/** @type {Hoarfrost.Menu} */
Hoarfrost.MenuItem.prototype.submenu = new NWMenu();

Hoarfrost.MenuItem.prototype.click = function () {};

/**
 * @param {*} [options]
 * @constructor
 */
Hoarfrost.Menu = function (options) {};

/** @type {Hoarfrost.MenuItem[]} */
Hoarfrost.Menu.prototype.items = [];

/**
 * @param {Hoarfrost.MenuItem} item
 */
Hoarfrost.Menu.prototype.append = function (item) {};

/**
 * @param {Hoarfrost.MenuItem} item
 * @param {number} i
 */
Hoarfrost.Menu.prototype.insert = function (item, i) {};

/**
 * @param {Hoarfrost.MenuItem} item
 */
Hoarfrost.Menu.prototype.remove = function (item) {};

/**
 * @param {number} i
 */
Hoarfrost.Menu.prototype.removeAt = function (i) {};

/**
 * @param {number} x
 * @param {number} y
 */
Hoarfrost.Menu.prototype.popup = function (x, y) {};

/**
 * @param {*} [options]
 * @constructor
 */
Hoarfrost.Tray = function (options) {};

/** @type {string} */
Hoarfrost.Tray.prototype.title = '';

/** @type {string} */
Hoarfrost.Tray.prototype.tooltip = '';

/** @type {string} */
Hoarfrost.Tray.prototype.icon = '';

/** @type {string} */
Hoarfrost.Tray.prototype.alticon = '';

/** @type {Hoarfrost.Menu} */
Hoarfrost.Tray.prototype.menu = '';

Hoarfrost.Shell = function () {};

/**
 * @param {string} url
 */
Hoarfrost.Shell.prototype.openExternal = function (url) {};

/**
 * @param {string} path
 */
Hoarfrost.Shell.prototype.openItem = function (path) {};

/**
 * @param {string} path
 */
Hoarfrost.Shell.prototype.showItemInFolder = function (path) {};

/** @type {Hoarfrost.Window} */
Hoarfrost.prototype.win           = new Hoarfrost.Window();

/**
 * @returns {boolean}
 */
Hoarfrost.prototype.win.isMaximized = function () {
    return false;
};

Hoarfrost.prototype.win.toggleMaximized = function () {};

/**
 * @returns {boolean}
 */
Hoarfrost.prototype.win.isMinimized = function () {
    return false;
};

/** @type {Hoarfrost.Clipboard} */
Hoarfrost.prototype.clipboard     = new Hoarfrost.Clipboard();
/** @type {Hoarfrost.Shell} */
Hoarfrost.prototype.shell         = new Hoarfrost.Shell();
/** @type {Hoarfrost.App} */
Hoarfrost.prototype.app           = new Hoarfrost.App();

Hoarfrost.prototype.Tray          = Hoarfrost.Tray;
Hoarfrost.prototype.Window        = Hoarfrost.Window;
Hoarfrost.prototype.Menu          = Hoarfrost.Menu;
Hoarfrost.prototype.MenuItem      = Hoarfrost.MenuItem;

/**
 * FIXME: fix mouse over/out events
 * Если указанный элемент или любой родительский элемент удовлетворяют селектору,
 * то вызывает колбэк с элементом, удовлетворяющим селектору.
 * @param {string} filter
 * @param {Node|Element|string} target
 * @param {function} callback
 * @param {boolean} [soft]
 */
Hoarfrost.prototype.targetFilter = function (filter, target, callback, soft) {};
Hoarfrost.prototype.tf = Hoarfrost.prototype.targetFilter;
/**
 * Посылает кастомное событие эказанному элементу.
 * @param {*} target
 * @param {string} type
 * @param {string} [detail]
 * @returns {boolean}
 */
Hoarfrost.prototype.sendEvent = function (target, type, detail) {
    return true;
};
Hoarfrost.prototype.se = Hoarfrost.prototype.sendEvent;

// TODO: Rewrite tag and div definitions
/**
 * Создаёт тег
 * @param {string} name
 * @returns {Node|Element}
 */
Hoarfrost.prototype.tag = function (name) {
    return {};
};

/**
 * Создаёт блок
 * @returns {Node|Element}
 */
Hoarfrost.prototype.div = function () {
    return {};
};

/**
 * Возвращает элемент по запросу
 * @param {string} sel
 * @returns {Node|Element}
 */
Hoarfrost.prototype.q = function (sel) {
    return {};
};

/**
 * Возвращает все элементы по запросу
 * @param {string} sel
 * @returns {Node[]|Element[]}
 */
Hoarfrost.prototype.qq = function (sel) {
    return [];
};

/**
 * Возвращает переданный элемент или элемент по селектору, если передна строка
 * @param {Element|Node|string} x
 * @returns {Node|Element}
 */
Hoarfrost.prototype.e = function (x) {
    return {};
};

/**
 * @param {string} dir
 * @param {string} file
 * @param {boolean} force
 */
Hoarfrost.prototype.stylus = function (dir, file, force) {};

/**
 * @param {string} file
 * @param {*} locals
 */
Hoarfrost.prototype.jade = function (file, locals) {};
