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
        <label className="flex justify-between w-100">
          {rule.title}
          <button
            className="pa3 br3"
            disabled={isDisabled}
            onClick={setSelection}
          >
            Associer
            <FontAwesomeIcon className="ml1" icon={faLink} />
          </button>
        </label>
        {rule.links &&
          rule.links.length > 0 && (
            <div>
              {rule.links &&
                rule.links.length > 0 && (
                  <ul>
                    {rule.links.map(({ text, range }, index) => (
                      <li key={index}>
                        ligne {range.anchor.line + 1} : "{text}"
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          )}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rule)
