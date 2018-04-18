import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ruleDescription } from '../../Atoms/Rule'

function mapStateToProps(state) {
  return {
    rules: state.ruleCollection
  }
}

class Summary extends Component {
  render() {
    const { rules } = this.props
    const selectedRules = rules.filter(el => el.links && el.links.length > 0)
    return (
      <React.Fragment>
        <h2 className="tc">Résumé</h2>
        <ul className="list">
          {selectedRules.map((rule, index) => (
            <li key={index}>
              <h3>{rule.title} :</h3>
              {ruleDescription(rule)}
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(Summary)
