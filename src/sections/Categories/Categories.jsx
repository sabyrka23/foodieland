import Section from '@/layouts/Section'
import CategoryCard from '@/components/CategoryCard'
import Grid from '@/components/Grid'
import { categories } from './categories.data'

export default () => {
  return (
    <Section
      title="Categories"
      titleId="categories"
      linkLabel="View All Categories"
    >
      <Grid columns={6}>
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </Grid>
    </Section>
  )
}
