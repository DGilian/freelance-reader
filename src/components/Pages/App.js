import React, { Component, Fragment } from 'react'

import './App.css'

import CheckList from '../Organisms/CheckList/CheckList'
import ContractView from '../Organisms/ContractView/ContractView'
import Summary from '../Organisms/Summary/Summary'

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="App-header">
          <h1 className="tc App-title">Freelance reader</h1>
        </header>
        <main className="flex flex-wrap flex-column flex-row-l justify-around App-main">
          <section className="w-100 w-50-l App-Main--Rule-list">
            <CheckList />
          </section>
          <section className="w-100 w-50-l App-Main--Contract-view">
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
