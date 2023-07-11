import React from 'react'

const Discover = React.lazy(() => import('@/views/discover'))
const Mine = React.lazy(() => import('@/views/mine'))
const Download = React.lazy(() => import('@/views/download'))
const Focus = React.lazy(() => import('@/views/focus'))
const Ablum = React.lazy(() => import('@/views/discover/c-views/album'))
const Artlist = React.lazy(() => import('@/views/discover/c-views/artlist'))
const Djradio = React.lazy(() => import('@/views/discover/c-views/djradio'))
const Ranking = React.lazy(() => import('@/views/discover/c-views/ranking'))
const Songs = React.lazy(() => import('@/views/discover/c-views/songs'))
const Recommend = React.lazy(() => import('@/views/discover/c-views/recommend'))

export {
  Discover,
  Mine,
  Download,
  Focus,
  Ablum,
  Artlist,
  Djradio,
  Ranking,
  Songs,
  Recommend
}
