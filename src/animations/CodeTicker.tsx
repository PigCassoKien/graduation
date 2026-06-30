// Using automatic JSX runtime

const SAMPLE_LINES = [
  "import sys, os",
  "def deploy():",
  "  run_tests()",
  "  build_artifact()",
  "  deploy_to_prod()",
  "echo 'Graduation 2026'",
  "ssh user@uet.edu.vn",
  "// TODO: celebrate",
  "console.log('congrats')",
]

export function CodeTicker() {
  return (
    <div className="code-ticker" aria-hidden>
      <div className="code-ticker__col">
        {Array.from({ length: 30 }).map((_, i) => (
          <pre key={i} className="code-line">{SAMPLE_LINES[i % SAMPLE_LINES.length]}</pre>
        ))}
      </div>
      <div className="code-ticker__col">
        {Array.from({ length: 30 }).map((_, i) => (
          <pre key={i} className="code-line">{SAMPLE_LINES[(i + 3) % SAMPLE_LINES.length]}</pre>
        ))}
      </div>
      <div className="code-ticker__col">
        {Array.from({ length: 30 }).map((_, i) => (
          <pre key={i} className="code-line">{SAMPLE_LINES[(i + 6) % SAMPLE_LINES.length]}</pre>
        ))}
      </div>
    </div>
  )
}

export default CodeTicker
