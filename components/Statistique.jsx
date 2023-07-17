import React from 'react';

const Statistique = ({ className, children }) => {
    return (
        <article className={`statistique ${className}`}>
            {children}
        </article>
    );
};

export default Statistique;