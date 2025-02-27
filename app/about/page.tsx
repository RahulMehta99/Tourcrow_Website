import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-[#fffdf5] relative overflow-hidden" style={{ backgroundImage: "url('/bg_about.png')", backgroundSize: 'cover', backgroundPosition: 'center',  }}>
      {/* Decorative circles */}
      {/* <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#ffcd13] opacity-80 z-0"></div>
      <div className="absolute top-40 right-40 w-16 h-16 rounded-full bg-[#ffcd13] opacity-60 z-0"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-[#ffcd13] opacity-70 z-0"></div>
      <div className="absolute bottom-40 left-10 w-20 h-20 rounded-full bg-[#ffcd13] opacity-50 z-0"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 rounded-full bg-[#ffcd13] opacity-60 z-0"></div>
      <div className="absolute top-3/4 left-1/4 w-16 h-16 rounded-full bg-[#ffcd13] opacity-40 z-0"></div> */}

      {/* Header with logo and back button */}
      <header className="relative z-10 p-6 flex items-center">
        <Link href="/" className="mr-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qwSGmfo2uoura5slNJ0QbXQrojiMlq.png"
            alt="TourCrow Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </Link>
        <Link
          href="/"
          className="border-4 border-black bg-[#ffcd13] text-[#231f20] px-6 py-2 rounded-full font-medium hover:bg-[#fec90f] transition-colors"
        >
          Back
        </Link>
      </header>

      {/* Main content */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-12 pb-24">
        <h1 className="text-5xl md:text-7xl font-bold text-[#231f20] mb-12 text-center">ABOUT US</h1>

        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-[#231f20] text-center leading-relaxed">
            TourCrow offers curated 3-5 day themed trips where adventure meets community. From wellness retreats to
            spooky escapes, each journey is designed around your passions, with exclusive influencer interactions and a
            like-minded travel crew. We handle the details—you just explore, connect, and make unforgettable memories.
          </p>
        </div>
      </section>
    </main>
  );
}
