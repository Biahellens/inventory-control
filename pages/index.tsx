import React from "react"
import { GetServerSideProps } from "next"

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
    <h1>oi</h1>
  )
}

export default Blog
