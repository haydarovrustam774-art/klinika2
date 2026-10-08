# [KLINIKA NOMI] — veb-sayt

![CI](../../actions/workflows/ci.yml/badge.svg)

Zamonaviy ko'p tarmoqli klinika sayti: 3D hero, onlayn qabul, uch tilli (uz / ru / en), light va dark rejim.

**Texnologiyalar:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · shadcn/ui · next-intl · Three.js + React Three Fiber · GSAP · Lenis · React Hook Form + Zod

## Tez boshlash

Kerak: Node.js 18.18+ (tavsiya: 20, `.nvmrc` da)

```bash
git clone https://github.com/SIZNING_NOMINGIZ/clinic-site.git
cd clinic-site
npm install
cp .env.example .env.local     # Windows: copy .env.example .env.local
npm run dev                    # http://localhost:3000
```

| Buyruq | Vazifasi |
|---|---|
| `npm run dev` | Ishlab chiqish serveri |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript tekshiruvi |

## Kontentni o'zgartirish

| Nima | Qayerda |
|---|---|
| Klinika nomi, telefon, manzil, ish vaqti | `content/site.config.json` |
| Matnlar (uz / ru / en) | `messages/*.json` |
| Ranglar, radius, soyalar | `src/styles/globals.css` (yuqoridagi tokenlar) |
| 3D modellar (.glb) | `public/models/` |

## Sinash

Qurilma darajasini majburlash: `/uz?tier=low` (yoki `mid`, `high`). `low` da 3D o'rniga yengil fallback chiqadi.

## Maxfiy ma'lumotlar

Telegram bot tokeni va SMTP parollari faqat `.env.local` (kompyuteringiz) va hosting sozlamalarida (Vercel → Environment Variables) turadi. `.env.local` `.gitignore` da, uni commit qilmang.

## Joylashtirish (deploy)

GitHub Pages **mos emas**: saytda middleware va `/api/appointment` bor, ular server talab qiladi. Tavsiya etilgan yo'l:

1. Kodni GitHub'ga yuklang.
2. [vercel.com](https://vercel.com) → **Add New Project** → repo'ni tanlang.
3. **Environment Variables** ga `.env.example` dagi qiymatlarni kiriting (`NEXT_PUBLIC_SITE_URL` ni o'z domeningizga qo'ying).
4. Har `git push` dan keyin sayt avtomatik yangilanadi.

## Avtomatik tekshiruvlar

`.github/workflows/ci.yml` har push va pull request'da lint, typecheck va build'ni ishga tushiradi. Dependabot haftalik yangilanish so'rovlarini ochadi.

## shadcn/ui

`components.json` sozlangan. Kerak bo'lganda: `npx shadcn@latest add accordion tabs select`.
