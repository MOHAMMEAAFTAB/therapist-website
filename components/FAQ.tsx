'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer: 'I do not currently accept insurance. However, I can provide a superbill for potential reimbursement depending on your provider.',
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes, I offer secure video therapy sessions for clients who prefer remote appointments.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations must be made at least 24 hours in advance to avoid a cancellation fee.',
  },
  {
    question: 'How long is each therapy session?',
    answer: 'Each standard session lasts approximately 50 minutes.',
  },
  {
    question: 'What issues can you help with?',
    answer: 'I specialize in anxiety, relationship challenges, stress, trauma recovery, and personal growth.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-left">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 pt-0 text-sm text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
