/**
 * Добавляет класс
 * @param {string} cls
 */
window.Element.prototype.addClass = function (cls) {
    this.classList.add(cls);
};

/**
 * Удаляет класс
 * @param {string} cls
 */
window.Element.prototype.removeClass = function (cls) {
    this.classList.remove(cls);
};

/**
 * Переключает класс
 * @param {string} cls
 */
window.Element.prototype.toggleClass = function (cls) {
    this.classList.toggle(cls);
};

/**
 * Проверяет класс
 * @param {string} cls
 */
window.Element.prototype.hasClass = function (cls) {
    this.classList.contains(cls);
};

/**
 * Иземняет или возвращает атрибут
 * @param {string} attr
 * @param {string} val
 * @returns {string}
 */
window.Element.prototype.attr = function (attr, val) {
    if (val) {
        this.setAttribute(attr, val);
        return val;
    } else
        return this.getAttribute(attr);
};

/**
 * Сбрасывает атрибут
 * @param {string} attr
 */
window.Element.prototype.clearAttr = function (attr) {
    this.attr(attr, '');
};

/**
 * Удаляет атрибут
 * @param {string} attr
 */
window.Element.prototype.delAttr = function (attr) {
    this.removeAttribute(attr);
};

/**
 * Проверяет атрибут
 * @param {string} attr
 * @returns {boolean}
 */
window.Element.prototype.hasAttr = function (attr) {
    return this.hasAttribute(attr);
};

window.Element.prototype.__prop__('rect', function () {
    return this.getBoundingClientRect();
});

window.Element.prototype.__prop__('css', function () {
    return this.style;
});