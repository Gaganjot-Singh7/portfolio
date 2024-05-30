import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
      <div class="max-w-lg p-8 bg-white shadow-md rounded-lg">
        <h1 class="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p class="text-lg mb-4">We're sorry, but it looks like there was an error.</p>
        <Link to="home" class="text-blue-500 hover:underline">Go back to homepage</Link>
      </div></>
  )
}

export default Error