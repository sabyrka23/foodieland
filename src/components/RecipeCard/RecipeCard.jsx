import './RecipeCard.scss'
import clsx from 'clsx'

export default (props) => {
  const { className } = props

  return <div className={clsx('recipe-card', className)}>RecipeCard</div>
}
