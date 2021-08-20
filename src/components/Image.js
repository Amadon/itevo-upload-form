import React from "react";

function Image(props) {
    return (
        <React.Fragment>
            <label>Image {props.number}</label>
            <input type="file" className="form-control" name={'image' + props.number}/>
            <label>Sort Order {props.number}</label>
            <input type="text" className="form-control" name={'image[' + props.number + '][sort_order]'}/>
        </React.Fragment>
    )
}

export default Image