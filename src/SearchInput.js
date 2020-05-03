import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchInput extends Component {
    static propTypes = {
        query: PropTypes.string.isRequired,
        updateQuery: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        const { updateQuery } = this.props;
        updateQuery(e.target.value);
    }

    render() {
        const { query } = this.props;

        return (
            <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={query}
                    onChange={this.onInputChange}
                />
            </div>
        );
    }
}

export default SearchInput;
