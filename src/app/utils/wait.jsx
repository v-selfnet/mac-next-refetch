import React from 'react';

const Wait = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 5000);
    });
};

export default Wait;