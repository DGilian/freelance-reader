import rules from '../resources/data/rules.json'

const defaultState = [...rules]

const rulesCollection = (
  state = defaultState,
  { type, selections, ruleIndex = 0 } = {}
) => {
  switch (type) {
    case 'CLEAR_ALL_LINKS':
      return state.map(rule => ({
        ...rule,
        links: []
      }))
    case 'LINK_SELECTIONS':
      return [
        ...state.slice(0, ruleIndex),
        {
          ...state[ruleIndex],
          links: selections
        },
        ...state.slice(ruleIndex + 1)
      ]
    default:
      return state
  }
}
export default rulesCollection
