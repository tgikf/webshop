import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="Home"
        description="Island wide alcohol delivery by Alcools"
      />
      <FeaturedProducts />
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
