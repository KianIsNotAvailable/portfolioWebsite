import React from 'react'

export default function Projects() {
  return (
    <div className='flex flex-row  max-w-3xl space-x-28   '>
        <div className='project1 shadow-xl rounded-md w-96'>
        <img></img>
        <h1>Twitch Chat Bot</h1>
        <p className='text-left '>An interactive twitch chat bot built with nodeJS and mySQL.</p>
        <button></button>
        </div>
        <div className='project2 shadow-xl rounded-md w-96'>
        <img></img>
        <h1>CalorieCalculator & WorkoutGenerator</h1>
        <p className='text-left'>A calorie Calculator and Workout Generator that was built with HTML5, CSS3, Javascript and mySQL</p>
        <button></button>
        </div>
        <div className='project3 shadow-xl rounded-md  w-96'>
        <img></img>
        <h1>Pizza Planet Ecommerce</h1>
        <p className='text-left'>A Pizza Planet themed Ecommerce Website built with ReactJS for the front end and NodeJS to integrate the Stripe API</p>
        <button></button>
        </div>
    </div>
  )
}
