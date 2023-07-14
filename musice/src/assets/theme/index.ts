const theme = {
  color: {
    background: '#c20c0c'
  },
  size: {},
  mixin: {
    content: `
            width:1100px;
            margin: 0 auto
        `,
    sprite_01: `background: url(${require('../images/sprite_01.png')}) no-repeat 0 9999px;`,
    sprite_02: `background: url(${require('../images/sprite_02.png')}) no-repeat 0 9999px;`,
    sprite_cover: `background: url(${require('../images/sprite_cover.png')}) no-repeat 0 9999px;`,
    sprite_icon: `background: url(${require('../images/sprite_icon.png')}) no-repeat 0 9999px;`,
    sprite_icon2: `background: url(${require('../images/sprite_icon2.png')}) no-repeat 0 9999px;`,
    sprite_icon3: `background: url(${require('../images/sprite_icon3.png')}) no-repeat 0 9999px;`,
    sprite_button: `background: url(${require('../images/sprite_button.png')}) no-repeat 0 9999px;`,
    sprite_button2: `background: url(${require('../images/sprite_button2.png')}) no-repeat 0 9999px;`,
    sprite_playbar: `background: url(${require('../images/playbar_sprite.png')}) no-repeat 0 9999px;`,
    sprite_playlist: `background: url(${require('../images/playlist_sprite.png')}) no-repeat 0 9999px;`,
  }
}

export default theme
