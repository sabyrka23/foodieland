import Hero from '@/sections/Hero'
import Categories from '@/sections/Categories'
import SubscribeForm from '@/sections/SubscribeForm'
import Banner from '@/sections/Banner'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
      <SubscribeForm />
      <Banner />
    </>
  )
}
