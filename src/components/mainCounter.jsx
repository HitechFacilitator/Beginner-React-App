// This component is know a " Controlled Component " i.e a component with no state who data is been provide by
// the parent and if it data need to be modified, he raise an event and the parent handle it

import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css' /* importing bootstrap into our project */

class Counter extends React.Component{ /* creating a component */
    //function to determine which value of the count state will be display
    content(){
        return this.props.counter.value === 0 ? " Zero " : this.props.counter.value;
    }

    // function to determine how the count state will be display
    style() {
        return {
            fontSize: 20,
            fontWeight: 'bold',
            //display count background yellow if it count is zero else display background blue
            backgroundColor: this.props.counter.value === 0 ? 'rgb(240, 195, 50)' : 'rgb(79, 79, 218)',
            borderRadius: 6,
            padding: 1,
            paddingBottom: 7
        }
    }

    render(){
        // initialising the style function in the render function
        const style = this.style()
        // arguments destructuring
        const {counter, onIncrement, onDelete} = this.props

        return(
            <div>
                <span style={style} className="m-4"> {this.content()} </span>
                <button onClick={()=>onIncrement(counter)} className="btn btn-bg btn-secondary"> Increment </button>
                {/* Delete button emit the onDelete event when clicked and passing him the id of the concern component */}
                <button onClick={()=>onDelete(counter.id)} className="btn btn-danger btn-bg m-2"> Delete </button>
            </div>
        )
    }

}

export default Counter
