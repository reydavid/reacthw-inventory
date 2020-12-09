import React, {Component} from 'react';
//import './InventoryComponent.css';
class InventoryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        startingCount: 0, //this.props.startingCount,
        // Increament: this.props.Increament,
        reset: 1
    }
    this.addNumber = this.addNumber.bind(this);
    this.minusNumber = this.minusNumber.bind(this);
    // this.addIncreament = this.addIncreament.bind(this);
    // this.substructIncreament = this.substructIncreament.bind(this);
    this.handleReset = this.handleReset.bind(this);
    }
     addNumber() {
        this.setState({
            startingCount: this.state.startingCount + 1
        });
    }
     minusNumber() {
         this.setState({
             startingCount: this.state.startingCount - 1
         });
     }
    //  addIncreament() {
    //      this.setState({
    //          Increament: this.state.Increament + 2
    //      })
    //  }
    // substructIncreament() {
        //this.setState({
            //Increament: this.state.Increament - 2
       // })
    //}
     handleReset() {
         console.log("handleReset",this.handleReset)
        this.setState({
          startingCount: 1
        });
     }
     componentDidMount() {
         console.log("clicked!", this.state.startingCount)
     }
     componentDidUpdate() {
         console.log("update ", this.state.Reset)
     }
    render() {
        return(
            <div className = "box">

                <h1> Item:<br/> {this.props.item}{this.state.startingCount} </h1>
                <div>
                    <button onClick = {() => this.addNumber()}> + </button>
                    <button onClick = {() => this.minusNumber()}> - </button>
                    <button onClick = {() => this.handleReset()}> Reset </button>
                </div>
            </div>
        );
    }
}
export default InventoryComponent;