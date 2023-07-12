interface RouteName {
  path: string
  name: string
}

const routes: RouteName[] = [
  { name: '发现音乐', path: '/discover' },
  { name: '我的音乐', path: '/mine' },
  { name: '关注', path: '/focus' },
  { name: '商城', path: '/discover' },
  { name: '音乐人', path: '/discover' },
  { name: '下载客户端', path: '/download' }
]

export default routes

