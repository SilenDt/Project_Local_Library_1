





function findAccountById(accounts, id) {
  //returns the account object that has the matching ID.
  return accounts.find((item) => {return item.id === id});
}

function sortAccountsByLastName(accounts) {
  let result = accounts.sort((item1, item2) => {
    return (item1.name.last < item2.name.last) ? -1 : 1;
  })
  return result;
}

//function getTotalNumberOfBorrows(accounts, books) 
  //loop through the array of books
  //if account.id equals a book borrowed id, add 1 to the result.
  function getTotalNumberOfBorrows(account, books) {
    const accId = account.id;
    let total = 0;
    books.forEach(book => book.borrows.forEach(borrow => {if(accId === borrow.id)  total++}));
    return total;
}
  



function getBooksPossessedByAccount(account, books, authors) {

  //forEach (book), filter through the book.borrows array. 
  let house = books.filter((book) => book.borrows.filter((item) => {if(item.id === account.id && item.returned === false) {
   return true}
  }).length > 0);
  house.forEach((item) => item.author = authors.find((item2) => {
    return item2.id === item.authorId;
  }))
  return house;
}
  


 //return an array of books and authors that represents all books _currently checked out_ by the given account


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
