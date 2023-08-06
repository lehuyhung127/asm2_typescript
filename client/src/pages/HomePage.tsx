import { IProduct } from '../interface/product';
import { Button } from 'antd';
import { Link } from 'react-router-dom';


type HomePageProps = {
    products: IProduct[]
}

const HomePage = ({ products }: HomePageProps) => {

    console.log(products);


    return (
        <div>
            <section
                className="relative bg-[url(https://phunugioi.com/wp-content/uploads/2021/10/Hinh-anh-dan-PC-khung.jpg)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white opacity-[.37] sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div className="relative  mx-auto  px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" >
                    
                </div>
            </section>

            <div className=" py-16">
                <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
                    <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <img src="../src/assets/ship.svg" alt="Delivery" className="w-12 h-12 object-contain" />
                        <div>
                            <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
                            <p className="text-gray-500 text-sm">Order over $200</p>
                        </div>
                    </div>
                    <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <img src="../src/assets/money.svg" alt="Delivery" className="w-12 h-12 object-contain" />
                        <div>
                            <h4 className="font-medium capitalize text-lg">Money Rturns</h4>
                            <p className="text-gray-500 text-sm">30 days money returs</p>
                        </div>
                    </div>
                    <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <img src="../src/assets/24h.svg" alt="Delivery" className="w-12 h-12 object-contain" />
                        <div>
                            <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
                            <p className="text-gray-500 text-sm">Customer support</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-[20px] py-16">
                <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Danh mục sản phẩm</h2>
                <div className="grid grid-cols-3 gap-3 ">
                    <div className="relative rounded-sm overflow-hidden group">
                        <img src="https://nastroyka.zp.ua/img/articles/spetsialnyye-rezhimy-zagruzki-mac-os.jpg" alt="category 1" className="w-full" />
                        <a href="#"
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Macbook</a>
                    </div>
                    <div className="relative rounded-sm overflow-hidden group">
                        <img src="https://cdn.tgdd.vn/Products/Images/44/263983/acer-nitro-5-gaming-an515-57-5669-i5-11400h-8gb-512gb-144hz-4gb-gtx1650-win11-nhqehsv001-031221-100506-600x600.jpg" alt="category 1" className="w-full" />
                        <a href="#"
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Acer</a>
                    </div>
                    <div className="relative rounded-sm overflow-hidden group">
                        <img src="https://media.istockphoto.com/id/1317708702/photo/asus-zenbook-duo-14-ux482.jpg?s=612x612&w=0&k=20&c=ZDM86rUK_-jYxQ4X0uqtHNsgbWq6oQhj6titHjghJkU=" alt="category 1" className="w-full" />
                        <a href="#"
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Asus
                        </a>
                    </div>
                    <div className="relative rounded-sm overflow-hidden group">
                        <img src="https://www.laptopvip.vn/images/companies/1/san-pham/2371/2371-dell-inspiron-5584-156-inch-fhd-windows-10-1566443506-3.jpg" alt="category 1" className="w-full" />
                        <a href="#"
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Dell</a>
                    </div>
                    <div className="relative rounded-sm overflow-hidden group">
                        <img src="https://fptshop.com.vn/Uploads/Originals/2023/6/9/638219196660165864_lenovo-yoga-slim-7-pro-14ihu5-o-bac-dd.jpg" alt="category 1" className="w-full" />
                        <a href="#"
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Lenovo</a>
                    </div>
                    
                </div>
            </div>

            <div>
                <section>
                    <div className=" py-8 mx-auto sm:px-6 sm:py-12 ">
                        <header >
                            <div class="flex justify-between">
                                 <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                                Sản Phẩm Mới Nhất
                            </h2>
                            <div className='flex justify-center my-[40px]'>
                            <Link to={`/products`}>
                                <Button type="primary" block>
                                    All Product
                                </Button>
                            </Link>
                        </div>
                            </div>
                           
                        </header>

                        <div className=''>
                            <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                                {products.slice(0, 4).map((item, index) => (
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
        </div >
    )
}

export default HomePage;