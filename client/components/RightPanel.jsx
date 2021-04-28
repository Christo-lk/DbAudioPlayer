import React, { useState, useEffect } from 'react'

// COMPONENTS
import TrackListSource from './TrackListSource'
import TrackListNav from './TrackListNav'

import store from '../redux/store'
import { connect } from 'react-redux'

// redux action
import { setShowCatPic } from '../redux/actions/setShowCatPic'
import { setTrackOrder } from '../redux/actions/setTrackOrder'

// SVG
import CatOn from '../icons/catOn.svg'
import CatOff from '../icons/catOff.svg'

function RightPanel ({ showForm, showCatPic, trackOrder }) {
  function catPicClick () {
    if (showCatPic) {
      store.dispatch(setShowCatPic(false))
    } else {
      store.dispatch(setShowCatPic(true))
    }
  }

  // Handles a-z button click and sets tracks in alphabetic order
  function trackOrderHandler () {
    switch (trackOrder) {
      case 'DEFAULT':
        store.dispatch(setTrackOrder('ALPHABETIC'))
        break

      case 'ALPHABETIC':
        store.dispatch(setTrackOrder('REVERSE_ALPHABETIC'))
        break

      case 'REVERSE_ALPHABETIC':
        store.dispatch(setTrackOrder('DEFAULT'))
    }
  }

  return (
    <div className="flex flex-col  ml-10 shadow-inner bg-gray-100">
      <TrackListNav/>
      <div className="h-auto w-full bg-red-400">
        <button onClick={() => trackOrderHandler()}>a-z</button>
      </div>
      <TrackListSource/>
      <div className="px-3 my-2">
        <button name="catPicbutton" className="" onClick={() => catPicClick()}> <img className="w-10 opacity-20 hover:opacity-90"src={showCatPic ? CatOn : CatOff}/></button>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    showForm: state.showForm,
    showCatPic: state.showCatPic,
    trackOrder: state.trackOrder
  }
}

export default connect(mapStateToProps)(RightPanel)
