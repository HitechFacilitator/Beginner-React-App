// Parent of the mainCounter component
// This component will consist of a group of mainCounter components
import React, { Component } from 'react';
import Counter from './mainCounter'

class Counters extends Component {
    state = {
        // creating an array of counter(component) objects
        counters: [
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
    }

    // Handler for the reset button 
    handleReset = () =>{
        // create a new array and passing it the content of the old one
        // while setting all thier "value" attributes to zero
        const nCounters = this.state.counters.map( c => { 
            c.value = 0
            return c;
        })
        console.log("clicked");
        // replacing the old array with the new one 
        this.setState({counters: nCounters})
    }
    // Event handler for the onDelete event emmitted when the delete button is been clicked
    // with parameter "id" which represent the id of the undesired counter component
    handleDelete = (id) => {
        // creating an array containing a new group of counter component except the counter with the passed id
        const nCounters = this.state.counters.filter(c => c.id !== id)
        // replacing the actual array with the new array
        this.setState({counters: nCounters})
    };
    // Event handler for the incremnt button having as parameter the desired counter to be incremented
    handleIncrement = (counter) => {
        const nCounters = [...this.state.counters] // creating a clone of the actual array(list of Counter components )
        const i = nCounters.indexOf(counter) // finding the index of the component to be incremented and storing it in "i"
        // nCounters[i] = {...counter}
        nCounters[i].value++ // incrementing the value of the component
        this.setState({counters: nCounters})
    }

    render() { 
        return <div>
            <button onClick={this.handleReset} className="btn btn-bg btn-primary m-4"> Reset </button>
            {this.state.counters.map(counter => 
            // passing the counter object as props to avoid passing many props in case the object has many attributes
            // setting references(onDelete, onIcrement) to the event handler
                <Counter 
                    key={counter.id} 
                    counter={counter} 
                    onDelete={this.handleDelete} 
                    onIncrement={this.handleIncrement}
                >
                </Counter>)}
        </div>;
    }
}
 
export default Counters;