import React from "react";
import attack from "./images/attack.png"
import defense from "./images/defend.png"

export default class Counter extends React.Component {
    constructor(props){
        super(props)
        this.handleAttack = this.handleAttack.bind(this)
        this.handleDefend = this.handleDefend.bind(this)
        this.state = {
            count: 0,
            lastPlay : "",
            gameStatus : ""
        }
    }
    handleAttack = () =>{
        this.setState((previousState) =>{
            let newCount = previousState.count + Math.round(Math.random() * 10);
            return {
                count : newCount,
                lastPlay : "Attack",
                gameStatus : newCount >= 10 ? `${this.state.lastPlay} won!`: ""
            }
        })
        //this.setState({count : this.state.count + 1})
    }

    handleRandom = () =>{
        let newCount = Math.round(Math.random());
        if(newCount == 0){
            this.handleAttack()
        }
        else{
            this.handleDefend()
        }
    }

    handleDefend = () =>{
        this.setState((previousState) =>{
            let newCount = previousState.count - Math.round(Math.random() * 10);
            return {
                count : newCount,
                lastPlay: "Defense",
                gameStatus : newCount <= -10 ? `${this.state.lastPlay} won!`: ""
            }
        })
        //this.setState({count : this.state.count - 1})
    }

    handleReset = () => {
        this.setState(()=>{
            return{
                count : 0
            }
        })
    }

    render(){
        return(
        <div className="row text-white text-center">
            <h1>Game Score: {this.state.count}</h1>
            <p>You win at +10 points and lose at -10 points!</p>
            <p>Last Play: {this.state.lastPlay} </p>
            <h3>Game Status : {this.state.gameStatus}</h3>
            <div className="col-6 col-md-3 offset-md-3">
                <img
                    style={{
                        width: "100%",
                        cursor: "pointer",
                        border: "1px solid green"
                    }}
                    className="p-4 rounded"
                    src={attack}
                    onClick={this.handleAttack}>
                </img>
            </div>
            <div className="col-6 col-md-3 offset-md-3">
                <img
                    style={{
                        width: "100%",
                        cursor: "pointer",
                        border: "1px solid red"
                    }}
                    className="p-4 rounded"
                    src={defense}
                    onClick={this.handleDefend}>
                </img>
            </div>
            <div className="col-12 col-md-4 offset-md-4">
                <button 
                    className="btn btn-secondary w-100 mt-2"
                    onClick={this.handleRandom}>
                        Random Play
                </button>
                <br/>
                <button 
                    className="btn btn-warning w-100 mt-2"
                    onClick={this.handleReset}>
                        Reset
                </button>
            </div>
        </div>
        )
    }
}