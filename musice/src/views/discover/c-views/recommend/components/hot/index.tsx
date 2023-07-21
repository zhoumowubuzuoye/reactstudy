import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { useAppSelector } from '@/store'
import RecommendTitle from '@/components/recommendTitle'
import { songsSpecial, SongSpecial } from './contant'
import { HotStyle, HotRecommendStyle } from './style'
import SongItem from '@/components/SongItem'

interface Props {
  children?: ReactNode
}

const Hot: React.FC<Props> = () => {
  const { hotRecommends } = useAppSelector((state) => state.recommend)
  const getDiv = (item: SongSpecial, index: number) => {
    return (
      <div
        className={`special ${
          index !== songsSpecial.length - 1 && 'borderShow'
        }`}
        key={item.cat}
      >
        <span>{item.name}</span>
      </div>
    )
  }
  return (
    <HotStyle>
      <RecommendTitle title="热门推荐">
        <div className="hotSpecial">
          {songsSpecial.map((item, index) => getDiv(item, index))}
        </div>
      </RecommendTitle>
      <HotRecommendStyle>
        {hotRecommends.map((item) => (
          <SongItem key={item.id} songitem={item} ></SongItem>
        ))}
      </HotRecommendStyle>
    </HotStyle>
  )
}

export default memo(Hot)
