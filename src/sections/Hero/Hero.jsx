import './Hero.scss'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { heroCards, sliderConfig } from './hero.data'
import HeroCard from '@/components/HeroCard'

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
          {heroCards.map(({ id, ...card }) => (
            <li className="hero__slider-item swiper-slide" key={id}>
              <HeroCard {...card} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
