export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6 pt-16 w-full">
        <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-navy mb-5">
          Fullstack Developer
        </p>

        <h1 className="font-bold text-navy leading-none mb-6 text-[40px] md:text-[72px]">
          Batuhan Yumak
        </h1>

        <p className="text-[#6B7280] text-lg mb-10 max-w-lg">
          I build complete web applications, from database to interface.
        </p>

        <div className="flex items-center gap-4 flex-wrap mb-16">
          <a
            href="#projects"
            className="px-6 py-3 bg-navy text-white text-sm font-medium hover:opacity-80 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="https://github.com/BatuhanYumak"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-navy text-navy text-sm font-medium hover:bg-navy hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Stats row */}
        <div className="flex items-center divide-x divide-[#E5E7EB]">
          <span className="text-sm font-medium text-navy pr-6 whitespace-nowrap">2 internships</span>
          <span className="text-sm font-medium text-navy px-6 whitespace-nowrap">MBO + HBO</span>
          <span className="text-sm font-medium text-navy pl-6 whitespace-nowrap">Amsterdam</span>
        </div>
      </div>
    </section>
  )
}
