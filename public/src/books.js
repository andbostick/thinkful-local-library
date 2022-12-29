function findAuthorById(authors, id) {
  const findAuthor = authors.find(author => author.id === id )
  return findAuthor
}

function findBookById(books, id) {
  const findBook = books.find(book => book.id === id)
  return findBook
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOutBooks = getNonReturnedBooks(books);
  const returnedBooks = getReturnedBooks(books);

  const partitionedArr = [[...checkedOutBooks], [...returnedBooks]]

  return partitionedArr
}

function getBorrowersForBook(book, accounts) {
  const transactions = book.borrows;
  
  const result = transactions.map((transaction) => {
    const accountInfo = findAccountById(accounts, transaction.id);
    const newTransaction = {
      ...transaction,
      ...accountInfo,
    };
    return newTransaction;
  });
  
  result.splice(10);
  
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
