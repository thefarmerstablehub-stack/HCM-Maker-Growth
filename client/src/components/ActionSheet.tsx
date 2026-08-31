/**
 * HCM Maker Growth — Workshop Ledger design reminder
 * The action sheet keeps the why, practical task, and editable crafted copy together in one
 * focused work surface, reinforcing HCM as a helpful partner rather than an automated publisher.
 */

import { useEffect, useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import type { GrowthAction } from "@/lib/hcm-types";

export function ActionSheet({ action, onClose, onSave }: { action: GrowthAction; onClose: () => void; onSave: (action: GrowthAction) => void }) {
  const [draft, setDraft] = useState(action);
  const [openCopy, setOpenCopy] = useState("social");

  useEffect(() => setDraft(action), [action]);
  const save = () => { onSave(draft); onClose(); };
  const copyOptions = [
    { key: "social", label: "Social post", field: "social" as const },
    { key: "email", label: "Email", field: "email" as const },
    { key: "website", label: "Website wording", field: "websiteCopy" as const },
    { key: "story", label: "Customer story angle", field: "storyAngle" as const },
  ];

  return (
    <div className="sheet-backdrop" role="presentation" onMouseDown={onClose}>
      <aside className="action-sheet" role="dialog" aria-modal="true" aria-label={`${action.title} details`} onMouseDown={(event) => event.stopPropagation()}>
        <div className="sheet-topline"><span>Growth action</span><button className="icon-button" onClick={onClose} aria-label="Close action details"><X size={20} /></button></div>
        <div className="sheet-heading">
          <div><span className={`status-pill status-${draft.status}`}>{draft.status.replace("-", " ")}</span><h2>{draft.title}</h2></div>
          <div className="sheet-date"><b>Due</b><span>{draft.due}</span></div>
        </div>
        <section className="why-panel"><span className="eyebrow">Why HCM recommends this</span><p>{draft.why}</p></section>
        <section className="task-instructions"><span className="eyebrow">What to do</span><p>{draft.description}</p><div className="expected-result"><b>Expected result</b><span>{draft.expected}</span></div></section>
        <section className="copy-workbench">
          <div className="section-heading"><div><span className="eyebrow">Your working draft</span><h3>Make it sound like you</h3></div><span className="approval-note">Nothing publishes without your approval</span></div>
          <div className="copy-tabs">{copyOptions.map((option) => <button className={openCopy === option.key ? "copy-tab active" : "copy-tab"} onClick={() => setOpenCopy(option.key)} key={option.key}>{option.label}<ChevronDown size={14} /></button>)}</div>
          {copyOptions.map((option) => openCopy === option.key && <textarea key={option.key} value={draft[option.field]} onChange={(event) => setDraft({ ...draft, [option.field]: event.target.value })} aria-label={option.label} />)}
        </section>
        <div className="sheet-actions"><button className="quiet-button" onClick={() => setDraft({ ...draft, status: "in-progress" })}>Keep as in progress</button><button className="primary-button" onClick={() => { onSave({ ...draft, status: "complete" }); onClose(); }}><Check size={17} /> Mark complete</button><button className="save-draft" onClick={save}>Save edits</button></div>
      </aside>
    </div>
  );
}
