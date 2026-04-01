import './SubscribeForm.scss'
import Button from '@/components/Button'

export default () => {
  return (
    <section
      className="subscribe-form container"
      aria-labelledby="subscribe-form-title"
    >
      <div className="subscribe-form__inner">
        <div className="subscribe-form__body">
          <h2 className="subscribe-form__title" id="subscribe-form-title">
            Deliciousness to your inbox
          </h2>
          <div className="subscribe-form__description">
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>
          <form className="subscribe-form__form">
            <div className="subscribe-form__field">
              <label className="visually-hidden" htmlFor="subscribe-form">
                Email
              </label>
              <input
                className="subscribe-form__input"
                id="subscribe-form"
                type="email"
                placeholder="Your email address..."
                required
              />
              <Button className="subscribe-form__button" type="submit">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
