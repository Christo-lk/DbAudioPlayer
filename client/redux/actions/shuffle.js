export const SET_SHUFFLE = 'SET_SHUFFLE'

export function setShuffle (boolean) {
  return {
    type: SET_SHUFFLE,
    shuffle: boolean

  }
}
