import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App/App'
import { AppViewModel } from './components/App/App.viewModel'

export function render (selector: string) {
  ReactDOM
    .createRoot(document.querySelector(selector)!)
    .render(
      <React.StrictMode>
        <App viewModel={new AppViewModel()} />
      </React.StrictMode>
    )
}
