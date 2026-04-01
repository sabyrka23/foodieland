import './Recipes.scss'
import clsx from 'clsx'

export default (props) => {
  const { className } = props

  return <div className={clsx('recipes', className)}>Recipes</div>
}
