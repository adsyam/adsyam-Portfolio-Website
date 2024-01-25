import resume from "../assets/Resume.pdf"

export default function CV() {
  return (
  <section className="flex justify-center items-center h-screen gap-4 flex-col">
    <h1>Last updated: January 2023</h1>
    <a href={resume} download={resume} className="border border-purple-300/50 px-1 py-2 rounded-md hover:scale-105 duration-300">
      Download Curriculum Vitae
    </a>
  </section>
  )
}