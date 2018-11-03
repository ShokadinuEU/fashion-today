import React, { Component, lazy, Suspense } from 'react'
// import Products from '../../components/Products/Products'
import Brands from '../../components/Brands/Brands'
import Header from '../../components/Header/Header'

const Products = lazy(() => import('../../components/Products/Products'))

export default class Home extends Component {
  render() {
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
}
