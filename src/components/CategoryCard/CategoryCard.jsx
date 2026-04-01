import './CategoryCard.scss'
import clsx from 'clsx'

export default (props) => {
  const { className } = props

  return <div className={clsx('category-card', className)}>CategoryCard</div>
}
