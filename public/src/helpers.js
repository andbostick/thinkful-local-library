const getNonReturnedBooks = (books) => {
    return books.filter((book) => book.borrows.some((transaction) => !transaction.returned));
};
  
const getReturnedBooks = (books) => {
    return books.filter((book) => book.borrows.every((transaction) => transaction.returned));
};

const getAuthorById = (authors, id) => {
    return authors.find((author) => author.id === id);
};
  
const getBooksByAuthorId = (books, authorId) => {
    return books.filter((book) => book.authorId === authorId);
  };
  
module.exports = {
    getNonReturnedBooks,
    getReturnedBooks,
    getAuthorById,
    getBooksByAuthorId
}