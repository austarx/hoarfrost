// TODO: Write docs for dom
// TODO: Translate docs

var document = window.document;

window.Element.prototype.__prop__('prev', function () {
    return this.previousElementSibling;
});


window.Element.prototype.__prop__('next', function () {
    return this.nextElementSibling;
});


window.Element.prototype.__prop__('first', function () {
    return this.firstChild;
});


window.Element.prototype.__prop__('last', function () {
    return this.lastChild;
});

window.Element.prototype.__prop__('parent', function () {
    return this.parentNode;
});

window.Element.prototype.__prop__('parents', function () {
    var a = [];
    var p = this.parent;
    while (p != document) {
        a.push(p);
        p = p.parent;
    }
    return a;
});
