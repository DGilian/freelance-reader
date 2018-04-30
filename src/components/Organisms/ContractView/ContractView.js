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
    this.loadContract = this.loadContract.bind(this)
    this.setCodeMirrorValue = this.setCodeMirrorValue.bind(this)
  }

  componentDidMount() {
    this.loadContract(contractExamplePath)
  }

  loadContract(path) {
    const onSuccess = this.setCodeMirrorValue

    fetch(path)
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

    const loadFile = ({ target: { files } }) => {
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
            <input type="file" accept=".md" onChange={loadFile} />
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
