/**
 * HCM Maker Growth — Workshop Ledger design reminder
 * The score ring translates a complex health score into a calm, readily scannable growth signal.
 */

export function ScoreRing({ score, size = "regular" }: { score: number; size?: "small" | "regular" | "large" }) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  return (
    <div className={`score-ring score-ring-${size}`} aria-label={`Growth score: ${score} out of 100`}>
      <svg viewBox="0 0 112 112" role="img">
        <circle className="score-ring-base" cx="56" cy="56" r={radius} />
        <circle className="score-ring-value" cx="56" cy="56" r={radius} strokeDasharray={circumference} strokeDashoffset={offset} />
      </svg>
      <span><b>{score}</b><small>/100</small></span>
    </div>
  );
}
