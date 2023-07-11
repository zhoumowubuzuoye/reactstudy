/*
 * @Author: xiewenhao
 * @Date: 2023-07-10 14:52:54
 * @LastEditTime: 2023-07-10 16:51:33
 * @Description:
 */
import React from 'react'
import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import {
  Discover,
  Mine,
  Download,
  Focus,
  Ablum,
  Artlist,
  Djradio,
  Ranking,
  Songs,
  Recommend
} from './RoutesList'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/ablum',
        element: <Ablum />
      },
      {
        path: '/discover/artlist',
        element: <Artlist />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  }
]

export default routes
