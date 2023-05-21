import React from "react";

export interface ErrorDivProps {
    error: string;
}

const ErrorDiv = ({ error }: ErrorDivProps) => {
    return <>
        {error ? <div className="alert alert-danger p-2 mt-2" role="alert">{error}</div> : null}
    </>
};

export default ErrorDiv;