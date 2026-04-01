import './CategoryCard.scss'

export default (props) => {
  const { imgSrc, label, color } = props

  return (
    <article className="category-card">
      <div
        className="category-card__body"
        style={{ '--categoryCardColor': color }}
      >
        <div
          className="category-card__image-wrapper"
          style={{ '--catergodyCardImage': `url('${imgSrc}')` }}
        >
          <img
            className="category-card__image"
            src={imgSrc}
            alt=""
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
        <h3 className="category-card__title h6">{label}</h3>
      </div>
    </article>
  )
}
