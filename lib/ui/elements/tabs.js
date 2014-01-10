var firstRun = true;
module.exports = function (hf) {
    if (firstRun) firstRun = false; else return;

    require('../../dom')(hf);
    hf.tabs = {};

    // TODO: addTab, closeTab, swapTabs, getActiveTab

    /**
     * Переключает указанный контейнер на указанную вкладку
     * @param {Node|Element|string} element
     * @param {number} index
     */
    hf.tabs.activate = function (element, index) {
        element = hf.e(element);

        if (!element.hasClass('tabbed')) return;

        if (hf.se(element, 'tabswitch', index)) {
            var header = element.$c('.header');
            var body   = element.$c('.body');

            header.$('.active').removeClass('active');
            body.$c('.active').removeClass('active');

            header.$$('.tab')[index].addClass('active');
            body.$$c('.tab')[index].addClass('active');
        }
    };
};