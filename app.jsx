function Hero(props) {
    return (
        <div className="container">
            <img src={props.imageUrl} />
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
}

ReactDOM.render(<Hero title="React"
                      subtitle="A javascript library for building user interface"
                      imageUrl="https://facebook.github.io/react/img/logo.svg"
                />,
                document.getElementById('root'));