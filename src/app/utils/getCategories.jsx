import React from 'react';

const getCategories = async () => {
    const res = await fetch('http://localhost:5000/categories')
    return res.json();
   
};

export default getCategories;