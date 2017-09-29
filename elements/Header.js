const Tram = require('tram-one')
const html = Tram.html()

const scrollStyle = `
  animation: scroll 7s linear 0s infinite;
  font-size: 90px;
  font-weight: bold;
  font-family: monospace;
`

module.exports = ({isPlaying}) => {
  const face = isPlaying ? '{◕o◕}' : '{◓_◓}'
  return html`
    <span style=${scrollStyle}>
      ${face}
    </span>
  `
}
