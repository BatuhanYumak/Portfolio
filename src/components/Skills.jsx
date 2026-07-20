import { useInView } from '../hooks/useInView'

const SKILL_COLUMNS = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frameworks & Tools',
    items: ['Django Rest Framework', 'React', 'Docker', 'Git', 'CLI', 'AFAS Profit'],
  },
  {
    category: 'Methodology',
    items: ['Scrum / Agile', 'Sprint planning', 'Code review', 'Stakeholder interviews'],
  },
]

export default function Skills() {
  const [ref, isVisible] = useInView()

  return (
    <section id="skills" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-2xl font-bold text-navy mb-3">Skills</h2>
          <div className="w-10 h-[3px] bg-navy mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {SKILL_COLUMNS.map(({ category, items }) => (
              <div key={category}>
                <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-navy mb-4">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span
                      key={item}
                      className="px-4 py-2 text-[14px] font-medium text-navy border border-[#E5E7EB] rounded-full bg-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
