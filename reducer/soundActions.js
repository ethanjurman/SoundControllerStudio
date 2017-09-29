module.exports = {
  soundLoaded: {
    init: () => false,
    loadedSounds: (loaded) => true
  },
  keysPushed: {
    init: () => [],
    addKey: (keysPushed, key) => keysPushed.concat(key),
    setKeys: (keysPushed, newKeys) => newKeys,
    resetKeys: () => []
  },
  isPlaying: {
    init: () => false,
    setIsPlaying: (state, isPlaying) => isPlaying
  }
}
