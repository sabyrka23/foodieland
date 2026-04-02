import Hero from '@/sections/Hero'
import Categories from '@/sections/Categories'
import Recipes from '@/sections/Recipes'
import Banner from '@/sections/Banner'
import InstagramView from '@/sections/InstagramView'
import DailyRecipes from '@/sections/DailyRecipes'
import SubscribeForm from '@/sections/SubscribeForm'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
      <Recipes />
      <Banner />
      <InstagramView />
      <DailyRecipes />
      <SubscribeForm />
    </>
  )
}
