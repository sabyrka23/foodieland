import './Recipes.scss'
import Section from '@/layouts/Section'
import Grid from '@/components/Grid'

export default () => {
  return (
    <Section
      title="Simple and tasty recipes"
      titleId="recipes"
      description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
    >
      <Grid columns={3}></Grid>
    </Section>
  )
}
