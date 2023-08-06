
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { ICategory, IProduct, IUsers } from '../../interface/product';
import { getAllUser } from '../../api/auth';
import { message } from 'antd';


type UpdatePageProps = {
    categories: ICategory[],
    products: IProduct[],
    onUpdate: (product: IProduct) => void
}

const UpdatePage = ({ products, categories, onUpdate }: UpdatePageProps) => {
    const confirm = () => {
        message.success('Update Thành Công');
    };
    const navigate = useNavigate()
    const { id } = useParams();

    const { register, handleSubmit, reset } = useForm({})
    useEffect(() => {
        const currentProduct = products.find(item => item._id == id)
        reset(currentProduct)
    }, [])
    const [user, setuser] = useState<IUsers[]>([])
    useEffect(() => {
        getAllUser().then(({ data: { user } }) => setuser(user))
    }, [])
    console.log(user);

    const onHandleSubmit = (data: any) => {
        onUpdate(data);
        navigate('/admin')
        confirm()

    }
    return (

        <div id='adminadd' >
            <h1 className='text-2xl text-center'>Chỉnh Sửa Sản Phẩm Mới</h1>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className='grid grid-cols-2 text-[14px] '>
                    
                    <div className='w-full'>
                        <h2 className='text-xl'>Thông Tin Sản Phẩm</h2>
                        <div className='mt-[10px]'>
                            <label className='text-[15px] font-[500]' htmlFor="">Nhập tên sản phẩm:</label>
                            <textarea {...register('name')} className="my-[7px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập tên sản Phẩm..."></textarea>

                        </div>
                        <div className='grid grid-cols-2 gap-6  mt-[20px]'>
                            <div>
                                <label className='text-[15px] font-[500]' htmlFor="">Gia Gốc:</label>
                                <input {...register('price')} type="text" placeholder='Nhập giá sản phẩm vnđ' className="my-[7px] block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>

                        </div>
                        <div className=''>
                        <div>
                            <label className='text-[15px] font-[500]' htmlFor="">Image:</label>
                            <input type='file' multiple {...register('image')} className=" my-[8px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='The link image' />
                        </div>

                      </div>
                        <div className='my-[20px]'>
                            <label className='text-[15px] font-[500]' htmlFor="">Danh Mục:</label>
                            <select {...register('categoryId')} className="my-[7px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {categories.map((item) =>
                                    <option value={item._id}>{item.name}</option>
                                )}
                            </select>
                        </div>

                        <div>
                            <button type="submit" className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default UpdatePage