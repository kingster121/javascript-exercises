const getTheTitles = function(book) {
    let bookArr=[];
    book.forEach(element => {
        bookArr.push(element.title);
    });
    return bookArr;
};
console.log(getTheTitles([
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]))

// Do not edit below this line
module.exports = getTheTitles;
