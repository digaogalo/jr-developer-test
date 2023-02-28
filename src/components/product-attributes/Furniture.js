import React from "react";  
import Notification from "../Notification"

export default function Furniture(props) {
    return (
        <div className="">
            Furniture
            <div className="row">
                <div className="col-sm-1">
                    <label htmlFor="height">Height (CM)</label>
                </div>
                <div className="col-sm-5">
                    <input 
                    type="number"
                    id="height"
                    name="height"
                    className="form-control"
                    onChange={props.runHnadleChange}
                    value={props.getFurnitureHeight}
                    onInvalid={props.runHnadleInvalid}
                    onInput={props.runHnadleOnInput}
                    />
                </div>
                <div className="col-sm-6">
                    {props.getFurnitureHeight === "" && (
                        <Notification  message="Please, provide the data of indicated type"/>
                    )}
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-1">
                    <label htmlFor="height">Width (CM)</label>
                </div>
                <div className="col-sm-5">
                    <input 
                    type="number"
                    id="width"
                    name="width"
                    className="form-control"
                    onChange={props.runHnadleChange}
                    value={props.getFurnitureWidth}
                    onInvalid={props.runHnadleInvalid}
                    onInput={props.runHnadleOnInput}
                    />
                </div>
                <div className="col-sm-6">
                    {props.getFurnitureWidth === "" && (
                        <Notification  message="Please, provide the data of indicated type"/>
                    )}
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-1">
                    <label htmlFor="height">Lenght (CM)</label>
                </div>
                <div className="col-sm-5">
                    <input 
                    type="number"
                    id="lenght"
                    name="lenght"
                    className="form-control"
                    onChange={props.runHnadleChange}
                    value={props.getFurnitureLenght}
                    onInvalid={props.runHnadleInvalid}
                    onInput={props.runHnadleOnInput}
                    />
                </div>
                <div className="col-sm-6">
                    {props.getFurnitureWidth === "" && (
                        <Notification  message="Please, provide the data of indicated type"/>
                    )}
                </div>
            </div>
            <div>
                <b>Please, provide dimensions in CM</b>
            </div>
        </div>
    )
}