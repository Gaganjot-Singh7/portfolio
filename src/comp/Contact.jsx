import React from 'react'

function Contact() {
  return (
    <div className='m-2 p-3'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13600.876959815865!2d75.42774134240335!3d31.545597287234155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391bb49da3497337%3A0x9701bf01ff2db08!2sNadala%2C%20Punjab%20144624!5e0!3m2!1sen!2sin!4v1716920284498!5m2!1sen!2sin" width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='border border-solid border-black shadow-lg'></iframe>
      <div className="grid lg:grid-cols-2 w-full bg-white">
        <div className='font-bold text-3xl m-6 p-4 text-center'>Contact Us</div>
        <div className="p-4">

          <div className="flex justify-center">
            <form action="https://formspree.io/f/myyraqkg"
              method="POST">
              <br />
              <input type="text" placeholder='name' className='p-3 rounded-lg m-3 bg-gray-200 border border-solid border-black shadow-lg' name='username' autoComplete="false" required/>

              <input type="email" name="email" id="" placeholder='email' className='p-3 rounded-lg m-3 bg-gray-200 border border-solid border-black shadow-lg' autoComplete="false" required/>
              <br />
              <input type="text" name="subject" id="" placeholder='subject' className='p-3 rounded-lg m-3 bg-gray-200 border border-solid border-black shadow-lg w-full lg:w-3/4 xl:w-2/' required autoComplete="false"/>
              <br />
              <textarea className="w-full lg:w-3/4 xl:w-2/3 m-3 p-3 bg-gray-200 border border-solid border-black shadow-lg rounded-lg" placeholder='Description' name='description' minLength="30"></textarea>

              <br />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>
                Submit
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact