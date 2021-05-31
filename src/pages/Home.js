import React from 'react'
import sample from '../images/sample.jpg'

export const Home = () => {

  return (
    <>
      <div className="homepage">

        <div className="intro">
          <div>
            <p>We are offering you the most available flats so you can have a Roof Over Your Head, so you can make an offer to the poster and offer to be their new roomate. If you are interested you can click down the button below to see all the rooms.</p>
          </div>
          <img src={sample} alt="" />
        </div>

        <section className="mail-list-section">
          <div>
            <h4>Don't miss a thing</h4>
            <p>Subscribe to our mail-list and be the first one to know when there is a new room available</p>
          </div>

          <div className="input-container">
            <input type="text" placeholder="Enter email..." />
            <button>Subscribe</button>
          </div>
        </section>
      </div>
    </>
  )
}
