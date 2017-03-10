let image = React.createElement('img', { src: 'https://facebook.github.io/react/img/logo.svg' });
let title = React.createElement('h1', null, 'React');
let subtitle = React.createElement('p', null, 'A javascript library for building user interfaces');
let container = React.createElement('div', { className: 'container' }, image, title, subtitle);

ReactDOM.render(container, document.getElementById('root'));