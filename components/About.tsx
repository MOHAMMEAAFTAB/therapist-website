import Image from 'next/image'

export default function About() {
  return (
    <section className="py-16 px-4 bg-white text-center" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About Dr. Serena Blake</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/dr-serena.webp"
              alt="Dr. Serena Blake"
              width={400}
              height={400}
              className="rounded-xl shadow-md object-cover w-full h-auto"
            />
          </div>

          <div className="w-full md:w-1/2 text-left text-gray-700 text-lg">
            <p>
              Dr. Serena Blake is a licensed therapist with over a decade of experience helping individuals find balance, peace, and growth in their lives. Her practice combines evidence-based therapy techniques with compassionate care.
            </p>
            <p className="mt-4">
              Whether you're dealing with anxiety, depression, trauma, or just need someone to talk to, Dr. Blake provides a warm and non-judgmental space to begin your journey toward healing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
