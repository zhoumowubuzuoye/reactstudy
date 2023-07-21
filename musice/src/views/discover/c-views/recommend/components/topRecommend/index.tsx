/*
 * @Author: xiewenhao
 * @Date: 2023-07-21 16:18:59
 * @LastEditTime: 2023-07-21 16:55:13
 * @Description:
 */
import React, { memo, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { useAppSelector } from '@/store'
import { TopRecommendStyle, TopTableStyle, TableLiStyle } from './style'
import RecommendTitle from '@/components/recommendTitle'
import { PlayList } from '@/contants/type'

interface Props {
  children?: ReactNode
}

const TopRecommend: React.FC<Props> = () => {
  const { rankings } = useAppSelector((state) => state.recommend)

  const getRecommendList = (item: PlayList) => {
    return (
      <TableLiStyle key={item.id}>
        <div className="top">
          <div className="topImg">
            <img src={item.coverImgUrl} alt="" />
          </div>
          <div className="topDo">
            <div className="name">
              <span>{item.name}</span>
            </div>
            <div className="doList">
              <div className="start doImg"></div>
              <div className="save doImg"></div>
            </div>
          </div>
        </div>
        <ul>
          {item.tracks.slice(0,10).map((item, index) => {
            return (
              <li key={item.id}>
                <div className="index">{index+1}</div>
                <div className="name"><a title={item.name}>{item.name}</a></div>
              </li>
            )
          })}
        </ul>
      </TableLiStyle>
    )
  }

  return (
    <TopRecommendStyle>
      <RecommendTitle title={'榜单'}></RecommendTitle>
      <TopTableStyle>
        {rankings.map((item) => getRecommendList(item))}
      </TopTableStyle>
    </TopRecommendStyle>
  )
}

export default memo(TopRecommend)
