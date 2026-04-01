import './RecipeCardAlt.scss'
import Tags from '@/components/Tags'

export default ({ imgSrc, title, tags }) => {
  return (
    <article className="recipe-card-alt">
      <img
        className="recipe-card-alt__image"
        src={imgSrc}
        alt=""
        width="290"
        height="200"
        loading="lazy"
      />
      <h3 className="recipe-card-alt__title h6">{title}</h3>
      <Tags className="recipe-card-alt__tags" tags={tags} />
    </article>
  )
}
