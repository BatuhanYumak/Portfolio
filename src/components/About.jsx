import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, isVisible] = useInView()

  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-2xl font-bold text-navy mb-3">About</h2>
          <div className="w-10 h-[3px] bg-navy mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12">
            {/* Left: bio */}
            <div className="space-y-5">
              <p className="text-[#6B7280] leading-relaxed">
                I am a software engineering student at the Amsterdam University of Applied Sciences,
                with a solid foundation built at Bit Academy where I completed my MBO in software development.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                I have worked in real production environments during two internships. At WonderBit I built
                a complete RESTful API in Python and Django and wrote frontend components in TypeScript.
                At Taxameter Centrale I automated a manual quotation and contract process using AFAS Profit,
                reducing manual processing time by a projected 80%.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                I am most comfortable in fullstack environments where I can contribute across the entire
                application. My current focus is deepening my React and system design skills.
              </p>
            </div>

            {/* Right: info box */}
            <div className="border border-[#E5E7EB] p-6 self-start space-y-5">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#6B7280] mb-1">Location</p>
                <p className="text-sm text-navy">Amsterdam, Netherlands</p>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#6B7280] mb-1">Email</p>
                <a
                  href="mailto:b.yumak70@gmail.com"
                  className="text-sm text-navy hover:underline"
                >
                  b.yumak70@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#6B7280] mb-1">Languages</p>
                <p className="text-sm text-navy">Dutch, Turkish, English</p>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#6B7280] mb-1">Available for</p>
                <p className="text-sm text-navy">Junior fullstack roles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
