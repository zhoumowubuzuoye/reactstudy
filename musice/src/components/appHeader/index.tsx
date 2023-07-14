/*
 * @Author: xiewenhao
 * @Date: 2023-07-12 14:17:28
 * @LastEditTime: 2023-07-14 18:14:01
 * @Description:
 */
import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import Routes, { RouteName } from './constant'
import { HeaderStyle } from './style'

interface Props {
  children?: ReactNode
}

const AppHeader: React.FC<Props> = () => {
  const showRoute = (item: RouteName) => {
    if (item.type === 'path') {
      return (
        <>
          {item.path === '/download' && <div className="hot"></div>}
          <Link to={item.path} className="fontStyle">
            {item.name}
          </Link>
        </>
      )
    } else {
      return (
        <a href={item.path} className="fontStyle">
          {item.name}
        </a>
      )
    }
  }
  return (
    <HeaderStyle>
      <div className="headerMain">
        <div className="icon"></div>
        <div className="linkStyle">
          {Routes.map((route) => (
            <div className='linkPath' key={route.path}>{showRoute(route)}</div>
          ))}
        </div>
        <div className="buttons"></div>
      </div>
    </HeaderStyle>
  )
}

export default memo(AppHeader)
