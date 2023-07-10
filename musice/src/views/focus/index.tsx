import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Focus: React.FC<Props> = () => {
  return <div></div>
}

export default memo(Focus)