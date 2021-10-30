'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    app.options[0].length > 0 ? 'Here are your options' : 'No options',
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            app.options[0].length > 0 ? 'Here are your options ' + app.options[0] : 'No options'
        ),
        React.createElement(
            'li',
            null,
            app.options[1].length > 0 ? 'Here are your options ' + app.options[1] : 'No options'
        )
    )
);

var user = {
    name: 'Ahmed Radi',
    age: 26,
    location: 'Egypt'
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var count = 0;

var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: function onClick(count) {
                return console.log('AddOne');
            } },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: function onClick(count) {
                return console.log('MinusOne');
            } },
        ' -1'
    ),
    React.createElement(
        'button',
        { onClick: function onClick(count) {
                return console.log('Reset');
            } },
        'reset'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
