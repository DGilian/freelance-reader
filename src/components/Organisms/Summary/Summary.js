import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getRuleDescription } from '../../Atoms/Rule'
import { clearSelectionAction } from '../../../actions/rulesCollectionActions'

const mapStateToProps = state => ({
  selectedRules: state.ruleCollection.filter(
    el => el.links && el.links.length > 0
  )
})

const mapDispatchToProps = {
  clearSelection: clearSelectionAction
}

class Summary extends Component {
  render() {
    const { selectedRules, clearSelection } = this.props
    const displaySummary = selectedRules.length > 0

    return (
      displaySummary && (
        <div className="w-100 summary pa3">
          <h2 className="tc summary--title">Résumé</h2>
          <div className="tr summary--tools">
            <button
              className="tr summary--clear-button"
              onClick={clearSelection}
            >
              Clear
            </button>
          </div>

          <ul className="list  summary--list">
            {selectedRules.map(rule => (
              <li key={rule.id}>
                <h3>{rule.title} :</h3>
                {getRuleDescription(rule, true)}
              </li>
            ))}
          </ul>
        </div>
      )
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary)
