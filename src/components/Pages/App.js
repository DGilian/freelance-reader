import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import './App.css'

import CheckList from '../Organisms/CheckList/CheckList'
import ContractView from '../Organisms/ContractView/ContractView'
import Summary from '../Organisms/Summary/Summary'

class App extends Component {
  render() {
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
        <main className="flex flex-wrap flex-column flex-row-l justify-around App-main">
          <section>
            <Summary />
          </section>

          <section className="pa3 w-100 w-50-l App-Main--Rule-list">
            <CheckList />
          </section>
          <section className="pa3 w-100 w-50-l App-Main--Contract-view">
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

export default App
