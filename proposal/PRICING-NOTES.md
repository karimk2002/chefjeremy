# Pricing notes (internal, do not send)

15 Oct 2026. Background for `PROPOSAL.md`.

## The honest picture

| | Agreed 15 Sept | Agreed 15 Oct |
|---|---|---|
| Scope | Audit + one landing page with private dining | Audit + 6-page personal site + 7-page company site with its own art direction, 2 bio pages, journal template, Wix migration of two domains |
| Price | €1,200 | €2,000 |
| Paid so far | €0 | €0 |

- The scope grew about 3 to 4 times. The price grew 67%.
- Remaining work, rough estimate: Jérémy site 25–30 h (Private Dining is built), E&E 45–55 h (art direction, 7 page types, copy editing, form), migration and DNS for two domains about 6 h, revisions about 10 h, calls and admin about 8 h. That is **about 95–110 h for €1,600 still to earn, or about €15/h**.
- It is still worth taking: first paid client, two portfolio pieces (a Michelin chef and a hospitality company), a referral source (Agilson) and a recurring-revenue opening (ads, articles, care plan). The price is fixed; protect the margin with scope instead.

## How the proposal protects you

1. **Visible discount.** It shows a standard value of €3,200 and an introductory rate of −€1,200. This covers the call's "introduction" discount, gives Agilson the "one project" framing he asked for, and keeps your next client from seeing €800 per site as your rate. Change €3,200 if you want another anchor. I would not show a discount over about 40%.
2. **Page caps.** Every page is listed, and extra pages cost €150. The E&E blueprint has 15 pages and its deck lists far more services; the proposal folds the services into one page.
3. **Two revision rounds per site**, and one round on the E&E style sheet.
4. **Content clause.** If you wait more than three weeks on their materials, the stage is due on preview approval. Jérémy's photos and facts have been missing since September (21 placeholders), so this is the clause most likely to matter.
5. **Money moves first.** €800 on approval, so the audit delivered on 17 Sept gets paid now. Option if they push back: €1,000 / €500 / €500 (50% upfront, as you planned before the call).
6. **Exclusions spelled out:** SEO articles, ads, social, photography, translation.
7. **Upsells priced in the same document**, so ongoing work is expected rather than a surprise later.

## Decisions to make before sending

- [ ] **Standard value anchor:** €3,200 (as drafted) or another figure.
- [ ] **Add-on prices:** care plan €50/mo, article €150, Ads €300 + €200/mo. These are my suggestions, at the low end for Singapore. Raise them if you want; this is where the real margin is.
- [ ] **Invoice.** STATUS says you don't issue invoices, but E&E is a company paying for its business site and will probably need one for its accounts. Decide before they ask: a simple invoice from you as a sole trader, or a receipt only.
- [ ] **What "introduction fee discounted" meant on the call.** I read it as a discount for Jérémy, introduced through Agilson. If it meant that a future friend Agilson refers gets a discount, add a line in §3 and remove the introductory wording.
- [ ] **E&E home page.** The decision log says E&E is B2B, with private dining only as a footer link. Agilson's PDF wanted "two doors" (businesses / private clients). The proposal follows the call. Confirm.
- [ ] **Voice.** The PDF praises first person; the build is third person. Not a pricing issue, but it is cheaper to settle before copy changes.

## Stack and hosting (settle before sending)

On the call you said HTML / React / Next on IONOS or Cloudflare. The existing build is Astro 5 on Vercel. Recommendation:

- **Keep Astro.** It outputs plain HTML, is custom code and is not a builder. Rewriting in Next costs days and gains the client nothing. The proposal describes it as "the same family as React and Next", which is accurate enough for a client.
- **Move from Vercel to Cloudflare Pages.** Vercel's free Hobby plan is for non-commercial use only, so a business site there needs Pro (about $20/month). Cloudflare Pages is free for commercial use, has edges in SG, HK and BKK, and Astro has an official Cloudflare adapter. The one API route (enquiry email through Resend) moves to a Pages Function. Put the account in the client's name and invite yourself.
- IONOS is fine as a domain registrar, but its hosting gives nothing Cloudflare doesn't.
- Before touching DNS, find where the domains are registered (through Wix or elsewhere) and who hosts info@jeremygillon.com mail. Record every MX, SPF, DKIM and TXT record first.

## Short WhatsApp message to send with it

> Hi Agilson, hi Jérémy, thank you for today. Here is the proposal for the project as we discussed it: one project, two avenues, €2,000 in total, paid in three stages. It sets out exactly what each site includes, what I need from you, and what comes after launch (Ads, articles). Once you reply "approved" and the first stage is paid, I start the same week, with jeremygillon.com first. Agilson, the file on Jérémy's experience and awards is the first thing I need.
