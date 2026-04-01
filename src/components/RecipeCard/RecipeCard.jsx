import './RecipeCard.scss'
import clsx from 'clsx'
import Tags from '@/components/Tags'

export default (props) => {
  const { mode, imgSrc, title, titleTag, tags } = props

  return (
    <article className={`recipe-card recipe-card--${mode}`}>
      <a className={clsx('recipe-card__inner')} href="/">
        <img
          className="recipe-card__image"
          src={imgSrc}
          alt=""
          loading="lazy"
        />
        <h3 className={clsx('recipe-card__title', titleTag)}>{title}</h3>
        <Tags className="recipe-card__tags" tags={tags} />
      </a>
    </article>
  )
}
