import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Recommend: React.FC<Props> = () => {
  return <div>recom</div>
}

export default memo(Recommend)