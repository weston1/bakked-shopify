import React from 'react'

import './FormMini.css'

export default ({
  name = 'Form Mini',
  subject = '', // optional subject of the notification email
  action = '',
}) => (
  <form
    className="FormMini"
    name={name}
    action={action}
    data-netlify=""
    data-netlify-honeypot="_gotcha"
  >
    <label className="FormMini--Label">
      <input
        className="FormMini--Input"
        type="email"
        placeholder="Email"
        name="email"
        required
      />
    </label>
    <label className="FormMini--Label">
      <input
        className="FormMini--Input"
        type="zip"
        placeholder="zip"
        name="zip"
        required
      />
    </label>
    <input type="text" name="_gotcha" style={{ display: 'none' }} />
    {!!subject && <input type="hidden" name="subject" value={subject} />}
    <input type="hidden" name="FormMini-name" value={name} />
    <input className="FormMini--SubmitButton" type="submit" value="SUBMIT" />
  </form>
)
