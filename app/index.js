const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

import User from './components/User.jsx';

ReactDOM.render(
    <User list={[
        { name: 'Tyler', friend: true },
        { name: 'Ryan', friend: true },
        { name: 'Michael', friend: false },
        { name: 'Mikenzi', friend: false },
        { name: 'Jessica', friend: true },
        { name: 'Dan', friend: false }]}
    />,
    document.getElementById('app')
);