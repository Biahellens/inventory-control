import React from "react"
import { GetStaticProps } from "next"
import prisma from '../lib/prisma';
import { ProductPage } from './Product'
//import { CreateProductPage } from './CreatedProduct'

/*export const getStaticProps: GetStaticProps = async () => {
  const inventory = await prisma.product.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return { props: { inventory } };
}*/


const Blog: React.FC = (props) => {
  return (
    <ProductPage />
  )
}

export default Blog
