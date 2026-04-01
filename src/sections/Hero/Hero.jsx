import './Hero.scss'
import { sliderConfig } from './hero.data'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 className="visually-hidden" id="hero-title">
        Special Offers
      </h1>
      <div
        className="hero__slider swiper"
        data-js-slider={JSON.stringify(sliderConfig)}
      >
        <ul className="hero__slider-list swiper-wrapper">
          <li className="hero__slider-item swiper-slide">
            <div className="hero-card">Slide 1</div>
          </li>
          <li className="hero__slider-item swiper-slide">
            <div className="hero-card">Slide 2</div>
          </li>
          <li className="hero__slider-item swiper-slide">
            <div className="hero-card">Slide 3</div>
          </li>
        </ul>
      </div>
    </section>
  )
}
