import SubscribeForm from '../sections/SubscribeForm'
import MoreRecipes from '../sections/MoreRecipes'

export const metadata = {
  title: 'Contact',
}

export default () => {
  return (
    <>
      <SubscribeForm />
      <MoreRecipes title="Check out the delicious recipe" />
    </>
  )
}
