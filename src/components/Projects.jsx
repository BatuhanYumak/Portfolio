import { useInView } from '../hooks/useInView'

const PROJECTS = [
  {
    name: 'ProgressTracker',
    description: 'Full-stack mobile app for logging gym sessions, visualising strength trends, and tracking estimated 1-rep max over time.',
    tech: ['React Native', 'TypeScript', 'Django REST Framework', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/BatuhanYumak/ProgressTracker',
  },
  {
    name: 'StemSlim',
    description: 'Dutch election results platform that processes official EML-XML data and presents results at national, constituency, and municipality level.',
    tech: ['Java', 'Vue', 'TypeScript', 'Docker'],
    label: 'School project',
    link: 'https://github.com/Zoiye1/election-app',
  },
  {
    name: 'Text Spammer',
    description: 'Python automation script that lets users configure and send repeated text messages - built to explore the basics of Python and automation.',
    tech: ['Python'],
    link: 'https://github.com/BatuhanYumak/Text-Spammer',
  },
]

function ProjectCard({ project }) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 flex flex-col gap-4 hover:border-navy transition-colors duration-200"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-[18px] font-bold text-navy">{project.name}</h3>
          {project.label && (
            <span className="px-2 py-0.5 text-[11px] font-medium text-[#6B7280] border border-[#E5E7EB] rounded-full">
              {project.label}
            </span>
          )}
        </div>
        <p className="text-[14px] text-[#6B7280]">{project.description}</p>
      </div>

      {project.tech.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="px-4 py-1.5 text-[13px] font-medium text-navy border border-[#E5E7EB] rounded-full bg-white">
              {t}
            </span>
          ))}
        </div>
      )}

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-[14px] font-medium text-navy no-underline hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  )
}

export default function Projects() {
  const [ref, isVisible] = useInView()

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-2xl font-bold text-navy mb-3">Projects</h2>
          <div className="w-10 h-[3px] bg-navy mb-4" />
          <p className="text-sm text-[#6B7280] mb-12">
            More projects are being added. See the full list on GitHub.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {PROJECTS.map(p => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="https://github.com/BatuhanYumak"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-navy text-navy text-sm font-medium hover:bg-navy hover:text-white transition-colors"
            >
              View all on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
