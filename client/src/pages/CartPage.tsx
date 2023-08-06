import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IProduct } from '../interface/product';
import { getOne } from '../api/product';



const CartPage = () => {
    const { id } = useParams() //{id: "1"} string
    const [products, setProducts] = useState<IProduct>({} as IProduct)
    useEffect(() => {
        getOne(String(id)).then(({ data: { product } }) => setProducts(product))
    }, [])
    console.log(products);

    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <header className="text-center">
                            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Giỏ hàng</h1>
                        </header>

                        <div className="mt-8">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4">
                                    <img
                                        src={`${products.image}`}
                                        alt=""
                                        className="h-16 w-16 rounded object-cover"
                                    />

                                    <div>
                                        <h3 className="text-sm text-gray-900">{products.name}</h3>
                                    </div>
                                    <div>
                                        <h3 className=" ml-[40px] text-[red] text-sm text-gray-900">{products.sell_price}₫</h3>
                                    </div>

                                    <div className="flex flex-1 items-center justify-end gap-2">
                                        <form>
                                            <label htmlFor="Line3Qty" className="sr-only"> Quantity </label>

                                            <input
                                                type="number"
                                                min="1"
                                                value="1"
                                                id="Line3Qty"
                                                className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                            />
                                        </form>

                                        <button className="text-gray-600 transition hover:text-red-600">
                                            <span className="sr-only">Remove item</span>

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                                <div className="w-screen max-w-lg space-y-4">

                                    <div className="flex justify-end">
                                        <a
                                            href="#"
                                            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                                        >
                                            Thanh Toán
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default CartPage