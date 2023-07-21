import React, { memo, useState, useEffect, useRef, ElementRef } from 'react'
import type { ReactNode } from 'react'
import _ from 'lodash'
import { useAppSelector } from '@/store'
import { NewAblumStyle, AblumSwapperStyle, SwiperItemStyle } from './style'
import Ablum from '@/components/AblumItem'
import RecommendTitle from '@/components/recommendTitle'
import { AblumItem } from '@/contants/type'
import { Carousel } from 'antd'

interface Props {
  children?: ReactNode
}

const NewAblum: React.FC<Props> = () => {
  const { newAlbums } = useAppSelector((state) => state.recommend)
  const [swaperList, setSwapperList] = useState<AblumItem[][]>([])
  const carousel = useRef<ElementRef<typeof Carousel>>(null)

  const getSwiperSwaper = (ablums: AblumItem[], index: number) => {
    return (
      <SwiperItemStyle key={index} style={{ display: 'flex' }}>
        {ablums.map((ablum) => {
          return <Ablum key={ablum.id} ablum={ablum}></Ablum>
        })}
      </SwiperItemStyle>
    )
  }

  const left = () => {
    carousel.current?.prev()
  }

  const right = () => {
    carousel.current?.next()
  }

  useEffect(() => {
    const newList = newAlbums?.slice(0, 10)
    const showList = _.chunk(newList, 5)
    setSwapperList(showList)
  }, [newAlbums])

  return (
    <NewAblumStyle>
      <RecommendTitle title={'新碟上架'}></RecommendTitle>
      <AblumSwapperStyle>
        <div className="ablumLeft position" onClick={left}></div>
        <Carousel autoplay={false} dots={false} ref={carousel}>
          {swaperList.map((ablums, index) => getSwiperSwaper(ablums, index))}
        </Carousel>
        <div className="ablumRight position" onClick={right}></div>
      </AblumSwapperStyle>
    </NewAblumStyle>
  )
}

export default memo(NewAblum)
