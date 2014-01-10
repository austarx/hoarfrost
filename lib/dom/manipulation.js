/**
 * Возвращает копию элемента
 * @returns {Node|Element}
 */
window.Element.prototype.clone = function () {
    return this.cloneNode(true);
};

/**
 * Добавлет дочерний элемент
 * @param {Node|Element} node
 */
window.Element.prototype.add = function (node) {
    this.appendChild(node);
};

/**
 * Удаляет элемент
 */
window.Element.prototype.remove = function () {
    this.parentNode.removeChild(this);
};

/**
 * Заменяет элемент
 * @param {Node|Element} node
 */
window.Element.prototype.replace = function (node) {
    this.parentNode.replaceChild(node, this);
};

window.Element.prototype.__prop__('html', function () {
    return this.innerHTML;
}, function (html) {
    this.innerHTML = html;
});

window.Element.prototype.__prop__('empty', function () {
    return this.html.trim() === '';
});

var firstRun = true;
module.exports = function (hf) {
    if (firstRun) firstRun = false; else return;

    /**
     * @param {string} name
     * @returns {Node|Element}
     */
    hf.tag = function (name) {
        return window.document.createElement(name);
    };

    /**
     * @returns {Node|Element}
     */
    hf.div = function () {
        return hf.tag('div');
    };
};
