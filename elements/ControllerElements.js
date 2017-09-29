const Tram = require('tram-one')
const html = Tram.html()

module.exports = () => {
  return html`
    ${[navigator.getGamepads()]}
  `
}
