import './Header.scss'
import Logo from '@/components/Logo'
import Navigation from '@/components/Navigation'
import Socials from '@/components/Socials'

export default (props) => {
  const { url } = props

  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <Navigation className="header__menu" url={url} />
        <Socials className="header__soc1als" />
      </div>
    </header>
  )
}
