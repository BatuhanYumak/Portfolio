import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import profilePhoto from '../assets/profile.png'

function Lightbox({ onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={profilePhoto}
          alt="Batuhan Yumak"
          className="max-w-[90vw] max-h-[90vh] rounded-lg object-contain shadow-2xl"
        />
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#6B7280] hover:text-navy transition-colors shadow-md text-lg leading-none"
        >
          ×
        </button>
      </div>
    </div>
  )
}

function ProfilePhoto() {
  const [error, setError] = useState(false)
  const [open, setOpen] = useState(false)

  if (error) {
    return (
      <div className="w-[280px] h-[280px] rounded-lg border border-[#E5E7EB] bg-[#F3F4F6] flex items-center justify-center flex-shrink-0">
        <span className="text-sm text-[#6B7280]">Photo</span>
      </div>
    )
  }

  return (
    <>
      <img
        src={profilePhoto}
        alt="Batuhan Yumak"
        onError={() => setError(true)}
        onClick={() => setOpen(true)}
        className="w-[280px] h-[280px] rounded-lg border border-[#E5E7EB] object-cover flex-shrink-0 cursor-zoom-in transition-opacity hover:opacity-90"
      />
      {open && <Lightbox onClose={() => setOpen(false)} />}
    </>
  )
}

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

            {/* Right: photo + info box */}
            <div className="flex flex-col gap-6 self-start">
              <ProfilePhoto />

              <div className="border border-[#E5E7EB] p-6 space-y-5">
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
      </div>
    </section>
  )
}
