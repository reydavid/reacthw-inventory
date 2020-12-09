    import React, {Component} from 'react';
    import './Inventory.css';

    class Inventory extends Component{
        constructor(props){ //Constructor initializes variables before it mounts, mounts when called in App.js
            super(props);
            this.state = {
                count: 0,
                icount: 1
            };
            this.addButtonHandler = this.addButtonHandler.bind(this);//WTF bind?********
            this.subButtonHandler = this.subButtonHandler.bind(this);
            this.resetButtonHandler = this.resetButtonHandler.bind(this);
            this.incaddButtonHandler = this.incaddButtonHandler.bind(this);
            this.incsubButtonHandler = this.incsubButtonHandler.bind(this);
            this.incresetButtonHandler = this.incresetButtonHandler.bind(this);
        }
        addButtonHandler(){
            this.setState({
                count: this.state.count + this.state.icount // <=change to variable
            })
            console.log("Plus");
        }
        subButtonHandler(){
            this.setState({
                count: this.state.count - this.state.icount // <=change to variable
            })
            console.log("Minus");
        }
        resetButtonHandler(){
            this.setState({
                count: 0
            })
            console.log("reset");
        }
        incaddButtonHandler(){
            this.setState({
                icount: this.state.icount + 1
            })
            console.log("incPlus");
        }
        incsubButtonHandler(){
            this.setState({
                icount: this.state.icount - 1
            })
            console.log(this.state.icount);
            console.log("incMinus");
        }
        incresetButtonHandler(){
            this.setState({
                icount: 1
            })
            console.log("increset");
        }

        componentDidMount(){}

        componentDidUpdate(){}
        
            render(){
                return(
                    <div className="box">
                        <h3>Inventory count:{this.state.count}</h3>
                        <div className="bin">
                            <button onClick={this.addButtonHandler}> + </button>
                            <button onClick={this.subButtonHandler}> - </button>
                            <button onClick={this.resetButtonHandler}> reset </button>
                        </div>
                        <h3>Increment: {this.state.icount} </h3>
                        <div className="bin">
                            <button onClick={this.incaddButtonHandler}> + </button>
                            <button onClick={this.incsubButtonHandler}> - </button>
                            <button onClick={this.incresetButtonHandler}> reset </button>
                        </div>
                    </div>
                )
        }

    }
    export default Inventory;