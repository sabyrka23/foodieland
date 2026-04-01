import './Footer.scss'
import Navigation from '@/components/Navigation'
import Socials from '@/components/Socials'
import Logo from '@/components/Logo'

export default () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__body">
          <div className="footer__body-info">
            <Logo className="footer__logo" />
            <div className="footer__subtitle">
              Lorem ipsum dolor sit amet, consectetuipisicing elit
            </div>
          </div>
          <Navigation className="footer__menu" />
        </div>
        <div className="footer__extra">
          <div className="footer__copyright">© 2020. Portfolio project.</div>
          <Socials className="footer__soc1als" />
        </div>
      </div>
    </footer>
  )
}
