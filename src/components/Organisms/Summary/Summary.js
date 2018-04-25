import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getRuleDescription } from '../../Atoms/Rule'

function mapStateToProps(state) {
  return {
    selectedRules: state.ruleCollection.filter(
      el => el.links && el.links.length > 0
    )
  }
}

class Summary extends Component {
  render() {
    const { selectedRules } = this.props
    return (
      selectedRules.length > 0 && (
        <React.Fragment>
          <h2 className="tc summary--title">Résumé</h2>
          <ul className="list  summary--list">
            {selectedRules.map((rule, index) => (
              <li key={index}>
                <h3>{rule.title} :</h3>
                {getRuleDescription(rule)}
              </li>
            ))}
          </ul>
        </React.Fragment>
      )
    )
  }
}

export default connect(mapStateToProps)(Summary)
