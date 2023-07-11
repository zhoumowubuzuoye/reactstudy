import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Album: React.FC<Props> = () => {
  return <div>ablum</div>
}

export default memo(Album)