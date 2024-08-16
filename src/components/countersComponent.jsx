// Parent of the mainCounter component
// This component will consist of a group of mainCounter components
import React, { Component } from 'react';
import Counter from './mainCounter'

class Counters extends Component {

    render() { 
        return <div>
            <button onClick={this.props.handleReset} className="btn btn-bg btn-primary m-4"> Reset </button>
            {this.props.counters.map(counter => 
            // passing the counter object as props to avoid passing many props in case the object has many attributes
            // setting references(onDelete, onIcrement) to the event handler
                <Counter 
                    key={counter.id} 
                    counter={counter} 
                    onDelete={this.props.handleDelete} 
                    onIncrement={this.props.handleIncrement}
                >
                </Counter>)}
        </div>;
    }
}
 
export default Counters;