import React from 'react';
import Image from 'next/image';

export default function Home() {
  // Replace with your actual S3 URLs
 
  const S3_BUCKET_URL = "https://gtushar-cc-odd2026.s3.ap-south-1.amazonaws.com";

  const skills = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 
    'AWS S3', 'Cloud Computing', 'Cyber Security'
  ];

  return (
    <main className="min-h-screen px-6 py-12 md:py-20 max-w-5xl mx-auto font-sans">
      {/* Header & Profile Photo from S3 */}
      <header className="mb-16 border-b border-gray-200 pb-10 flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg">
          <Image 
            src={`${S3_BUCKET_URL}/profile.jpg`}
            alt="Profile Photo"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Your Name</h1>
          <h2 className="text-xl text-slate-600 mt-2 font-medium">Full-Stack Developer | Cloud & Security Enthusiast</h2>
          <p className="mt-4 text-slate-700 max-w-2xl leading-relaxed">
            Building modern web applications and leveraging AWS S3 for scalable asset management.
          </p>

          {/* Download Resume Link from S3 */}
          <div className="mt-6">
            <a 
              href={`${S3_BUCKET_URL}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              📄 Download Resume (S3)
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Expertise</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map(tech => (
            <span key={tech} className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-4 py-2 rounded-lg text-sm font-semibold">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-8 border-t border-gray-200 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </main>
  );
}
