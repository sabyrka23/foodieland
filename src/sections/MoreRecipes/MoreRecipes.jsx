import './MoreRecipes.scss'
import Grid from '@/components/Grid'
import RecipeCard from '@/components/RecipeCard'
import Section from '@/layouts/Section'
import { moreRecipes } from './more-recipes.data'

export default () => {
  return (
    <Section
      title="You may like these recipe too"
      titleId="more-recipes"
      headerMode="center"
    >
      <Grid columns={4}>
        {moreRecipes.map(({ id, ...recipe }) => (
          <RecipeCard titleTag="h6" key={id} {...recipe} />
        ))}
      </Grid>
    </Section>
  )
}
