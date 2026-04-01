import './Grid.scss'
import clsx from 'clsx'

export default (props) => {
  const { children, columns = 1 } = props

  return (
    <ul className={`grid grid--${columns}`}>
      {children.map((child, index) => (
        <li className="grid__item" key={index}>
          {child}
        </li>
      ))}
    </ul>
  )
}
