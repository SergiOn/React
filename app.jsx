let jsx =
<div className="container">
    <img src="https://facebook.github.io/react/img/logo.svg" />
    <h1>React</h1>
    <p>A javascript library for building user interface</p>
</div>;

let dom = ReactDOM.render(jsx, document.getElementById('root'));

console.log(jsx);
console.log(dom);