const Tram = require('tram-one')
const html = Tram.html()

const buttonStyle = `
  font-family: monospace;
  font-size: 90px;
  font-weight: bold;
  background: white;
  border: none;
`

const eyeStyle = `
  animation: spin 1.5s linear infinite;
  transform-origin: 40px 65px;
  display: inline-block;
`

const getFireBuffersFunc = (soundLoaded) => {
  return () => {
    let wait = 0;
    [...document.getElementsByClassName('sfa3')].forEach(
      (audio) => {
        wait = audio.duration > wait ? audio.duration : wait
        audio.volume = 0
        audio.playbackRate = 4
        audio.onended = () => {
          audio.volume = 1
          audio.playbackRate = 1
          audio.currentTime = 0
        }
        audio.play()
      }
    )
    setTimeout(soundLoaded, ((wait * 1000) / 4) + 1000 )
  }
}

const renderLeftEye = () => {
  return html`<div style=${eyeStyle}>◓</div>`
}

const renderRightEye = () => {
  return html`<div style=${eyeStyle}>◒</div>`
}

module.exports = ({key, soundLoaded}) => {
  const fireBuffers = getFireBuffersFunc(soundLoaded)
  return html`
    <button style=${buttonStyle} onclick=${fireBuffers}>
    {${renderLeftEye()}_${renderRightEye()}}
    </button>
  `
}
