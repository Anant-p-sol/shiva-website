import Image from "next/image"

export function Tablescapes() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Tablescapes</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Each table tells a story. Our design team creates stunning tablescapes that capture the essence of your
              celebration, blending artistry with sophistication.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From intimate dinners to grand banquets, every element is thoughtfully curated to create a memorable
              dining experience.
            </p>
          </div>

          {/* Right Image Grid with Overlapping Effect */}
          <div className="relative h-96 md:h-[450px]">
            {/* Bottom left image */}
            <div className="absolute bottom-0 left-0 w-40 md:w-56 h-48 md:h-64 rounded-xl overflow-hidden image-shadow z-10">
              <Image src="IMG_5359.JPG?height=256&width=224" alt="Table setting" fill className="object-cover" />
            </div>

            {/* Top right image */}
            <div className="absolute top-0 right-0 w-44 md:w-60 h-56 md:h-72 rounded-xl overflow-hidden image-shadow z-20">
              <Image src="IMG_5362.JPG?height=288&width=240" alt="Place setting" fill className="object-cover" />
            </div>

            {/* Middle center image */}
            <div className="absolute top-24 left-20 md:left-32 w-48 md:w-64 h-56 md:h-72 rounded-xl overflow-hidden image-shadow z-15 border-4 border-white">
              <Image src="/floral-arrangement-event-design.jpg?height=288&width=256" alt="Table decor" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
