import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Runbook Executor — Execute incident response steps automatically',
  description: 'Converts incident response playbooks into executable workflows with automated checks and manual approval gates for DevOps and SRE teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c447cb75-f4fd-404a-8242-63ba52774c02"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
