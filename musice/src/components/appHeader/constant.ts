export interface RouteName {
  path: string
  name: string
  type: 'path' | 'link'
}

const routes: RouteName[] = [
  { name: '发现音乐', path: '/discover', type: 'path' },
  { name: '我的音乐', path: '/mine', type: 'path' },
  { name: '关注', path: '/focus', type: 'path' },
  { name: '商城', path: 'https://music.163.com/store/product', type: 'link' },
  { name: '音乐人', path: 'https://music.163.com/st/musician', type: 'link' },
  { name: '下载客户端', path: '/download', type: 'path' }
]

export default routes
