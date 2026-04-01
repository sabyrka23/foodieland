import './InstagramView.scss'
import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import instagramPostImage from '@/assets/images/instagram-view/instagram-post.jpg'

export default () => {
  return (
    <div className="instagram-view">
      <Section
        title="Check out @foodieland on Instagram"
        titleId="instagram-view"
        description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
        headerMode="column"
      >
        <Grid columns={4}>
          {[...Array(4)].map((_, index) => (
            <img
              className="instagram-view__image"
              src={instagramPostImage}
              alt=""
              width={290}
              height={446}
              loading="lazy"
              key={index}
            />
          ))}
        </Grid>
      </Section>
      <Button className="instagram-view__button">
        <span>Visit Our Instagram</span>
        <Icon name="instagram" hasFill />
      </Button>
    </div>
  )
}
