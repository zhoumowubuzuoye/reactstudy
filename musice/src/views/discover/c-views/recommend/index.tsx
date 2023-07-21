/*
 * @Author: xiewenhao
 * @Date: 2023-07-12 17:30:47
 * @LastEditTime: 2023-07-21 14:39:07
 * @Description:
 */
import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { fetchBannerDataAction, fetchGetRankingListAction } from './store/index'
import { useAppDispatch } from '@/store'
import Swapper from './components/swapper'
import { SwapperMainStyle, MainLeftStyle, MainRightStyle } from './style'
import Hot from './components/hot'
import NewAblum from './components/newAlbum'
import TopRecommend from './components/topRecommend'

interface Props {
  children?: ReactNode
}

const Recommend: React.FC<Props> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchGetRankingListAction())
  }, [])
  return (
    <div>
      <Swapper></Swapper>
      <SwapperMainStyle>
        <MainLeftStyle>
          <Hot></Hot>
          <NewAblum></NewAblum>
          <TopRecommend></TopRecommend>
        </MainLeftStyle>
        <MainRightStyle></MainRightStyle>
      </SwapperMainStyle>
    </div>
  )
}

export default memo(Recommend)
