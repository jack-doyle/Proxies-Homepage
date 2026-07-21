# Proxies marketing site

## Product source of truth

Before writing or changing site content, read:

- `docs/proxies/index.md`
- all relevant files under `docs/proxies/`

Treat these documents as the product and messaging source of truth.

## Content rules

- Do not invent product functionality, guarantees, coverage, pricing or trust claims.
- Use only statements marked `Audience: public`.
- Prefer statements marked `Status: decided`.
- Do not publish items marked `internal`, `experimental`, `rejected` or
  `open question`.
- Do not describe proxies as automatically assigned to a single person.
  Eligible proxies are notified and the first eligible proxy to confirm gets
  the viewing.
- State clearly that identity verification is required before a proxy can
  accept jobs.
- Use British English.
- Target apartment seekers in Berlin.
- Keep the tone reassuring, direct and practical.
- Avoid startup jargon.
- Preserve all factual distinctions between payment authorisation, charging,
  cancellations and refunds.

## Astro conventions

- Store editable marketing copy in Astro content collections rather than
  scattering long strings through components.
- Reuse components for repeated calls to action, feature cards and trust
  statements.
- Run formatting, type checking and the production build before finishing.
