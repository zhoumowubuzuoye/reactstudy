import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const AppFooter: React.FC<Props> = () => {
  return <div>appfooter</div>
}

export default memo(AppFooter)