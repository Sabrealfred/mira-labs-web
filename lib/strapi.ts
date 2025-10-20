const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

type StrapiResponse<T> = {
  data?: {
    id: number;
    attributes: T;
  } | null;
};

export type LandingContent = {
  heroBadge?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  metrics?: Array<{ id?: number; value?: string; label?: string; detail?: string }>;
  capabilities?: Array<{
    id?: number;
    title?: string;
    summary?: string;
    detail?: string;
    icon?: string;
  }>;
  lifecycle?: Array<{
    id?: number;
    heading?: string;
    points?: Array<{ id?: number; text?: string }>;
  }>;
  platformHighlights?: Array<{
    id?: number;
    title?: string;
    points?: Array<{ id?: number; text?: string }>;
  }>;
  clientSegments?: Array<{ id?: number; segment?: string; description?: string }>;
  researchHighlights?: Array<{ id?: number; title?: string; type?: string; summary?: string }>;
  trustedPartners?: Array<{ id?: number; name?: string; tag?: string }>;
  pressMentions?: Array<{ id?: number; outlet?: string; headline?: string; date?: string }>;
  offices?: Array<{ id?: number; city?: string; note?: string }>;
};

export async function fetchLandingContent(): Promise<LandingContent | null> {
  const url = new URL('/api/landing', STRAPI_URL);
  url.searchParams.set('populate', 'deep');

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_API_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_API_TOKEN}`;
  }

  try {
    const res = await fetch(url.toString(), {
      headers,
      next: { revalidate: 120 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch landing content: ${res.status} ${res.statusText}`);
    }

    const json = (await res.json()) as StrapiResponse<LandingContent>;
    return json.data?.attributes ?? null;
  } catch (error) {
    console.error('[Strapi] Landing fetch failed:', error);
    return null;
  }
}
