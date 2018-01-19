// state argument is not application state,
// only state this reducer is responsible for
// ex: a container's state
export default function(state = null, action) { // on load, state is null to avoid returning undefined, which throws an error
  switch(action.type) {
    case 'BOOK_SELECTED':
      console.log(action.payload)
      return action.payload
  }
  return state
}
