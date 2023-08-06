import { signin } from '../api/auth'
import { Link, useNavigate } from 'react-router-dom'
import { IUsers } from '../interface/product'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { FacebookOutlined, GooglePlusOutlined } from '@ant-design/icons'



const SigninPage = () => {
    const navigate = useNavigate()
    const onFinish = async (values: IUsers) => {
        try {

            const res = await signin(values);
            localStorage.setItem('user', JSON.stringify(res.data));
            console.log(res);

            // if (res.data.user.role == 'admin') {
            //     message.success('Đăng nhập thành công Admin !');
            //     navigate('/admin');
            // } else {
            //     message.success('Đăng nhập thành công !');
            //     
            // }
            navigate('/');

        } catch (error: any) {
            message.error(error.response.data.message);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <div className="">
                <div className="">
                    <div className="">
                        <div className='flex justify-between items-center py-[15px] bg-gray-200 px-[50px] md:px-[100px]'>
                            <div className='flex gap-2'>
                                
                                <h1 className='text-[20px] font-[700] mt-[10px]'>Đăng Nhập</h1>
                            </div>
                            <div className='pt-[10px]'>
                                <Link to={`/`}>
                                    {/* <p>Bạn cần giúp đỡ !</p> */}
                                </Link>
                            </div>
                        </div>

                        <div className=' md:flex px-[50px]'>
                            <div className='w-full flex items-center ' >
                                <Form
                                    name="basic"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                    style={{ maxWidth: 600, width: "100%" }}
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"

                                >
                                    <Form.Item
                                        wrapperCol={{ offset: 8, span: 16 }}
                                    >
                                       
                                    </Form.Item>

                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{ required: true, message: 'Please input your email!' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                                        <div className='md:flex justify-between '>
                                            <Checkbox className='pt-[10px]'>Remember me</Checkbox>
                                            <Link to={`/`} className='pt-[10px] text-red-500'>
                                                Forgot password?
                                            </Link>
                                        </div>
                                    </Form.Item>

                                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>

                                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                        
                                        
                                        <div className='flex justify-center gap-2 pt-[20px]'>
                                            <p className='font-[600]'>Hãy đăng kí nếu bạn chưa có tài khoản</p>
                                            <Link to={`/signup`} className='font-[600] text-blue-500'>Đăng Kí ?</Link>
                                        </div>


                                    </Form.Item>

                                </Form>

                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SigninPage