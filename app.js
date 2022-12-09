// This will our main app file.
// ---- Library ---
const React = {
    createElement: (tag, props, ...children) => {
        if (typeof tag === 'function') {
            return tag(props, ...children);
        }
        const el = {
            tag,
            props,
            children,
        };
        return el;
    },
};
const render = (el, container) => {
    console.log(el);
    console.log(container);
};
// ---- Application ---
console.log('Hello TVS');
const App = () => {
    return (React.createElement("div", { draggable: true },
        React.createElement("h2", null, "Hello React for tv!"),
        React.createElement("p", null, "I am a pargraph"),
        React.createElement("input", { type: "text" })));
};
render(React.createElement(App, null), document.getElementById('tvapp'));
