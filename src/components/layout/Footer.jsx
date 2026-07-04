import Link from "next/link";
import {
  HiOutlineEnvelope,
  HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                AK
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">Anil Kumar</h3>

                <p className="text-sm text-slate-500">
                  Senior Backend Engineer
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-7 text-slate-600">
              Building scalable backend systems with Node.js, AWS, Microservices
              and Cloud Native Architecture.
            </p>
          </div>

          {/* Right */}

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <div className="flex gap-5">
              <Link
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                className="text-slate-500 transition hover:text-blue-600"
              >
                <FaGithub size={22} />
              </Link>

              <Link
                href="https://linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                className="text-slate-500 transition hover:text-blue-600"
              >
                <FaLinkedin size={22} />
              </Link>

              <Link
                href="mailto:YOUR_EMAIL@gmail.com"
                className="text-slate-500 transition hover:text-blue-600"
              >
                <HiOutlineEnvelope size={24} />
              </Link>
            </div>

            <Link
              href="/resume/Anil_Kumar_Senior_Backend_Engineer_Resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Resume
              <HiOutlineArrowTopRightOnSquare />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-slate-200 pt-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
          <p>© {year} Anil Kumar. All rights reserved.</p>

          <p>Built with Next.js • Tailwind CSS • Vercel</p>
        </div>
      </div>
    </footer>
  );
}
