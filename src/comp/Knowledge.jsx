import React from 'react'

function Knowledge() {

    return (
        <div className=' w-100% h-100% p-7 bg-white'>
            <div className='font-bold text-4xl text-center p-5'>Knowledge</div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-2" >



                <div className='group'>
                    <div className="transform translate-y-5 flex items-center justify-between bg-gray-100 rounded-lg p-4 mb-4 group-hover:translate-y-[-20] transition-transform duration-300">
                        <img src="/images/1.png" alt='img' className="rounded-full h-16 w-16 mr-4" loading='lazy'/>
                        <div>
                            <h3 className="font-bold">Nodejs</h3>
                            <p className="text-gray-600">Node.js, an open-source, cross-platform JavaScript runtime environment, has dramatically transformed the landscape of server-side development since its release in 2009. Built on Chrome's V8 JavaScript engine, Node.js enables developers to use JavaScript for server-side scripting, allowing the development of dynamic web applications with a single programming language for both client and server sides.</p>
                        </div>

                    </div>
                </div>


                <div className='group'>
                    <div className="transform translate-y-5 flex items-center justify-between bg-gray-100 rounded-lg p-4 mb-4 group-hover:translate-y-[-20] transition-transform duration-300">
                        <img src="/images/2.png" alt='img' className="rounded-full h-16 w-16 mr-4" loading='lazy' />
                        <div>
                            <h3 className="font-bold">Expressjs</h3>
                            <p className="text-gray-600">Express.js, a minimal and flexible Node.js web application framework, is a robust solution for building web and mobile applications. Released in 2010, Express.js has become one of the most popular frameworks in the Node.js ecosystem, owing to its simplicity, performance, and rich feature set.Express helps to build server more easily and routing more effectively with fast way .It is nodejs framework</p>
                        </div>

                    </div>
                </div>

                <div className='group'>
                    <div className="transform translate-y-5 flex items-center justify-between bg-gray-100 rounded-lg p-4 mb-4 group-hover:translate-y-[-20] transition-transform duration-300">
                        <img src="/images/3.png" alt='img' className="rounded-full h-16 w-16 mr-4"  loading='lazy'/>
                        <div>
                            <h3 className="font-bold">ReactJS</h3>
                            <p className="text-gray-600">React.js, commonly referred to as React, is a powerful JavaScript library developed by Facebook for building user interfaces, particularly single-page applications where data dynamically changes over time. Since its release in 2013, React has gained immense popularity due to its efficiency, flexibility, and the ability to create reusable UI component</p>
                        </div>

                    </div>
                </div>

                <div className='group'>
                    <div className="transform translate-y-5 flex items-center justify-between bg-gray-100 rounded-lg p-4 mb-4 group-hover:translate-y-[-20] transition-transform duration-300">
                        <img src="/images/4.jpg" alt='img' className="rounded-full h-16 w-16 mr-4" loading='lazy' />
                        <div>
                            <h3 className="font-bold">Mongoose</h3>
                            <p className="text-gray-600">Mongoose is a powerful Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model application data, making MongoDB more accessible and easier to use in a Node.js environment. Since its creation, Mongoose has become an essential tool for developers working with MongoDB, offering rich features and robust data validation.</p>
                        </div>

                    </div>
                </div>


                <div className='group'>
                    <div className="transform translate-y-5 flex items-center justify-between bg-gray-100 rounded-lg p-4 mb-4 group-hover:translate-y-[-20] transition-transform duration-300">
                        <img src="/images/5.jpg" alt='img' className="rounded-full h-16 w-16 mr-4" loading='lazy' />
                        <div>
                            <h3 className="font-bold">React-ToolKit</h3>
                            <p className="text-gray-600">Redux Toolkit is a powerful toolset designed to simplify and streamline the process of managing state in Redux-based applications. Introduced by the Redux team, Redux Toolkit provides a set of utilities that reduce boilerplate code, improve code readability, and enhance the overall development experience when working with Redux in React applications.It is advanced version of redux which help to manage the state with the help of react-redux.</p>
                        </div>

                    </div>
                </div>



                <div className='group'>
                    <div className="transform translate-y-5 flex items-center justify-between bg-gray-100 rounded-lg p-4 mb-4 group-hover:translate-y-[-20] transition-transform duration-300">
                        <img src="/images/6.png" alt='img' className="rounded-full h-16 w-16 mr-4" loading='lazy' />
                        <div>
                            <h3 className="font-bold">Context-Api</h3>
                            <p className="text-gray-600">The Context API in React is a powerful feature for managing global state in React applications. Introduced in React 16.3, the Context API allows developers to share data across all levels of the component tree without passing props down manually at every level. This makes it an excellent solution for managing state that needs to be accessed by multiple components, such as theme settings, user authentication, or application settings.</p>
                        </div>

                    </div>
                </div>




            </div>
        </div>

    )
}

export default Knowledge
