const defaultState = { selections: [], contract: '' }

const contractView = (
  state = defaultState,
  { type, contract, selections } = {}
) => {
  switch (type) {
    case 'SET_CONTRACT':
      return { ...state, contract, selections: [] }
    case 'SET_SELECTIONS':
      return { ...state, selections }
    case 'RESET_SELECTIONS':
      return { ...state, selections: [] }
    default:
      return state
  }
}
export default contractView
