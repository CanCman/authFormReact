import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Form from './components/Form/Form.jsx';
import Success from './components/Success/Success.jsx';

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Form} />
            <Route path="/success" component={Success} />
        </BrowserRouter>
    )
}

export default App;