import React from "react";

export default function ProductGrid(props) {
    return (
        <div className="panel panel-default">
            <input 
            type="checkbox"
            className="delete-checkbox"
            id={props.id}
            name="product-ids"
            onChange={props.runHandleCheckboxChange}
            value={props.id}
            />
            <br />

            {props.sku}
            <br />

            {props.name}
            <br />

            {props.price}
            <br />

            {props.attribute}
        </div>
    )
}