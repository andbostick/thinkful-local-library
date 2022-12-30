function findAccountById(accounts, id) {
  const foundAccount = accounts.find((account) => account.id === id);
  return foundAccount;
}

function sortAccountsByLastName(accounts) {
  const sortedAccount = accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
  return sortedAccount;
}

function getTotalNumberOfBorrows(account, books) {
  const borrower = account.id;
  let borrowerCount = 0;

  for (book in books) {
    let checkBook = books[book];
    checkBook.borrows.forEach((el) => {
      if (el.id === borrower) {
        borrowerCount++;
      }
    });
  }
  return borrowerCount;
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrower = account.id;

  const getAuthorById = (authors, id) => {
    return authors.find((author) => author.id === id);
  };

  let result = [];

  result = books.filter((book) => {
    return book.borrows.some(
      (borrow) => borrow.id === borrower && !borrow.returned
    );
  });

  result = result.map((book) => {
    const author = getAuthorById(authors, book.authorId);
    const newBook = {
      ...book,
      author,
    };
    return newBook;
  });

  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
