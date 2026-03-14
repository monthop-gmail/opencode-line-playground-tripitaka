# 📿 พระไตรปิฎก - Tripitaka PWA

เว็บแอป PWA สำหรับศึกษาพระไตรปิฎก สังคายนา และพระสูตร

**Live**: https://tripitaka-pwa.pages.dev (เดิม: https://opencode-line-playground-tripitaka.pages.dev)

## Features

- สังคายนา 9 ครั้ง — ปฐม ถึง นวมสังคายนา พร้อมรายละเอียด (ปี ประธาน สถานที่ ผู้อุปถัมภ์ สาเหตุ)
- พระไตรปิฎก 3 ปิฎก — วินัย สุตตันต์ อภิธรรม
- สุตตันตปิฎก 5 นิกาย — ทีฆ มัชฌิม สังยุตต์ อังคุตตร ขุททก
- อภิธรรมปิฎก 7 คัมภีร์
- ค้นหาข้ามหมวด — สังคายนา พระสูตร อภิธรรม วินัย
- แหล่งอ้างอิง — link ไปยังแหล่งข้อมูลต้นฉบับ (Wikipedia ไทย/EN)
- PWA — ติดตั้งเป็นแอปบนมือถือได้ รองรับ Offline

## Tech Stack

- Single-page HTML + CSS + JavaScript (ไม่มี framework)
- PWA: Service Worker (network-first) + Web App Manifest
- Hosted on Cloudflare Pages
- CI/CD: GitHub Actions → auto deploy on push to main

## Project Structure

```
├── index.html       # หน้าหลัก (HTML + CSS + JS ในไฟล์เดียว)
├── data.json        # ข้อมูลสังคายนา พระไตรปิฎก และแหล่งอ้างอิง
├── manifest.json    # PWA manifest
├── sw.js            # Service Worker (network-first, offline cache)
├── build.sh         # Version stamp (git hash)
├── README.md
└── .github/
    └── workflows/
        └── deploy.yml   # Auto deploy to Cloudflare Pages
```

## Development

```bash
git clone https://github.com/monthop-gmail/tripitaka-pwa.git
cd tripitaka-pwa
npx serve .
```

## Deploy

Push to `main` → GitHub Actions auto deploy to Cloudflare Pages

## Related

- [tripitaka-timeline-pwa](https://github.com/monthop-gmail/tripitaka-timeline-pwa) — Timeline พระไตรปิฎกสามสาย (เถรวาท/มหายาน/วัชรยาน)
