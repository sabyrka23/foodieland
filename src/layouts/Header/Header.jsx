import './Header.scss'
import Logo from '@/components/Logo'
import Navigation from '@/components/Navigation'
import Socials from '@/components/Socials'
import BurgerButton from '@/components/BurgerButton'

export default (props) => {
  const { url } = props

  return (
    <header className="header" data-js-mobile-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <Navigation
          className="header__menu"
          url={url}
          extraAttrs={{
            'data-js-mobile-menu-overlay': '',
          }}
        />
        <Socials className="header__soc1als" />
        <BurgerButton
          className="header__burger-button"
          extraAttrs={{
            'data-js-mobile-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}
