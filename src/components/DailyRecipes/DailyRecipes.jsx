import './DailyRecipes.scss'
import clsx from 'clsx'

export default (props) => {
  const { className } = props

  return <div className={clsx('daily-recipes', className)}>DailyRecipes</div>
}
