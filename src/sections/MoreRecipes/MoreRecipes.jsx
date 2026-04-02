import './MoreRecipes.scss'
import clsx from 'clsx'

export default (props) => {
  const { className } = props

  return <div className={clsx('more-recipes', className)}>MoreRecipes</div>
}
