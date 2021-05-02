export const IS_PLAYING = 'IS_PLAYING'
export const IS_NOT_PLAYING = 'IS_NOT_PLAYING'

export function setIsPlaying () {
  return {
    type: 'IS_PLAYING'
  }
}

export function setIsNotPlaying () {
  return {
    type: 'IS_NOT_PLAYING'
  }
}
