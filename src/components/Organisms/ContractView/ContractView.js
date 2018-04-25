import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'
import { connect } from 'react-redux'
import 'codemirror/mode/markdown/markdown'

import './ContractView.css'
import contractExamplePath from '../../../resources/contracts/agile.md'

import { setSelectionsAction } from '../../../actions/contractViewActions'

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  setSelectionsAction
}

class ContractView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selections: []
    }
    this.loadExample = this.loadExample.bind(this)
    this.setCodeMirrorValue = this.setCodeMirrorValue.bind(this)
  }

  componentDidMount() {
    this.loadExample()
  }

  loadExample() {
    const onSuccess = this.setCodeMirrorValue

    fetch(contractExamplePath)
      .then(response => response.text())
      .then(onSuccess)
  }

  setCodeMirrorValue(value) {
    this.CodeMirrorInstance.codeMirror.setValue(value)
  }

  render() {
    const handleCursorActivity = ({ doc }) => {
      const { setSelectionsAction } = this.props
      if (doc.somethingSelected()) {
        const selections = doc.getSelections()
        const ranges = doc.listSelections()
        const selectionSet = selections.map((el, index) => ({
          text: el,
          range: ranges[index]
        }))
        setSelectionsAction(selectionSet)
      }
    }

    return (
      <React.Fragment>
        <h2 className="tc">Contract</h2>
        <CodeMirror
          ref={(c: any) => (this.CodeMirrorInstance = c)}
          onCursorActivity={handleCursorActivity}
          options={{
            lineNumbers: true,
            lineWrapping: true,
            mode: 'markdown',
            viewportMargin: 500
          }}
        />
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractView)
