'use client';

import React from 'react';

const ErrorPage = ({ error, reset }) => {
    return (
        <div className='container'>
            <div className="py-8 space-y-3">
                <h2 className="text-lg md:text-xl font-semibold">Something went wrong!</h2>
                <button className="button" onClick={() => reset()}>Try again</button>
            </div>
        </div>
    );
};

export default ErrorPage;