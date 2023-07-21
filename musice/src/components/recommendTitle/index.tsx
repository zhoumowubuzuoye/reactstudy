/*
 * @Author: xiewenhao
 * @Date: 2023-07-19 16:49:17
 * @LastEditTime: 2023-07-19 17:50:38
 * @Description:
 */
import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { RecommendTitleStyle } from './style'

interface Props {
  children?: ReactNode
  title: string
}

const RecommendTitle: React.FC<Props> = (props) => {
  const { children, title } = props
  return (
    <RecommendTitleStyle>
      <div className="titleLeft">
        <div className="circle"></div>
        <div className="title">{title}</div>
        {children}
      </div>
      <div className="more">更多</div>
    </RecommendTitleStyle>
  )
}

export default memo(RecommendTitle)
