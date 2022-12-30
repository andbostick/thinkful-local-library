function findAuthorById(authors, id) {
  const findAuthor = authors.find((author) => author.id === id);
  return findAuthor;
}

function findBookById(books, id) {
  const findBook = books.find((book) => book.id === id);
  return findBook;
}

function partitionBooksByBorrowedStatus(books) {
  const currentlyCheckedOutBooks = books.filter((book) =>
    book.borrows.some((returns) => !returns.returned)
  );

  const returnedBooks = books.filter((book) =>
    book.borrows.every((returns) => returns.returned)
  );

  console.log(currentlyCheckedOutBooks);
  console.log(returnedBooks);

  return [currentlyCheckedOutBooks, returnedBooks];
}

function findAccountById(accounts, id) {
  const foundAccount = accounts.find((account) => account.id === id);
  return foundAccount;
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
