import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import BaseLayout from './components/layout/BaseLayout'
import AdminLayoutPage from './components/layout/AdminLayoutPage'
import HomePage from './pages/HomePage'
import { ICategory, IProduct } from './interface/product'
import { getAddProduct, getAll, getUpdateProduct, getdelete } from './api/product'
import ProductDetaliPage from './pages/ProductDetailPage'
import SigninPage from './pages/SigninPage'
import AddPage from './components/product/AddPage'
import AdminHomePage from './pages/admin/product/AdminHomePage'
import UpdatePage from './components/product/UpdatePage'
import SignUpPage from './pages/SignUpPage'
import { getAddCategory, getAllCategory, getUpdateCategories, getdeleteCategory } from './api/category'
import CategoriesHome from './pages/admin/category/AdminCategoryHome'
import CategoriesAdd from './components/category/CategoriesAdd'
import CategoriesUpdate from './components/category/CategoriesUpdate'
import CartPage from './pages/CartPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import AllProductPage from './pages/AllProductPage'
import AdminUserHome from './pages/admin/user/AdminUserHome'


function App() {
  const [product, setproduct] = useState<IProduct[]>([])
  const [categories, setcategories] = useState<ICategory[]>([])

  useEffect(() => {
    getAll().then(({ data: { product } }) => setproduct(product))
  }, [])
  console.log('app', product);


  useEffect(() => {
    getAllCategory().then(({ data: { categories } }) => setcategories(categories))
  }, [])

  const onHandleRemove = (id: number | string) => {
    getdelete(id).then(() => setproduct(product.filter((item) => item._id != id)))
  }
  const onHandleAdd = (product: IProduct) => {
    getAddProduct(product).then(() => getAll().then(({ data: { product } }) => setproduct(product)))
  }
  const onHandleUpdate = (product: IProduct) => {
    getUpdateProduct(product).then(() => getAll().then(({ data: { product } }) => setproduct(product)))
  }
  // Categories
  const onHandleAddCategories = (categories: ICategory) => {
    getAddCategory(categories).then(() => getAllCategory().then(({ data: { categories } }) => setcategories(categories)))
  }
  const onHandleRemoveCategories = (id: number | string) => {
    getdeleteCategory(id).then(() => setcategories(categories.filter((item) => item._id != id)))
  }
  const onHandleUpdateCategories = (categories: ICategory) => {
    getUpdateCategories(categories).then(() => getAllCategory().then(({ data: { categories } }) => setcategories(categories)))
  }

  return (
    <>
      <Routes>
        <Route path='signup' element={<SignUpPage />} />
        <Route path='signin' element={<SigninPage />} />

        <Route path='/' element={<BaseLayout />}>
          <Route index element={<HomePage products={product} />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='products' element={<AllProductPage products={product} />} />
          <Route path='products/:id'  >
            <Route index element={<ProductDetaliPage />} />
          </Route>
          <Route path='cart' element={<CartPage />} />
        </Route>
        {/* admin */}
        <Route path='/admin' element={<AdminLayoutPage />}>
          <Route index element={<AdminHomePage products={product} categories={categories} onRemove={onHandleRemove} />} />
          <Route path='add' element={<AddPage onAdd={onHandleAdd} categories={categories} />} />
          <Route path='update/:id' element={<UpdatePage onUpdate={onHandleUpdate} products={product} categories={categories} />} />
          <Route path='categories'>
            <Route index element={<CategoriesHome categories={categories} onRemove={onHandleRemoveCategories} />} />
            <Route path='add' element={<CategoriesAdd OnAdd={onHandleAddCategories} />} />
            <Route path='update/:id' element={<CategoriesUpdate OnUpdate={onHandleUpdateCategories} categories={categories} />} />
          </Route>
          <Route path='users' >
            <Route index element={<AdminUserHome />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
