var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var React = {
    createElement: function (tag, props) {
        var children = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            children[_i - 2] = arguments[_i];
        }
        if (typeof tag === 'function') {
            return tag.apply(void 0, __spreadArray([props], children, false));
        }
        var el = {
            tag: tag,
            props: props,
            children: children,
        };
        return el;
    },
};
var render = function (el, container) {
    var domEl;
    // 0. Check the type of el
    //    if string we need to handle it like text node.
    if (typeof el === 'string') {
        // create an actual Text Node
        domEl = document.createTextNode(el);
        container.appendChild(domEl);
        // No children for text so we return.
        return;
    }
    // 1. First create the document node corresponding el
    domEl = document.createElement(el.tag);
    // 2. Set the props on domEl
    var elProps = el.props ? Object.keys(el.props) : null;
    if (elProps && elProps.length > 0) {
        elProps.forEach(function (prop) { return (domEl[prop] = el.props[prop]); });
    }
    // 3. Handle creating the Children.
    if (el.children && el.children.length > 0) {
        // When child is rendered, the container will be
        // the domEl we created here.
        el.children.forEach(function (node) { return render(node, domEl); });
    }
    // 4. append the DOM node to the container.
    container.appendChild(domEl);
};
// ---- Application ---
console.log('Hello TVS');
var App = function () {
    return (React.createElement("div", { draggable: true },
        React.createElement("h2", null, "Hello React for TVs"),
        React.createElement("p", null, "I am a pargraph"),
        React.createElement("input", { type: "text" })));
};
render(React.createElement(App, null), document.getElementById('tvapp'));
