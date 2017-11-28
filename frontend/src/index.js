import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import App from './components/App'

const App = () =>{
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>        
        </div>
    </Router>
}

render(<App/>, document.querySelector('#app'))
