import React from 'react';

const Content = ({children, ...props}) => {
    return (
        <main>
            { children }
        </main>
    )
}

export default Content;
