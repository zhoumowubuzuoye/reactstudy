import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Djradio: React.FC<Props> = () => {
  return <div>dj</div>
}

export default memo(Djradio)