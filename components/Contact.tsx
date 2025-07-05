// components/Contact.tsx
export default function Contact() {
  return (
  <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Dr. Serena</h2>
      <form className="max-w-2xl mx-auto space-y-4">
        <div>
          <label className="block font-semibold">Name</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="Your Name" />
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          <input type="email" className="w-full border p-2 rounded" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block font-semibold">Message</label>
          <textarea className="w-full border p-2 rounded" rows={5} placeholder="Type your message..."></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
