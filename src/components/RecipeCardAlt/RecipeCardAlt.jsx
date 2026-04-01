import './RecipeCardAlt.scss'
import clsx from 'clsx'

export default (props) => {
  const { className } = props

  return <div className={clsx('recipe-card-alt', className)}>RecipeCardAlt</div>
}
