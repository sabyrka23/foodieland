import './Tags.scss'
import clsx from 'clsx'

export default (props) => {
  const { className } = props

  return <div className={clsx('tags', className)}>Tags</div>
}
