import './Navigation.scss'
import clsx from 'clsx'
import { menuItems } from './navigation.data'

export default (props) => {
  const { url, className, extraAttrs } = props

  return (
    <nav className={clsx('menu', className)} {...extraAttrs}>
      <ul className="menu__list">
        {menuItems.map(({ label, href }) => (
          <li className="menu__item" key={href}>
            <a
              className={clsx('menu__link', href === url && 'is-active')}
              href={href}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
