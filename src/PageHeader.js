import React from 'react';

function PageHeader(props) {
    const { title } = props;

    return (
        <div className="list-books-title">
            <h1>{title}</h1>
        </div>
    );
}

export default PageHeader;
