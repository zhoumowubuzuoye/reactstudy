import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import hyRequest from '@/api'

interface Props {
  children?: ReactNode
}

const Recommend: React.FC<Props> = () => {
  useEffect(() => {
    hyRequest.get({ url: '/banner' }).then((res) => {
      console.log(res)
    })
  }, [])
  return <div>recom</div>
}

export default memo(Recommend)
