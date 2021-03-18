import React from 'react'
import AudioPlayer from './AudioPlayer'
import TrackList from './TrackList'

const App = () => {
  // Dummy Props
  const tracks = [{
    title: 'We Are The People',
    artist: 'Empire Of The Sun',
    audioSrc: '/tracks/EmpireOfTheSun.mp3',
    image: './coverArt/empireOfTheSun.png',
    color: 'red'
  },
  {
    title: 'Temper Temper',
    artist: 'Lime Cordiale',
    audioSrc: '/tracks/limeCordiale.mp3',
    image: './coverArt/limeCordiale.jpg',
    color: 'blue'
  },
  {
    title: 'When Am I Gonna Lose You',
    artist: 'Local Natives',
    audioSrc: '/tracks/localNatives.mp3',
    image: './coverArt/localNatives.jpg',
    color: 'green'
  }
  ]

  return (
    <>
      <div className="w-full bg-yellow-100">
        <div className="mx-auto bg-blue-100 wfit flex">
          <AudioPlayer tracks ={tracks}/>
          <TrackList tracks={tracks}/>
        </div>
      </div>
    </>
  )
}

export default App
