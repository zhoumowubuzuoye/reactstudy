/*
 * @Author: xiewenhao
 * @Date: 2023-07-10 15:05:15
 * @LastEditTime: 2023-07-11 17:41:13
 * @Description:
 */
import React, { memo, Suspense } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { discoverRoutes } from './constant'

const Discover: React.FC = () => {
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
