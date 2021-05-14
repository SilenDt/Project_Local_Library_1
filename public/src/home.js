function getTotalBooksCount(books) {
  let totalBooks = 0;
  books.forEach((book) => totalBooks++ );
  return totalBooks;
}

function getTotalAccountsCount(accounts) {
  let totalAccounts = 0
  accounts.forEach((account) => totalAccounts++);
  return totalAccounts;
}

function getBooksBorrowedCount(books) {
  let totalBorrows = 0;
books.filter((book) => book.borrows.filter((borrow) => 
  {if(borrow.returned === false){
    return totalBorrows++;
}}))
  return totalBorrows;
}

function getMostCommonGenres(books) {
  
  //If more than five genres are present, only the top five should be returned.
let result = [];
books.map((book) => {
  let genre = book.genre;
  let filtered = result.filter((item) => {
    return item.name === genre;
  })
  if(filtered.length == 0) {
    result.push({name: genre, count: 1})
  }
  else {
    let found = result.find((item) => item.name == genre)
      found.count++;
    }
  })
result.sort((a, b) => (b.count - a.count)) 
return result.slice(0, 5);

}


function getMostPopularBooks(books) {
  let result = [];
  result = books.map((book) => {
  let name = book.title;
  let count = book.borrows.length;
  return {name: name, count: count};
});
result.sort((a, b) => (b.count - a.count)) 
return result.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  //returns an array containing five objects or fewer that represents the most popular authors whose 
  //books have been checked out the most. Popularity is represented by finding all of the books 
  //written by the author and then adding up the number of times those books have been borrowed.
  //`name` key which represents the first and last name of the author.
  //`count` key which represents the number of times the author's books have been borrowed.
  let result = [];
  books.map((book) => {
  let author = authors.find((author) => book.authorId == author.id)
  let name = author.name.first + " " + author.name.last;
  let count = book.borrows.length;
  let filtered = result.filter((item) => {
    return item.name === name;
  })
  if(filtered.length == 0) {
    result.push({name: name, count: count})
  }
  else {
    let found = result.find((item) => item.name == name)
      found.count+= count;
    }
  //return {name: name, count: count};
});
result.sort((a, b) => (b.count - a.count)) 
return result.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
