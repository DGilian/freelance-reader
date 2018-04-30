import rules from '../resources/data/rules.json'

const defaultState = [...rules]

const deepUpdate = (state, index, key, value) =>
  value
    ? [
        ...state.slice(0, index),
        {
          ...state[index],
          [key]: value
        },
        ...state.slice(index + 1)
      ]
    : state

const rulesCollection = (
  state = defaultState,
  { type, selections, title, ruleIndex = 0 } = {}
) => {
  switch (type) {
    case 'CLEAR_ALL_LINKS':
      return state.map(rule => ({
        ...rule,
        links: []
      }))
    case 'UPDATE_RULE':
      return deepUpdate(state, ruleIndex, 'title', title)

    case 'LINK_SELECTIONS':
      return deepUpdate(state, ruleIndex, 'links', selections)
    default:
      return state
  }
}
export default rulesCollection
