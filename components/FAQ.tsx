// components/FAQ.tsx
const faqs = [
  {
    question: "Do you offer virtual sessions?",
    answer: "Yes, I offer both in-person and secure online video sessions.",
  },
  {
    question: "What are your fees?",
    answer: "Session fees vary depending on the service. Contact me directly for current rates.",
  },
  {
    question: "Do you accept insurance?",
    answer: "Currently, I work with select insurance providers and offer superbills for reimbursement.",
  },
];

export default function FAQ() {
  return (
<section id="faq" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-lg text-blue-900">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
