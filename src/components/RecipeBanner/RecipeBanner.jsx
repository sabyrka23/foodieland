import './RecipeBanner.scss'
import clsx from 'clsx'
import titleImage from '@/assets/images/recipe-banner/recipe-banner-title.svg'
import dishImage from '@/assets/images/recipe-banner/recipe-banner-dish.png'

export default (props) => {
  const { className } = props

  return (
    <div className={clsx('recipe-banner', className)}>
      <img className="recipe-banner__title" src={titleImage} alt="" />
      <img className="recipe-banner__dish" src={dishImage} alt="" />
      <a className="recipe-banner__link" href="/">
        www.foodieland.com
      </a>
    </div>
  )
}
