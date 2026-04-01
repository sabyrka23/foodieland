import './Slider.scss'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import clsx from 'clsx'
import HeroCard from '@/components/HeroCard'
import { sliderConfig } from './slider.data'

export default (props) => {
  const { className, items } = props

  return (
    <div
      className={clsx('slider swiper', className)}
      data-js-slider={JSON.stringify(sliderConfig)}
    >
      <ul className="slider__list swiper-wrapper">
        {items.map(({ id, ...card }) => (
          <li className="slider__item swiper-slide" key={id}>
            <HeroCard {...card} />
          </li>
        ))}
      </ul>
    </div>
  )
}
