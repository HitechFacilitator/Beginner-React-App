import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            arr: ["moise", "isaac", "loic", 12]
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
        let i = -1

        return(
            <div>
                <br />
                <span style={style} className="m-4"> {this.content()} </span>
                <button onClick={()=>this.handleAddClick()} className="btn btn-bg btn-secondary"> Increment </button> 
                <ul>
                    {this.state.arr.map(value => <li key={++i}> {value} </li>)}
                </ul>
            </div>
        )
    }

}

export default Counter
