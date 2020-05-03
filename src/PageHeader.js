import React from 'react';
import PropTypes from 'prop-types';

function PageHeader(props) {
    const { title } = props;

    return (
        <div className='list-books-title'>
            <h1>{title}</h1>
        </div>
    );
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired
}

export default PageHeader;
