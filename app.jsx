let ImageCounter = function (props) {
    return (
        <div className="image-counter">
            <div className="count">{props.count}</div>
            <img src={props.imageUrl} onClick={props.onCount} />
        </div>
    );
};

let Hero = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        };
    },

    handleClick: function () {
        this.setState({ count: this.state.count + 1 });
    },

    render: function () {
        return (
            <div className="container">
                <ImageCounter imageUrl={this.props.imageUrl} count={this.state.count} onCount={this.handleClick} />
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
});

let App = React.createClass({
    render: function () {
        return (
            <div className="container-wrapper">
                <Hero title="React"
                      subtitle="A javascript library for building user interface"
                      imageUrl="https://facebook.github.io/react/img/logo.svg"
                />
                <Hero title="Angular 2"
                      subtitle="One framework"
                      imageUrl="https://angular.io/resources/images/logos/angular2/angular.svg"
                />
            </div>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('root'));