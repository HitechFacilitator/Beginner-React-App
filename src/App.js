import React, { Component } from 'react';
import Counters from './components/countersComponent'
import NavBar from './components/navBar'

class App extends Component {

    state = {
        counters: [
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ],
        sum : 0
    }

    handleReset = () =>{
        const nCounters = this.state.counters.map( c => { 
            c.value = 0
            return c;
        })
        this.setState({counters: nCounters})
        this.totalCount()
    }
    handleDelete = (id) => {
        const nCounters = this.state.counters.filter(c => c.id !== id)
        this.setState({counters: nCounters})
        this.totalCount()
    };
    handleIncrement = (counter) => {
        const nCounters = [...this.state.counters] 
        const i = nCounters.indexOf(counter) 
        nCounters[i].value++ 
        this.setState({counters: nCounters})
        this.totalCount()
    }
    totalCount = () => {
        var sm=0
        this.state.counters.map( c =>{
            sm=sm + c.value
        })
        this.setState({sum: sm})
        console.log("sum is ",this.state.sum);
    }

    render() { 
        return (
            // Need a parent tag so we gonna use the React.Fragment tag 
            <React.Fragment> 
                <NavBar total={this.state.sum} totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        handleReset={this.handleReset}
                        handleDelete={this.handleDelete}
                        handleIncrement={this.handleIncrement}
                    />
                </main>
            </React.Fragment>
        )
    }
}
 
export default App;