export function selectBook(book) {
  // selectBook is an actionCreator, needs to return an action,
  // an object with a type property. Always needs to return a type,
  // usually includes a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
  console.log('a book has been selected', book.title)
}
