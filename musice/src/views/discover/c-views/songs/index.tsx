import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Songs: React.FC<Props> = () => {
  return <div>song</div>
}

export default memo(Songs)
