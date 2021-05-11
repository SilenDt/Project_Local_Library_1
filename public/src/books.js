function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let result = [];
  let filter1 = books.filter((book) => book.borrows[0].returned == false);
  let filter2 = books.filter((book) => book.borrows[0].returned == true);
  result.push(filter1);
  result.push(filter2);
  return result;
}
function getBorrowersForBook(book, accounts) {
  //It should return an array of all the transactions from the book's `borrows` key.
  //However, each transaction should include the related account information and the `returned` key.
  let result = [];
  book.borrows.map((borrow) => {
    let acc = accounts.find((account) => {
      return borrow.id === account.id
    });
    acc.returned = borrow.returned;
    result.push(acc);
});
return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
