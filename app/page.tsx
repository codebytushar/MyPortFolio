import React from 'react';

export default function Home() {
  const skills = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 
    'Express.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Azure', 
    'Cyber Security', 'Cloud Computing'
  ];

  return (
    <main className="min-h-screen px-6 py-12 md:py-20 max-w-5xl mx-auto font-sans">
      {/* Header Section */}
      <header className="mb-16 border-b border-gray-200 pb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">XYZ</h1>
        <h2 className="text-xl md:text-2xl text-slate-600 mt-4 font-medium">Assistant Professor | Full-Stack Developer | Cloud & Cyber Security Expert</h2>
        <p className="mt-6 text-lg text-slate-700 max-w-3xl leading-relaxed">
          M.Tech in Computer Science and Engineering with over 21 years of professional teaching experience. 
          Specializing in modern full-stack web development, cloud-native architectures, and database management. 
          Currently serving at Sarvajanik College of Engineering & Technology.
        </p>
      </header>

      {/* Skills Section */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          Technical Expertise
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map(tech => (
            <span key={tech} className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition hover:bg-indigo-100 cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
          Deployed Platforms & Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group border border-gray-200 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition">
            <h4 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition">Academic Platform</h4>
            <p className="text-slate-600 mt-2">Institutional academic platform hosted at <strong>ihundred.scet.ac.in</strong>.</p>
          </div>
          <div className="group border border-gray-200 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition">
            <h4 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition">IntraSuite</h4>
            <p className="text-slate-600 mt-2">Custom digital management system hosted at <strong>intrasuite.triple5.in</strong>.</p>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
          Recent Publications & Lectures
        </h3>
        <div className="space-y-6">
          <div className="border-l-4 border-indigo-500 pl-5 py-2">
            <h4 className="font-bold text-lg text-slate-800">The Standardization of Agency: A Technical Analysis of the Model Context Protocol (MCP)</h4>
            <p className="text-slate-600 mt-1">Architecture and Enterprise Use Cases (Paper ID 26).</p>
          </div>
          <div className="border-l-4 border-indigo-500 pl-5 py-2">
            <h4 className="font-bold text-lg text-slate-800">Introduction to DAX Syntax & Data Types</h4>
            <p className="text-slate-600 mt-1">Expert guest lecture delivered at the S. R. Luthra Institute of Management.</p>
          </div>
        </div>
      </section>
      
      <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Tushar R. Gohil. All rights reserved.
      </footer>
    </main>
  );
}