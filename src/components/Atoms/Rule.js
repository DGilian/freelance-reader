import React, { Component } from 'react'
import { connect } from 'react-redux'
import CodeMirror from 'react-codemirror'

import { resetSelectionsAction } from '../../actions/contractViewActions'
import {
  linkSelectionAction,
  updateRuleAction
} from '../../actions/rulesCollectionActions'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/fontawesome-free-solid'

import './Rule.css'

const mapStateToProps = ({ contractView }) => ({
  selections: contractView.selections
})

const mapDispatchToProps = {
  reset: resetSelectionsAction,
  linkSelection: linkSelectionAction,
  updateRule: updateRuleAction
}

export const getRuleDescription = (rule, fullDescription = false) => {
  if (rule.links && rule.links.length > 0) {
    return (
      <div>
        {rule.links &&
          rule.links.length > 0 && (
            <ul>
              {rule.links.map(({ text, range: { anchor, head } }, index) => {
                const headIsFirst = head.line <= anchor.line
                const firstLineNumber = headIsFirst ? head.line : anchor.line
                const lastLineNumber = headIsFirst ? anchor.line : head.line

                return (
                  <li key={index}>
                    ligne {firstLineNumber + 1} à {lastLineNumber + 1}
                    {fullDescription && (
                      <React.Fragment> : {text}</React.Fragment>
                    )}
                  </li>
                )
              })}
            </ul>
          )}
      </div>
    )
  }
}

class Rule extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
  }

  render() {
    const { rule, selections } = this.props
    const { editing } = this.state
    const isDisabled = selections.length === 0

    const setSelection = () => {
      const { selections, reset, ruleIndex, linkSelection } = this.props
      linkSelection(selections, ruleIndex)
      reset()
    }
    const toggleEdition = () => this.setState({ editing: !editing })

    const handleFocusChange = hasFocus => {
      const { updateRule, ruleIndex } = this.props
      if (!hasFocus) {
        const newTitle = this.CodeMirrorInstance.codeMirror.getValue()
        this.setState(() => ({
          editing: !editing
        }))
        updateRule(newTitle, ruleIndex)
      }
    }

    return (
      <div className="rule">
        <label className="flex justify-between w-100 rule">
          {!editing && <span onClick={toggleEdition}>{rule.title}</span>}
          {editing && (
            <CodeMirror
              ref={(c: any) => (this.CodeMirrorInstance = c)}
              onFocusChange={handleFocusChange.bind(this)}
              value={rule.title}
            />
          )}

          <button
            className="pa3 br3 rule--link-button"
            disabled={isDisabled}
            onClick={setSelection}
          >
            <FontAwesomeIcon className="ml1 rule--link-icon" icon={faLink} />
          </button>
        </label>
        {getRuleDescription(rule)}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rule)
