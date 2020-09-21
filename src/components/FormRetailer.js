import React, { useState } from 'react'
import { navigate } from 'gatsby'
import FormNetlify from '../components/FormNetlify'
import './Form.css'

const FormRetailer = () => {
  // Post-Submit Navigate
  const postSubmit = () => {
    navigate('/contact')
  }

  // Simple controlled form setup
  const handleChange = e =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  const [formValues, setFormValues] = useState({
    name: '',
    interest: '',
    dispensary: '',
    preferredContact: '',
    location: '',
    info: '',
  })

  return (
    <section className="">
      <FormNetlify
        formName="Retailer Inquiry"
        formValues={formValues}
        postSubmit={postSubmit}
        className="Form--Group"
      >
        <div>
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              name="name"
              value={formValues.name}
              onBlur={handleChange}
              required
            />
            <span>Name</span>
          </label>
        </div>
        <div>
          <label className="Form--Label has-arrow">
            <select
              className="Form--Input Form--Select"
              name="type"
              value={formValues.interest}
              required
              onBlur={handleChange}
            >
              <option disabled>Interested In</option>
              <option>All</option>
              <option>Dabaratus</option>
              <option>Gyro</option>
            </select>
          </label>
        </div>

        <div>
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              name="Dispensary"
              placeholder="Dispensary"
              value={formValues.dispensary}
              onBlur={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label className="Form--Label has-arrow">
            <select
              className="Form--Input Form--Select"
              name="type"
              value={formValues.preferredContact}
              required
              onBlur={handleChange}
            >
              <option disabled>Preferred Contact Method</option>
              <option>Email</option>
              <option>Phone</option>
            </select>
          </label>
        </div>

        <div>
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              name="Location"
              placeholder="Location"
              value={formValues.location}
              onBlur={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              name="Contact Info"
              placeholder="Contact Info"
              value={formValues.info}
              onBlur={handleChange}
              required
            />
          </label>
        </div>

        <div className="py-5 text-center">
          <button type="submit" className="Button Form--SubmitButton">
            Submit
          </button>
        </div>
      </FormNetlify>
    </section>
  )
}

export default FormRetailer
