interface DiscoverRoute {
  name: string
  path: string
  zhName: string
}

const discoverRoutes: DiscoverRoute[] = [
  {
    name: 'recommend',
    path: '/discover/recommend',
    zhName: '推荐'
  },
  {
    name: 'ablum',
    path: '/discover/ablum',
    zhName: '新碟上架'
  },
  {
    name: 'artlist',
    path: '/discover/artlist',
    zhName: '创作者'
  },
  {
    name: 'djradio',
    path: '/discover/djradio',
    zhName: '电台'
  },
  {
    name: 'ranking',
    path: '/discover/ranking',
    zhName: '排行'
  },

  {
    name: 'songs',
    path: '/discover/songs',
    zhName: '歌曲'
  }
]

export { discoverRoutes }
