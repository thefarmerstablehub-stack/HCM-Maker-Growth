/**
 * HCM Maker Growth — Workshop Ledger design reminder
 * The public page tells an asymmetric, tactile story about the recurring business-growth loop
 * and turns the free assessment into a clear first piece of practical work.
 */

import { ArrowRight, CheckCircle2, CirclePlay, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { BrandMark } from "@/components/BrandMark";
import { ScoreRing } from "@/components/ScoreRing";

export default function Home() {
  return (
    <div className="public-page">
      <header className="public-nav"><BrandMark /><nav><a href="#how-it-works">How it works</a><a href="#membership">Membership</a><Link href="/login">Sign in</Link></nav><Link href="/business-check" className="nav-cta">Check my business <ArrowRight size={15} /></Link></header>
      <main>
        <section className="hero-section">
          <div className="hero-copy"><p className="chapter-label"><span /> HERITAGE CRAFT MEDIA</p><h1>Grow your craft business <em>without becoming</em> a marketing expert.</h1><p className="hero-support">HCM helps independent makers get found, get enquiries and bring customers back — with a simple growth plan every month.</p><div className="hero-actions"><Link href="/business-check" className="primary-button large-button">Check my business <ArrowRight size={18} /></Link><a href="#how-it-works" className="play-link"><CirclePlay size={22} /> See how it works</a></div><div className="confidence-note"><CheckCircle2 size={17} /> A practical assessment, not a sales pitch</div></div>
          <div className="hero-image-wrap"><img src="/manus-storage/hcm-maker-workbench-hero_2731634c.jpg" alt="A furniture maker reviewing work at a timber workbench" /><div className="hero-caption"><span>THIS MONTH'S FOCUS</span><b>Turn interest in your work into better enquiries.</b><i>September growth plan</i></div></div>
        </section>
        <section className="proof-strip"><p>For the people who make things properly.</p><div><span>Furniture</span><span>Jewellery</span><span>Pottery</span><span>Textiles</span><span>Woodwork</span><span>Craft food</span></div></section>
        <section className="loop-section" id="how-it-works"><div className="section-intro"><p className="chapter-label"><span /> THE HCM LOOP</p><h2>Your business changes. <em>Your growth plan should too.</em></h2><p>HCM stays useful because there is always useful work for the next month — a new opportunity, a customer to reconnect with, a stronger way to be found.</p></div><div className="loop-cards"><article><b>01</b><h3>See what needs attention</h3><p>Begin with a simple check of how people find you, enquire and return.</p></article><article><b>02</b><h3>Work through a monthly plan</h3><p>Get focused actions, drafted content and campaigns that fit your business.</p></article><article><b>03</b><h3>See your progress take shape</h3><p>Record useful results, understand what worked and make the next plan stronger.</p></article></div></section>
        <section className="score-callout"><div className="score-art"><div className="score-paper"><ScoreRing score={67} size="large" /><div><span className="eyebrow">YOUR GROWTH SCORE</span><b>Start with a clear view of where your business could go next.</b></div></div><span className="score-scribble">Not a grade.<br />A place to begin.</span></div><div className="score-copy"><p className="chapter-label light"><span /> FIND THE NEXT BEST STEP</p><h2>Know what to work on <em>before the month gets away from you.</em></h2><p>HCM looks at the whole customer journey: visibility, content, enquiries, customer care and repeat business. Then it shows the few areas most likely to make a difference.</p><Link href="/business-check" className="secondary-button">Take the free business check <ArrowRight size={18} /></Link></div></section>
        <section className="month-section"><div className="month-image"><img src="/manus-storage/hcm-seasonal-market_6dda6bf9.jpg" alt="A maker's table at a craft market" /></div><div className="month-copy"><p className="chapter-label"><span /> THIS IS NOT A COURSE</p><h2>A fresh reason to return, <em>every month.</em></h2><p>There is no finish line in a living business. Seasons change, commissions move, workshops fill and your customers need a reason to think of you again. HCM helps you meet what is in front of you, one useful month at a time.</p><ul><li><Sparkles size={18} /> Seasonal opportunities worth acting on</li><li><Sparkles size={18} /> The right customers to reconnect with</li><li><Sparkles size={18} /> A plan that remembers your business</li></ul></div></section>
        <section className="membership-section" id="membership"><div><p className="chapter-label"><span /> MEMBERSHIP, NOT MARKETING PACKAGES</p><h2>Keep the growth system <em>working for you.</em></h2></div><div className="membership-notes"><p>You are not buying a fixed bundle of social posts. You are keeping your craft business visible, active and moving forward.</p><Link href="/business-check" className="text-link">Begin with your business check <ArrowRight size={17} /></Link></div></section>
      </main>
      <footer className="public-footer"><BrandMark inverse /><p>Heritage Craft Media · Built for the business behind the craft.</p><Link href="/business-check">Start with a business check <ArrowRight size={16} /></Link></footer>
    </div>
  );
}
