/**
 * HCM Maker Growth — Workshop Ledger design reminder
 * The workspace hook is the app's local repository boundary. It gives the prototype genuine
 * click-through persistence without coupling screens to a future Supabase implementation.
 */

import { useCallback, useEffect, useState } from "react";
import { localWorkspace } from "@/lib/demo-workspace";
import type { BusinessCheck, ContentItem, GrowthAction, MakerCustomer, Workspace } from "@/lib/hcm-types";

export function useHcmWorkspace() {
  const [workspace, setWorkspace] = useState<Workspace>(localWorkspace);

  useEffect(() => {
    window.localStorage.setItem("hcm-maker-growth-workspace", JSON.stringify(workspace));
  }, [workspace]);

  const updateCheck = useCallback((check: BusinessCheck, score: Workspace["score"]) => {
    setWorkspace((current) => ({ ...current, check, score }));
  }, []);

  const updateAction = useCallback((action: GrowthAction) => {
    setWorkspace((current) => ({ ...current, actions: current.actions.map((item) => item.id === action.id ? action : item) }));
  }, []);

  const updateCustomer = useCallback((customer: MakerCustomer) => {
    setWorkspace((current) => ({ ...current, customers: current.customers.map((item) => item.id === customer.id ? customer : item) }));
  }, []);

  const updateContent = useCallback((content: ContentItem) => {
    setWorkspace((current) => ({ ...current, content: current.content.map((item) => item.id === content.id ? content : item) }));
  }, []);

  return { workspace, setWorkspace, updateCheck, updateAction, updateCustomer, updateContent };
}
