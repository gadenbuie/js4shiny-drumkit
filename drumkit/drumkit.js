function playDrum (snd) {
  if (!Audio) return
  const soundFile = `./sounds/${snd}.mp3`
  const sound = new Audio(soundFile)
  if (sound) {
    sound.play()
  }
}

// listen for a click on an element in the drumkit
// then process the list of classes to determine
// which drum sound should be played.
document.addEventListener('click', function(event) {
  const el = event.target
  if (!el.matches('svg.drumkit > g > *')) {
    // not an event we want to worry about
    return;
  }

  const drumId = el.closest('svg').id
  console.log(drumId)

  const classes = el.classList
  const drumPart = classes[classes.length -1]
  playDrum(drumPart)
})
