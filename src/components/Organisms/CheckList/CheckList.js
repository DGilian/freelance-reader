import React, { Component } from 'react'
import { connect } from 'react-redux'

import './CheckList.css'
import Rule from '../../Atoms/Rule'
import { clearSelectionAction } from '../../../actions/rulesCollectionActions'

const mapStateToProps = state => ({ rules: state.ruleCollection })
const mapDispatchToProps = {
  clearSelection: clearSelectionAction
}

class CheckList extends Component {
  render() {
    const { rules, clearSelection } = this.props
    const isClearDisabled = !rules.find(
      rule => rule.links && rule.links.length > 0
    )
    return (
      <React.Fragment>
        <h2 className="tc checklist--title">Todo list</h2>
        <div className="tr checklist--sub-title">
          <button
            className="tr checklist--clear-button"
            disabled={isClearDisabled}
            onClick={clearSelection}
          >
            Clear
          </button>
        </div>
        <ul>
          {rules &&
            rules.map((rule, index) => (
              <li key={index} className="mb3 list">
                <Rule ruleIndex={index} rule={rule} />
              </li>
            ))}
        </ul>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckList)
