require('./navigation');

/**
 * Добавляет обработчик
 * @param {string} type
 * @param {function} listener
 * @param {boolean} [capture]
 */
window.Element.prototype.on = window.on = function (type, listener, capture) {
    return this.addEventListener(type, listener, capture);
};

/**
 * Удаляет обработчик
 * @param {string} type
 * @param {function} listener
 * @param {boolean} [capture]
 */
window.Element.prototype.off = window.off = function (type, listener, capture) {
    return this.removeEventListener(type, listener, capture);
};

var firstRun = true;
module.exports = function (hf) {
    if (firstRun) firstRun = false; else return;

    require('./query')(hf);

    /**
     * @param {string} filter
     * @param {Node|Element|string} target
     * @param {function} callback
     * @param {boolean} soft
     */
    hf.targetFilter = hf.tf = function (sel, target, callback, soft) {
        target = hf.e(target);

        sel = sel + ((soft) ? '' : (', ' + sel + ' *'));

        if (target.matches(sel))
            if (target.matches(sel)) {
                callback(target);
            } else {
                var tmp = target.parent;
                while (!tmp.matches(sel))
                    tmp = tmp.parent;
                callback(tmp);
            }
    };

    /**
     * @param {*} target
     * @param {string} type
     * @param {string} [detail]
     * @returns {boolean}
     */
    hf.sendEvent = hf.se = function (target, type, detail) {
        target = hf.e(target);

        return target.dispatchEvent(new window.CustomEvent(type, {
            detail: detail,
            bubbles: true,
            cancellable: true,
            srcElement: target
        }));
    };

    hf.on = function (element, event, callback) {
        element = hf.e(element);
        if (element) element.on(event, callback);
    };
};
