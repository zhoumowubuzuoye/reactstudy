import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Artlist: React.FC<Props> = () => {
  return <div>art</div>
}

export default memo(Artlist)