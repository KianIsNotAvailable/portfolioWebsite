import React from 'react'
import image3 from '../assets/caloriecalculator.png'
import image from '../assets/image-4.jpg'
import pizza from '../assets/delivery.png'
import chatbot from '../assets/chatbot.png'
export default function Projects() {
  return (
    <div className='flex   space-x-10  items-stretch   justify-center'>
       
<div class="flex flex-col flex-wrap w-96 rounded-lg  shadow bg-black dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg p-24" src={chatbot} alt="" />
    </a>
    <div class="p-5">
        <a href="https://github.com/KianIsNotAvailable/slots-bot">
            <h5 class="mb-2 m-auto text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Twitch Chat Bot</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">An interactive twitch chat bot built with nodeJS and mySQL.</p>
        <a href="https://github.com/KianIsNotAvailable/slots-bot" target='_blank' class=" mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View on GitHub
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class=" w-96 rounded-lg shadow bg-black dark:border-gray-700">
    <a href="https://kianisnotavailable.github.io/pizza-Planet" target='_blank'>
        <img class="rounded-t-lg" src={pizza} alt="" />
    </a>
    <div class="p-5">
        <a href="https://kianisnotavailable.github.io/pizza-Planet" target='_blank'>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pizza Planet Ecommerce</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A Pizza Planet themed Ecommerce Website built with ReactJS for the front end and NodeJS to integrate the Stripe API</p>
        <a href="https://github.com/KianIsNotAvailable/pizza-Planet " target='_blank' class="mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View on GitHub
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class="w-96 flex-shrink  rounded-lg shadow bg-black dark:border-gray-700">
    <a href="https://kianisnotavailable.github.io/calorie-calculator/dist/index.html" target='_blank'>
        <img class="rounded-t-lg" src={image3} alt="" />
    </a>
    <div class="p-5">
        <a href="https://kianisnotavailable.github.io/calorie-calculator/dist/index.html" target='_blank'>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Calorie Calculator</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A calorie Calculator that was built with HTML5, CSS3, Javascript</p>
        <a href="https://github.com/KianIsNotAvailable/calorie-calculator" target='_blank' class=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View on GitHub
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
        
        
    </div>
  )
}
