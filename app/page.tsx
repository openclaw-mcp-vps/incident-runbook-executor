export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          DevOps &amp; SRE Tooling
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Execute Incident Response<br />
          <span className="text-[#58a6ff]">Steps Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Turn your incident runbooks into guided, executable workflows. Automate checks, enforce approval gates, and resolve incidents faster — without missing a step.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Executing Runbooks — $99/mo
        </a>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          {[
            ["Playbook Engine", "Convert any runbook into a step-by-step workflow"],
            ["Approval Gates", "Require human sign-off before critical actions"],
            ["Auto Checks", "Trigger monitoring integrations automatically"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-left">
              <div className="text-[#58a6ff] font-semibold mb-1">{title}</div>
              <div className="text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Team</div>
          <div className="text-5xl font-bold text-white mb-1">$99</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, unlimited runbooks</div>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              "Unlimited playbooks & workflows",
              "Automated step execution",
              "Manual approval gates",
              "Monitoring tool integrations",
              "Audit log & history",
              "Priority support"
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "What is an incident runbook executor?",
              "It's a tool that takes your written incident response playbooks and turns them into interactive, trackable workflows — so your team follows every step, every time, without skipping critical actions under pressure."
            ],
            [
              "Can I integrate with my existing monitoring tools?",
              "Yes. The workflow engine supports webhook-based integrations with tools like PagerDuty, Datadog, and Grafana, allowing automated checks to run as part of your runbook steps."
            ],
            [
              "What happens if a step requires human approval?",
              "Approval gates pause the workflow and notify the designated approver. The runbook only proceeds once the gate is explicitly approved, ensuring accountability for critical actions."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs pt-8 border-t border-[#21262d]">
        &copy; {new Date().getFullYear()} Incident Runbook Executor. All rights reserved.
      </footer>
    </main>
  )
}
