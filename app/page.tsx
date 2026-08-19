import React from 'react';
import Image from 'next/image';
import { sql } from '@vercel/postgres';

export default async function Home() {
  // Fetch data directly from Vercel Postgres
  const { rows: projects } = await sql`
    SELECT id, title, description, s3_image_url, tech_stack 
    FROM projects 
    ORDER BY created_at DESC
  `;

  // Replace with your actual S3 URLs for the header
  const S3_BUCKET_URL = "https://gtushar-cc-odd2026.s3.ap-south-1.amazonaws.com";

  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto font-sans">
      
      {/* Header & Profile Photo from S3 */}
      <header className="mb-16 border-b border-gray-200 pb-10 flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg">
          <img src="https://uzyaflbndb2rjpmv.public.blob.vercel-storage.com/logo.png"/>
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Your Name</h1>
          <h2 className="text-xl text-slate-600 mt-2 font-medium">Full-Stack Developer | Cloud & Security Enthusiast</h2>
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

      <section className="mt-16">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-48 w-full bg-gray-100">
                <Image 
                  src={project.s3_image_url} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-bold text-slate-800">{project.title}</h4>
                <p className="text-slate-600 mt-2 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
