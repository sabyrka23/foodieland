import './Grid.scss'
import clsx from 'clsx'

export default (props) => {
  const { className } = props

  return <div className={clsx('grid', className)}>Grid</div>
}
