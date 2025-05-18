import React from 'https://esm.sh/react@19.1.0';
import ReactDOM from 'https://esm.sh/react-dom@19.1.0/client';
// https://unpkg.com/babel-standalone@6.26.0/babel.min.js

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Soumadip Majila'),
    React.createElement(Chai, { degree: 'MCA Student' }),
    React.createElement(Chai, { degree: 'BCA Student' }),
    React.createElement(Chai, { degree: '12th' }),
    React.createElement(Chai, { degree: '10th' }),
  ]);
};

const Chai = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h2', {}, props.degree),
  ]);
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
