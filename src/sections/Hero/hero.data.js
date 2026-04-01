import scrollImage from '@/assets/images/hero-card/scroll.png'
import authorImage from '@/assets/images/hero-card/author.png'
import badgeImage from '@/assets/images/hero-card/badge.svg'
import heroBgImage from '@/assets/images/hero-card/hero-card-bg.jpg'

export const sliderConfig = {
  spaceBetween: 40,
  slidesPerView: 1.0625,
  centeredSlides: true,
}

const category = {
  imgSrc: scrollImage,
  label: 'Hot Recipes',
}

const tags = [
  {
    icon: 'clock',
    label: '30 Minutes',
  },
  {
    icon: 'cutlery',
    label: 'Chicken',
  },
]

const date = {
  label: '15 March 2022',
  dateTime: '2022-03-15',
}

const author = {
  imgSrc: authorImage,
  name: 'John Smith',
  date: date,
}

export const heroCards = [
  {
    id: 1,
    category: category,
    title: 'Spicy delicious chicken wings',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim',
    tags: tags,
    author: author,
    badgeImgSrc: badgeImage,
    bgImgSrc: heroBgImage,
  },
  {
    id: 2,
    category: category,
    title: 'Spicy delicious chicken wings',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim',
    tags: tags,
    author: author,
    badgeImgSrc: badgeImage,
    bgImgSrc: heroBgImage,
  },
  {
    id: 3,
    category: category,
    title: 'Spicy delicious chicken wings',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim',
    tags: tags,
    author: author,
    badgeImgSrc: badgeImage,
    bgImgSrc: heroBgImage,
  },
]
