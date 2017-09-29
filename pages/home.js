const Tram = require('tram-one')
const {onKeyPress} = require('../js/utils')
const sfa3AudioTags = require('../js/sfa3Audio')
const html = Tram.html({
  Header: require('../elements/Header'),
  LoadSounds: require('../elements/LoadSounds')
})

const getSoundLoadedFunc = ({loadedSounds}) => {
  return () => {
    loadedSounds()
  }
}

const renderRobotHead = (state, actions) => {
  const {isPlaying, soundLoaded} = state
  const soundLoadedFunc = getSoundLoadedFunc(actions)
  if (soundLoaded) {
    return html`
      <Header ${isPlaying ? 'isPlaying' : ''}></Header>
    `
  }
  return html`
    <LoadSounds soundLoaded=${soundLoadedFunc}> </LoadSounds>
  `
}

module.exports = (state, actions) => {
  return html`
    <div>
      ${renderRobotHead(state, actions)}
      ${sfa3AudioTags}

      <pre>
        TODO:
          playback rate on triggers
          volume adjuster (also triggers?)
          button mapper
      </pre>
    </div>
  `
}
