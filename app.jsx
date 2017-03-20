function Hero(props) {
    let count = 0;

    function handleClick() {
        count += 1;
        console.log(count);
        console.log('click');
    }

    return (
        <div className="container">
            <div className="count">{count}</div>
            <img src={props.imageUrl} onClick={handleClick} />
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
}

// React.createClass({});

ReactDOM.render(
    <div className="container-wrapper">
        <Hero title="React"
              subtitle="A javascript library for building user interface"
              imageUrl="https://facebook.github.io/react/img/logo.svg"
        />
        <Hero title="Angular 2"
              subtitle="One framework"
              imageUrl="https://angular.io/resources/images/logos/angular2/angular.svg"
        />
    </div>,
    document.getElementById('root'));