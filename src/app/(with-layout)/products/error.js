'use client'

import { useEffect } from "react";

const ProductError = ({error, reset}) => {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (    
        <div>
            <h1 className="text-2xl font-semibold">{error.message || 'Something went wrong!'}</h1>
            <button onClick={() => reset()} className="btn btn-xs">Reset</button>
        </div>
    );
};

export default ProductError;