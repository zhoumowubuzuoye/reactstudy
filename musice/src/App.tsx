/*
 * @Author: xiewenhao
 * @Date: 2023-07-10 09:55:26
 * @LastEditTime: 2023-07-10 15:20:48
 * @Description:
 */
import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  return <div className="App">{useRoutes(routes)}</div>
}

export default App
