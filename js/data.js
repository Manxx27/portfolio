// ==========================================
// PORTFOLIO MOCK DATA
// ==========================================

const portfolioData = {
  personal: {
    name: "ภพธร วระนุช",
    nameEn: "Phobthorn Waranuch",
    studentId: "68092022",
    university: "มหาวิทยาลัยศรีปทุม (Sripatum University - SPU)",
    role: "นักศึกษา (Computer Science & Web Developer)",
    statusBadge: "พร้อมเปิดรับโอกาสฝึกงาน & ทำงาน (Open to Opportunities)",
    avatar: "assets/profile.png",
    shortBio: "นักศึกษา (รหัส 68092022) มหาวิทยาลัยศรีปทุม ผู้มีความหลงใหลในการเรียนรู้และสร้างสรรค์ Web Application ที่เรียบหรู รวดเร็ว และใช้งานง่าย มุ่งมั่นฝึกฝนทักษะการเขียนโค้ด Clean Code และการออกแบบ UI/UX ที่ยอดเยี่ยม",
    location: "กรุงเทพมหานคร, ประเทศไทย (Bangkok, Thailand)",
    email: "hjiopp414@gmail.com",
    phone: "098-072-5633",
    resumeUrl: "assets/resume-sample.pdf",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:hjiopp414@gmail.com"
    },
    stats: [
      { number: "100%", label: "ความมุ่งมั่นในการเรียนรู้ (Dedication)" },
      { number: "10+", label: "โปรเจกต์ & แบบฝึกหัด (Projects)" },
      { number: "3+", label: "ทักษะหลัก Frontend & Web" },
      { number: "Fast", label: "เรียนรู้ไว ปรับตัวเร็ว (Quick Learner)" }
    ]
  },

  about: {
    greeting: "สวัสดีครับ! ยินดีที่ได้รู้จัก",
    story: [
      "สวัสดีครับ! ผมชื่อ **ภพธร วระนุช (Phobthorn Waranuch)** รหัสนักศึกษา **68092022** ปัจจุบันเป็น **นักศึกษา มหาวิทยาลัยศรีปทุม (SPU)** ที่มีความหลงใหลและมุ่งมั่นในการเรียนรู้ด้านการพัฒนาเว็บไซต์และเทคโนโลยีซอฟต์แวร์ (Web Development & Software Engineering)",
      "ผมให้ความสำคัญกับการฝึกฝนทักษะอย่างต่อเนื่อง ทั้งการเขียนโค้ดตามมาตรฐาน **Clean Code**, การออกแบบส่วนติดต่อผู้ใช้ (UI/UX) ที่เรียบหรูและตอบสนองได้ทุกขนาดหน้าจอ (Responsive Design) ด้วย Tailwind CSS และ JavaScript",
      "ผมพร้อมเปิดรับโอกาสในการเรียนรู้ การทำโปรเจกต์ใหม่ๆ และการฝึกงานร่วมกับทีมพัฒนาเพื่อนำความรู้มาประยุกต์ใช้ในการสร้างคุณค่าให้กับองค์กรและผู้ใช้งานจริง"
    ],
    timeline: [
      {
        year: "ปัจจุบัน",
        title: "นักศึกษา (รหัสนักศึกษา 68092022)",
        company: "มหาวิทยาลัยศรีปทุม (Sripatum University - SPU)",
        description: "กำลังศึกษาด้านวิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ รหัสนักศึกษา 68092022 มุ่งเน้นการพัฒนา Web Application, Database และการคิดวิเคราะห์เชิงตรรกะ",
        tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Git"]
      },
      {
        year: "การเรียนรู้ & โปรเจกต์",
        title: "Frontend & Web Projects Developer",
        company: "Self-Directed Learning",
        description: "ศึกษาและพัฒนาโปรเจกต์จริงเพื่อฝึกฝนทักษะการแก้ปัญหา การใช้งาน REST API และการออกแบบ Interface ที่เป็นมิตรกับผู้ใช้งาน",
        tags: ["Modern JS", "Tailwind CSS", "Responsive Design", "UI/UX"]
      }
    ]
  },

  skills: [
    {
      category: "Frontend Development",
      icon: "layout",
      items: [
        { name: "HTML5 / Semantic Web", level: 95 },
        { name: "Tailwind CSS / Responsive", level: 92 },
        { name: "Modern JavaScript (ES6+)", level: 90 },
        { name: "React.js / Next.js", level: 88 },
        { name: "TypeScript", level: 82 },
        { name: "Vue.js", level: 78 }
      ]
    },
    {
      category: "Backend & Database",
      icon: "server",
      items: [
        { name: "Node.js & Express", level: 88 },
        { name: "RESTful API & GraphQL", level: 85 },
        { name: "PostgreSQL / Prisma", level: 82 },
        { name: "MongoDB / NoSQL", level: 80 },
        { name: "Python / FastAPI", level: 75 },
        { name: "Redis Caching", level: 72 }
      ]
    },
    {
      category: "Tools & DevOps",
      icon: "cpu",
      items: [
        { name: "Git & GitHub Workflow", level: 92 },
        { name: "Docker & Containerization", level: 80 },
        { name: "Figma (UI/UX Design)", level: 85 },
        { name: "Vercel / AWS Cloud", level: 78 },
        { name: "CI/CD & Testing (Jest)", level: 75 },
        { name: "Postman & API Design", level: 90 }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "OmniCart - Modern E-Commerce Platform",
      category: "fullstack",
      categoryLabel: "Full-Stack",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      description: "แพลตฟอร์มอีคอมเมิร์ซเต็มรูปแบบ รองรับระบบตะกร้าสินค้า ชำระเงินผ่าน Stripe และระบบจัดการคำสั่งซื้อหลังบ้านแบบ Real-time",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe API"],
      demoUrl: "https://example.com/demo/omnicart",
      githubUrl: "https://github.com/example/omnicart",
      featured: true
    },
    {
      id: 2,
      title: "FinPulse - Crypto & Financial Dashboard",
      category: "frontend",
      categoryLabel: "Frontend",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description: "แดชบอร์ดสรุปข้อมูลการลงทุนและวิเคราะห์พอร์ตการเงินส่วนบุคคล แสดงผลด้วยกราฟิกแบบโต้ตอบได้และอัปเดตราคาแบบ Real-time WebSocket",
      technologies: ["React.js", "Tailwind CSS", "Chart.js", "WebSocket", "Lucide"],
      demoUrl: "https://example.com/demo/finpulse",
      githubUrl: "https://github.com/example/finpulse",
      featured: true
    },
    {
      id: 3,
      title: "SyncSpace - Team Workspace & Task Manager",
      category: "fullstack",
      categoryLabel: "Full-Stack",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      description: "เครื่องมือบริหารงานโครงการสำหรับทีม รองรับ Kanban Board, ปฏิทินงาน, ระบบแจ้งเตือน และการสนทนาแลกเปลี่ยนความคิดเห็นแบบเรียลไทม์",
      technologies: ["Vue.js", "Tailwind CSS", "Express.js", "MongoDB", "Socket.io"],
      demoUrl: "https://example.com/demo/syncspace",
      githubUrl: "https://github.com/example/syncspace",
      featured: true
    },
    {
      id: 4,
      title: "AI Prompt Studio & Generator",
      category: "fullstack",
      categoryLabel: "Full-Stack / AI",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      description: "เว็บแอปพลิเคชันช่วยสร้างและปรับแต่ง AI Prompt สำหรับงานเขียนและสร้างภาพ พร้อมระบบจัดเก็บบันทึกและแชร์คลังคำสั่งให้กับเพื่อนร่วมทีม",
      technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Prisma", "Supabase"],
      demoUrl: "https://example.com/demo/aistudio",
      githubUrl: "https://github.com/example/aistudio",
      featured: false
    },
    {
      id: 5,
      title: "VitalTrack - Health & Fitness Companion",
      category: "mobile",
      categoryLabel: "Mobile / UI",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
      description: "แอปพลิเคชันบันทึกการออกกำลังกาย คำนวณปริมาณแคลอรี และติดตามการนอนหลับ ดีไซน์แบบ Modern Minimalist ที่ใช้งานง่าย",
      technologies: ["Tailwind CSS", "JavaScript", "PWA", "Local Storage", "Figma"],
      demoUrl: "https://example.com/demo/vitaltrack",
      githubUrl: "https://github.com/example/vitaltrack",
      featured: false
    },
    {
      id: 6,
      title: "Aura Studio - Minimalist Brand Agency Site",
      category: "frontend",
      categoryLabel: "Frontend / UI",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "เว็บไซต์พอร์ตโฟลิโอสำหรับเอเจนซี่ออกแบบ เน้น Micro-interactions, Smooth Scroll และ Typography ที่โดดเด่น",
      technologies: ["HTML5", "Tailwind CSS", "JavaScript", "Intersection Observer"],
      demoUrl: "https://example.com/demo/aurastudio",
      githubUrl: "https://github.com/example/aurastudio",
      featured: false
    }
  ]
};
