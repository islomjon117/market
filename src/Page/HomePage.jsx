import React from 'react'

import Header_main from '../component/header/Header_main'
import Electronics from '../component/electronics/Electronics'
import Products from '../component/products/Products'
import Top_products from '../component/top_products/Top_products'
import Card_main from '../component/card_on_the_main/Card_main'
import New_product from '../component/new_product/New_product'
import Modal from '../component/modal/Modal'

function HomePage() {
  return (
    <>
      <Header_main />
      <Electronics />
      <Products />
      <Top_products />
      <Card_main />
      <New_product />
      <Modal />
    </>
  )
}

export default HomePage