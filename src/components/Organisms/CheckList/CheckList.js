import React, { Component } from 'react'
import { connect } from 'react-redux'

import './CheckList.css'
import Rule from '../../Atoms/Rule'

const mapStateToProps = state => ({ rules: state.ruleCollection })

class CheckList extends Component {
  render() {
    const { rules } = this.props
    return (
      <ul>
        {rules &&
          rules.map((rule, index) => (
            <li key={index} className="mb3 list">
              <Rule ruleIndex={index} rule={rule} />
            </li>
          ))}
      </ul>
    )
  }
}

export default connect(mapStateToProps)(CheckList)
