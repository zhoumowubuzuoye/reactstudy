/*
 * @Author: xiewenhao
 * @Date: 2023-07-10 09:55:26
 * @LastEditTime: 2023-07-10 16:26:22
 * @Description:
 */
import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import AppFooter from './components/appFooter'
import AppHeader from './components/appHeader'


function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="routes">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
}

export default App
