/**
 * HCM Maker Growth — Workshop Ledger design reminder
 * The assessment behaves like a considered discovery conversation: short, legible sections and
 * encouraging language make the first conversion step feel useful before it feels commercial.
 */

import { ArrowLeft, ArrowRight, Check, CircleHelp, Sparkles } from "lucide-react";
import { Link, useLocation } from "wouter";
import { BrandMark } from "@/components/BrandMark";
import { calculateScore, defaultBusinessCheck } from "@/lib/demo-workspace";
import type { BusinessCheck as BusinessCheckType } from "@/lib/hcm-types";
import { useHcmWorkspace } from "@/hooks/useHcmWorkspace";

const steps = [
  { title: "Your work", description: "A little about what you make and who it is for.", fields: ["businessName", "makerName", "craftCategory", "location", "products", "idealCustomer"] as const },
  { title: "How you sell", description: "Where the right people currently find your work.", fields: ["website", "socialChannels", "sellingChannels", "discovery"] as const },
  { title: "Your next opportunity", description: "What would feel like useful progress over the next few months?", fields: ["biggestProblem", "collectsDetails", "followsUp", "goal90"] as const },
];

const fieldCopy: Record<keyof BusinessCheckType, { label: string; placeholder?: string; choices?: string[] }> = {
  businessName: { label: "Business name", placeholder: "For example, Oak & Grain Furniture" }, makerName: { label: "Your name", placeholder: "The person behind the work" }, craftCategory: { label: "Your craft", placeholder: "For example, furniture making" }, location: { label: "Where are you based?", placeholder: "Town or region is enough" }, website: { label: "Website", placeholder: "Optional, but helpful" }, socialChannels: { label: "Where do you share your work?", placeholder: "For example, Instagram, Pinterest" }, sellingChannels: { label: "Where do you currently sell?", placeholder: "For example, website, markets, commissions" }, products: { label: "What do you make, offer or teach?", placeholder: "A few words is plenty" }, idealCustomer: { label: "Who is the work especially right for?", placeholder: "Describe the people you most enjoy working with" }, biggestProblem: { label: "What feels like the biggest business problem right now?", placeholder: "For example, more enquiries for commissions" }, discovery: { label: "How do customers currently find you?", placeholder: "For example, word of mouth and Instagram" }, collectsDetails: { label: "Do you collect customer details?", choices: ["Yes", "Sometimes", "Not yet"] }, followsUp: { label: "Do you follow up with previous customers?", choices: ["Regularly", "Sometimes", "Not regularly"] }, goal90: { label: "What is your main goal for the next 90 days?", placeholder: "For example, fill two workshop dates" },
};

export default function BusinessCheck() {
  const [, navigate] = useLocation();
  const { workspace, updateCheck } = useHcmWorkspace();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<BusinessCheckType>(workspace.check ?? defaultBusinessCheck);
  const current = steps[step];
  const answered = current.fields.filter((field) => form[field]?.trim()).length;
  const isLast = step === steps.length - 1;
  const continueCheck = () => {
    if (!isLast) return setStep(step + 1);
    updateCheck(form, calculateScore(form));
    navigate("/assessment");
  };
  const update = (field: keyof BusinessCheckType, value: string) => setForm({ ...form, [field]: value });
  return (
    <div className="assessment-shell">
      <header className="assessment-nav"><BrandMark /><Link href="/" className="back-link"><ArrowLeft size={16} /> Back to HCM</Link></header>
      <main className="assessment-main"><aside className="assessment-aside"><p className="chapter-label"><span /> FREE BUSINESS CHECK</p><h1>A clearer view of what could make a difference next.</h1><p>This is a practical starting point. Tell us a little about your business and we will show you where to focus.</p><div className="step-list">{steps.map((item, index) => <div className={index === step ? "step-item active" : index < step ? "step-item done" : "step-item"} key={item.title}><span>{index < step ? <Check size={15} /> : `0${index + 1}`}</span><div><b>{item.title}</b><small>{index === step ? "You are here" : index < step ? "Complete" : "Coming up"}</small></div></div>)}</div><div className="aside-note"><CircleHelp size={17} /> You can change any of this later. This gives your first plan a useful starting point.</div></aside>
        <section className="question-card"><div className="worksheet-corner" aria-hidden="true"><i /><i /><i /></div><div className="question-progress"><span>Question set {step + 1} of {steps.length}</span><div><i style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div></div><span className="eyebrow">{current.title}</span><h2>{current.description}</h2><p className="worksheet-caption"><span>MAKER'S LEDGER</span> Begin with the details that make this business distinct.</p><div className="questions worksheet-fields">{current.fields.map((field) => { const meta = fieldCopy[field]; return <label className="field-group" key={field}><span>{meta.label}</span>{meta.choices ? <div className="choice-row">{meta.choices.map((choice) => <button key={choice} type="button" className={form[field] === choice ? "choice-button selected" : "choice-button"} onClick={() => update(field, choice)}>{form[field] === choice && <Check size={14} />}{choice}</button>)}</div> : <input value={form[field]} placeholder={meta.placeholder} onChange={(event) => update(field, event.target.value)} />}</label>; })}</div><div className="check-footer"><span>{answered} of {current.fields.length} answered</span><div>{step > 0 && <button className="quiet-button" onClick={() => setStep(step - 1)}>Back</button>}<button className="primary-button" onClick={continueCheck}>{isLast ? <>See my assessment <Sparkles size={17} /></> : <>Continue <ArrowRight size={17} /></>}</button></div></div></section>
      </main>
    </div>
  );
}

import { useState } from "react";
