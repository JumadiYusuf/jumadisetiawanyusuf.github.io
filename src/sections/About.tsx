import { Database, Tags, CheckCircle, Code, FileSpreadsheet } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="w-full py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* About Text */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
            I'm a freelance AI Data Specialist with 1+ year of experience helping teams 
            build high-quality datasets for machine learning models. I specialize in 
            NLP data projects using tools like Labelbox.
          </p>
        </div>

        {/* Services */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Database className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Data Collection</h3>
            <p className="text-sm text-slate-500">Gathering & organizing raw data</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Tags className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Data Annotation</h3>
            <p className="text-sm text-slate-500">Precise labeling with Labelbox</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Quality Assurance</h3>
            <p className="text-sm text-slate-500">Validation & verification</p>
          </div>
        </div>

        {/* Tools */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h3 className="font-semibold text-slate-900 mb-4 text-center">Tools I Use</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Labelbox', 'CVAT', 'Python', 'Excel', 'Jupyter'].map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm text-slate-700"
              >
                {tool === 'Labelbox' && <Code className="w-4 h-4" />}
                {tool === 'CVAT' && <Code className="w-4 h-4" />}
                {tool === 'Python' && <Code className="w-4 h-4" />}
                {tool === 'Excel' && <FileSpreadsheet className="w-4 h-4" />}
                {tool === 'Jupyter' && <Code className="w-4 h-4" />}
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
