
import { IProduct } from '../interface/product'
import { Link } from 'react-router-dom'

type AllProductPageProps = {
    products: IProduct[]
}

const AllProductPage = ({ products }: AllProductPageProps) => {

    console.log(products);
    return (
        <div className=' pt-[50px]'>
            <section>
                <div className="mx-auto  max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            Product Collection
                        </h2>

                        <p className="mt-4 max-w-md text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                            praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                            natus?
                        </p>
                    </header>

                    <div className="mt-8 flex items-center justify-between">
                        <div className="flex rounded border border-gray-100">
                            <button
                                className="inline-flex h-10 w-10 items-center justify-center border-e text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                    />
                                </svg>
                            </button>

                            <button
                                className="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div>
                            <label htmlFor="SortBy" className="sr-only">SortBy</label>

                            <select id="SortBy" className="h-10 rounded border-gray-300 text-sm">
                                <option>Sort By</option>
                                <option value="Title, DESC">Title, DESC</option>
                                <option value="Title, ASC">Title, ASC</option>
                                <option value="Price, DESC">Price, DESC</option>
                                <option value="Price, ASC">Price, ASC</option>
                            </select>
                        </div>
                    </div>
                    {/* all product */}
                    <div className=''>
                        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                            {products.map((item, index) => (
                                <li key={index}>
                                    <Link to={`/products/${item._id}`} className="group relative block overflow-hidden">
                                        <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                                            <span className="sr-only">Wishlist</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                            </svg>
                                        </button>
                                        <img src={`${item.image}`} alt="" className="h-[288px] w-full object-cover transition duration-500  sm:h-[288px]" />
                                        <div className="relative border border-gray-100 bg-white p-6">
                                            <h3 className="mt-4 h-[60px] text-lg  font-[600] text-gray-900">{item.name}</h3>
                                            <p className="mt-1.5 text-[18px] font-[600] text-gray-700">${item.price}</p>
                                            <form className="mt-4">
                                                <button className="block w-full rounded bg-amber-100 p-4 text-sm font-medium transition ">
                                                    Add to Cart
                                                </button>
                                            </form>
                                        </div>
                                    </Link>

                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default AllProductPage