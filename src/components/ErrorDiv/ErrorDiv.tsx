import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

export interface ErrorDivProps {
    error: string;
}

const ErrorDiv = (props: ErrorDivProps) => {
    return props.error ? <div className="alert alert-danger p-2 mt-2" role="alert">{props.error}</div> : null;
};

export default ErrorDiv;