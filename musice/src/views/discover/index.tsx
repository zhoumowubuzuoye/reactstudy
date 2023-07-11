/*
 * @Author: xiewenhao
 * @Date: 2023-07-10 15:05:15
 * @LastEditTime: 2023-07-11 13:15:26
 * @Description:
 */
import React, { memo, Suspense } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'

import { discoverRoutes } from './constant'
import  {useAppSelector, IRootState } from '@/store'

const Discover: React.FC = () => {
  const counter = useAppSelector(
    (state: IRootState) => state.counter,
    shallowEqual
  )
  return (
    <div>
      <div>
        {discoverRoutes.map((item) => (
          <Link key={item.path} to={item.path}>
            {item.zhName}
          </Link>
        ))}
      </div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
