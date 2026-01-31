import { Tag } from 'lucide-react';

interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  metric: string;
}

const projects: Project[] = [
  {
    image: '/project1.jpg',
    title: 'Sentiment Analysis Dataset',
    description: 'Annotated 25,000+ customer reviews with sentiment labels for emotion detection models.',
    tags: ['Text Annotation', 'Labelbox'],
    metric: '98.5% accuracy',
  },
  {
    image: '/project2.jpg',
    title: 'Named Entity Recognition',
    description: 'Labeled 15,000+ news articles with entity tags for NER model training.',
    tags: ['NER Tagging', 'QA'],
    metric: '97% agreement',
  },
  {
    image: '/project3.jpg',
    title: 'Ticket Classification',
    description: 'Created dataset of 10,000+ support tickets across 12 categories.',
    tags: ['Classification', 'Data Collection'],
    metric: '96% accuracy',
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-2">
            Recent Projects
          </h2>
          <p className="text-slate-600">
            Sample work from my NLP data specialization
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  {project.description}
                </p>

                {/* Metric */}
                <div className="text-xs font-medium text-primary mb-3">
                  {project.metric}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 rounded text-xs text-slate-600"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
