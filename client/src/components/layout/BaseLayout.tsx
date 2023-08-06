import { PhoneOutlined } from '@ant-design/icons'
import { Link, Outlet } from 'react-router-dom'

const BaseLayout = () => {

    return (
        <div>
            <header className='bg-[#EEEEEE] w-full fixed z-50  '>
                <div aria-label="Site Header" className="border-b border-gray-100">
                    <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
                       
                    <Link to={`/admin`} className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                                    Admin
                                </Link>
                        <div className="flex flex-1 items-center justify-end gap-8">
                            
                            <nav aria-label="Site Nav"
                                className="hidden  lg:flex lg:gap-4 lg:text-[15px] lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500">
                                <Link to={`/`} className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                                    Home
                                </Link>

                                <Link to={`/products`} className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                                    Product
                                </Link>

                                <Link to={`/blog`} className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                                    Blogs
                                </Link>

                                <Link to={`/contact`} className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                                    Contact
                                </Link>
                            </nav>

                            <div className="flex items-center">
                                <div className="flex items-center border-x border-gray-100">
                                    <span className="border-e border-e-gray-100">
                                        <Link to={`#`} className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>

                                            <span className="sr-only">Cart</span>
                                        </Link>
                                    </span>

                                    <span className="border-e border-e-gray-100">
                                        <Link to={`/signin`} className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700">
                                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>

                                            <span className="sr-only"> Login </span>
                                        </Link>
                                    </span>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>


            <main className=''> <Outlet /> </main>

            {/* fotter */}
            <footer aria-label="Site Footer" className="bg-white">
                <div className="mx-auto  px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
                    

                    <div className="mt-12 border-t border-gray-100 pt-6">
                        <div className="text-center sm:flex sm:justify-between sm:text-left">
                           

                            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                                &copy; Assiment Typescript
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default BaseLayout