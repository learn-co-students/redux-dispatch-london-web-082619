changeState = (state, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

render = () => {
  document.body.textContent = state.count
}

dispatch = (action) => {
  state = changeState(state, action)
  render()
  return state
}

let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

changeState(state, action)

render()

increaseCounter = () => dispatch({type: 'INCREASE_COUNT'})

// setInterval(increaseCounter, 1000)