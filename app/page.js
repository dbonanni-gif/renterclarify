import Link from "next/link";
import LeaseForm from "./components/LeaseForm";

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Paste a Clause",
    description:
      "Copy any paragraph from your lease — liability, pet policy, maintenance, early termination — and paste it in.",
  },
  {
    step: "2",
    title: "We Analyze It",
    description:
      "RenterClarify breaks down the legal language and flags anything that could be risky or unusual for you.",
  },
  {
    step: "3",
    title: "Understand & Decide",
    description:
      "Get a plain-English summary so you can negotiate, ask questions, or sign with confidence.",
  },
];

const FEATURES = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Plain-English Summaries",
    description: "No law degree required. Every explanation is written so anyone can understand it.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Red Flag Detection",
    description: "Automatically highlights clauses that are one-sided, unusual, or potentially harmful.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.628 5.373 12 12 12s12-5.372 12-12c0-2.09-.534-4.054-1.474-5.765L15 9.75" />
      </svg>
    ),
    title: "Instant Results",
    description: "No sign-up, no waiting. Paste your clause and get your explanation in seconds.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navbar */}
      <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-indigo-600">
            Renter<span className="text-slate-800">Clarify</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-500 font-medium">
            <a href="#how-it-works" className="hover:text-slate-800 transition-colors">How it works</a>
            <a href="#features" className="hover:text-slate-800 transition-colors">Features</a>
            <Link href="/guide" className="hover:text-slate-800 transition-colors">Clause Guide</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white pt-20 pb-2 px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block mb-4 rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-700 uppercase tracking-wide">
            Free for renters
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5">
            Understand Your Lease<br />
            <span className="text-indigo-600">in Plain English</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Confused by legalese in your rental agreement? Paste any clause below
            and get a clear, honest explanation — no lawyer needed.
          </p>
        </div>

        {/* Form card */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
            Paste a lease clause to get started
          </p>
          <LeaseForm />
        </div>

        {/* Decorative blobs */}
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-indigo-100 opacity-40 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-indigo-200 opacity-30 blur-3xl" />
      </section>

      {/* Features */}
      <section id="features" className="pt-6 pb-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-3">
            Built for renters, not lawyers
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            Every feature is designed to give you the confidence to sign — or push back.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col items-start gap-3 p-6 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-slate-800">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-3">
            How it works
          </h2>
          <p className="text-slate-400 text-center mb-14 max-w-xl mx-auto">
            Three steps from legalese to clarity.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-bold text-lg shadow-md">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-800 text-lg">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-indigo-600">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to decode your lease?
          </h2>
          <p className="text-indigo-200 mb-8">
            Join thousands of renters who signed with confidence.
          </p>
          <a
            href="#"
            className="inline-block rounded-xl bg-white text-indigo-700 font-semibold px-8 py-3 shadow-lg hover:bg-indigo-50 transition-colors"
          >
            Try it free — no sign-up needed
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <span className="font-bold text-white">
            Renter<span className="text-indigo-400">Clarify</span>
          </span>
          <p className="text-center text-slate-500">
            RenterClarify provides educational explanations only — not legal advice.
          </p>
          <span>&copy; {new Date().getFullYear()} RenterClarify</span>
        </div>
      </footer>
    </div>
  );
}
