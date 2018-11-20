import React, { lazy, Suspense } from 'react'
import Brands from '../../components/Brands/Brands'
import Header from '../../components/Header/Header'

const Products = lazy(() => import('../../components/Products/Products'))

const Home = () => {
    return (
    <div className="main-content">
      <Header />
      <Suspense fallback={<div>Loading Items...</div>}>
        <Products />
      </Suspense>
      <Brands />
    </div>
    )
}

export default Home
