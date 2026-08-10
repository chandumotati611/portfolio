import Achievements from "@/components/Achievements";
import BackgroundMesh from "@/components/BackgroundMesh";
import Contact from "@/components/Contact";
import Leadership from "@/components/Leadership";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div
      id="top"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Mesh */}
      <BackgroundMesh />

      {/* Floating Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main
        className="
          relative z-10
          mx-auto flex max-w-5xl flex-col
          items-center justify-center
          px-4
          pb-20
          pt-55
          text-center
        "
      >

      <span className="mb-6 block text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
        HI! THIS IS{" "}
        <span className="bg-yellow-200 px-1 text-sm font-extrabold tracking-normal text-slate-950">
          DEVI CHANDU
        </span>
      </span>

        <h1 className="font-serif text-5xl font-light leading-[1.1] tracking-tight text-slate-900 md:text-7xl">
          Building <br />
          <span className="font-light italic">Better</span> Software.
        </h1>

        <h2 className="font-sans mt-8 max-w-xl text-xl font-light tracking-wide text-slate-700 md:text-2xl">
          Software Engineer focused on AI, backend systems, and scalable
          software.
        </h2>

        {/* Hero Actions */}
        <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row">
          <a
            href="#projects"
            className="
              rounded-full
              bg-linear-to-b from-slate-800 to-slate-950
              px-8 py-3.5
              text-xs font-bold tracking-widest text-white
              shadow-xl shadow-slate-950/25
              ring-1 ring-white/20
              transition-all
              hover:scale-105
              active:scale-95
            "
          >
            SEE MY WORK
          </a>

          <a
            href="#contact"
            className="
              rounded-full
              bg-linear-to-b from-white via-slate-100 to-slate-200
              px-8 py-3.5
              text-xs font-bold tracking-widest text-slate-800
              shadow-md
              ring-1 ring-black/10
              transition-all
              hover:scale-105
              active:scale-95
            "
          >
            CONTACT ME
          </a>
        </div>
      </main>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-28"
      >
        <Skills />
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="scroll-mt-28"
      >
        <Timeline />
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-28"
      >
        <Projects />
      </section>

      {/* Achievements */}
      <section
        id="achievements"
        className="scroll-mt-28"
      >
        <Achievements />
      </section>

      {/* Leadership */}
      <section
        id="leadership"
        className="scroll-mt-28"
      >
        <Leadership />
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-28"
      >
        <Contact />
      </section>
    </div>
  );
}
