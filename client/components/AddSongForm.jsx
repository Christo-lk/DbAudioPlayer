import React, { useState } from 'react'
import { connect } from 'react-redux'

// redux action
import { setShowForm } from '../redux/actions/showForm'
import store from '../redux/store'

function AddSongForm ({ showForm }) {
  function clickHandler () {
    store.dispatch(setShowForm(false))
  }

  return (
    <div className="w-62">
      <form className="flex flex-col" onChange={() => {}}>
        <label htmlFor='title'>title</label>
        <input type='text' id='title'/>
        <label htmlFor='artist'>artist</label>
        <input type="text" id='artist'/>
        <input type="file" id="upload" />
        <button className="button w-fit" onClick={() => clickHandler() }>add Song</button>
      </form>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    showForm: state.showForm
  }
}

export default connect(mapStateToProps)(AddSongForm)
