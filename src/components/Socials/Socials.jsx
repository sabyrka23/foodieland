import './Socials.scss'
import clsx from 'clsx'
import { items } from './socials.data'
import Icon from '../Icon'

export default (props) => {
  const { className } = props

  return (
    <div className={clsx('soc1als', className)}>
      <ul className="soc1als__list">
        {items.map(({ icon, label }) => (
          <li className="soc1als__item" key={icon}>
            <a
              className="soc1als__link"
              href="/"
              title={label}
              aria-label={label}
            >
              <Icon name={icon} hasFill />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
