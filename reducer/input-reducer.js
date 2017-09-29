module.exports = (state, action) => {
  switch (action.type) {
    case 'soundLoaded':
      return Object.assign({}, state, {soundLoaded: action.soundLoaded})
    case 'keyPushed':
      return Object.assign({}, state, {keyPushed: action.keyPushed})
    case 'isPlaying':
      return Object.assign({}, state, {isPlaying: action.isPlaying})
    default:
      return state
  }
}
