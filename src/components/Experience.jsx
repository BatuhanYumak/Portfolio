import { useInView } from '../hooks/useInView'

const EXPERIENCE = [
  {
    company: 'Taxameter Centrale',
    role: 'Software Engineer (Intern)',
    period: 'February 2026 – June 2026',
    bullets: [
      'Automated the manual quotation and contract process by implementing AFAS configuration, achieving a projected 80% reduction in manual processing time.',
      'Mapped current operational processes and gathered requirements from stakeholders through structured interviews, comparing three integration alternatives using a weighted decision matrix.',
    ],
  },
  {
    company: 'OGD ICT Diensten',
    role: 'IT Servicedesk Specialist',
    period: 'February 2025 – January 2026',
    bullets: [
      'Deployed across multiple client environments as part of OGD\'s Talent Team, providing short-term and long-term IT support.',
      'Adapted consistently to diverse organizational environments while maintaining service quality.',
    ],
  },
  {
    company: 'WonderBit',
    role: 'Software Developer (Intern)',
    period: 'September 2023 – May 2024',
    bullets: [
      'Built a complete RESTful API using Python and Django Rest Framework, and wrote frontend components in TypeScript.',
      'Containerized the application with Docker, worked in a Scrum team with biweekly sprints, and participated in code reviews using Git.',
    ],
  },
]

const EDUCATION = [
  {
    institution: 'Amsterdam University of Applied Sciences',
    degree: 'HBO-ICT Software Engineering',
    period: 'September 2024 – Present',
    note: 'Propaedeutic Certificate awarded July 2025',
  },
  {
    institution: 'Bit Academy',
    degree: 'MBO 4, Software Development',
    period: 'September 2021 – July 2024',
    note: null,
  },
]

function Timeline({ items, keyField }) {
  return (
    <div className="relative pl-7">
      {/* Vertical line */}
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[#E5E7EB]" />

      {items.map((item, i) => (
        <div key={i} className="relative mb-10 last:mb-0">
          {/* Dot */}
          <div className="absolute -left-7 top-1 w-3 h-3 rounded-full border-2 border-[#0D1B2A] bg-white" />

          <div>
            <p className="font-bold text-[#0D1B2A]">{item[keyField]}</p>
            <p className="text-[#0D1B2A] text-sm">{item.degree ?? item.role}</p>
            <p className="text-[14px] text-[#6B7280] mt-0.5 mb-3">{item.period}</p>

            {item.note && (
              <p className="text-[13px] text-[#6B7280] italic mb-2">{item.note}</p>
            )}

            {item.bullets && (
              <ul className="space-y-2">
                {item.bullets.map((b, j) => (
                  <li key={j} className="text-[14px] text-[#6B7280] flex gap-2">
                    <span className="text-[#0D1B2A] shrink-0 mt-px">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Experience() {
  const [expRef, expVisible] = useInView()
  const [eduRef, eduVisible] = useInView()

  return (
    <section id="experience" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Experience */}
        <div
          ref={expRef}
          className={`transition duration-700 ease-out ${
            expVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-3">Experience</h2>
          <div className="w-10 h-[3px] bg-[#0D1B2A] mb-12" />
          <Timeline items={EXPERIENCE} keyField="company" />
        </div>

        {/* Education */}
        <div
          ref={eduRef}
          className={`mt-20 transition duration-700 ease-out ${
            eduVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-3">Education</h2>
          <div className="w-10 h-[3px] bg-[#0D1B2A] mb-12" />
          <Timeline items={EDUCATION} keyField="institution" />
        </div>
      </div>
    </section>
  )
}
