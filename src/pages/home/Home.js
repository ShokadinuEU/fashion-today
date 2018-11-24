import React, { lazy, Suspense } from 'react'
import './home.scss'
import Brands from '../../components/Brands/Brands'
import Header from '../../components/Header/Header'

const Products = lazy(() => import('../../components/Products/Products'))

const Home = () => {
    return (
    <div className="main-content">
      <div className="healder-landing-page">
        <Header />
      </div>
      <Suspense fallback={<div>Loading Items...</div>}>
        <Products />
        <Brands />
      </Suspense>
    </div>
    )
}

export default Home
