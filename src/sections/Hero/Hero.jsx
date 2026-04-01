import './Hero.scss'
import { heroCards } from './hero.data'
import Slider from '@/components/Slider'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 className="visually-hidden" id="hero-title">
        Special Offers
      </h1>
      <Slider class='hero__slider' items={heroCards} />
    </section>
  )
}
