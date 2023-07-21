import React, { memo, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

import SwapperCenter, { Event } from './SwapperCenter'
import SwapperDownload from './SwapperDownload'
import { DiscoverSwapper, SwapperLeftStyle, SwapperRightStyle } from '../style'
import { useAppSelector } from '@/store'

interface Props {
  children?: ReactNode
}

const Swapper: React.FC<Props> = () => {
  const event = useRef({} as Event)
  const [bannerIndex, setBannerIndex] = useState(0)
  const afterChange = (page: number) => {
    setBannerIndex(page)
  }
  const { banners } = useAppSelector((state) => state.recommend)

  return (
    <DiscoverSwapper
      style={{
        backgroundImage:
          banners.length > 0
            ? `url(${banners[bannerIndex].imageUrl}?imageView&blur=40x20)`
            : ''
      }}
    >
      <div className="imgs">
        <SwapperLeftStyle>
          <div
            className="direction"
            onClick={() => event.current?.prev()}
          ></div>
        </SwapperLeftStyle>
        <SwapperCenter
          afterChange={afterChange}
          bannerIndex={bannerIndex}
          event={event}
        ></SwapperCenter>
        <SwapperDownload></SwapperDownload>
        <SwapperRightStyle>
          <div
            className="direction"
            onClick={() => event.current?.next()}
          ></div>
        </SwapperRightStyle>
      </div>
    </DiscoverSwapper>
  )
}

export default memo(Swapper)
