import React, {
  ElementRef,
  memo,
  MutableRefObject,
  useImperativeHandle,
  useRef
} from 'react'
import type { ReactNode } from 'react'

import { SwapperCenterStyle } from '../style'
import { Carousel } from 'antd'

import { useAppSelector } from '@/store'

export interface Event {
  next: () => void | undefined
  prev: () => void | undefined
}

interface Props {
  children?: ReactNode
  event?: MutableRefObject<Event>
  afterChange: (page: number) => void
  bannerIndex: number
}

const SwapperCenter: React.FC<Props> = (props) => {
  const carousel = useRef<ElementRef<typeof Carousel>>(null)
  const { bannerIndex, event } = props
  const { banners } = useAppSelector((state) => state.recommend)
  const afterChange = (page: number) => {
    props.afterChange(page)
  }
  const goto = (page: number) => {
    carousel.current?.goTo(page)
  }
  const getLis = (index: number) => {
    return (
      <li
        onClick={() => goto(index)}
        key={index}
        className={`dot ${index === bannerIndex && 'active'}`}
      ></li>
    )
  }

  useImperativeHandle(event, () => ({
    next: () => carousel.current?.next(),
    prev: () => carousel.current?.prev()
  }))

  return (
    <SwapperCenterStyle>
      <Carousel
        autoplay
        afterChange={(page) => afterChange(page)}
        easing={'linear'}
        arrows={true}
        dots={false}
        ref={carousel}
      >
        {banners.map((item) => {
          return (
            <img
              src={item.imageUrl}
              alt=""
              key={item.encodeId}
              className="swapperImg"
            />
          )
        })}
      </Carousel>
      <ul className="dots">{banners.map((item, index) => getLis(index))}</ul>
    </SwapperCenterStyle>
  )
}

export default memo(SwapperCenter)
