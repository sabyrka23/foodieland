import './Banner.scss'
import Button from '@/components/Button'
import bannerBg from '@/assets/images/banner/banner-bg.svg'

export default () => {
  return (
    <section className="banner">
      <div className="banner__inner container" aria-labelledby="banner-title">
        <div className="banner__body">
          <h2 className="banner__title" id="banner-title">
            Everyone can be a chef in their own kitchen
          </h2>
          <div className="banner__description">
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>
          <Button className="banner__button" href="/">
            Learn More
          </Button>
        </div>
        <img src={bannerBg} alt="" width="" height="" loading="lazy" />
      </div>
    </section>
  )
}
