const isGamepadButtonPressed = (gamepad) => {
  return gamepad.buttons.some(
    button => button.pressed
  )
}

const getAudioFromKeypress = ({key}) => {
  return document.querySelectorAll(`audio[data-key="${key}"]`)[0]
}

const getGamepadButtons = (gamepad) => {
  return gamepad.buttons.reduce(
    (buttons, button, index) => {
      return button.pressed ? buttons.concat({button, index}) : buttons
    }
  , [])
}

const getAudioFromGamepadEvent = (gamepad) => {
  const pushedButtons = getGamepadButtons()
  const buttonNumber = pushedButtons[0].index;
  if ([0,1,2,3,5].includes(buttonNumber)) {
    return document.querySelector(`
      audio[data-button="${buttonNumber}"][data-mod="0"]
    `)
  }
}

const maxHeadRoomEffect = (audioClip, shouldContinue) => {
  const repeatTime = audioClip.currentTime
  audioClip.currentTime = repeatTime
  const interval = setInterval(() => {
    audioClip.currentTime = repeatTime
    if (!shouldContinue()) {
      clearInterval(interval)
    }
  }, 250)
  audioClip.play()
}

const getPlaySoundFunc = (app, getAudioObject) => {
  return (event) => {
    audioClip = getAudioObject(event)
    const isPlayingAudio = audioClip && audioClip.currentTime > 0.05
    if (isPlayingAudio) {
      let counter = 3
      maxHeadRoomEffect(
        audioClip,
        () => --counter > 0
      )
    } else if (audioClip) {
      playAudio({actions: app.engine.actions, audioClip, event})
    } else {
      // modAudio({dispatch: app.dispatch, audioClip, event})
      playAudio({actions: app.engine.actions, audioClip, event})

    }
  }
}

const playAudio = ({actions, audioClip, event}) => {
  actions.addKey(event)
  actions.setIsPlaying(true)
  const isPlayingAudio = audioClip.currentTime > 0.05
  audioClip.play()
  audioClip.onended = () => {
    audioClip.currentTime = 0
    actions.setIsPlaying(false)
  }
  audioClip.onpause = (event) => {
    if (event.target.src !== audioClip.src) {
      event.target.currentTime = 0
    }
  }
}

const modAudio = ({dispatch, audioClip, event}) => {
  document.querySelectorAll(`
    audio
  `).forEach(
    (audio) => audio.playbackRate = 1 + pushedButtons[0].value
  )
}

module.exports = {
  loadKeyboardEvents: (app) => {
    window.onkeypress = getPlaySoundFunc(app, getAudioFromKeypress)
  },
  loadGamepadEvents: (app) => {
    const playSoundFunc = getPlaySoundFunc(app, getAudioFromGamepadEvent)
    window.setInterval(
      () => {
        [...navigator.getGamepads()]
          .filter((gamepad) => gamepad !== null)
          .filter((gamepad) => gamepad.timestamp > 2000)
          .filter(isGamepadButtonPressed)
          .forEach(playSoundFunc)
      }
    , 50)
  }
}
