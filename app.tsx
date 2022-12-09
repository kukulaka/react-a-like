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
}

const render = (el, container) => {
    console.log(el);
    console.log(container);
  };
  
// ---- Application ---
console.log('Hello TVS');
const App = () => {
    return (
      <div draggable>
        <h2>Hello React for tv!</h2>
        <p>I am a pargraph</p>
        <input type="text" />
      </div>
    );
  };
  render(<App />, document.getElementById('tvapp'));