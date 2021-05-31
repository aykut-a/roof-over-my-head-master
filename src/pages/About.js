import React from 'react'
import sample from '../images/sample.jpg'

export const About = () => {
  return (
    <section className="about-section">
      <img src={sample} alt="" />
      <div>
        <h3>About</h3>
        <p>When I was in college I always had a problem looking for flatmates. There were no one place that had all the apartment listings, even if you could find a post for a house mate search there weren't enough details or comparing between the different offers were not easy. <br />
        Now there can be a Roof Over Your Head. You can see all the details of different poeple looking for a roommate in their residence, connect them with a single click or make offers to be their new roomate. The search is over. <br />
        We sinceerely care for your feedback for making the app better for you so we are open to any opinion regarding the app the changes you'd like to see and all. <br />
      Enjoy!</p>
      </div>
    </section>
  )
}
