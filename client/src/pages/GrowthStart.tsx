/**
 * HCM Maker Growth — Workshop Ledger design reminder
 * The 30-day start is a calm commitment step: it makes future value visible, names the first
 * quick win, and leads directly into a furnished working dashboard rather than a blank shell.
 */

import { ArrowRight, CalendarDays, Check, ChevronRight, CircleCheck, Leaf } from "lucide-react";
import { Link } from "wouter";
import { BrandMark } from "@/components/BrandMark";
import { useHcmWorkspace } from "@/hooks/useHcmWorkspace";

export default function GrowthStart() {
  const { workspace } = useHcmWorkspace();
  return <div className="growth-start-page"><header className="simple-nav"><BrandMark /><span>YOUR 30-DAY HCM GROWTH START</span></header><main><section className="start-hero"><div><p className="chapter-label"><span /> YOUR PERSONAL STARTING POINT</p><h1>{workspace.check.makerName.split(" ")[0]}, here is how we would begin.</h1><p>We will not ask you to do everything at once. The next 30 days are about one useful aim: <b>{workspace.check.goal90 || "creating more meaningful customer enquiries"}.</b></p></div><div className="start-dates"><CalendarDays size={24} /><span>YOUR FIRST MONTH</span><b>September → October</b><small>A simple plan, shaped around the work you already do.</small></div></section><section className="start-plan"><div className="plan-intro"><span className="eyebrow">WHAT YOUR FIRST 30 DAYS CONTAIN</span><h2>Small, connected pieces of practical work.</h2><p>Every action has a reason. Every draft is yours to change. Every result helps make next month’s plan more useful.</p></div><div className="start-plan-list"><article><span><Check size={17} /></span><div><b>Understand your starting point</b><p>Your score gives us a way to see what improves, not a target to chase for its own sake.</p></div><ChevronRight size={20} /></article><article><span><Check size={17} /></span><div><b>Work through five focused actions</b><p>Start with a strong product, a clearer enquiry route and the customers who already know you.</p></div><ChevronRight size={20} /></article><article><span><Check size={17} /></span><div><b>Make a result visible</b><p>Record meaningful signals: enquiries, new customers, repeat customers and the work you completed.</p></div><ChevronRight size={20} /></article><article><span><Check size={17} /></span><div><b>Finish with your first monthly review</b><p>See what worked, what still needs attention, and where the next opportunity lives.</p></div><ChevronRight size={20} /></article></div></section><section className="ready-card"><div><Leaf size={26} /><h2>Ready to begin the work that will matter this month?</h2><p>Your September plan is already prepared from the information you shared.</p></div><Link href="/app" className="primary-button large-button">Open my growth plan <ArrowRight size={18} /></Link></section></main><footer><CircleCheck size={18} /> You remain in control of every action and every customer message.</footer></div>;
}
