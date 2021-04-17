import React, { useState, useEffect } from 'react'

// COMPONENTS
import TrackListSource from './TrackListSource'
import TrackListNav from './TrackListNav'

import store from '../redux/store'
import { connect } from 'react-redux'

// redux action
import { setShowCatPic } from '../redux/actions/setShowCatPic'

// SVG
import CatOn from '../icons/catOn.svg'
import CatOff from '../icons/catOff.svg'

function RightPanel ({ showForm, showCatPic }) {
  function catPicClick () {
    if (showCatPic) {
      store.dispatch(setShowCatPic(false))
    } else {
      store.dispatch(setShowCatPic(true))
    }
  }

  return (
    <div className="flex flex-col  ml-10 shadow-inner bg-gray-100">
      <TrackListNav/>
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
    showCatPic: state.showCatPic
  }
}

export default connect(mapStateToProps)(RightPanel)
