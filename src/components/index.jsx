import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import FourZeroFour from './404'
import SignIn from './SignIn'
import Home from './admin/home'

function index() {
  return (
    <Router>
        <Routes>
            <Route path='*' Component={FourZeroFour} />
            <Route path='/' Component={SignIn} />
            <Route path='/signin' Component={SignIn} />
            <Route path='/admin/dashboard' Component={Home}/>
        </Routes>
    </Router>
  )
}

export default index;