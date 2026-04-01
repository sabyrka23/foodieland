import './RecipeCard.scss'
import clsx from 'clsx'
import Tags from '@/components/Tags'

export default (props) => {
  const { className, imgSrc, title, tags } = props

  return (
    <article className={clsx('recipe-card', className)}>
      <img
        className="recipe-card__image"
        src={imgSrc}
        alt=""
        width="368"
        height="250"
        loading="lazy"
      />
      <h3 className="recipe-card__title">{title}</h3>
      <Tags className="recipe-card__tags" tags={tags} />
    </article>
  )
}
