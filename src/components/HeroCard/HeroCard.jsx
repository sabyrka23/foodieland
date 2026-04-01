import './HeroCard.scss'
import clsx from 'clsx'
import { Image } from 'minista'
import Icon from '@/components/Icon'
import Button from '@/components/Button'

export default (props) => {
  const {
    className,
    category,
    title,
    description,
    tags,
    author,
    badgeImgSrc,
    bgImgSrc,
  } = props

  return (
    <article className={clsx('hero-card', className)}>
      <div className="hero-card__body">
        <div className="hero-card__category">
          <Image src={category.imgSrc} />
          <span>{category.label}</span>
        </div>
        <h2 className="hero-card__title h1">{title}</h2>
        <div className="hero-card__description">
          <p>{description}</p>
        </div>
        <div className="hero-card__tags">
          <ul className="hero-card__tags-list">
            {tags.map(({ icon, label }) => (
              <li className="hero-card__tags-item" key={label}>
                <Icon name={icon} hasFill />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-card__author">
          <Image src={author.imgSrc} />
          <div className="hero-card__author-body">
            <h3 className="hero-card__author-name">{author.name}</h3>
            <time
              className="hero-card__author-date"
              dateTime={author.date.dateTime}
            >
              {author.date.label}
            </time>
          </div>
        </div>
        <Button className="hero-card__button">
          <span>View Recipes</span>
          <Icon name="play" hasFill />
        </Button>
        <Image src={badgeImgSrc} />
      </div>
      <Image src={bgImgSrc} />
    </article>
  )
}
