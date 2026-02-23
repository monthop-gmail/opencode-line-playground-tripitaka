# 📿 พระไตรปิฎก - Tripitaka PWA

เว็บแอป PWA สำหรับศึกษาพระไตรปิฎก สังคายนา และพระสูตร

**Live**: https://opencode-line-playground-tripitaka.pages.dev

## Features

- สังคายนา 3 ครั้ง — ปฐม ทุติย ตติยสังคายนา พร้อมรายละเอียด (ปี ประธาน สถานที่ ผู้อุปถัมภ์ สาเหตุ)
- พระไตรปิฎก 3 ปิฎก — วินัย สุตตันต์ อภิธรรม
- สุตตันตปิฎก 5 นิกาย — ทีฆ มัชฌิม สังยุตต อังคุตตร ขุททก
- อภิธรรมปิฎก 7 คัมภีร์
- แหล่งอ้างอิง — link ไปยังแหล่งข้อมูลต้นฉบับ (Wikipedia ไทย/EN)
- PWA — ติดตั้งเป็นแอปบนมือถือได้ รองรับ Offline

## Tech Stack

- Single-page HTML + CSS + JavaScript (ไม่มี framework)
- PWA: Service Worker + Web App Manifest
- Hosted on Cloudflare Pages
- CI/CD: GitHub Actions → auto deploy on push to main

## Development

```bash
git clone https://github.com/monthop-gmail/opencode-line-playground-tripitaka.git
cd opencode-line-playground-tripitaka

# เปิดทดสอบ local
open index.html
# หรือใช้ live server
npx serve .
```

## Project Structure

```
├── index.html       # หน้าหลัก (HTML + CSS + JS ในไฟล์เดียว)
├── data.json        # ข้อมูลสังคายนา พระไตรปิฎก และแหล่งอ้างอิง
├── manifest.json    # PWA manifest
├── sw.js            # Service Worker (offline cache)
├── README.md
└── .github/
    └── workflows/
        ├── ci.yml       # PR check (linked issue)
        └── deploy.yml   # Auto deploy to Cloudflare Pages
```

## Deploy

Push to `main` → GitHub Actions auto deploy to Cloudflare Pages

```bash
git add -A
git commit -m "message"
git push
```

## Links

- **Live site**: https://opencode-line-playground-tripitaka.pages.dev
- **Issues**: https://github.com/monthop-gmail/opencode-line-playground-tripitaka/issues
- **Playground template**: https://github.com/monthop-gmail/opencode-line-playground-template-000
