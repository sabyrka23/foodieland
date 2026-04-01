import './HeroCard.scss'
import clsx from 'clsx'

export default (props) => {
  const { className } = props

  return <div className={clsx('hero-card', className)}>HeroCard</div>
}
