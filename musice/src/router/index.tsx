/*
 * @Author: xiewenhao
 * @Date: 2023-07-10 14:52:54
 * @LastEditTime: 2023-07-10 14:58:26
 * @Description:
 */
import React from 'react'
import { RouteObject } from 'react-router-dom'
import Discover from '@/views/discover'

const routes: RouteObject[] = [
  {
    path: '/discover',
    element: <Discover />
  }
]

export default routes
