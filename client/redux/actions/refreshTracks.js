export const REFRESH_TRACKS = 'REFRESH_TRACKS'

export function setRefreshTracks (boolean) {
  return {
    type: 'REFRESH_TRACKS',
    boolean: boolean
  }
}
