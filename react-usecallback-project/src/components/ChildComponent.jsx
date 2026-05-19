import React from "react"

const ChildComponent = (props) => {
    console.log("Child component got re-render again");

    return (
        <div className="child-container">
            {/* <span className="child-text">Child Component</span> */}
            <button className="btn-secondary">
                {props.buttonName}
            </button>
        </div>
    )
}

export default ChildComponent