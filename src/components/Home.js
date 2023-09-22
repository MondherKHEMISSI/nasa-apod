import React from 'react'
import { Link } from 'react-router-dom'

const Home = ( props ) => {
  return (
    <>
      <div className='datePicker'>
        <h1>Select a date to retrieve NASA's Astronomy Picture of that Day!</h1>
        <input type='date' onChange={e => props.handleChange(e.target.value)} ></input>
      </div>
      <div className='home'>
          <Link className='home-link' to='/nasaphoto'>See into the stars!</Link>
      </div>
    </>
  )
}

export default Home