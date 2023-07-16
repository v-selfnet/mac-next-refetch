import React from 'react';

const getCategories = async () => {
    const res = await fetch('http://localhost:5000/categories', {
        // ISR - Incremental Static Regeneration
        // Background data Revalidation
        next: {
            revalidate: 5,
        },
    })
    return res.json();
   
};

export default getCategories;