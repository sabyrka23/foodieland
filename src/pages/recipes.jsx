import SubscribeForm from '../sections/SubscribeForm'
import MoreRecipes from '../sections/MoreRecipes'

export const metadata = {
  title: 'Recipes',
}

export default () => {
  return (
    <>
      <SubscribeForm />
      <MoreRecipes title="You may like these recipe too" />
    </>
  )
}
