function Portfolio() {
    return (
        <div className=" bg-gray-200">
            <div className="text-4xl font-bold text-center py-6">My Portfolio </div>

            <div className=" grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 p-3  ">
                <div className="group flex flex-col items-center relative overflow-hidden">
                    <h2 className="font-bold">Web News Tech Website(REACT-JS)</h2>
                    <br />
                    Reactjs website created using contextApi,Pagination,search Queries
                    <img src="../../images/project1.jpg" alt="" width="200" height="200" className="group" />
                    <div className="font-bold  text-brown-950 absolute top-0 left-0 w-full h-full bg-blue-900 opacity-35 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                       
                        <a href="https://webnewstech.netlify.app/" className="flex items-center justify-center w-full h-full text-white font-bold text-3xl">Project 1

                        </a>
                    </div>
                </div>
                <div className="group flex flex-col items-center  relative overflow-hidden">
                <h2 className="font-bold">Technolex Service Providing Website(Mern Stack)</h2>
                    <br />
                    Login,SignUp along with Admin dashbord. Admin can add and remove Services, Remove Users and get users message in Dashboard,
                    React-toastify,React-router Dom Along with Context Api, Token generation and Encrypt Password
                    <img src="../../images/project2.png" alt="" width="200x200" className="group" />
                    <div className="absolute  w-[100%]  h-[100%] transform translate-y-[100%] opacity-35 bg-blue-900 group-hover:translate-y-0 transion-transform duration-300"><a href="https://github.com/Gaganjot-Singh7/-mern_project2" className="flex items-center justify-center  w-full h-full text-white font-bold text-3xl"> Project 2</a></div>
                </div>
                <div className=" group flex flex-col items-center  relative overflow-hidden">
                    <img src="../../images/project4.jpg" alt="" width="200x200" className="group" />
                    <div className="absolute transform translate-y-[100%]  w-[100%]  h-[100%] bg-blue-900  opacity-35 group-hover:translate-y-0 tranition-transform duration-300"><a href="#>" className="h-full w-full flex justify-center items-center text-white font-bold text-3xl"> Project 3</a></div>
                </div>

            </div>
        </div>
    )
}
export default Portfolio