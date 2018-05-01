import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'
import { connect } from 'react-redux'
import 'codemirror/mode/markdown/markdown'

import './ContractView.css'

import {
  setSelectionsAction,
  setContractAction,
  resetUpdatedAction
} from '../../../actions/contractViewActions'
import { clearSelectionAction } from '../../../actions/rulesCollectionActions'

const mapStateToProps = state => ({
  contract: state.contractView.contract,
  forceUpdate: state.contractView.forceUpdate
})

const mapDispatchToProps = {
  setSelections: setSelectionsAction,
  setContract: setContractAction,
  resetUpdated: resetUpdatedAction,
  clearLinks: clearSelectionAction
}

class ContractView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selections: []
    }
    this.loadContract = this.loadContract.bind(this)
    this.setCodeMirrorValue = this.setCodeMirrorValue.bind(this)
  }

  loadContract(path) {
    const onSuccess = this.props.setContract

    fetch(path)
      .then(response => response.text())
      .then(onSuccess)
  }

  setCodeMirrorValue(value) {
    this.props.clearLinks()
    this.CodeMirrorInstance.codeMirror.setValue(value)
  }

  shouldComponentUpdate({ contract, forceUpdate, resetUpdated }) {
    if (forceUpdate) {
      this.setCodeMirrorValue(contract)
      resetUpdated()
    }
    return forceUpdate
  }

  render() {
    const handleCursorActivity = ({ doc }) => {
      const { setSelections } = this.props
      if (doc.somethingSelected()) {
        const selections = doc.getSelections()
        const ranges = doc.listSelections()
        const selectionSet = selections.map((el, index) => ({
          text: el,
          range: ranges[index]
        }))
        setSelections(selectionSet)
      }
    }

    const handleFileUpload = ({ target: { files } }) => {
      const [file] = files
      if (file && file.name.endsWith('.md')) {
        const url = window.URL.createObjectURL(file)
        this.loadContract(url)
      }
    }

    return (
      <div className="contract-view">
        <div className="contract-view--header">
          <div className="mb4 contract-view--file-upload">
            <p>Charger un contrat (format markdonw) :</p>
            <input type="file" accept=".md" onChange={handleFileUpload} />
            <button onClick={this.setCodeMirrorValue.bind(this, '')}>
              Reset
            </button>
          </div>
        </div>
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
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractView)
