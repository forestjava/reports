import React from 'react'
import ReactDOM from 'react-dom'

import { UIStateContext, ui } from './states'
import { Theme } from './components/Theme'
import { AppRouter } from './components/Routers/AppRouter'
import { Modals } from './components/Modals'

import { queryClient } from './data/API'

import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Loading } from './components/Atoms/Loading'
import { Errors } from './components/Atoms/Errors'


ReactDOM.render(
  <React.StrictMode>
    <UIStateContext.Provider value={ui}>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <AppRouter />
          <Modals />
          <Loading />
          <Errors />
        </Theme>
        { import.meta.env.DEV && <ReactQueryDevtools /> }
      </QueryClientProvider>
    </UIStateContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
