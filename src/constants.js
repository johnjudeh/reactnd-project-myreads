import PropTypes from 'prop-types';

export const BOOKSHELF_VAL_CURRENTLY_READING = 'currentlyReading'
export const BOOKSHELF_VAL_WANT_TO_READ = 'wantToRead'
export const BOOKSHELF_VAL_READ = 'read'
export const BOOKSHELF_VAL_NONE = 'none'

export const BOOKSHELF_LABELS = {
    [BOOKSHELF_VAL_CURRENTLY_READING]: "Currently Reading",
    [BOOKSHELF_VAL_WANT_TO_READ]: "Want to Read",
    [BOOKSHELF_VAL_READ]: "Read",
    [BOOKSHELF_VAL_NONE]: "None",
};

export const PERMENANT_BOOKSHELVES = [
    BOOKSHELF_VAL_CURRENTLY_READING,
    BOOKSHELF_VAL_WANT_TO_READ,
    BOOKSHELF_VAL_READ,
];

export const PROPTYPE_SHAPE_BOOK = {
    id: PropTypes.string.isRequired,
    shelf: PropTypes.oneOf(PERMENANT_BOOKSHELVES).isRequired,
    imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string.isRequired
    }),
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
}
