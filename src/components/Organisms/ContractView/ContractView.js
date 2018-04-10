import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'
import { connect } from 'react-redux'
import 'codemirror/mode/markdown/markdown'

import './ContractView.css'

import { setSelectionsAction } from '../../../actions/contractViewActions'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {
  setSelectionsAction
}

class ContractView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selections: []
    }
  }

  render() {
    const txt = `
### Exemples de clauses abusives
    Durant les 3 premiers jours de travail le freelance ne sera pas rémunéré, il s'agit d'un acte commercial auprès du client.
    Les 2 premier mois de travail seront soumis à une période de test durant laquelle le freelance pourrais ne pas être rémunéré suivant le retour du client.
### Exemple de clauses neutre
    Le contrat se renouvellera tout les 2 ans par tacite reconduction.`

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
            mode: 'markdown'
          }}
          value={txt}
        />
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractView)
