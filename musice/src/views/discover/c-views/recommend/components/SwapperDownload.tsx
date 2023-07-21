import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { SwapperDownloadStyle } from '../style'

interface Props {
  children?: ReactNode
}

const SwapperDownload: React.FC<Props> = () => {
  return (
    <SwapperDownloadStyle>
      <div className="download"></div>
      <div className="swapperDes">PC 安卓 iPhone WP iPad Mac 六大客户端</div>
    </SwapperDownloadStyle>
  )
}

export default memo(SwapperDownload)
