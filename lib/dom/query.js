require('./navigation');

var document = window.document;

/**
 * Возвращает первый вложенный элемент по запросу
 * @param {string} sel
 * @returns {Node|Element}
 */
window.Element.prototype.$ = function (sel) {
    return this.querySelector(sel);
};

/**
 * Возвращает элемент по запросу, только если он
 * является непосредственным потомком текущего элемента
 * @param {string} sel
 * @returns {Node|Element}
 */
window.Element.prototype.$c = function (sel) {
    var a = this.$(sel);
    return a.parent == this ? a : null;
};

/**
 * Возвращает вложенные элементы по запросу, только если они
 * являются непосредственными потомками текущего элемента
 * @param {string} sel
 * @returns {Node[]|Element[]}
 */
window.Element.prototype.$$c = function (sel) {
    var a = this.$$(sel), self = this;
    return (a.length == 0) ? [] : a.filter(function (x) {
        return (x.parent == self);
    });
};

/**
 * Возвращает первый родительский элемент, удовлетворяющий запросу
 * @param {string} sel
 * @returns {Node|Element}
 */
window.Element.prototype.$p = function (sel) {
    var p = this.parent;
    while ((p != document) && !p.matches(sel)) {
        p = p.parent;
    }
    if (p == document)
        p = null;
    return p;
};

/**
 * Возвращает все родительские элементы, удовлетворяющие запросу
 * @param {string} sel
 * @returns {Node[]|Element[]}
 */
window.Element.prototype.$$p = function (sel) {
    var a = [];
    var p = this.parent;
    while (p != document) {
        if (p.matches(sel))
            a.push(p);
        p = p.parent;
    }
    return a;
};

/**
 * Проверяет, удовлетворяет ли элемент селектору
 * @param {string} sel
 * @returns {boolean}
 */
window.Element.prototype.matches = function (sel) {
    return this.webkitMatchesSelector ? this.webkitMatchesSelector(sel) :
          (this.matchesSelector       ? this.matchesSelector(sel)       : false);
};

/**
 * @param {string} sel
 * @returns {Node|Element}
 */
window.$ = global.$ = function (sel) {
    return window.document.querySelector(sel);
};

var firstRun = true;
module.exports = function (hf) {
    if (firstRun) firstRun = false; else return;

    require('../util')(hf);

    /**
     * @param {string} sel
     * @returns {Node[]|Element[]}
     */
    window.$$ = global.$$ = function (sel) {
        var a = document.querySelectorAll(sel);
        return (a === null) ? [] : a.toArray();
    };

    hf.$  = window.$;
    hf.$$ = window.$$;

    /**
     * Возвращает все вложенные элементы по запросу
     * @param {string} sel
     * @returns {Node[]|Element[]}
     */
    window.Element.prototype.$$ = function (sel) {
        var a = this.querySelectorAll(sel);
        return (a === null) ? [] : a.toArray();
    };

    /**
     * @param {Element|Node|string} x
     * @returns {Node|Element}
     */
    hf.e = function (x) {
        return hf.isString(x) ? $(x) : x;
    };
};
