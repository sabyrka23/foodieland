import './Banner.scss'
import clsx from 'clsx'

export default (props) => {
  const { className } = props

  return <div className={clsx('banner', className)}>Banner</div>
}
