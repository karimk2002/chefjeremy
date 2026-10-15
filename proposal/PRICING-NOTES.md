# Pricing notes (internal, do not send)

Updated 15 Oct 2026. Background for `PROPOSAL.md`.

## Pricing logic

- Shown to the client as one line: "Both websites, one project, including the brand audit: €2,000", then −€300 as thanks for the Larevue introduction, so **€1,700**. This answers Agilson's "one project" point before he raises it.
- Behind it, your logic: €1,200 is the normal price for one website including the audit (the September deal: €200 audit + €1,000 build), plus €800 for the second site.

## Payment

| | |
|---|---|
| Brand audit, delivered 17 Sept | €200 |
| Deposit, 30% of the remaining €1,500 | €450 |
| **To start** | **€650** |
| jeremygillon.com live | €525 |
| essencexp.com live | €525 |
| Total | €1,700 |

No late-materials clause, by choice. 30 days of fixes after each launch are included (asked for by the Agilson review, cheap to give).

## Persona review (15 Oct), what changed

- Jérémy: no guests in photos; no price on the site (on request, contact first); clear links between the sites; launch with the photos he has.
- Agilson: one-line price; two business enquiry types on E&E; 30 days of fixes. He may still open at €1,500 and ask for a €300 deposit: hold €1,700 and €450.
- Contact funnel: before building the forms, agree with them what each form asks so they can call the client back. Optional Google sign-in, to decide together.

## Hosting research (Oct 2026)

- **Cloudflare (recommended).** Pages hosting is free, with 500 builds a month, 100 custom domains per project and no commercial-use restriction found. The registrar sells at cost with no markup (about US$10–11 per .com; check the dashboard). Domains registered there must use Cloudflare DNS. Transfer takes about 5 business days and adds one year to the expiry date. Astro has an official Cloudflare adapter; the enquiry API route moves to a Pages Function.
- **Vercel.** The Hobby plan is restricted to non-commercial use, so a business site needs Pro (about US$20 per seat per month). The current build targets Vercel, so moving means switching the adapter.
- **Netlify.** The free plan uses credits (300 a month); when they run out, the sites pause until the next cycle. Paid plans are $9 (Personal) and $20 (Pro). I did not confirm commercial use on the free plan in Netlify's terms.
- **IONOS.** No transfer fee; you pay one year of registration. .com renewal is about US$20 (third-party figure).
- **Wix transfer-out:** Domains → Domain actions → Transfer away from Wix. The EPP code is emailed to the registrant within about 24 hours, and Wix auto-unlocks the domain and switches off privacy. 60-day lock after registration, a previous transfer, or a registrant change. The Wix site disconnects once the transfer completes, so launch the new site first.
- **Email.** If Google Workspace was bought through Wix, the subscription stays with Wix and the MX, SPF and DKIM records must be recreated at the new DNS. If the domain is only connected to Wix (registered elsewhere), there is no transfer, only a DNS change.

Sources: [Cloudflare transfer docs](https://developers.cloudflare.com/registrar/domain-transfers), [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits), [Vercel Hobby plan](https://vercel.com/docs/plans/hobby), [IONOS transfer cost](https://www.ionos.com/help/domains/prices-and-invoices/what-does-a-domain-transfer-cost/), [Wix transfer guide (PushPress)](https://help.pushpress.com/en/articles/8686191-transferring-your-domain-away-from-wix), [Wix email after transfer](https://www.wix.com/blog/how-does-email-work-on-wix), [Netlify free plan 2026](https://netli.fyi/blog/netlify-free-plan-limits-2026), [Google Workspace domain transfer](https://knowledge.workspace.google.com/admin/domains/transfer-your-domain-to-another-host).

## Later

- Invoice question: later.
- Prices for phase 2 (Ads, social, articles, care plan): send them as a separate proposal after launch, so they are not anchored low now.

## WhatsApp message to send with it

> Hi Agilson, hi Jérémy, thank you for today. Here is the full proposal: both websites as one project, including the brand audit, €2,000, with €300 off as a thank-you for the Larevue introduction, so €1,700 in total. To start: the €200 for the brand audit plus a 30% deposit (€450). Private dining stays fully tailor-made with no price shown, and we'll use the photos you already have at their best. I'm really looking forward to the next phase too (Ads and organic social), and to building something long term together.
