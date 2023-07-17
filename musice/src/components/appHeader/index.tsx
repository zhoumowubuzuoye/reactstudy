/*
 * @Author: xiewenhao
 * @Date: 2023-07-12 14:17:28
 * @LastEditTime: 2023-07-17 17:53:10
 * @Description:
 */
import React, { memo, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import Routes, { RouteName } from './constant'
import { HeaderStyle } from './style'
import { discoverRoutes } from '@/views/discover/constant'
import { Button, Input, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

interface Props {
  children?: ReactNode
}

const AppHeader: React.FC<Props> = () => {
  const location = useLocation()
  const [show, setShow] = useState(false)

  const showRoute = (item: RouteName) => {
    if (item.type === 'path') {
      return (
        <>
          {item.path === '/download' && <div className="hot"></div>}
          <NavLink to={item.path} className="fontStyle">
            {item.name}
          </NavLink>
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

  const showDiscoveChildren = () => {
    if (show) {
      return (
        <div className="showDiscove">
          {discoverRoutes.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.zhName}
            </NavLink>
          ))}
        </div>
      )
    }
  }

  useEffect(() => {
    setShow(discoverRoutes.some((item) => item.path === location.pathname))
  }, [location])

  return (
    <HeaderStyle>
      <div className="headerMain">
        <div className="icon"></div>
        <div className="linkStyle">
          {Routes.map((route) => (
            <div className="linkPath" key={route.path}>
              {showRoute(route)}
            </div>
          ))}
        </div>
        <div className="buttons">
          <Space direction="horizontal">
            <Input prefix={<SearchOutlined />} className="headerInput" />
            <Button  size={'middle'} className='headerButton'>
              创作者中心
            </Button>
            <div className='login'>登录</div>
          </Space>
        </div>
      </div>
      <div className={`lineColor`}>{showDiscoveChildren()}</div>
    </HeaderStyle>
  )
}

export default memo(AppHeader)
