import Grid from '@/components/Grid'
import RecipeCard from '@/components/RecipeCard'
import Section from '@/layouts/Section'
import { moreRecipes } from './more-recipes.data'

export default (props) => {
  const { title } = props

  return (
    <Section title={title} titleId="more-recipes" headerMode="center">
      <Grid columns={4}>
        {moreRecipes.map(({ id, ...recipe }) => (
          <RecipeCard titleTag="h6" key={id} {...recipe} />
        ))}
      </Grid>
    </Section>
  )
}
