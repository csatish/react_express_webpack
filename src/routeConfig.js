import React from 'react'
// import App from './App'
// import Contact from './Containers/Contact'
// import About from './Containers/About'
import {BrowserRouter, Route, Switch, NavLink, Link}  from 'react-router-dom'

import DynamicImport from './DynamicImport'


//Working
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


let DyApp = (props) => (<DynamicImport load={()=> import('./App')}>
                        {(Component) => Component === null ? <p>Loading</p> : <Component {...props} />}
                    </DynamicImport>)
let DyAbout = (props) => (<DynamicImport load={()=> import('./Containers/About')}>
                        {(Component) => Component === null ? <p>Loading</p> : <Component {...props} />}
                    </DynamicImport>)
let DyContact = (props) => (<DynamicImport load={()=> import('./Containers/Contact')}>
                        {(Component) => Component === null ? <p>Loading</p> : <Component {...props} />}
                    </DynamicImport>)

const AppRoute = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
            <Switch>
                <Route exact path="/" component={DyApp} />
                <Route exact path="/about" component={DyAbout} />
                <Route exact path="/contact" component={DyContact}/>

            </Switch>

        </div>
    </BrowserRouter>
)
export default AppRoute


