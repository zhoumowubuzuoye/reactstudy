/*
 * @Author: xiewenhao
 * @Date: 2023-07-10 09:55:26
 * @LastEditTime: 2023-07-17 17:15:09
 * @Description:
 */
import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'  
import routes from './router'
import AppFooter from './components/appFooter'
import AppHeader from './components/appHeader'
import { Common } from '@/assets/css/common'


function App() {
  return (
    <div className="App">
      <Common>
        <AppHeader />
        <Suspense fallback="">
          <div className="routes">{useRoutes(routes)}</div>
        </Suspense>
        <AppFooter />
      </Common>
    </div>
  )
}

export default App
