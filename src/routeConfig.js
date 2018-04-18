import React from 'react'
import App from './App'
import Contact from './Containers/Contact'
import About from './Containers/About'
import Home from './Containers/Home'

import {BrowserRouter, Route, Switch, NavLink, Link}  from 'react-router-dom'


// class AppRoute extends React.Component {
//     render() {
//         return (
//             <BrowserRouter>
//                 <div>
//                     <h2>Welcome to React Router Tutorial</h2>
//                     <ul>
//                         <li><NavLink to={'/'}>Home</NavLink></li>
//                         <li><Link to={'/about'}>About</Link></li>
//                     </ul>
//                     <hr />
//
//                     <Switch>
//                         <Route exact path='/' component={Home} />
//                         <Route exact path='/about' component={About} />
//                     </Switch>
//                 </div>
//             </BrowserRouter>
//         );
//     }
// }
// export default AppRoute;

const AppRoute = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Conta</NavLink></li>
            </ul>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact}/>

            </Switch>
        </div>
    </BrowserRouter>
)
export default AppRoute