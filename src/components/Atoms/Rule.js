import React, { Component } from 'react'
import { connect } from 'react-redux'

import { resetSelectionsAction } from '../../actions/contractViewActions'
import { linkSelectionAction } from '../../actions/rulesCollectionActions'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/fontawesome-free-solid'

const mapStateToProps = ({ contractView }) => ({
  selections: contractView.selections
})

const mapDispatchToProps = {
  reset: resetSelectionsAction,
  linkSelection: linkSelectionAction
}

export const getRuleDescription = (rule, fullDescription = false) => {
  if (rule.links && rule.links.length > 0) {
    return (
      <div>
        {rule.links &&
          rule.links.length > 0 && (
            <ul>
              {rule.links.map(({ text, range }, index) => (
                <li key={index}>
                  ligne {range.anchor.line + 1} à {range.head.line + 1}
                  {fullDescription && (
                    <React.Fragment> : {text}</React.Fragment>
                  )}
                </li>
              ))}
            </ul>
          )}
      </div>
    )
  }
}

class Rule extends Component {
  render() {
    const { rule, selections } = this.props
    const isDisabled = selections.length === 0

    const setSelection = () => {
      const { selections, reset, ruleIndex, linkSelection } = this.props
      linkSelection(selections, ruleIndex)
      reset()
    }

    return (
      <React.Fragment>
        <label className="flex justify-between w-100 rule">
          {rule.title}
          <button
            className="pa3 br3 rule--link-button"
            disabled={isDisabled}
            onClick={setSelection}
          >
            <FontAwesomeIcon className="ml1 rule--link-icon" icon={faLink} />
          </button>
        </label>
        {getRuleDescription(rule)}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rule)
