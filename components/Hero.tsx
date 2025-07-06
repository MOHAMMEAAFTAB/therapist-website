


// import Image from 'next/image'

// export default function Hero() {
//   return (
//     <section className="bg-blue-50 py-20 px-4 text-center">
//       <div className="max-w-5xl mx-auto">
//         <Image
//        
//           alt="Therapy Banner"
//           width={1200}
//           height={500}
//           className="mx-auto rounded-lg mb-8 shadow-lg"
//         />

//         <h1 className="text-5xl font-bold text-blue-900 mb-4">
//           Find Peace. Heal. Grow.
//         </h1>
//         <p className="text-xl text-blue-800 max-w-2xl mx-auto">
//           Welcome to the practice of Dr. Serena Blake — a safe, supportive space for your healing journey.
//         </p>
//       </div>
//     </section>
//   )
// }




// components/Hero.tsx
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
  
      <Image
        src="/images/banner_iv+therapy.jpg" 
        alt="Therapy Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay to darken image slightly */}
      <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm" />

      {/* Content on top */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Find Peace. Heal. Grow.</h1>
        <p className="text-xl max-w-2xl">
          Welcome to the practice of Dr. Serena Blake — a safe, supportive space for your healing journey.
        </p>
      </div>
    </section>
  )
}
