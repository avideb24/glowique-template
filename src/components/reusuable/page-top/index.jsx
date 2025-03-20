import React from 'react';

const PageTop = ({ title = "", description = "" }) => {
    return (
        <div className="text-center py-6 md:py-10 bg-primary text-white px-10">
            <h1 className="text23xl md:text-4xl font-bold">{title}</h1>
            <p className="mt-2 text-xs md:text-sm">{description}</p>
        </div>
    );
};

export default PageTop;