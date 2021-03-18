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
  },
  {
    title: 'Temper Temper',
    artist: 'Lime Cordiale',
    audioSrc: '/tracks/limeCordiale.mp3',
    image: './coverArt/limeCordiale.jpg',
  },
  {
    title: 'When Am I Gonna Lose You',
    artist: 'Local Natives',
    audioSrc: '/tracks/localNatives.mp3',
    image: './coverArt/localNatives.jpg',
  }
  ]

  return (
    <>
      <div className="w-full bg-yellow-100 flex flex-col justify-center">
        <h1 className="mx-auto">DB Audio Player</h1>
        <div className="mx-auto p-10 rounded-md bg-blue-100 wfit flex">
          <AudioPlayer tracks ={tracks}/>
          <TrackList tracks={tracks}/>
        </div>
      </div>
    </>
  )
}

export default App
