import React, { Component } from 'react';
import Counters from './components/countersComponent'
import NavBar from './components/navBar'

class App extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <NavBar/>
                <main className="container">
                    <Counters/>
                </main>
                <Counters/>

            </React.Fragment>
        )
    }
}
 
export default App;