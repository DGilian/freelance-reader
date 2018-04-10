import React, { Component } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {}
}

class Summary extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="tc">Summary</h2>
        <div />
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(Summary)
