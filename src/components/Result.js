import { useContext, useRef, useState, useEffect } from "react";
import { MyContext } from "../context";

const Result = () => {

    const context = useContext(MyContext);

    useEffect(() => {
        context.result()
    }, [])

    return(
        <div>
            <h3>Your answer is: </h3>
            <div className="viewer">
                { context.state.result }
            </div>
            <div>
                <hr />
                <button 
                    className="btn animate__animated animate__bounceIn animate__delay-1s" 
                    onClick={context.reset}
                >
                    Start over
                </button>
                <button 
                    className="btn animate__animated animate__bounceIn animate__delay-1s" 
                    onClick={context.result}
                >
                    Decide again
                </button>
            </div>
        </div>
    );
}

export default Result;