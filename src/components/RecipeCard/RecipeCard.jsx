import './RecipeCard.scss'
import clsx from 'clsx'
import Tags from '@/components/Tags'

export default (props) => {
  const { mode, imgSrc, title, titleTag, tags, isLiked } = props

  return (
    <article className={`recipe-card recipe-card--${mode}`}>
      <a className={clsx('recipe-card__inner')} href="/">
        <span className="recipe-card__image-wrapper">
          {isLiked && (
            <button
              className="recipe-card__button"
              title={isLiked ? 'Unlike' : 'Like'}
            >
              <span className="visually-hidden">
                {isLiked ? 'Unlike' : 'Like'}
              </span>
              <img src={isLiked} alt="" width={24} height={24} loading="lazy" />
            </button>
          )}
          <img
            className="recipe-card__image"
            src={imgSrc}
            alt=""
            loading="lazy"
          />
        </span>
        <h3 className={clsx('recipe-card__title', titleTag)}>{title}</h3>
        <Tags className="recipe-card__tags" tags={tags} />
      </a>
    </article>
  )
}
