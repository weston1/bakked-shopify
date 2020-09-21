import React from 'react'

import './Form.css'

export default ({
  name = 'Form Sign Up',
  subject = '', // optional subject of the notification email
  action = '',
}) => (
  <section className="section thick">
    <div className="container">
      <div className="col-lg-9 col-11 mx-auto text-center">
        <h2>What’s another email between friends?</h2>
        <p>
          We know what you’re thinking but we keep short &amp; sweet and won’t
          spam your inbox. Sign-up to learn about new product releases, special
          offers &amp;&nbsp;drops.
        </p>
      </div>
      <div className="col-lg-12 mx-auto text-center">
        <form
          className="Form mx-auto"
          name={name}
          action={action}
          data-netlify=""
          data-netlify-honeypot="_gotcha"
        >
          <div className="row">
            <label className="Form--Label col-lg-6 col-12">
              <input
                className="Form--Input"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
            </label>
            <label className="Form--Label col-lg-6 col-12">
              <input
                className="Form--Input"
                type="phone"
                placeholder="Phone"
                name="phone"
                required
              />
            </label>

            <label className="Form--Label col-lg-6 col-12">
              <input
                className="Form--Input"
                type="email"
                placeholder="Email*"
                name="email"
                required
              />
            </label>
            <label className="Form--Label col-lg-6 col-12">
              <input
                className="Form--Input"
                type="zip"
                placeholder="zip*"
                name="zip"
                required
              />
            </label>
          </div>
          <div className="text-center mx-auto col-lg-12 py-4">
            <input type="text" name="_gotcha" style={{ display: 'none' }} />
            {!!subject && (
              <input type="hidden" name="subject" value={subject} />
            )}
            <input type="hidden" name="form-name" value={name} />
            <input className="Button" type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  </section>
)
