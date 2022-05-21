import React from "react"
import { GetServerSideProps } from "next"
import { Menu } from '../components'

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = [
    {
      id: "1",
    },
  ]
  return { props: { feed } }
}

type Props = {
  feed: ''
}

const Blog: React.FC<Props> = (props) => {
  return (
    <Menu />
  )
}

export default Blog
