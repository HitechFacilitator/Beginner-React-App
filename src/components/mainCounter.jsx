import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css' /* importing bootstrap into our project */

class Counter extends React.Component{ /* creating a component */
    constructor(props){
        super(props) /* calling the parent constructor (parent = React.Component) */
        this.state = {
            count: 0, /* Declaring our count varaible */
        }
    };

    // function to increment the count varaible or state
    handleAddClick(){
        this.setState((prevState) => ({
            count: prevState.count+1,
        }));
        // The body of this function could still be
        // this.setState({ count: this.state.count + 1})
    }
    //function to determine which value of the count state will be display
    content(){
        return this.state.count === 0 ? " Zero " : this.state.count;
    }

    // function to determine how the count state will be display
    style() {
        return {
            fontSize: 20,
            fontWeight: 'bold',
            //display count background yellow if it count is zero else display background blue
            backgroundColor: this.state.count === 0 ? 'rgb(240, 195, 50)' : 'rgb(79, 79, 218)',
            borderRadius: 6,
            padding: 1,
            paddingBottom: 7
        }
    }

    render(){
        // initialising the style function in the render function
        const style = this.style()

        return(
            <div>
                <br />
                <span style={style} className="m-4"> {this.content()} </span>
                <button onClick={()=>this.handleAddClick()} className="btn btn-bg btn-secondary"> Increment </button> 
            </div>
        )
    }

}

export default Counter
