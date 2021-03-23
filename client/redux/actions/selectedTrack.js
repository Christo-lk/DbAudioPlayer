export function selectedTrack (track) {
  // const { id, title, audioSrc, image } = track

  return {
    type: 'SELECTED_TRACK',
    track: track
    // title,
    // audioSrc,
    // image
  }
}
