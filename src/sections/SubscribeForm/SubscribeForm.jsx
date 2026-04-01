import './SubscribeForm.scss'
import clsx from 'clsx'

export default (props) => {
  const { className } = props

  return <div className={clsx('subscribe-form', className)}>SubscribeForm</div>
}
