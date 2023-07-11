/*
 * @Author: xiewenhao
 * @Date: 2023-07-10 09:55:26
 * @LastEditTime: 2023-07-11 10:45:57
 * @Description:
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'normalize.css'
import '@/assets/css/index.less'

import store from './store'
import App from '@/App'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
