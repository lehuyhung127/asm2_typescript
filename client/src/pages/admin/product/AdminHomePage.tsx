import { ICategory, IProduct } from '../../../interface/product';
import { Button, message, Popconfirm, Space, Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { Link } from 'react-router-dom';

interface ProductData extends IProduct {
    recordKey: string;
}

interface DataType {
    key: string;
    name: string;
    price: number;
    image: string;
}

interface AdminHomePageProps {
    products: IProduct[];
    categories: ICategory[];
    onRemove: (id: number | string) => void;
}

const AdminHomePage = ({ products, categories, onRemove }: AdminHomePageProps) => {
    const getCategoryName = (categoryId: string) => {
        const category = categories.find((c) => c._id === categoryId);
        return category ? category.name : '';
    };
    console.log(getCategoryName);


    const confirmDelete = (recordKey: string) => {
        const product = products.find((p) => p._id === recordKey);

        if (product) {
            message.loading({ content: 'Deleting product...', duration: 2 });
            const delay = 2000; // thời gian chờ là 2 giây

            const deleteProduct = () => {
                onRemove(product._id);
                message.success('Product deleted successfully');
            };

            setTimeout(deleteProduct, delay);
        }
    };

    const cancelDelete = () => {
        message.error('Product deletion cancelled');
    };

    

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: '30%',
           
           
        },
        {
            title: 'Price',
            dataIndex: 'price',
            width: '15%',
            
        },
        {
            title: 'Image',
            dataIndex: 'image',
            width: '20%',
            render: (image) => <img src={image} alt="Product" width={150} />,
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            width: '20%',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/admin/update/${record.key}`}>
                        <Button className='btn-edit text-[#30D200] border-[#31d200cb] hover:text-[#31d200ba] hover:border-[#30D200] active:border-[#30D200]' >Edit</Button>
                    </Link>
                    <Popconfirm
                        title="Are you sure to delete this product?"
                        onConfirm={() => confirmDelete(record.key)}
                        onCancel={cancelDelete}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="primary" danger>Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const sortedProducts = products.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime();
    });

    // Lấy ra 10 sản phẩm mới nhất
    const newestProducts = sortedProducts.slice(0, 10);

    // Chuyển đổi thành kiểu dữ liệu DataType
    const data: DataType[] = newestProducts.map((product) => ({
        key: product._id,
        name: product.name,
        price: product.price,
        image: product.image[0],
    }));

    const productData: ProductData[] = products.map((product) => ({
        ...product,
        recordKey: product._id,
    }));
    console.log(productData);

    const handleTableChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('Table parameters:', pagination, filters, sorter, extra);
    };

    return (
        <div id="adminhome">
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 4 }} onChange={handleTableChange} />
        </div>
    );
};

export default AdminHomePage;