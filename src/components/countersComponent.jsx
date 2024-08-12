// Parent of the mainCounter component
// This component will consist of a group of mainCounter components
import React, { Component } from 'react';
import Counter from './mainCounter'

class Counters extends Component {
    state = {
        // creating an array of counter(component) objects
        counters: [
            {id:1, value:0},
            {id:2, value:3},
            {id:3, value:0},
            {id:4, value:0}
        ]
    }

    // Event handler for the onDelete event emmitted when the delete button is been clicked
    // with parameter "id" which represent the id of the undesired counter component
    handleDelete = (id) => {
        // creating an array containing a new group of counter component except the counter with the passed id
        const nCounters = this.state.counters.filter(c => c.id !== id)
        // replacing the actual array with the new array
        this.setState({counters: nCounters})
    };

    render() { 
        return <div>
            {this.state.counters.map(counter => 
            // passing the counter object as props to avoid passing many props in case the objrct has many attributes
            // setting a reference(onDelete) to the event handler
                <Counter key={counter.id} counter={counter} onDelete={this.handleDelete}>
                </Counter>)}
        </div>;
    }
}
 
export default Counters;