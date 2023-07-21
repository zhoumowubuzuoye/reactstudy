/*
 * @Author: xiewenhao
 * @Date: 2023-07-20 14:11:16
 * @LastEditTime: 2023-07-20 15:32:59
 * @Description:
 */
import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { SongItemStyle } from './style'
import { SongItem as Item } from '@/contants/type'
import { formatCount } from '@/utils/format'

interface Props {
  children?: ReactNode
  songitem: Item
}

const SongItem: React.FC<Props> = (props) => {
  const { songitem } = props
  return (
    <SongItemStyle>
      <div className="songImg">
        <img src={songitem.picUrl} alt="" />
        <div className="songNumber">
          <div className="number">{formatCount(songitem.playCount)}</div>
          <div className="start"></div>
        </div>
      </div>
      <div className="SongDes">{songitem.name}</div>
    </SongItemStyle>
  )
}

export default memo(SongItem)
