/*
 * @Author: xiewenhao
 * @Date: 2023-07-10 09:55:26
 * @LastEditTime: 2023-07-10 16:26:22
 * @Description:
 */
import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/discover">商城</Link>
        <Link to="/discover">音乐人</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <Suspense fallback="">
        <div className="routes">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
