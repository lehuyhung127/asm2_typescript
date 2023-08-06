import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ICategory } from '../../interface/product'
import { message } from 'antd'

type CategoriesAddProps = {
    OnAdd: (categories: ICategory) => void;
}

const CategoriesAdd = ({ OnAdd }: CategoriesAddProps) => {
    const confirm = () => {
        message.success('Thêm Thành Công');
    };
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm({});
    const onHandleSubmit = (data: any) => {
        OnAdd(data)
        navigate('/admin/categories')
        confirm()
    }
    return (
        <div className=''>
            <h1 className='text-2xl text-center'>Thêm Danh Mục</h1>
            <div className='grid grid-cols-2 gap-3'>
                <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                    <div>
                        <label htmlFor="first_name" className="text-[16px] block mb-2 text-sm font-medium text-gray-900 dark:text-white">Catagories name:</label>
                        <input type="text" {...register('name')} className="w-[400px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Danh mục" required />
                    </div>
                    <button className='bg-blue-500 w-[150px] py-[5px] rounded-lg mt-[10px] ' type='submit'>Add Categories</button>
                </form>
                
            </div>
        </div>
    )
}

export default CategoriesAdd