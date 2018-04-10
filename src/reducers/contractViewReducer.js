const defaultState = { selections: [] }

const contractView = (state = defaultState, { type, selections } = {}) => {
  switch (type) {
    case 'SET_SELECTIONS':
      return { ...state, selections }
    case 'RESET_SELECTIONS':
      return { ...state, selections: [] }
    default:
      return state
  }
}
export default contractView
