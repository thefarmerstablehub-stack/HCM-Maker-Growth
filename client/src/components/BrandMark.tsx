/**
 * HCM Maker Growth — Workshop Ledger design reminder
 * This component holds the recurring timber-ring brand signature across the public and app UI.
 */

import { Link } from "wouter";

export function BrandMark({ compact = false, inverse = false }: { compact?: boolean; inverse?: boolean }) {
  return (
    <Link href="/" className="brand-mark" aria-label="HCM Maker Growth home">
      <span className="brand-symbol" aria-hidden="true">
        <img src="/manus-storage/hcm-growth-rings_9631fcce.png" alt="" />
      </span>
      {!compact && <span className={inverse ? "brand-name brand-name-inverse" : "brand-name"}>HCM <i>Maker Growth</i></span>}
    </Link>
  );
}
