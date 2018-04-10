import React, { Component } from 'react'
import { connect } from 'react-redux'

import './CheckList.css'
import Rule from '../../Atoms/Rule'

const mapStateToProps = state => ({ rules: state.ruleCollection })

class CheckList extends Component {
  render() {
    const { rules } = this.props
    return (
      <React.Fragment>
        <h2 className="tc">Todo list</h2>
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

export default connect(mapStateToProps)(CheckList)
