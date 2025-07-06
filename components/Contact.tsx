'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    availability: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Data Submitted:', formData)
    alert('Your message has been sent!')
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      availability: '',
    })
  }

  return (
    <section id="contact" className="bg-blue-50 py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Book a Free Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="w-full p-3 border  text-blue-900 rounded"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="(123) 456-7890"
            className="w-full p-3 border  text-blue-900 rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full p-3 border  text-blue-900 rounded"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Briefly describe your concerns or goals"
            className="w-full p-3 border  text-blue-900 rounded h-28"
          ></textarea>
          <input
            type="text"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            placeholder="e.g., mornings before 11am"
            className="w-full p-3 border  text-blue-900 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 rounded font-semibold hover:bg-blue-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
