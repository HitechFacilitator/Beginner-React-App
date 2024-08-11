// I just wanna perform some test in this file

import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0, 
            arr: ['one','two','three',4]
        }
    };

    
    handleAddClick(){
        this.setState((prevState) => ({
            count: prevState.count+1,
        }));

    }
    content(){
        return this.state.count === 0 ? " Zero " : this.state.count;
    }
    // function to determine if the array is empty and provide a content accordingly
    // the function takes an array as a parameter
    renderArray(list){
        let i = -1
        if(list.length === 0 ) return <p> The List is empty </p> // if the array is empty display "The List is empty"
        return <ul>{list.map(value => <li key={++i}> {value} </li>)}</ul> // else display it content
    }


    style() {
        return {
            fontSize: 20,
            fontWeight: 'bold',
            backgroundColor: this.state.count === 0 ? 'rgb(240, 195, 50)' : 'rgb(79, 79, 218)',
            borderRadius: 6,
            padding: 1,
            paddingBottom: 7
        }
    }

    render(){
        const style = this.style()

        return(
            <div>
                {this.renderArray(this.state.arr)}
            </div>
        )
    }

}

export default Counter
