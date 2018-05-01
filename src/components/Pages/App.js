import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import './App.css'

import CheckList from '../Organisms/CheckList/CheckList'
import ContractView from '../Organisms/ContractView/ContractView'
import Summary from '../Organisms/Summary/Summary'
import { setContractAction } from '../../actions/contractViewActions'
import contractExamplePath from '../../resources/contracts/agile.md'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  setContract: setContractAction
}

class App extends Component {
  render() {
    const setDemo = () => {
      const { setContract } = this.props
      fetch(contractExamplePath)
        .then(response => response.text())
        .then(setContract)
    }

    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Freelance-reader</title>
          <meta
            name="description"
            content="Application d'aide à la relecture de contrat"
          />
        </Helmet>

        <header className="App-header">
          <h1 className="tc App-title">Freelance reader</h1>
        </header>
        <p>
          <button onClick={setDemo} className="db center">
            Charger le contrat de démo
          </button>
        </p>
        <main className="flex flex-wrap flex-column flex-row-l justify-around App-main">
          <section className="pa3 w-100 w-30-l App-Main--Rule-list">
            <CheckList />
          </section>
          <section className="pa3 w-100 w-70-l App-Main--Contract-view">
            <ContractView />
          </section>
          <section>
            <Summary />
          </section>
        </main>
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
