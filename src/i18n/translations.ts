export type Language = 'en' | 'km' | 'th' | 'fr' | 'zh';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'km', name: 'Khmer', nativeName: 'ភាសាខ្មែរ', flag: '🇰🇭' },
  { code: 'th', name: 'Thai', nativeName: 'ภาษาไทย', flag: '🇹🇭' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'zh', name: 'Chinese', nativeName: '中文 (简体)', flag: '🇨🇳' },
];

export interface Translations {
  nav: {
    home: string;
    minecraftHosting: string;
    botHosting: string;
    support: string;
    getStarted: string;
    status: string;
    faq: string;
    affiliate: string;
    selectLanguage: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    viewPlans: string;
    learnMore: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    minecraftTab: string;
    botTab: string;
    monthly: string;
    quarterly: string;
    saveQuarterly: string;
    orderNow: string;
    popular: string;
  };
  hardware: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cpuTitle: string;
    cpuDesc: string;
    nvmeTitle: string;
    nvmeDesc: string;
    ddosTitle: string;
    ddosDesc: string;
    backupTitle: string;
    backupDesc: string;
  };
  locations: {
    eyebrow: string;
    title: string;
    subtitle: string;
    testYourPing: string;
    runAllTests: string;
    pingUnit: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    ratingText: string;
    allReviews: string;
  };
  affiliate: {
    badge: string;
    title: string;
    subtitle: string;
    overviewTab: string;
    trackerTab: string;
    estimatorTitle: string;
    estimatorDesc: string;
    activeClients: string;
    monthlyRecurring: string;
    annualRevenue: string;
    joinNow: string;
    loginToTracker: string;
    howItWorks: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  newsletter: {
    badge: string;
    title: string;
    subtitle: string;
    placeholder: string;
    subscribe: string;
    subscribing: string;
    successTitle: string;
    successDesc: string;
    anotherEmail: string;
  };
  footer: {
    description: string;
    products: string;
    company: string;
    support: string;
    legal: string;
    allRightsReserved: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      minecraftHosting: 'Minecraft Hosting',
      botHosting: 'Bot Hosting',
      support: 'Support',
      getStarted: 'Get Started',
      status: 'Live Node Status',
      faq: 'Knowledgebase & FAQ',
      affiliate: 'Affiliate Program',
      selectLanguage: 'Language',
    },
    hero: {
      badge: '2027 ARCHITECTURE · RYZEN 9 9950X3D & GEN5 PCIE',
      titleLine1: 'Premium Server Hosting for',
      titleLine2: 'Everyone',
      subtitle: 'Experience lightning-fast performance, unbeatable reliability, and 24/7 support. Host your Minecraft servers, Discord bots, and more with PHY_JA SERVER 2027.',
      viewPlans: 'View Plans',
      learnMore: 'Learn More',
      card1Title: 'Lightning Fast',
      card1Desc: 'Latest hardware for optimal performance',
      card2Title: 'DDoS Protection',
      card2Desc: 'Advanced security for peace of mind',
      card3Title: '99.9% Uptime',
      card3Desc: 'Reliable infrastructure you can trust',
    },
    pricing: {
      eyebrow: 'Transparent Pricing Plans',
      title: 'Scalable 2027 Server Hosting For Any Project',
      subtitle: 'Instant provisioning in under 35 seconds. Zero setup fees, cancel anytime, and 72-hour money-back guarantee.',
      minecraftTab: 'Minecraft Hosting',
      botTab: 'Discord & Bot Hosting',
      monthly: 'Monthly',
      quarterly: 'Quarterly',
      saveQuarterly: 'Save 15%',
      orderNow: 'Deploy Server Now',
      popular: 'Most Popular',
    },
    hardware: {
      eyebrow: '2027 Enterprise Hardware',
      title: 'Built with Zero Compromises',
      subtitle: 'We only deploy top-tier enterprise components tuned specifically for high-tickrate game loops and asynchronous workloads.',
      cpuTitle: 'AMD Ryzen 9 9950X3D (5.7+ GHz)',
      cpuDesc: 'Unmatched 3D V-Cache single-core compute performance ensuring seamless 20.0 TPS even during heavy entity simulations.',
      nvmeTitle: 'Enterprise Gen5 PCIe NVMe (14,000 MB/s)',
      nvmeDesc: 'Blistering 14,000+ MB/s read/write speeds for instant world saving, rapid chunk loading, and fast modpack installation.',
      ddosTitle: '16+ Tbps Anycast eBPF Shield',
      ddosDesc: 'Hardware-accelerated eBPF/XDP mitigation scrubbing UDP floods, SYN packets, and Layer 7 bot attacks before reaching your node.',
      backupTitle: 'Automated Offsite Snapshots',
      backupDesc: 'Daily offsite backups stored across redundant cloud storage facilities with instant 1-click restore.',
    },
    locations: {
      eyebrow: 'Global Datacenter Edge',
      title: 'Find Your Lowest Latency Node',
      subtitle: 'Measure live round-trip latency to our Tier-4 datacenters worldwide to pick the best region for your players.',
      testYourPing: 'Live Ping Latency',
      runAllTests: 'Ping All Datacenters',
      pingUnit: 'ms',
    },
    testimonials: {
      eyebrow: 'Verified Social Proof',
      title: 'Trusted by 28,000+ Server Owners',
      ratingText: '1,450+ verified Trustpilot & Discord reviews',
      allReviews: 'All Reviews',
    },
    affiliate: {
      badge: 'PHY_JA PARTNER PROGRAM',
      title: 'Earn 25% Lifetime Recurring Commission',
      subtitle: 'Turn your community, YouTube channel, Twitch stream, or Discord guild into sustainable recurring revenue. Get paid every single month your referred players stay active.',
      overviewTab: 'Program Overview & Calculator',
      trackerTab: 'Referral Tracker',
      estimatorTitle: 'Affiliate Earnings Estimator',
      estimatorDesc: 'Based on 25% recurring commission on standard server plans',
      activeClients: 'Active Referred Clients:',
      monthlyRecurring: 'Monthly Recurring',
      annualRevenue: 'Annual Revenue',
      joinNow: 'Join Now',
      loginToTracker: 'Log In to Tracker →',
      howItWorks: 'How The Program Works',
    },
    faq: {
      eyebrow: 'Clear Answers',
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about our hardware, server migration, billing, and control panel.',
    },
    newsletter: {
      badge: 'System Broadcasts & Savings',
      title: 'Stay Informed on Node Status & Exclusive Discounts',
      subtitle: 'Get notified 24 hours prior to scheduled kernel updates, new datacenter node expansions, and flash sales for game and bot hosting.',
      placeholder: 'Enter your email address...',
      subscribe: 'Subscribe',
      subscribing: 'Subscribing...',
      successTitle: "You're On The List!",
      successDesc: "You'll receive real-time maintenance advisories and exclusive discount codes directly to your inbox.",
      anotherEmail: 'Subscribe another email',
    },
    footer: {
      description: 'Premium, low-latency game and bot server hosting. Powered by AMD Ryzen 9 7950X, NVMe Gen4 storage, and 12+ Tbps Anycast DDoS mitigation.',
      products: 'Hosting Solutions',
      company: 'Platform',
      support: 'Support & Help',
      legal: 'Legal & Policies',
      allRightsReserved: 'All rights reserved. Not an official Minecraft product.',
    },
  },
  km: {
    nav: {
      home: 'ទំព័រដើម',
      minecraftHosting: 'សេវាកម្ម Minecraft',
      botHosting: 'សេវាកម្ម Bot Hosting',
      support: 'ជំនួយ & សេវាកម្ម',
      getStarted: 'ចាប់ផ្តើមឥឡូវនេះ',
      status: 'ស្ថានភាពម៉ាស៊ីនបម្រើបន្តផ្ទាល់',
      faq: 'សំណួរដែលសួរញឹកញាប់',
      affiliate: 'កម្មវិធីដៃគូរកប្រាក់',
      selectLanguage: 'ភាសា',
    },
    hero: {
      badge: 'ម៉ាស៊ីនបម្រើជំនាន់ ២០២៧ RYZEN 9 9950X3D & GEN5 PCIE',
      titleLine1: 'សេវាកម្ម Hosting លំដាប់ខ្ពស់សម្រាប់',
      titleLine2: 'អ្នកទាំងអស់គ្នា',
      subtitle: 'ទទួលបានបទពិសោធន៍ល្បឿនលឿនបំផុត ស្ថេរភាពខ្ពស់ និងការគាំទ្រ ២៤/៧។ បង្កើតម៉ាស៊ីនបម្រើ Minecraft និង Discord Bot ជាមួយ PHY_JA SERVER។',
      viewPlans: 'មើលកញ្ចប់តម្លៃ',
      learnMore: 'ស្វែងយល់បន្ថែម',
      card1Title: 'ល្បឿនលឿនដូចផ្លេកបន្ទោរ',
      card1Desc: 'គ្រឿងម៉ាស៊ីនជំនាន់ចុងក្រោយសម្រាប់ដំណើរការល្អឥតខ្ចោះ',
      card2Title: 'ការពារ DDoS យ៉ាងរឹងមាំ',
      card2Desc: 'ប្រព័ន្ធសុវត្ថិភាពកម្រិតខ្ពស់ដើម្បីភាពកក់ក្តៅរបស់អ្នក',
      card3Title: 'ដំណើរការ ៩៩.៩%',
      card3Desc: 'ហេដ្ឋារចនាសម្ព័ន្ធដែលអាចទុកចិត្តបានបំផុត',
    },
    pricing: {
      eyebrow: 'តម្លៃសមរម្យ និងមានតម្លាភាព',
      title: 'កញ្ចប់សេវាកម្មដែលអាចពង្រីកបានតាមតម្រូវការ',
      subtitle: 'តម្លើងម៉ាស៊ីនស្វ័យប្រវត្តក្នុងរយៈពេលក្រោម ៤៥ វិនាទី គ្មានកម្រៃសេវាបន្ថែម និងធានាសងប្រាក់វិញក្នុង ៧២ ម៉ោង។',
      minecraftTab: 'សេវាកម្ម Minecraft',
      botTab: 'សេវាកម្ម Discord & Bot',
      monthly: 'ប្រចាំខែ',
      quarterly: 'រៀងរាល់ ៣ ខែ',
      saveQuarterly: 'បញ្ចុះតម្លៃ ១៥%',
      orderNow: 'បញ្ជាទិញឥឡូវនេះ',
      popular: 'ពេញនិយមបំផុត',
    },
    hardware: {
      eyebrow: 'គ្រឿងម៉ាស៊ីនកម្រិតសហគ្រាស',
      title: 'បង្កើតឡើងដោយគ្មានការចុះចាញ់គុណភាព',
      subtitle: 'យើងប្រើប្រាស់គ្រឿងម៉ាស៊ីនលំដាប់កំពូលដែលត្រូវបានកែសម្រួលជាពិសេសសម្រាប់ហ្គេម និងប្រព័ន្ធស្មុគស្មាញ។',
      cpuTitle: 'AMD Ryzen 9 7950X (5.7GHz)',
      cpuDesc: 'កម្លាំងគណនាកម្រិតកំពូល ធានាថាកម្រិត 20.0 TPS ដំណើរការរលូនជានិច្ច។',
      nvmeTitle: 'Enterprise Gen4 PCIe NVMe',
      nvmeDesc: 'ល្បឿនអាន/សរសេរ 7,000+ MB/s សម្រាប់រក្សាទុកទិន្នន័យពិភពលោក និងផ្ទុក Mod យ៉ាងរហ័ស។',
      ddosTitle: 'ការពារ DDoS លើសពី 12+ Tbps',
      ddosDesc: 'ប្រព័ន្ធច្រោះការវាយប្រហារបណ្តាញកម្រិតខ្ពស់មុនពេលទៅដល់ម៉ាស៊ីនរបស់អ្នក។',
      backupTitle: 'ការបម្រុងទុកស្វ័យប្រវត្ត',
      backupDesc: 'រក្សាទុកទិន្នន័យបម្រុងទុកប្រចាំថ្ងៃនៅមជ្ឈមណ្ឌលផ្ទុកទិន្នន័យពពកដោយសុវត្ថិភាព។',
    },
    locations: {
      eyebrow: 'មជ្ឈមណ្ឌលទិន្នន័យជុំវិញពិភពលោក',
      title: 'ស្វែងរកម៉ាស៊ីនបម្រើដែលនៅជិតលោកអ្នកបំផុត',
      subtitle: 'វាស់ស្ទង់ល្បឿន Ping ទៅកាន់មជ្ឈមណ្ឌលទិន្នន័យកម្រិត Tier-4 ដើម្បីជ្រើសរើសតំបន់ដែលល្អបំផុតសម្រាប់អ្នកលេង។',
      testYourPing: 'តេស្តល្បឿន Ping ផ្ទាល់',
      runAllTests: 'តេស្តគ្រប់មជ្ឈមណ្ឌល',
      pingUnit: 'ms',
    },
    testimonials: {
      eyebrow: 'ការបញ្ជាក់ពីអតិថិជនពិតប្រាកដ',
      title: 'ទទួលបានការជឿទុកចិត្តពីម្ចាស់ Server ជាង ២៨,០០០ នាក់',
      ratingText: 'ការវាយតម្លៃជាង ១,៤៥០ នៅលើ Trustpilot & Discord',
      allReviews: 'ការវាយតម្លៃទាំងអស់',
    },
    affiliate: {
      badge: 'កម្មវិធីដៃគូ PHY_JA SERVER',
      title: 'ទទួលបានកម្រៃជើងសារ ២៥% រៀងរាល់ខែ',
      subtitle: 'បង្កើតចំណូលអកម្មពីសហគមន៍ YouTube, Twitch ឬ Discord របស់អ្នក។ ទទួលបានប្រាក់រៀងរាល់ខែដរាបណាអតិថិជនរបស់អ្នកបន្តប្រើប្រាស់។',
      overviewTab: 'ទិដ្ឋភាពទូទៅ & ការគណនាប្រាក់ចំណូល',
      trackerTab: 'ផ្ទាំងតាមដានការណែនាំ',
      estimatorTitle: 'ម៉ាស៊ីនគណនាប្រាក់ចំណូលដៃគូ',
      estimatorDesc: 'ផ្អែកលើកម្រៃជើងសារ ២៥% ប្រចាំខែ',
      activeClients: 'ចំនួនម៉ាស៊ីនបម្រើដែលបានណែនាំ:',
      monthlyRecurring: 'ចំណូលប្រចាំខែ',
      annualRevenue: 'ចំណូលប្រចាំឆ្នាំ',
      joinNow: 'ចូលរួមឥឡូវនេះ',
      loginToTracker: 'ចូលទៅកាន់ផ្ទាំងតាមដាន →',
      howItWorks: 'របៀបដែលកម្មវិធីនេះដំណើរការ',
    },
    faq: {
      eyebrow: 'ចម្លើយច្បាស់លាស់',
      title: 'សំណួរដែលត្រូវបានសួរញឹកញាប់',
      subtitle: 'ព័ត៌មានលម្អិតអំពីគ្រឿងម៉ាស៊ីន ការផ្ទេរទិន្នន័យ ការទូទាត់ប្រាក់ និងផ្ទាំងគ្រប់គ្រង។',
    },
    newsletter: {
      badge: 'ការជូនដំណឹង & ការបញ្ចុះតម្លៃ',
      title: 'ទទួលបានព័ត៌មានថ្មីៗអំពីម៉ាស៊ីន និងការបញ្ចុះតម្លៃពិសេស',
      subtitle: 'ទទួលបានការជូនដំណឹងជាមុន ២៤ ម៉ោងមុនពេលធ្វើបច្ចុប្បន្នភាពប្រព័ន្ធ និងលេខកូដបញ្ចុះតម្លៃពិសេស។',
      placeholder: 'បញ្ចូលអាសយដ្ឋានអ៊ីមែលរបស់អ្នក...',
      subscribe: 'ជាវព័ត៌មាន',
      subscribing: 'កំពុងដំណើរការ...',
      successTitle: 'អ្នកបានចុះឈ្មោះជោគជ័យហើយ!',
      successDesc: 'យើងបានចុះឈ្មោះអ៊ីមែលរបស់អ្នករួចរាល់។ សូមពិនិត្យមើលប្រអប់សំបុត្រដើម្បីទទួលបានកូដបញ្ចុះតម្លៃ។',
      anotherEmail: 'ចុះឈ្មោះអ៊ីមែលផ្សេងទៀត',
    },
    footer: {
      description: 'សេវាកម្ម Hosting ហ្គេម និង Bot ល្បឿនលឿនកម្រិតខ្ពស់។ ដំណើរការដោយ AMD Ryzen 9 7950X, NVMe Gen4 និងប្រព័ន្ធការពារ DDoS 12+ Tbps។',
      products: 'កញ្ចប់សេវាកម្ម',
      company: 'អំពីយើង',
      support: 'ផ្នែកជំនួយ',
      legal: 'លក្ខខណ្ឌ & គោលការណ៍',
      allRightsReserved: 'រក្សាសិទ្ធិគ្រប់យ៉ាង។ មិនមែនជាផលិតផលផ្លូវការរបស់ Minecraft ទេ។',
    },
  },
  th: {
    nav: {
      home: 'หน้าหลัก',
      minecraftHosting: 'บริการโฮสติ้ง Minecraft',
      botHosting: 'บริการโฮสติ้ง Bot',
      support: 'ฝ่ายสนับสนุน',
      getStarted: 'เริ่มต้นใช้งาน',
      status: 'สถานะเซิร์ฟเวอร์แบบเรียลไทม์',
      faq: 'คำถามที่พบบ่อย',
      affiliate: 'โปรแกรมพันธมิตร',
      selectLanguage: 'ภาษา',
    },
    hero: {
      badge: 'สถาปัตยกรรมรุ่นปี 2027 RYZEN 9 9950X3D & GEN5 PCIE',
      titleLine1: 'บริการเซิร์ฟเวอร์โฮสติ้งระดับพรีเมียมสำหรับ',
      titleLine2: 'ทุกคน',
      subtitle: 'สัมผัสประสบการณ์ความเร็วระดับพรีเมียม ความเสถียรไร้ที่ติ และการซัพพอร์ตตลอด 24 ชั่วโมง โฮสต์เซิร์ฟเวอร์ Minecraft และ Discord Bot กับ PHY_JA SERVER',
      viewPlans: 'ดูแพ็กเกจราคา',
      learnMore: 'เรียนรู้เพิ่มเติม',
      card1Title: 'เร็วแรงเต็มสปีด',
      card1Desc: 'ฮาร์ดแวร์รุ่นล่าสุดเพื่อประสิทธิภาพสูงสุด',
      card2Title: 'ระบบป้องกัน DDoS',
      card2Desc: 'ความปลอดภัยขั้นสูง มั่นใจได้ในทุกการเชื่อมต่อ',
      card3Title: 'ความเสถียร 99.9%',
      card3Desc: 'โครงสร้างพื้นฐานที่คุณไว้วางใจได้',
    },
    pricing: {
      eyebrow: 'แพ็กเกจราคาที่โปร่งใส',
      title: 'เซิร์ฟเวอร์ที่ปรับขนาดได้ตามความต้องการ',
      subtitle: 'เปิดใช้งานทันทีภายใน 45 วินาที ไม่มีค่าธรรมเนียมแอบแฝง ยกเลิกได้ตลอดเวลา พร้อมรับประกันคืนเงินภายใน 72 ชั่วโมง',
      minecraftTab: 'เซิร์ฟเวอร์ Minecraft',
      botTab: 'บอท Discord & Node.js',
      monthly: 'รายเดือน',
      quarterly: 'ราย 3 เดือน',
      saveQuarterly: 'ลดทันที 15%',
      orderNow: 'สั่งซื้อเซิร์ฟเวอร์ทันที',
      popular: 'ยอดนิยมที่สุด',
    },
    hardware: {
      eyebrow: 'ฮาร์ดแวร์เกรดองค์กร',
      title: 'สร้างขึ้นโดยไม่ลดทอนคุณภาพ',
      subtitle: 'เราคัดสรรเฉพาะอุปกรณ์ระดับท็อปที่ปรับแต่งมาเพื่อเกมและแอปพลิเคชันที่ต้องการค่า Tickrate สูงสุด',
      cpuTitle: 'AMD Ryzen 9 7950X (5.7GHz)',
      cpuDesc: 'ประสิทธิภาพ Single-Core ทรงพลัง รักษาค่า 20.0 TPS นิ่งสนิทแม้ผู้เล่นจะออนไลน์จำนวนมาก',
      nvmeTitle: 'Enterprise Gen4 PCIe NVMe',
      nvmeDesc: 'ความเร็วอ่าน/เขียนกว่า 7,000+ MB/s บันทึกโลก โหลด Chunk และติดตั้ง Modpack ได้อย่างรวดเร็ว',
      ddosTitle: 'ป้องกัน DDoS ขนาดใหญ่กว่า 12+ Tbps',
      ddosDesc: 'กรองการโจมตีทางเครือข่ายทุกรูปแบบ (Layer 4/7) ปลอดภัยไร้สะดุด',
      backupTitle: 'ระบบสำรองข้อมูลอัตโนมัติ',
      backupDesc: 'สำรองข้อมูลทุกวันไปยังคลาวด์ภายนอก พร้อมกู้คืนได้ในคลิกเดียว',
    },
    locations: {
      eyebrow: 'ศูนย์ข้อมูลระดับโลก',
      title: 'ค้นหาโหนดที่มีค่าความหน่วง (Ping) ต่ำที่สุด',
      subtitle: 'ทดสอบค่า Ping แบบเรียลไทม์ไปยังดาต้าเซ็นเตอร์ Tier-4 ทั่วโลกเพื่อเลือกภูมิภาคที่ดีที่สุดสำหรับผู้เล่นของคุณ',
      testYourPing: 'ทดสอบค่า Ping สด',
      runAllTests: 'ทดสอบทุกศูนย์ข้อมูล',
      pingUnit: 'ms',
    },
    testimonials: {
      eyebrow: 'เสียงตอบรับจากผู้ใช้งานจริง',
      title: 'ได้รับความไว้วางใจจากเจ้าของเซิร์ฟเวอร์กว่า 28,000 ราย',
      ratingText: 'รีวิวระดับ 5 ดาวกว่า 1,450 รายการบน Trustpilot และ Discord',
      allReviews: 'รีวิวทั้งหมด',
    },
    affiliate: {
      badge: 'โปรแกรมพันธมิตร PHY_JA SERVER',
      title: 'รับคอมมิชชันต่อเนื่อง 25% ตลอดชีพ',
      subtitle: 'เปลี่ยนคอมมูนิตี้ ช่อง YouTube สตรีม Twitch หรือเซิร์ฟเวอร์ Discord ของคุณเป็นรายได้ประจำ รับเงินทุกเดือนตลอดอายุการใช้งานของผู้ที่คุณแนะนำ',
      overviewTab: 'ภาพรวม & คำนวณรายได้',
      trackerTab: 'ระบบติดตามการแนะนำ',
      estimatorTitle: 'เครื่องมือประมาณการรายได้พันธมิตร',
      estimatorDesc: 'คำนวณจากค่าคอมมิชชันต่อเนื่อง 25% จากแพ็กเกจมาตรฐาน',
      activeClients: 'จำนวนเซิร์ฟเวอร์ที่แนะนำสำเร็จ:',
      monthlyRecurring: 'รายได้รายเดือน',
      annualRevenue: 'รายได้ต่อปี',
      joinNow: 'สมัครเข้าร่วมทันที',
      loginToTracker: 'เข้าสู่ระบบติดตาม →',
      howItWorks: 'ขั้นตอนการทำงาน',
    },
    faq: {
      eyebrow: 'คำตอบที่ชัดเจน',
      title: 'คำถามที่พบบ่อย',
      subtitle: 'ทุกข้อสงสัยเกี่ยวกับฮาร์ดแวร์ การย้ายเซิร์ฟเวอร์ การชำระเงิน และการใช้งานคอนโทรลพาเนล',
    },
    newsletter: {
      badge: 'แจ้งเตือนสถานะ & ส่วนลดพิเศษ',
      title: 'รับข่าวสารอัปเดตเซิร์ฟเวอร์และโปรโมชันก่อนใคร',
      subtitle: 'รับการแจ้งเตือนล่วงหน้า 24 ชม. เมื่อมีการบำรุงรักษาโหนด และรับโค้ดส่วนลดสุดคุ้มส่งตรงถึงกล่องจดหมายของคุณ',
      placeholder: 'กรอกอีเมลของคุณ...',
      subscribe: 'ติดตามข่าวสาร',
      subscribing: 'กำลังดำเนินการ...',
      successTitle: 'คุณได้ลงทะเบียนสำเร็จแล้ว!',
      successDesc: 'เราได้บันทึกอีเมลของคุณเรียบร้อยแล้ว โปรดตรวจสอบกล่องข้อความเพื่อรับโค้ดส่วนลดพิเศษ',
      anotherEmail: 'ลงทะเบียนด้วยอีเมลอื่น',
    },
    footer: {
      description: 'บริการโฮสติ้งเซิร์ฟเวอร์เกมและบอทระดับพรีเมียม ขับเคลื่อนด้วย AMD Ryzen 9 7950X, NVMe Gen4 และระบบป้องกัน DDoS 12+ Tbps',
      products: 'บริการโฮสติ้ง',
      company: 'เกี่ยวกับเรา',
      support: 'ฝ่ายสนับสนุน',
      legal: 'ข้อกำหนดและนโยบาย',
      allRightsReserved: 'สงวนลิขสิทธิ์ทั้งหมด ไม่ใช่ผลิตภัณฑ์อย่างเป็นทางการของ Minecraft',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      minecraftHosting: 'Hébergement Minecraft',
      botHosting: 'Hébergement Bot',
      support: 'Support',
      getStarted: 'Commencer',
      status: 'État des Nœuds',
      faq: 'Base de connaissances & FAQ',
      affiliate: 'Programme d’Affiliation',
      selectLanguage: 'Langue',
    },
    hero: {
      badge: 'ARCHITECTURE 2027 · RYZEN 9 9950X3D & GEN5 PCIE',
      titleLine1: 'Hébergement de Serveurs Premium pour',
      titleLine2: 'Tous',
      subtitle: 'Profitez de performances ultra-rapides, d’une fiabilité inégalée et d’un support 24/7. Hébergez vos serveurs Minecraft, bots Discord et plus avec PHY_JA SERVER 2027.',
      viewPlans: 'Voir les Offres',
      learnMore: 'En Savoir Plus',
      card1Title: 'Ultra Rapide',
      card1Desc: 'Matériel de dernière génération pour des performances optimales',
      card2Title: 'Protection Anti-DDoS',
      card2Desc: 'Sécurité avancée pour une tranquillité d’esprit totale',
      card3Title: 'Disponibilité 99,9%',
      card3Desc: 'Une infrastructure robuste en laquelle vous pouvez avoir confiance',
    },
    pricing: {
      eyebrow: 'Tarifs Clairs & Transparents',
      title: 'Hébergement Évolutif 2027 Pour Tous Vos Projets',
      subtitle: 'Déploiement instantané en moins de 35 secondes. Aucun frais d’installation, résiliation libre et garantie satisfait ou remboursé 72h.',
      minecraftTab: 'Hébergement Minecraft',
      botTab: 'Hébergement Discord & Bot',
      monthly: 'Mensuel',
      quarterly: 'Trimestriel',
      saveQuarterly: 'Économisez 15%',
      orderNow: 'Déployer Mon Serveur',
      popular: 'Le Plus Populaire',
    },
    hardware: {
      eyebrow: 'Matériel Entreprise 2027',
      title: 'Conçu Sans Aucun Compromis',
      subtitle: 'Nous déployons exclusivement des composants haut de gamme calibrés pour des boucles de jeu à haut taux de rafraîchissement.',
      cpuTitle: 'AMD Ryzen 9 9950X3D (5,7+ GHz)',
      cpuDesc: 'Performances monocœur d’exception garantissant un TPS stable à 20.0 même sous de lourdes charges.',
      nvmeTitle: 'PCIe NVMe Gen5 Entreprise (14 000 Mo/s)',
      nvmeDesc: 'Vitesses de lecture/écriture supérieures à 14 000 Mo/s pour des sauvegardes instantanées et le chargement rapide de modpacks.',
      ddosTitle: 'Bouclier Anti-DDoS Anycast 16+ Tbps eBPF',
      ddosDesc: 'Filtrage matériel eBPF/XDP nettoyant les paquets malveillants avant qu’ils n’atteignent votre serveur.',
      backupTitle: 'Sauvegardes Automatiques Déportées',
      backupDesc: 'Sauvegardes quotidiennes externalisées avec restauration en 1 clic.',
    },
    locations: {
      eyebrow: 'Réseau Mondial de Datacenters',
      title: 'Trouvez le Nœud le Plus Proche',
      subtitle: 'Mesurez la latence en temps réel vers nos datacenters Tier-4 pour offrir le meilleur ping à vos joueurs.',
      testYourPing: 'Tester la Latence en Direct',
      runAllTests: 'Tester Tous les Datacenters',
      pingUnit: 'ms',
    },
    testimonials: {
      eyebrow: 'Preuve Sociale Vérifiée',
      title: 'Recommandé par plus de 28 000 Administrateurs',
      ratingText: 'Plus de 1 450 avis vérifiés sur Trustpilot et Discord',
      allReviews: 'Tous les avis',
    },
    affiliate: {
      badge: 'PROGRAMME DE PARTENARIAT PHY_JA',
      title: 'Gagnez 25% de Commission Récurrente à Vie',
      subtitle: 'Monétisez votre communauté YouTube, Twitch ou Discord en revenus passifs durables. Touchez vos commissions chaque mois tant que vos filleuls restent abonnés.',
      overviewTab: 'Présentation & Simulateur',
      trackerTab: 'Suivi des Parrainages',
      estimatorTitle: 'Simulateur de Gains Affilié',
      estimatorDesc: 'Basé sur 25% de commission récurrente mensuelle',
      activeClients: 'Serveurs Actifs Recommandés :',
      monthlyRecurring: 'Revenu Mensuel Récurrent',
      annualRevenue: 'Revenu Annuel Estimé',
      joinNow: 'Rejoindre le Programme',
      loginToTracker: 'Accéder au Suivi →',
      howItWorks: 'Comment ça fonctionne',
    },
    faq: {
      eyebrow: 'Réponses Claires',
      title: 'Foire Aux Questions',
      subtitle: 'Tout ce que vous devez savoir sur notre matériel, la migration gratuite, la facturation et le panneau de gestion.',
    },
    newsletter: {
      badge: 'Annonces Système & Offres',
      title: 'Restez Informé des Maintenances & Remises Exclusives',
      subtitle: 'Soyez prévenu 24h à l’avance lors des maintenances programmées et profitez de réductions flash exclusives.',
      placeholder: 'Entrez votre adresse email...',
      subscribe: 'S’abonner',
      subscribing: 'Inscription en cours...',
      successTitle: 'Vous êtes inscrit !',
      successDesc: 'Nous avons bien enregistré votre adresse. Vous recevrez des alertes de maintenance et vos codes promotionnels.',
      anotherEmail: 'Inscrire un autre email',
    },
    footer: {
      description: 'Hébergement premium de serveurs de jeux et bots à faible latence. Propulsé par AMD Ryzen 9 9950X3D, NVMe Gen5 et protection Anti-DDoS 16+ Tbps.',
      products: 'Solutions d’Hébergement',
      company: 'Plateforme',
      support: 'Support & Assistance',
      legal: 'Mentions Légales & CGV',
      allRightsReserved: 'Tous droits réservés. Ce produit n’est pas affilié à Mojang ou Microsoft.',
    },
  },
  zh: {
    nav: {
      home: '首页',
      minecraftHosting: 'Minecraft 服务器托管',
      botHosting: 'Bot 机器人托管',
      support: '客服支持',
      getStarted: '立即开始',
      status: '实时节点状态',
      faq: '常见问题与知识库',
      affiliate: '推广返利计划',
      selectLanguage: '语言',
    },
    hero: {
      badge: '2027 旗舰架构 · RYZEN 9 9950X3D & GEN5 PCIE',
      titleLine1: '为所有人打造的高性能',
      titleLine2: '服务器托管',
      subtitle: '体验闪电般的极致性能、无与伦比的稳定性与 24/7 全天候专业客服。使用 PHY_JA SERVER 2027 轻松搭建 Minecraft 服务器与 Discord 机器人。',
      viewPlans: '查看配置方案',
      learnMore: '了解更多特性',
      card1Title: '超凡疾速',
      card1Desc: '顶级硬件保障极致性能表现',
      card2Title: 'DDoS 防护体系',
      card2Desc: '先进安全防护，无惧恶意攻击',
      card3Title: '99.9% 稳定在线率',
      card3Desc: '值得信赖的企业级基础设施',
    },
    pricing: {
      eyebrow: '透明公开的定价方案',
      title: '2027 随时弹性扩展的服务器托管',
      subtitle: '35 秒内全自动极速交付。零额外开户费，支持随时取消，享 72 小时无忧退款保证。',
      minecraftTab: 'Minecraft 服务器',
      botTab: 'Discord & Bot 托管',
      monthly: '按月付费',
      quarterly: '按季度付费',
      saveQuarterly: '立省 15%',
      orderNow: '立即部署服务器',
      popular: '最受欢迎',
    },
    hardware: {
      eyebrow: '2027 企业级顶级硬件',
      title: '追求卓越，绝不妥协',
      subtitle: '我们严选经过高负载专项优化的企业级硬件，专为高 Tickrate 游戏与异步进程深度调校。',
      cpuTitle: 'AMD Ryzen 9 9950X3D (5.7+ GHz)',
      cpuDesc: '极佳 3D V-Cache 单核运算性能，即使在复杂大型红石或高密度实体场景下亦能保持 20.0 TPS 满帧运行。',
      nvmeTitle: 'Enterprise Gen5 PCIe NVMe (14,000 MB/s)',
      nvmeDesc: '超过 14,000+ MB/s 读写速度，实现秒级世界保存、区块极速加载与模组一键装配。',
      ddosTitle: '16+ Tbps Anycast eBPF 流量清洗',
      ddosDesc: '硬件加速 eBPF/XDP 安全防护网，在恶意网络洪水抵达您的实例前瞬间完成清洗与过滤。',
      backupTitle: '全自动异地容灾备份',
      backupDesc: '每日自动将数据快照同步至异地冗余云端，随时支持一键无缝还原。',
    },
    locations: {
      eyebrow: '全球数据中心网络',
      title: '测速挑选离您最近的低延迟节点',
      subtitle: '实时测算前往全球 Tier-4 数据中心的往返延迟，为您的玩家群体选拔最佳区域节点。',
      testYourPing: '实时测速 Ping 值',
      runAllTests: '一键测速全部节点',
      pingUnit: 'ms',
    },
    testimonials: {
      eyebrow: '真实用户口碑认证',
      title: '深受全球 28,000+ 服主一致信赖',
      ratingText: '在 Trustpilot 与 Discord 拥有超 1,450 条五星真实好评',
      allReviews: '全部用户评价',
    },
    affiliate: {
      badge: 'PHY_JA SERVER 合作伙伴计划',
      title: '尊享 25% 终身循环返利佣金',
      subtitle: '将您的游戏社群、YouTube 频道、Bilibili 或 Discord 服务器变现为持续被动收入。只要客户持续续费，每月佣金即刻准时到账。',
      overviewTab: '计划详情与收入测算',
      trackerTab: '推广实时追踪',
      estimatorTitle: '推广收入测算器',
      estimatorDesc: '基于标准服务器方案 25% 终身循环分成计算',
      activeClients: '活跃推荐服务器数量:',
      monthlyRecurring: '每月被动收入',
      annualRevenue: '年度预估收益',
      joinNow: '立即加入计划',
      loginToTracker: '登录追踪面板 →',
      howItWorks: '运作流程介绍',
    },
    faq: {
      eyebrow: '清晰解答',
      title: '常见问题解答',
      subtitle: '关于服务器硬件、免费数据迁移、支付账单与控制面板操作的完整指南。',
    },
    newsletter: {
      badge: '系统公告与专属福利',
      title: '订阅维护预警与专属优惠折扣',
      subtitle: '在计划内核升级、数据中心扩容前 24 小时收到通知，并尊享限量折扣码。',
      placeholder: '请输入您的电子邮箱...',
      subscribe: '立即订阅',
      subscribing: '正在订阅...',
      successTitle: '您已成功加入订阅！',
      successDesc: '我们已将您的邮箱加入通知列表。请留意收件箱查收专属优惠福利。',
      anotherEmail: '订阅其他邮箱',
    },
    footer: {
      description: '高端低延迟游戏与 Bot 服务器托管平台。由 AMD Ryzen 9 7950X、NVMe Gen4 固态与 12+ Tbps Anycast DDoS 盾全面驱动。',
      products: '服务器产品',
      company: '平台介绍',
      support: '客户支持',
      legal: '法律与政策',
      allRightsReserved: '保留所有权利。非 Minecraft 官方产品，与 Mojang 或 Microsoft 无附属关系。',
    },
  },
};
