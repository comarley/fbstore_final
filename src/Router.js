import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage'
import CartPage from './pages/cartpage'
import AdminPage from './pages/adminpage'
import LoginPage from './pages/loginpage'
import SignupPage from './pages/signuppage'
import './router.css'

const Router = () => (
    <Switch >
        <Route exact path='/' activeClassName="active" component={HomePage} />
        <Route exact path='/cart' activeClassName="active" component={CartPage} />
        <Route exact path='/admin' activeClassName="active" component={AdminPage} />
        <Route exact path='/login' activeClassName="active" component={LoginPage} />
        <Route exact path='/signup' activeClassName="active" component={SignupPage} />
    </Switch>
)

export default Router;