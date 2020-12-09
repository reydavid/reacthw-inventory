import React, { useState } from 'react';


function UState(){

    const [count, setCount] = useState(0)
    const [icount, setiCount] = useState(1)
    
    function incrementCount() {
        setCount(prevCount => prevCount + icount)
    }
    function decrementCount() {
        setCount(prevCount => prevCount - icount)
    }
    function resetCount() {
        setCount(prevCount => prevCount =0 )
    }
    function incrementiCount() {
        setiCount(previCount => previCount +1)
    }
    function decrementiCount() {
        setiCount(previCount => previCount -1)
    }
    function resetiCount() {
        setiCount(previCount => previCount = 1)
    }

    return (

        <div className="box">
            <h3>Overstock:{count}</h3>
            <div className="bin">
                <button onClick = {incrementCount}>+</button>
                <button onClick = {decrementCount}>-</button>
                <button onClick = {resetCount}>reset</button>
            </div>
            <h3>Increment:{icount}</h3>
                <p>* useState component</p>
            <div className="bin">
                <button onClick = {incrementiCount}>+</button>
                <button onClick = {decrementiCount}>-</button>
                <button onClick = {resetiCount}>reset</button>
            </div>
        </div>
    )

}

export default UState;