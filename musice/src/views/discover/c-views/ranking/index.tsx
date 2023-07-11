import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Ranking: React.FC<Props> = () => {
  return <div>rank</div>
}

export default memo(Ranking)