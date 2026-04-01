import './InstagramView.scss'
import clsx from 'clsx'

export default (props) => {
  const { className } = props

  return <div className={clsx('instagram-view', className)}>InstagramView</div>
}
