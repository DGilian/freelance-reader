export const linkSelectionAction = (selections, ruleIndex) => ({
  type: 'LINK_SELECTIONS',
  selections,
  ruleIndex
})

export const updateRuleAction = (title, ruleIndex) => ({
  type: 'UPDATE_RULE',
  title,
  ruleIndex
})

export const clearSelectionAction = () => ({
  type: 'CLEAR_ALL_LINKS'
})
