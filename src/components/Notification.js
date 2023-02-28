import React from "react";

export default function Notification(props) {
    return (
        <p className="text-danger" role="alert">
            {props.message}
        </p>
    )
}