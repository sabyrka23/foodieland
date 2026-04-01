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
        <div className="hero-card__body-main">
          <div className="hero-card__category">
            <Image src={category.imgSrc} width={24} height={24} />
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
                  <span className="hero-card__tags-label">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hero-card__body-extra">
          <div className="hero-card__author">
            <Image src={author.imgSrc} width={50} height={50} />
            <div className="hero-card__author-body">
              <p className="hero-card__author-name">{author.name}</p>
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
        </div>
        <Image
          className="hero-card__badge"
          src={badgeImgSrc}
          width={150}
          height={150}
        />
      </div>
      <Image
        className="hero-card__image"
        src={bgImgSrc}
        width={660}
        height={640}
      />
    </article>
  )
}
