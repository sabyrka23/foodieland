import './Categories.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'

export default (props) => {
  const { className } = props

  return (
    <Section
      title="Categories"
      titleId="categories"
      linkLabel="View All Categories"
    >
      <div className={clsx('categories', className)}>
        Карточки секции...
      </div>
    </Section>
  )
}
