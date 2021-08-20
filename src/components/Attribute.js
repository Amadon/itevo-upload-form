import React from "react";

function Attribute(props) {
    return (
        <React.Fragment>
            <label>Attribute {props.number}</label>
            <input type="text" className="form-control" name={'attribute[' + props.number + '][attrib_name]'}/>
            <label>Value {props.number}</label>
            <input type="text" className="form-control" name={'attribute[' + props.number + '][attrib_value]'}/>
            <label>Sort Order {props.number}</label>
            <input type="text" className="form-control" name={'attribute[' + props.number + '][sort_sort_order]'}/>
        </React.Fragment>
    )
}

export default Attribute