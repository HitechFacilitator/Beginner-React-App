// This component will consist of a group of mainCounter components
import React, { Component } from 'react';
import Counter from './mainCounter'

class Counters extends React.Component {
    render() { 
        return <div>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
        </div>;
    }
}
 
export default Counters;