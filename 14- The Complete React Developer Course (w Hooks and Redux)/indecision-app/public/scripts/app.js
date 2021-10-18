'use strict';

// var template = (
//     <div>
//         <h1>Ahmed Radi</h1>
//         <p>MERN stack developer</p>
//     </div>
// )

var temp = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Ahmed Radi'
    ),
    React.createElement(
        'p',
        null,
        'age: 22'
    ),
    React.createElement(
        'p',
        null,
        'location: Egypt, Cairo, Eltbeen'
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(temp, appRoot);
