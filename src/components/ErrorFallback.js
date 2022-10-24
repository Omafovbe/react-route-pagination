import React from "react";

const ErrorFallbackUI = ({error}) => {
    
    return (
        <div role='alert' className="error-msg">
            <p>Oops! Something is sure wrong with our code:</p>
            <p style={{ color: 'red' }}>{ error.message }</p>
        </div>
    )
}

export default ErrorFallbackUI;