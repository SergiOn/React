function Hero(props) {
    return (
        <div className="container">
            <img src={props.imageUrl} />
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
}

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