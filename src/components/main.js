import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

class Main extends React.Component {
    render() {
       return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path = '/home' component = {Home} />
                <Route path = '/about' component = {About} />
                <Route path = '/contact' component = {Contact} />
            </Switch>
        </main>
       );
    }
 }

 export default Main;