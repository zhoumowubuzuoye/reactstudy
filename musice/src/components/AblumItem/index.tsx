import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { AblumItem as Item } from '@/contants/type'
import { AblumItemStyle } from './style'

interface Props {
  children?: ReactNode
  ablum: Item
}

const AblumItem: React.FC<Props> = (props) => {
  const { ablum } = props
  return (
    <AblumItemStyle>
      <div className="ablumImg">
        <div>
          <img src={ablum.picUrl} alt="" />
          <div className="start"></div>
        </div>
      </div>
      <div className="ablumDes">
        <a className="name" title={ablum.name}>
          {ablum.name}
        </a>
        <div className="author">{ablum.artist.name}</div>
      </div>
    </AblumItemStyle>
  )
}

export default memo(AblumItem)
