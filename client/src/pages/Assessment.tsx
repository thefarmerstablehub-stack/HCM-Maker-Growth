/**
 * HCM Maker Growth — Workshop Ledger design reminder
 * Assessment feedback presents a clear priority order and a tangible invitation into the first
 * 30-day plan instead of abstract analytics or overstated promises.
 */

import { ArrowRight, CheckCircle2, CircleCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { BrandMark } from "@/components/BrandMark";
import { ScoreRing } from "@/components/ScoreRing";
import { useHcmWorkspace } from "@/hooks/useHcmWorkspace";

export default function Assessment() {
  const { workspace } = useHcmWorkspace();
  const opportunities = [
    { name: "Repeat customers", value: workspace.score.repeat, description: "There is an opportunity to reconnect with people who already know the value of your work." },
    { name: "Customer follow-up", value: workspace.score.followUp, description: "A little more consistent contact could turn past purchases into warmer future conversations." },
    { name: "Enquiries", value: workspace.score.enquiries, description: "Your work is attracting interest. The next step needs to feel easier and clearer for customers." },
  ].sort((a, b) => a.value - b.value);
  return <div className="results-page"><header className="results-nav"><BrandMark /><span>FREE BUSINESS CHECK · COMPLETE</span></header><main><section className="assessment-result-hero"><p className="chapter-label"><span /> {workspace.check.businessName.toUpperCase()}</p><h1>You have good work to build from.</h1><p>Here is the practical picture of your business right now — and where it would be worth concentrating first.</p><div className="score-result"><ScoreRing score={workspace.score.overall} size="large" /><div><span className="eyebrow">OVERALL GROWTH SCORE</span><h2>{workspace.score.overall}<small>/100</small></h2><p>A balanced score with a clear opportunity to turn your existing relationships into more repeat business and better enquiries.</p></div></div></section><section className="opportunities-section"><div className="opportunities-title"><span className="eyebrow">YOUR THREE BIGGEST OPPORTUNITIES</span><h2>Start with the work that moves the business forward.</h2></div><div className="opportunities-list">{opportunities.map((item, index) => <article key={item.name}><span>0{index + 1}</span><div><h3>{item.name} <b>{item.value}%</b></h3><p>{item.description}</p></div><div className="opportunity-bar"><i style={{ width: `${item.value}%` }} /></div></article>)}</div></section><section className="growth-start-card"><div><p className="chapter-label light"><span /> YOUR NEXT 30 DAYS</p><h2>HCM can help you work through these opportunities.</h2><p>The first 30 days are designed to create a useful result, not overwhelm you with another dashboard. Your plan is ready to start with the right product, customer relationships and next steps.</p><div className="growth-start-points"><span><CheckCircle2 size={18} /> A practical plan for your business</span><span><CheckCircle2 size={18} /> Five focused actions</span><span><CheckCircle2 size={18} /> Results you can see</span></div><Link href="/growth-start" className="secondary-button">Start my 30-day growth plan <ArrowRight size={18} /></Link></div><div className="growth-start-note"><Sparkles size={28} /><b>Your first plan will be built around <em>{workspace.check.goal90 || "your next opportunity"}.</em></b><span>This is where useful momentum begins.</span></div></section></main><footer className="results-footer"><Link href="/business-check"><CircleCheck size={17} /> Edit my answers</Link><span>HCM MAKER GROWTH</span></footer></div>;
}
