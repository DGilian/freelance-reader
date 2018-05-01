const defaultState = { selections: [], contract: '', forceUpdate: false }

const contractView = (
  state = defaultState,
  { type, contract, selections } = {}
) => {
  switch (type) {
    case 'SET_CONTRACT':
      return { ...state, contract, selections: [], forceUpdate: true }
    case 'RESET_UPDATE':
      return { ...state, forceUpdate: false }
    case 'SET_SELECTIONS':
      return { ...state, selections }
    case 'RESET_SELECTIONS':
      return { ...state, selections: [] }
    default:
      return state
  }
}
export default contractView
