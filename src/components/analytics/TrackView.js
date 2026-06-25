"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/** Fires a treatment_view GA4 event on mount (PRD §16 event tracking). */
export default function TrackTreatmentView({ slug }) {
  useEffect(() => {
    track.treatmentView(slug);
  }, [slug]);
  return null;
}
