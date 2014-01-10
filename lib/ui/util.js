window.px = function (x) {
    return x + 'px';
};

window.url = function (x) {
    return 'url(' + x + ')';
};

var firstRun = true;
module.exports = function (hf) {
    if (firstRun) firstRun = false; else return;

    /**
     * @param {*} x
     * @returns {string}
     */
    hf.px = window.px;

    /**
     * @param {*} x
     * @returns {string}
     */
    hf.url = window.url;
};