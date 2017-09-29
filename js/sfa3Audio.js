const Tram = require('tram-one')
const html = Tram.html()
const sfa3Location = './audio/street fighter alpha 3/'

const audioObjects = [
  {key: '\`', button: '0', mod: '5', file: "0.mp3"},
  {key: '1', button: '1', mod: '5', file: "1.mp3"},
  {key: '2', button: '2', mod: '5', file: "2.mp3"},
  {key: '3', button: '3', mod: '5', file: "3.mp3"},
  {key: '4', button: '5', mod: '5', file: "4.mp3"},
  {key: '5', button: '0', mod: '4', file: "5.mp3"},
  {key: '6', button: '1', mod: '4', file: "6.mp3"},
  {key: '7', button: '2', mod: '4', file: "7.mp3"},
  {key: '8', button: '3', mod: '4', file: "8.mp3"},
  {key: '9', button: '5', mod: '4', file: "9.mp3"},
  {key: '0', button: '0', mod: '3', file: "10.mp3"},
  {key: 'q', button: '1', mod: '3', file: "Beat em up guys.mp3"},
  {key: 'w', button: '2', mod: '3', file: "Congratulations.mp3"},
  {key: 'e', button: '3', mod: '3', file: "Excellent.mp3"},
  {key: 'r', button: '5', mod: '3', file: "Game over.mp3"},
  {key: 't', button: '0', mod: '2', file: "Go for it man.mp3"},
  {key: 'y', button: '1', mod: '2', file: "I cant believe my eyes.mp3"},
  {key: 'u', button: '2', mod: '2', file: "It all depends on your skill.mp3"},
  {key: 'i', button: '3', mod: '2', file: "Its Showtime.mp3"},
  {key: 'o', button: '5', mod: '2', file: "Lets Party.mp3"},
  {key: 'p', button: '0', mod: '1', file: "Nobody Blink.mp3"},
  {key: 'a', button: '1', mod: '1', file: "Perfect.mp3"},
  {key: 's', button: '2', mod: '1', file: "Super.mp3"},
  {key: 'd', button: '3', mod: '1', file: "That was only warming up.mp3"},
  {key: 'f', button: '5', mod: '1', file: "Thats great.mp3"},
  {key: 'g', button: '0', mod: '0', file: "Thats it buddy.mp3"},
  {key: 'h', button: '1', mod: '0', file: "Triumph or die.mp3"},
  {key: 'j', button: '2', mod: '0', file: "You did a great job.mp3"},
  {key: 'k', button: '3', mod: '0', file: "You lose.mp3"},
  {key: 'l', button: '5', mod: '0', file: "You win.mp3"}
]

function getSFA3Audio(file) {
  return new Audio(sfa3Location + file)
}

function getSFA3AudioTags({file, key, button, mod}, index) {
  return html`
    <audio
      src="${sfa3Location + file}"
      class="sfa3"
      id="sfa3-${index}"
      data-key=${key}
      data-button=${button}
      data-mod=${mod}
      preload="auto">
    </audio>
  `
}

module.exports = audioObjects.map(getSFA3AudioTags)
