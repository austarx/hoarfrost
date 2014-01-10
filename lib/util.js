// TODO: Write docs for util

/**
 * Сокращённый вариант console.log
 */
window.log = global.log = function () {
    console.log.apply(console, arguments);
};

/**
 * Преобразует array-like объект в массив
 * @returns {Array}
 */
window.Object.prototype.toArray = function () {
    return Array.prototype.slice.bind(this)();
};

/**
 * Добавляет геттер
 * @param {string} prop
 * @param {function} getter
 * @public
 */
window.Object.prototype.__get__ = function (prop, getter) {
    this.__defineGetter__(prop, getter);
};

/**
 * Добавляет сеттер
 * @param {string} prop
 * @param {function} setter
 * @public
 */
window.Object.prototype.__set__ = function (prop, setter) {
    this.__defineSetter__(prop, setter);
};

/**
 * Добавляет геттер и сеттер
 * @param {string} prop
 * @param {function} getter
 * @param {function} [setter]
 * @public
 */
window.Object.prototype.__prop__ = function (prop, getter, setter) {
    if (getter)
        this.__get__(prop, getter);
    if (setter)
        this.__set__(prop, setter);
};

/**
 * @param {*} o
 * @returns {boolean}
 */
window.Array.prototype.has = function (o) {
    return this.indexOf(o) >= 0;
};

var firstRun = true;
module.exports = function (hf) {
    if (firstRun) firstRun = false; else return;

    hf.nop = function () {};

    /**
     * Проверяет, является ли объект массивом
     * @param {*} x
     * @returns {boolean}
     */
    hf.isArray = function (x) {
        return Array.isArray(x);
    };

    /**
     * Проверяет, является ли объект массивом
     * @returns {boolean}
     */
    hf.isArray = function () {
        return Array.isArray(this);
    };

    /**
     * Проверяет, является ли объект строкой
     * @param {*} x
     * @returns {boolean}
     */
    hf.isString = function (x) {
        return typeof x == 'string';
    };

    /**
     * Проверяет, является ли объект логическим типом
     * @param {*} x
     * @returns {boolean}
     */
    hf.isBoolean = function (x) {
        return typeof x == 'boolean';
    };

    /**
     * Проверяет, является ли объект числом
     * @param {*} x
     * @returns {boolean}
     */
    hf.isNumber = function (x) {
        return typeof x == 'number' && !isNaN(x);
    };

    /**
     * Проверяет, является ли объект функцией
     * @param {*} x
     * @returns {boolean}
     */
    hf.isFunction = function (x) {
        return typeof x == 'function';
    };

    /**
     * Проверяет, является ли объект null
     * @param {*} x
     * @returns {boolean}
     */
    hf.isNull = function (x) {
        return x == null;
    };
};