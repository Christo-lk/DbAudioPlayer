export const LOAD_TRACKS = 'LOAD_TRACKS'

export function loadTracks (tracks) {
  return {
    type: 'LOAD_TRACKS',
    tracks: tracks
  }
}
