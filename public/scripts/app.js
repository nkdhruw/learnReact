'use strict';

console.log('Hi from app.js');

var template = React.createElement(
  'h1',
  null,
  'JSX expression'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
