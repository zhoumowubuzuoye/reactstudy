/*
 * @Author: xiewenhao
 * @Date: 2023-07-12 14:17:28
 * @LastEditTime: 2023-07-12 14:29:31
 * @Description:
 */
import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import Routes from './constant'

interface Props {
  children?: ReactNode
}

const AppHeader: React.FC<Props> = () => {
  return (
    <>
      {Routes.map((route) => (
        <Link key={route.path} to={route.path}>
          {route.name}
        </Link>
      ))}
    </>
  )
}

export default memo(AppHeader)
