// This will our main app file.
// ---- Library ---
const React = {
  createElement: (tag, props, ...children) => {
    const el = {
      tag,
      props,
      children,
    };
    console.log(el);
    return el;
  }
}
// ---- Application ---
console.log('Hello TVS');
const App = (
    <div draggable>
    <h2>Hello React for TV</h2>
    <p>I am a pargraph</p>
    <input type="text" />
  </div>
)