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
                { this.props.heroes.map(function (hero) {
                    return (
                        <Hero title={ hero.title }
                              subtitle={ hero.subtitle }
                              imageUrl={ hero.imageUrl }
                        />
                    );
                }) }
            </div>
        )
    }
});

let data = [
    {
        title: 'React',
        subtitle: "A javascript library for building user interface",
        imageUrl: "https://facebook.github.io/react/img/logo.svg"
    },
    {
        title: "Angular 2",
        subtitle: "One framework",
        imageUrl: "https://angular.io/resources/images/logos/angular2/angular.svg"
    },
    {
        title: "Ember",
        subtitle: "A framework for creating ambitious web applications",
        imageUrl: "https://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200"
    },
    {
        title: "Vue",
        subtitle: "The Progressive JavaScript Framework",
        imageUrl: "https://vuejs.org/images/logo.png"
    }
];

ReactDOM.render(<App heroes={data} />, document.getElementById('root'));