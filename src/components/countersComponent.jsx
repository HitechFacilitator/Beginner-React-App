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

    render() { 
        return <div>
            {this.state.counters.map(counter => 
                <Counter key={counter.id} value={counter.value}> {/* passing value(values of the counters array) to the Counter component */}
                    <h3> Counter {counter.id}</h3> {/* passing a child attribute(special props) to the Counter component */}
                </Counter>)}
        </div>;
    }
}
 
export default Counters;