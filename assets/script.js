/* ===== TalentNode — shared JS: i18n, nav, filters, forms, reveal ===== */

const I18N = {
  vi: {
    "nav.home": "Trang chủ",
    "nav.courses": "Khóa học",
    "nav.instructors": "Giảng viên",
    "nav.contact": "Liên hệ",
    "nav.register": "Đăng ký",
    "nav.roadmap": "Lộ trình",
    "nav.tuition": "Học phí",
    "nav.schedule": "Lịch học",
    "nav.blog": "Blog",
    "nav.cta": "Học thử miễn phí",

    "roadmapPage.pill": "🧭 Từ số 0 đến đi làm",
    "roadmapPage.h1a": "Chọn đích đến,",
    "roadmapPage.h1b": "chúng tôi dẫn đường",
    "roadmapPage.p": "Mỗi nghề là một lộ trình 4 chặng — từ chưa biết gì đến sẵn sàng đi làm. Chọn vai trò bạn muốn trở thành.",
    "roadmap.destKicker": "Bạn muốn trở thành?",
    "roadmap.destH2": "Chọn nghề để xem lộ trình",
    "roadmap.pathKicker": "Lộ trình chi tiết",
    "roadmap.pathH2": "Từ không biết gì → đi làm",

    "tuitionPage.pill": "💳 Học phí minh bạch",
    "tuitionPage.h1a": "Đầu tư cho",
    "tuitionPage.h1b": "sự nghiệp của bạn",
    "tuitionPage.p": "Học phí trọn khóa, không phí ẩn. Nhiều ưu đãi cho sinh viên.",
    "tuition.comboKicker": "Combo tiết kiệm",
    "tuition.comboH2": "Trọn lộ trình một nghề",
    "tuition.discKicker": "Ưu đãi & học bổng",
    "tuition.discH2": "Nhiều cách để học tiết kiệm hơn",
    "tuition.noteTitle": "Cam kết của TalentNode",
    "tuition.note": "Học phí đã gồm tài liệu, lab dựng sẵn và mentor. Được học lại miễn phí nếu chưa vững. Hoàn 100% trong 7 buổi đầu nếu không phù hợp.",

    "schedPage.pill": "🗓️ Lịch khai giảng",
    "schedPage.h1a": "Khai giảng",
    "schedPage.h1b": "sắp tới",
    "schedPage.p": "Các lớp sắp mở. Đăng ký sớm để giữ chỗ và nhận ưu đãi early-bird.",

    "blogPage.pill": "✍️ TalentNode Blog",
    "blogPage.h1a": "Kiến thức",
    "blogPage.h1b": "Data · AI · nghề",
    "blogPage.p": "Hướng dẫn, lộ trình và câu chuyện từ mentor — cập nhật hằng tuần.",
    "blog.searchPh": "Tìm bài viết…",
    "blog.all": "Tất cả",
    "blog.none": "Không tìm thấy bài viết phù hợp.",
    "a11y.skip": "Bỏ qua tới nội dung",
    "nf.msg": "Trang bạn tìm không tồn tại hoặc đã được chuyển. Quay lại trang chủ hoặc khám phá khóa học nhé.",
    "nf.home": "Về trang chủ",
    "nf.courses": "Xem khóa học",

    "hero.pill": "🚀 Trung tâm đào tạo Data · AI · ML",
    "hero.h1a": "Trở thành",
    "hero.h1b": "kỹ sư Data & AI",
    "hero.h1c": "được doanh nghiệp săn đón",
    "hero.lead": "TalentNode đào tạo Data Engineering, Machine Learning và AI theo dự án thực chiến — học từ mentor đang làm trong ngành, ra nghề với portfolio thật.",
    "hero.cta1": "Đăng ký ngay",
    "hero.cta2": "Xem khóa học",
    "hero.stat1": "Học viên",
    "hero.stat2": "Tỷ lệ có việc",
    "hero.stat3": "Mentor đi làm",
    "hero.stat4": "Đánh giá",
    "hero.badge1": "Dự án thực chiến",
    "hero.badge2": "Mentor 1-1",

    "logos.title": "Học viên đang làm việc tại",

    "why.kicker": "Vì sao TalentNode",
    "why.h2": "Học để đi làm, không học để đối phó",
    "why.p": "Chương trình bám sát công việc thực tế của Data/AI Engineer tại doanh nghiệp Việt Nam và quốc tế.",
    "why.1t": "Dự án thực chiến",
    "why.1p": "Mỗi khóa gắn với 3–5 dự án end-to-end: pipeline dữ liệu, mô hình ML, triển khai lên cloud.",
    "why.2t": "Mentor trong ngành",
    "why.2p": "Học trực tiếp từ Data Engineer, ML Engineer đang làm tại các công ty công nghệ và ngân hàng.",
    "why.3t": "Lộ trình cá nhân hóa",
    "why.3p": "Đầu vào kiểm tra trình độ, đầu ra là portfolio + review CV và luyện phỏng vấn.",
    "why.4t": "Cộng đồng alumni",
    "why.4p": "Cộng đồng alumni năng động, chia sẻ kinh nghiệm và cùng nhau học hỏi lâu dài.",
    "why.5t": "Học mọi lúc",
    "why.5p": "Lớp online tương tác + bản ghi trọn đời, lab dựng sẵn không cần cấu hình phức tạp.",
    "why.6t": "Công nghệ mới nhất",
    "why.6p": "Python, SQL, Spark, Kafka, dbt, PyTorch, LLM/RAG và MLOps — đúng stack doanh nghiệp dùng.",

    "courses.kicker": "Khóa học nổi bật",
    "courses.h2": "Chọn hướng đi của bạn",
    "courses.p": "Từ nền tảng dữ liệu đến AI nâng cao — có lộ trình cho cả người mới và người đã đi làm.",
    "courses.viewall": "Xem tất cả khóa học",
    "courses.detail": "Chi tiết",
    "courses.enroll": "Ghi danh",
    "c.weeks": "tuần",
    "c.level": "Trình độ",
    "c.projects": "dự án",
    "lvl.beginner": "Cơ bản",
    "lvl.inter": "Trung cấp",
    "lvl.advanced": "Nâng cao",

    "course.de.t": "Data Engineering Zero → Hero",
    "course.de.d": "SQL, Python, Spark, Kafka, dbt, Airflow và lakehouse. Dựng pipeline dữ liệu production từ số 0.",
    "course.ml.t": "Machine Learning thực chiến",
    "course.ml.d": "Từ hồi quy đến ensemble, feature engineering, đánh giá mô hình và đưa model lên production.",
    "course.ai.t": "AI Engineer: LLM & RAG",
    "course.ai.d": "Xây ứng dụng với LLM, RAG, agent, fine-tuning và đánh giá — kèm MLOps cho hệ AI.",
    "course.ds.t": "Data Science nền tảng",
    "course.ds.d": "Thống kê, phân tích dữ liệu, trực quan hóa và storytelling cho quyết định kinh doanh.",
    "course.mlops.t": "MLOps & Deployment",
    "course.mlops.d": "CI/CD cho ML, giám sát drift, MLflow, Docker, Kubernetes và triển khai đa cloud.",
    "course.dl.t": "Deep Learning với PyTorch",
    "course.dl.d": "Mạng nơ-ron, CNN, RNN, Transformer và huấn luyện mô hình trên GPU.",

    "how.kicker": "Lộ trình học",
    "how.h2": "4 bước để đổi nghề",
    "how.1t": "Tư vấn & test đầu vào",
    "how.1p": "Đánh giá trình độ, chọn lộ trình phù hợp mục tiêu nghề nghiệp của bạn.",
    "how.2t": "Học theo dự án",
    "how.2p": "Kết hợp lý thuyết và lab thực hành, làm dự án thật cùng mentor.",
    "how.3t": "Xây portfolio",
    "how.3p": "Hoàn thiện các dự án end-to-end đưa lên GitHub, sẵn sàng khoe nhà tuyển dụng.",
    "how.4t": "Luyện phỏng vấn",
    "how.4p": "Review CV và luyện phỏng vấn (mock interview) để bạn tự tin ứng tuyển.",

    "mentors.kicker": "Đội ngũ giảng viên",
    "mentors.h2": "Học từ người đang làm nghề",
    "mentors.p": "Mentor của TalentNode là các kỹ sư Data/AI đang làm tại doanh nghiệp, không phải giảng viên lý thuyết.",
    "mentors.viewall": "Gặp toàn bộ giảng viên",

    "cta.h2": "Sẵn sàng bắt đầu hành trình Data & AI?",
    "cta.p": "Đặt lịch tư vấn miễn phí — nhận lộ trình học cá nhân hóa trong 24 giờ.",
    "cta.btn": "Đăng ký học thử",

    "coursesPage.pill": "📚 Toàn bộ chương trình",
    "coursesPage.h1a": "Khóa học",
    "coursesPage.h1b": "Data · AI · ML",
    "coursesPage.p": "Lọc theo lĩnh vực để tìm khóa phù hợp. Mọi khóa đều học theo dự án và có mentor đồng hành.",
    "filter.all": "Tất cả",
    "filter.data": "Data Engineering",
    "filter.ml": "Machine Learning",
    "filter.ai": "AI / LLM",
    "filter.ds": "Data Science",

    "instrPage.pill": "👩‍🏫 Đội ngũ mentor",
    "instrPage.h1a": "Những người",
    "instrPage.h1b": "dẫn đường",
    "instrPage.p": "Kỹ sư và chuyên gia Data/AI với kinh nghiệm thực chiến tại doanh nghiệp trong và ngoài nước.",

    "contactPage.pill": "✉️ Liên hệ",
    "contactPage.h1a": "Kết nối với",
    "contactPage.h1b": "TalentNode",
    "contactPage.p": "Có câu hỏi về khóa học, học phí hay lộ trình? Nhắn cho chúng tôi — phản hồi trong vòng 24 giờ.",
    "contact.addrT": "Địa chỉ",
    "contact.addrV": "Tầng 5, Tòa nhà Innovation, Cầu Giấy, Hà Nội",
    "contact.phoneT": "Điện thoại / Zalo",
    "contact.emailT": "Email",
    "contact.hoursT": "Giờ làm việc",
    "contact.hoursV": "Thứ 2 – Thứ 7: 8:30 – 21:00",
    "contact.formT": "Gửi tin nhắn cho chúng tôi",
    "contact.name": "Họ và tên",
    "contact.email": "Email",
    "contact.phone": "Số điện thoại",
    "contact.subject": "Chủ đề",
    "contact.message": "Nội dung",
    "contact.send": "Gửi tin nhắn",
    "contact.success": "✅ Cảm ơn bạn! Chúng tôi đã nhận tin nhắn và sẽ phản hồi trong 24 giờ.",

    "regPage.pill": "📝 Ghi danh",
    "regPage.h1a": "Đăng ký",
    "regPage.h1b": "khóa học",
    "regPage.p": "Điền thông tin bên dưới, đội ngũ tư vấn sẽ liên hệ để chốt lộ trình và ưu đãi học phí.",
    "reg.name": "Họ và tên",
    "reg.email": "Email",
    "reg.phone": "Số điện thoại",
    "reg.course": "Khóa học quan tâm",
    "reg.coursePick": "— Chọn khóa học —",
    "reg.level": "Trình độ hiện tại",
    "reg.levelPick": "— Chọn trình độ —",
    "reg.lvl1": "Mới bắt đầu, chưa biết lập trình",
    "reg.lvl2": "Biết cơ bản Python/SQL",
    "reg.lvl3": "Đã đi làm, muốn nâng cao",
    "reg.mode": "Hình thức học",
    "reg.online": "Online",
    "reg.offline": "Tại trung tâm (Hà Nội)",
    "reg.goal": "Mục tiêu của bạn",
    "reg.goalPh": "VD: chuyển ngành sang Data Engineer trong 6 tháng...",
    "reg.submit": "Gửi đăng ký",
    "reg.note": "Bằng việc đăng ký, bạn đồng ý để TalentNode liên hệ tư vấn. Không spam.",
    "reg.success": "🎉 Đăng ký thành công! Tư vấn viên sẽ gọi cho bạn trong 24 giờ tới.",

    "faq.h2": "Câu hỏi thường gặp",
    "faq.1q": "Tôi chưa biết lập trình có học được không?",
    "faq.1a": "Được. Các khóa nền tảng bắt đầu từ số 0 với Python và SQL, mentor kèm sát trong giai đoạn đầu.",
    "faq.2q": "Lớp học diễn ra thế nào?",
    "faq.2a": "Toàn bộ lớp học diễn ra online, tương tác trực tiếp với giảng viên và có bản ghi trọn đời để xem lại bất cứ lúc nào.",
    "faq.3q": "Có hỗ trợ chuẩn bị xin việc không?",
    "faq.3a": "Có. Chúng tôi review CV và luyện phỏng vấn (mock interview) để bạn sẵn sàng và tự tin khi ứng tuyển.",
    "faq.4q": "Học phí thế nào?",
    "faq.4a": "Học phí tùy khóa, có nhiều ưu đãi cho sinh viên và đăng ký sớm. Liên hệ để nhận báo giá chi tiết.",

    "footer.desc": "Trung tâm đào tạo Data, AI và Machine Learning theo dự án thực chiến. Học để đi làm.",
    "footer.explore": "Khám phá",
    "footer.courses": "Khóa học",
    "footer.contactH": "Liên hệ",
    "footer.follow": "Theo dõi",
    "footer.rights": "© 2026 TalentNode. Bảo lưu mọi quyền.",
    "footer.made": "Made in Hà Nội với 💜"
  },

  en: {
    "nav.home": "Home",
    "nav.courses": "Courses",
    "nav.instructors": "Instructors",
    "nav.contact": "Contact",
    "nav.register": "Register",
    "nav.roadmap": "Roadmap",
    "nav.tuition": "Tuition",
    "nav.schedule": "Schedule",
    "nav.blog": "Blog",
    "nav.cta": "Free trial class",

    "roadmapPage.pill": "🧭 From zero to hired",
    "roadmapPage.h1a": "Pick a destination,",
    "roadmapPage.h1b": "we guide the way",
    "roadmapPage.p": "Each role is a 4-stage path — from knowing nothing to job-ready. Pick the role you want to become.",
    "roadmap.destKicker": "What do you want to be?",
    "roadmap.destH2": "Pick a role to see its path",
    "roadmap.pathKicker": "Detailed roadmap",
    "roadmap.pathH2": "From zero → hired",

    "tuitionPage.pill": "💳 Transparent tuition",
    "tuitionPage.h1a": "Invest in",
    "tuitionPage.h1b": "your career",
    "tuitionPage.p": "Full-course pricing, no hidden fees. Plenty of student discounts.",
    "tuition.comboKicker": "Bundle & save",
    "tuition.comboH2": "A full path for one role",
    "tuition.discKicker": "Discounts & scholarships",
    "tuition.discH2": "More ways to learn for less",
    "tuition.noteTitle": "The TalentNode promise",
    "tuition.note": "Tuition includes materials, pre-built labs and mentoring. Free re-study if you need it. Full refund within the first 7 sessions if it's not the right fit.",

    "schedPage.pill": "🗓️ Class schedule",
    "schedPage.h1a": "Upcoming",
    "schedPage.h1b": "cohorts",
    "schedPage.p": "Classes opening soon. Register early to reserve a seat and get the early-bird deal.",

    "blogPage.pill": "✍️ TalentNode Blog",
    "blogPage.h1a": "Knowledge for",
    "blogPage.h1b": "Data · AI · career",
    "blogPage.p": "Guides, roadmaps and mentor stories — updated weekly.",
    "blog.searchPh": "Search posts…",
    "blog.all": "All",
    "blog.none": "No matching posts found.",
    "a11y.skip": "Skip to content",
    "nf.msg": "The page you're looking for doesn't exist or has moved. Head back home or explore the courses.",
    "nf.home": "Back to home",
    "nf.courses": "Browse courses",

    "hero.pill": "🚀 Data · AI · ML training center",
    "hero.h1a": "Become a",
    "hero.h1b": "Data & AI engineer",
    "hero.h1c": "companies compete to hire",
    "hero.lead": "TalentNode teaches Data Engineering, Machine Learning and AI through real-world projects — learn from mentors working in the field and graduate with a real portfolio.",
    "hero.cta1": "Register now",
    "hero.cta2": "Browse courses",
    "hero.stat1": "Students",
    "hero.stat2": "Job placement",
    "hero.stat3": "Working mentors",
    "hero.stat4": "Rating",
    "hero.badge1": "Real projects",
    "hero.badge2": "1-on-1 mentoring",

    "logos.title": "Our graduates now work at",

    "why.kicker": "Why TalentNode",
    "why.h2": "Learn to get hired, not to pass a test",
    "why.p": "Our curriculum mirrors the real work of Data/AI Engineers at Vietnamese and global companies.",
    "why.1t": "Real-world projects",
    "why.1p": "Every course ships 3–5 end-to-end projects: data pipelines, ML models, cloud deployment.",
    "why.2t": "Industry mentors",
    "why.2p": "Learn directly from Data & ML Engineers currently working at tech companies and banks.",
    "why.3t": "Personalized path",
    "why.3p": "We assess your level on entry; you leave with a portfolio, CV review and interview prep.",
    "why.4t": "Alumni community",
    "why.4p": "An active alumni community that shares experience and keeps learning together.",
    "why.5t": "Learn anytime",
    "why.5p": "Live interactive classes + lifetime recordings, pre-built labs with zero painful setup.",
    "why.6t": "Modern stack",
    "why.6p": "Python, SQL, Spark, Kafka, dbt, PyTorch, LLM/RAG and MLOps — the exact enterprise stack.",

    "courses.kicker": "Featured courses",
    "courses.h2": "Choose your track",
    "courses.p": "From data foundations to advanced AI — a path for both beginners and working professionals.",
    "courses.viewall": "View all courses",
    "courses.detail": "Details",
    "courses.enroll": "Enroll",
    "c.weeks": "weeks",
    "c.level": "Level",
    "c.projects": "projects",
    "lvl.beginner": "Beginner",
    "lvl.inter": "Intermediate",
    "lvl.advanced": "Advanced",

    "course.de.t": "Data Engineering Zero → Hero",
    "course.de.d": "SQL, Python, Spark, Kafka, dbt, Airflow and lakehouse. Build production data pipelines from scratch.",
    "course.ml.t": "Practical Machine Learning",
    "course.ml.d": "From regression to ensembles, feature engineering, model evaluation and shipping to production.",
    "course.ai.t": "AI Engineer: LLM & RAG",
    "course.ai.d": "Build apps with LLMs, RAG, agents, fine-tuning and evaluation — plus MLOps for AI systems.",
    "course.ds.t": "Data Science Foundations",
    "course.ds.d": "Statistics, data analysis, visualization and storytelling for business decisions.",
    "course.mlops.t": "MLOps & Deployment",
    "course.mlops.d": "CI/CD for ML, drift monitoring, MLflow, Docker, Kubernetes and multi-cloud deployment.",
    "course.dl.t": "Deep Learning with PyTorch",
    "course.dl.d": "Neural networks, CNNs, RNNs, Transformers and training models on GPUs.",

    "how.kicker": "Learning path",
    "how.h2": "4 steps to switch careers",
    "how.1t": "Consult & entry test",
    "how.1p": "We assess your level and pick a path that fits your career goals.",
    "how.2t": "Project-based learning",
    "how.2p": "Theory plus hands-on labs, building real projects alongside your mentor.",
    "how.3t": "Build your portfolio",
    "how.3p": "Ship end-to-end projects to GitHub, ready to show any recruiter.",
    "how.4t": "Interview prep & jobs",
    "how.4p": "CV review and mock interviews so you can apply with confidence.",

    "mentors.kicker": "Our instructors",
    "mentors.h2": "Learn from people doing the job",
    "mentors.p": "TalentNode mentors are Data/AI engineers working in industry — not theory-only lecturers.",
    "mentors.viewall": "Meet all instructors",

    "cta.h2": "Ready to start your Data & AI journey?",
    "cta.p": "Book a free consultation — get your personalized learning path within 24 hours.",
    "cta.btn": "Book a trial class",

    "coursesPage.pill": "📚 Full curriculum",
    "coursesPage.h1a": "Courses in",
    "coursesPage.h1b": "Data · AI · ML",
    "coursesPage.p": "Filter by track to find your fit. Every course is project-based with a dedicated mentor.",
    "filter.all": "All",
    "filter.data": "Data Engineering",
    "filter.ml": "Machine Learning",
    "filter.ai": "AI / LLM",
    "filter.ds": "Data Science",

    "instrPage.pill": "👩‍🏫 Mentor team",
    "instrPage.h1a": "The people",
    "instrPage.h1b": "guiding you",
    "instrPage.p": "Data/AI engineers and specialists with real industry experience at home and abroad.",

    "contactPage.pill": "✉️ Contact",
    "contactPage.h1a": "Get in touch with",
    "contactPage.h1b": "TalentNode",
    "contactPage.p": "Questions about courses, tuition or your path? Message us — we reply within 24 hours.",
    "contact.addrT": "Address",
    "contact.addrV": "5th Floor, Innovation Tower, Cau Giay, Hanoi",
    "contact.phoneT": "Phone / Zalo",
    "contact.emailT": "Email",
    "contact.hoursT": "Working hours",
    "contact.hoursV": "Mon – Sat: 8:30 AM – 9:00 PM",
    "contact.formT": "Send us a message",
    "contact.name": "Full name",
    "contact.email": "Email",
    "contact.phone": "Phone number",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.success": "✅ Thank you! We received your message and will reply within 24 hours.",

    "regPage.pill": "📝 Enrollment",
    "regPage.h1a": "Register for a",
    "regPage.h1b": "course",
    "regPage.p": "Fill in the form below and our advisors will contact you to finalize your path and tuition offer.",
    "reg.name": "Full name",
    "reg.email": "Email",
    "reg.phone": "Phone number",
    "reg.course": "Course of interest",
    "reg.coursePick": "— Select a course —",
    "reg.level": "Current level",
    "reg.levelPick": "— Select your level —",
    "reg.lvl1": "Total beginner, no coding yet",
    "reg.lvl2": "Know basic Python/SQL",
    "reg.lvl3": "Working professional, want to level up",
    "reg.mode": "Study mode",
    "reg.online": "Online",
    "reg.offline": "On-site (Hanoi)",
    "reg.goal": "Your goal",
    "reg.goalPh": "e.g. switch into Data Engineering within 6 months...",
    "reg.submit": "Submit registration",
    "reg.note": "By registering, you agree to be contacted by TalentNode advisors. No spam.",
    "reg.success": "🎉 Registration received! An advisor will call you within the next 24 hours.",

    "faq.h2": "Frequently asked questions",
    "faq.1q": "Can I join if I can't code yet?",
    "faq.1a": "Yes. Foundation courses start from zero with Python and SQL, with close mentor support early on.",
    "faq.2q": "How are classes held?",
    "faq.2a": "All classes are held online — live and interactive with your instructor, plus lifetime recordings to revisit anytime.",
    "faq.3q": "Do you help with job prep?",
    "faq.3a": "Yes. We review CVs and run mock interviews so you're ready and confident when you apply.",
    "faq.4q": "How does tuition work?",
    "faq.4a": "Tuition varies by course, with plenty of student and early-bird discounts. Contact us for a detailed quote.",

    "footer.desc": "A project-based Data, AI and Machine Learning training center. Learn to get hired.",
    "footer.explore": "Explore",
    "footer.courses": "Courses",
    "footer.contactH": "Contact",
    "footer.follow": "Follow",
    "footer.rights": "© 2026 TalentNode. All rights reserved.",
    "footer.made": "Made in Hanoi with 💜"
  }
};

let CURRENT_LANG = "vi";
const T = (obj) => (obj && (obj[CURRENT_LANG] || obj.vi)) || "";
const IS_VI = () => CURRENT_LANG === "vi";
const QS = (k) => new URLSearchParams(location.search).get(k);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

let COURSE_FILTER = "all";
function applyCourseFilter() {
  document.querySelectorAll("#courses-grid [data-cat]").forEach((c) => {
    c.style.display = COURSE_FILTER === "all" || c.dataset.cat === COURSE_FILTER ? "" : "none";
  });
}

// Blog search + pagination state
const BLOG_PAGE_SIZE = 3;
let BLOG_QUERY = "";
let BLOG_TAG = "all";
let BLOG_PAGE = 1;

const SITE_URL = "https://sophie-nguyenthuthuy.github.io/talentnode/";
function injectLd(id, data) {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.id = id;
  s.textContent = JSON.stringify(data);
  document.head.appendChild(s);
}
function isoDate(dmy) {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(dmy || "");
  return m ? `${m[3]}-${m[2]}-${m[1]}` : undefined;
}

const LOGO_SVG =
  '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
  '<g stroke="#fff" stroke-width="1.7" stroke-linecap="round">' +
  '<line x1="12" y1="6.5" x2="6.5" y2="17"/><line x1="12" y1="6.5" x2="17.5" y2="17"/><line x1="6.5" y1="17" x2="17.5" y2="17"/></g>' +
  '<g fill="#fff"><circle cx="12" cy="6.5" r="2.5"/><circle cx="6.5" cy="17" r="2.5"/><circle cx="17.5" cy="17" r="2.5"/></g></svg>';

/* ============ Structured bilingual content (rendered by JS) ============ */
const DATA = {
  // roadmap.sh-style role chips
  destinations: [
    { name: "Data Analyst", track: "da" },
    { name: "Data Engineer", track: "de" },
    { name: "AI & Data Scientist", track: "ds" },
    { name: "Machine Learning", track: "ml" },
    { name: "AI Engineer", track: "ml" },
    { name: "MLOps", track: "de" },
    { name: "Python for Data Analysis", track: "da" },
    { name: "Backend", soon: true },
    { name: "DevOps", soon: true },
    { name: "Full Stack", soon: true },
    { name: "Software Architect", soon: true },
    { name: "Product Manager", soon: true }
  ],

  courses: [
    {
      id: "de", cat: "data", tagClass: "data", tagLabel: { vi: "Data Engineering", en: "Data Engineering" },
      title: { vi: "Data Engineering Zero → Hero", en: "Data Engineering Zero → Hero" },
      tagline: { vi: "Dựng pipeline dữ liệu production từ số 0 — SQL, Spark, Kafka, dbt, Airflow và lakehouse.", en: "Build production data pipelines from scratch — SQL, Spark, Kafka, dbt, Airflow and lakehouse." },
      price: "7.900.000đ", old: "18.900.000đ", studentPrice: "5.900.000đ", weeks: 12, projects: 5,
      level: { vi: "Cơ bản → Trung cấp", en: "Beginner → Intermediate" }, format: { vi: "Online", en: "Online" },
      outcomes: [
        { vi: "Thiết kế & vận hành pipeline batch và streaming", en: "Design & run batch and streaming pipelines" },
        { vi: "Mô hình hóa dữ liệu và xây lakehouse", en: "Data modeling and building a lakehouse" },
        { vi: "Xử lý dữ liệu lớn với Spark, streaming với Kafka", en: "Big data with Spark, streaming with Kafka" },
        { vi: "Orchestrate với Airflow, transform với dbt", en: "Orchestrate with Airflow, transform with dbt" },
        { vi: "Triển khai lên cloud kèm CI/CD", en: "Deploy to the cloud with CI/CD" }
      ],
      curriculum: [
        { vi: "Nền tảng: Linux, Git, Python & SQL nâng cao", en: "Foundations: Linux, Git, Python & advanced SQL" },
        { vi: "Mô hình dữ liệu & Data Warehouse (star schema, dbt)", en: "Data modeling & warehousing (star schema, dbt)" },
        { vi: "Xử lý dữ liệu lớn với Apache Spark", en: "Big data processing with Apache Spark" },
        { vi: "Streaming với Kafka & xử lý thời gian thực", en: "Streaming with Kafka & real-time processing" },
        { vi: "Orchestration với Airflow & Lakehouse (Delta/Iceberg)", en: "Orchestration with Airflow & Lakehouse (Delta/Iceberg)" },
        { vi: "Đồ án cuối: pipeline end-to-end trên cloud", en: "Capstone: an end-to-end pipeline on the cloud" }
      ],
      tools: ["Python", "SQL", "PostgreSQL", "Apache Spark", "Kafka", "dbt", "Airflow", "Docker", "AWS"],
      audience: [
        { vi: "Người mới muốn vào nghề Data Engineer", en: "Newcomers aiming for a Data Engineer role" },
        { vi: "Lập trình viên / Data Analyst muốn chuyển sang DE", en: "Developers / Data Analysts moving into DE" },
        { vi: "Sinh viên IT muốn có portfolio thực chiến", en: "IT students who want a real portfolio" }
      ]
    },
    {
      id: "ml", cat: "ml", tagClass: "ml", tagLabel: { vi: "Machine Learning", en: "Machine Learning" },
      title: { vi: "Machine Learning thực chiến", en: "Practical Machine Learning" },
      tagline: { vi: "Từ hồi quy đến ensemble, feature engineering và đưa mô hình lên production.", en: "From regression to ensembles, feature engineering and shipping models to production." },
      price: "7.900.000đ", old: "19.900.000đ", studentPrice: "5.900.000đ", weeks: 10, projects: 4,
      level: { vi: "Trung cấp", en: "Intermediate" }, format: { vi: "Online", en: "Online" },
      outcomes: [
        { vi: "Nắm quy trình ML end-to-end", en: "Master the end-to-end ML workflow" },
        { vi: "Feature engineering & xây pipeline", en: "Feature engineering & building pipelines" },
        { vi: "Đánh giá, tuning và tránh overfitting/leakage", en: "Evaluate, tune and avoid overfitting/leakage" },
        { vi: "Đưa mô hình thành API phục vụ thực tế", en: "Serve models as a real-world API" }
      ],
      curriculum: [
        { vi: "Toán & Python cho Machine Learning", en: "Math & Python for Machine Learning" },
        { vi: "Hồi quy & phân loại", en: "Regression & classification" },
        { vi: "Feature engineering & pipeline", en: "Feature engineering & pipelines" },
        { vi: "Ensemble: Random Forest, XGBoost", en: "Ensembles: Random Forest, XGBoost" },
        { vi: "Đánh giá, tuning & cross-validation", en: "Evaluation, tuning & cross-validation" },
        { vi: "Đồ án: dự đoán churn + deploy API", en: "Project: churn prediction + API deploy" }
      ],
      tools: ["Python", "NumPy", "pandas", "scikit-learn", "XGBoost", "Matplotlib", "FastAPI"],
      audience: [
        { vi: "Biết Python cơ bản, muốn vào ML", en: "Know basic Python, want to break into ML" },
        { vi: "Data Analyst muốn lên Data Scientist / ML", en: "Analysts leveling up to Data Scientist / ML" },
        { vi: "Kỹ sư phần mềm muốn thêm kỹ năng ML", en: "Software engineers adding ML skills" }
      ]
    },
    {
      id: "ai", cat: "ai", tagClass: "ai", tagLabel: { vi: "AI / LLM", en: "AI / LLM" },
      title: { vi: "AI Engineer: LLM & RAG", en: "AI Engineer: LLM & RAG" },
      tagline: { vi: "Xây ứng dụng LLM thực chiến — RAG, agent, fine-tuning, đánh giá và MLOps cho AI.", en: "Build real LLM apps — RAG, agents, fine-tuning, evaluation and MLOps for AI." },
      price: "8.900.000đ", old: "22.900.000đ", studentPrice: "6.700.000đ", weeks: 10, projects: 4,
      level: { vi: "Nâng cao", en: "Advanced" }, format: { vi: "Online", en: "Online" },
      outcomes: [
        { vi: "Xây RAG pipeline end-to-end", en: "Build an end-to-end RAG pipeline" },
        { vi: "Dùng embeddings & vector database", en: "Use embeddings & vector databases" },
        { vi: "Thiết kế agent và tool-use", en: "Design agents and tool-use" },
        { vi: "Đánh giá chất lượng LLM & triển khai app", en: "Evaluate LLM quality & deploy the app" }
      ],
      curriculum: [
        { vi: "Nền tảng LLM & prompt engineering", en: "LLM foundations & prompt engineering" },
        { vi: "Embeddings & vector search", en: "Embeddings & vector search" },
        { vi: "RAG end-to-end", en: "End-to-end RAG" },
        { vi: "Agents & tool-use", en: "Agents & tool-use" },
        { vi: "Fine-tuning & đánh giá (LLM-as-judge)", en: "Fine-tuning & evaluation (LLM-as-judge)" },
        { vi: "Đồ án: chatbot doanh nghiệp có trích dẫn", en: "Project: an enterprise chatbot with citations" }
      ],
      tools: ["Python", "PyTorch", "Hugging Face", "LangChain", "FAISS / Qdrant", "Ollama", "FastAPI"],
      audience: [
        { vi: "Dev / ML Engineer muốn làm AI Engineer", en: "Devs / ML engineers moving into AI Engineering" },
        { vi: "Đã biết Python & ML cơ bản", en: "Already know Python & basic ML" },
        { vi: "Muốn xây sản phẩm trên nền LLM", en: "Want to build LLM-powered products" }
      ]
    },
    {
      id: "ds", cat: "ds", tagClass: "eng", tagLabel: { vi: "Data Science", en: "Data Science" },
      title: { vi: "Data Science nền tảng", en: "Data Science Foundations" },
      tagline: { vi: "Thống kê, phân tích, trực quan hóa và storytelling cho quyết định kinh doanh.", en: "Statistics, analysis, visualization and storytelling for business decisions." },
      price: "5.900.000đ", old: "14.900.000đ", studentPrice: "4.400.000đ", weeks: 8, projects: 3,
      level: { vi: "Cơ bản", en: "Beginner" }, format: { vi: "Online", en: "Online" },
      outcomes: [
        { vi: "Phân tích dữ liệu với Python & SQL", en: "Analyze data with Python & SQL" },
        { vi: "Kiểm định giả thuyết & A/B testing", en: "Hypothesis testing & A/B testing" },
        { vi: "Trực quan hóa & xây dashboard", en: "Visualization & building dashboards" },
        { vi: "Storytelling dữ liệu cho quyết định", en: "Data storytelling for decisions" }
      ],
      curriculum: [
        { vi: "Python & pandas cho phân tích", en: "Python & pandas for analysis" },
        { vi: "Thống kê & xác suất ứng dụng", en: "Applied statistics & probability" },
        { vi: "Trực quan hóa dữ liệu", en: "Data visualization" },
        { vi: "A/B testing & kiểm định giả thuyết", en: "A/B testing & hypothesis testing" },
        { vi: "SQL phân tích & dashboard", en: "Analytical SQL & dashboards" },
        { vi: "Đồ án: phân tích sản phẩm end-to-end", en: "Project: end-to-end product analysis" }
      ],
      tools: ["Python", "pandas", "NumPy", "SQL", "Matplotlib", "Seaborn", "Power BI"],
      audience: [
        { vi: "Người mới bắt đầu với dữ liệu", en: "Complete beginners with data" },
        { vi: "Muốn làm Data Analyst / Data Scientist", en: "Aiming for Data Analyst / Data Scientist" },
        { vi: "Dân kinh doanh muốn ra quyết định bằng dữ liệu", en: "Business folks who want data-driven decisions" }
      ]
    },
    {
      id: "mlops", cat: "ml", tagClass: "ml", tagLabel: { vi: "Machine Learning", en: "Machine Learning" },
      title: { vi: "MLOps & Deployment", en: "MLOps & Deployment" },
      tagline: { vi: "CI/CD cho ML, giám sát drift và triển khai mô hình lên đa cloud.", en: "CI/CD for ML, drift monitoring and multi-cloud model deployment." },
      price: "8.900.000đ", old: "21.900.000đ", studentPrice: "6.700.000đ", weeks: 8, projects: 4,
      level: { vi: "Nâng cao", en: "Advanced" }, format: { vi: "Online", en: "Online" },
      outcomes: [
        { vi: "Đóng gói & versioning mô hình", en: "Package & version models" },
        { vi: "CI/CD cho pipeline ML", en: "CI/CD for ML pipelines" },
        { vi: "Giám sát drift & hiệu năng", en: "Monitor drift & performance" },
        { vi: "Triển khai container / Kubernetes", en: "Deploy on containers / Kubernetes" }
      ],
      curriculum: [
        { vi: "Nền tảng MLOps & Git workflow", en: "MLOps foundations & Git workflow" },
        { vi: "Đóng gói model & MLflow tracking", en: "Model packaging & MLflow tracking" },
        { vi: "CI/CD với GitHub Actions", en: "CI/CD with GitHub Actions" },
        { vi: "Docker & Kubernetes cho ML", en: "Docker & Kubernetes for ML" },
        { vi: "Giám sát drift & observability", en: "Drift monitoring & observability" },
        { vi: "Đồ án: pipeline ML tự động end-to-end", en: "Project: automated end-to-end ML pipeline" }
      ],
      tools: ["Python", "MLflow", "Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana"],
      audience: [
        { vi: "ML / Data Scientist muốn đưa model ra production", en: "ML / Data Scientists shipping models to production" },
        { vi: "DevOps muốn chuyển sang MLOps", en: "DevOps engineers moving into MLOps" },
        { vi: "Data Engineer muốn mở rộng sang ML", en: "Data Engineers expanding into ML" }
      ]
    },
    {
      id: "dl", cat: "ai", tagClass: "ai", tagLabel: { vi: "AI / LLM", en: "AI / LLM" },
      title: { vi: "Deep Learning với PyTorch", en: "Deep Learning with PyTorch" },
      tagline: { vi: "Mạng nơ-ron, CNN, RNN, Transformer và huấn luyện mô hình trên GPU.", en: "Neural networks, CNNs, RNNs, Transformers and training on GPUs." },
      price: "8.900.000đ", old: "22.900.000đ", studentPrice: "6.700.000đ", weeks: 10, projects: 4,
      level: { vi: "Nâng cao", en: "Advanced" }, format: { vi: "Online", en: "Online" },
      outcomes: [
        { vi: "Hiểu & xây dựng mạng nơ-ron", en: "Understand & build neural networks" },
        { vi: "CNN cho thị giác máy tính", en: "CNNs for computer vision" },
        { vi: "RNN & Transformer cho dữ liệu chuỗi", en: "RNNs & Transformers for sequence data" },
        { vi: "Huấn luyện trên GPU & transfer learning", en: "GPU training & transfer learning" }
      ],
      curriculum: [
        { vi: "Nền tảng deep learning & PyTorch", en: "Deep learning foundations & PyTorch" },
        { vi: "Mạng nơ-ron & lan truyền ngược", en: "Neural networks & backpropagation" },
        { vi: "CNN & thị giác máy tính", en: "CNNs & computer vision" },
        { vi: "RNN & dữ liệu chuỗi thời gian", en: "RNNs & time-series data" },
        { vi: "Transformer & cơ chế attention", en: "Transformers & attention" },
        { vi: "Đồ án: phân loại ảnh hoặc NLP", en: "Project: image classification or NLP" }
      ],
      tools: ["Python", "PyTorch", "torchvision", "Hugging Face", "CUDA", "NumPy"],
      audience: [
        { vi: "Đã biết ML cơ bản, muốn học sâu", en: "Know basic ML, want to go deep" },
        { vi: "Muốn làm về Computer Vision / NLP", en: "Aiming for Computer Vision / NLP" },
        { vi: "Nghiên cứu sinh / kỹ sư AI", en: "Researchers / AI engineers" }
      ]
    }
  ],

  // Detailed zero → job-ready syllabi (grounded in roadmap.sh). Keyed by course id.
  syllabi: {
    de: [
      { week: "1", title: { vi: "Nền tảng: Linux, Shell & Git", en: "Foundations: Linux, Shell & Git" },
        topics: [ { vi: "Linux & dòng lệnh, quản lý file/tiến trình", en: "Linux & the command line, files/processes" }, { vi: "Bash scripting cho tự động hóa", en: "Bash scripting for automation" }, { vi: "Git & GitHub: branch, PR, workflow", en: "Git & GitHub: branches, PRs, workflow" }, { vi: "Môi trường dev: venv, Docker cơ bản", en: "Dev environment: venv, Docker basics" } ] },
      { week: "2", title: { vi: "Python cho Data Engineering", en: "Python for Data Engineering" },
        topics: [ { vi: "Python cốt lõi & cấu trúc dữ liệu", en: "Core Python & data structures" }, { vi: "Đọc/ghi CSV, JSON, API", en: "Read/write CSV, JSON, APIs" }, { vi: "pandas nền tảng cho xử lý dữ liệu", en: "pandas fundamentals for data wrangling" }, { vi: "Viết script ETL đầu tiên", en: "Write your first ETL script" } ],
        project: { vi: "Đồ án 1: ETL đọc CSV → làm sạch → nạp vào PostgreSQL", en: "Project 1: ETL from CSV → clean → load into PostgreSQL" } },
      { week: "3", title: { vi: "SQL & cơ sở dữ liệu quan hệ", en: "SQL & relational databases" },
        topics: [ { vi: "SQL nâng cao: JOIN, CTE, window functions", en: "Advanced SQL: JOINs, CTEs, window functions" }, { vi: "PostgreSQL, chỉ mục & tối ưu truy vấn", en: "PostgreSQL, indexing & query tuning" }, { vi: "OLTP vs OLAP", en: "OLTP vs OLAP" } ] },
      { week: "4", title: { vi: "Mô hình hóa dữ liệu & Data Warehouse", en: "Data modeling & warehousing" },
        topics: [ { vi: "Dimensional modeling, star/snowflake schema", en: "Dimensional modeling, star/snowflake schema" }, { vi: "Slowly Changing Dimensions (SCD)", en: "Slowly Changing Dimensions (SCD)" }, { vi: "Thiết kế kho dữ liệu phân tích", en: "Designing an analytical warehouse" } ] },
      { week: "5", title: { vi: "Transform với dbt & ELT", en: "Transform with dbt & ELT" },
        topics: [ { vi: "ELT vs ETL, dbt models & sources", en: "ELT vs ETL, dbt models & sources" }, { vi: "Jinja, macros, data tests", en: "Jinja, macros, data tests" }, { vi: "Kiểm thử chất lượng & tài liệu hóa", en: "Data quality tests & documentation" } ],
        project: { vi: "Đồ án 2: Data warehouse + pipeline dbt có test", en: "Project 2: Data warehouse + tested dbt pipeline" } },
      { week: "6–7", title: { vi: "Xử lý dữ liệu lớn với Apache Spark", en: "Big data with Apache Spark" },
        topics: [ { vi: "Kiến trúc Spark, RDD & DataFrame API", en: "Spark architecture, RDD & DataFrame API" }, { vi: "PySpark cho xử lý batch quy mô lớn", en: "PySpark for large-scale batch" }, { vi: "Partitioning, caching & tối ưu hiệu năng", en: "Partitioning, caching & performance tuning" } ],
        project: { vi: "Đồ án 3: Pipeline batch xử lý hàng chục triệu bản ghi", en: "Project 3: Batch pipeline over tens of millions of rows" } },
      { week: "8", title: { vi: "Streaming thời gian thực với Kafka", en: "Real-time streaming with Kafka" },
        topics: [ { vi: "Kafka: topics, producers, consumers", en: "Kafka: topics, producers, consumers" }, { vi: "Kiến trúc event-driven & stream processing", en: "Event-driven architecture & stream processing" }, { vi: "Xử lý realtime, delivery semantics", en: "Real-time processing, delivery semantics" } ],
        project: { vi: "Đồ án 4: Pipeline streaming ingest sự kiện realtime", en: "Project 4: Streaming pipeline ingesting real-time events" } },
      { week: "9–10", title: { vi: "Orchestration & Lakehouse", en: "Orchestration & Lakehouse" },
        topics: [ { vi: "Airflow: DAGs, scheduling, idempotency", en: "Airflow: DAGs, scheduling, idempotency" }, { vi: "Data lake vs lakehouse", en: "Data lake vs lakehouse" }, { vi: "Delta Lake / Apache Iceberg, Parquet", en: "Delta Lake / Apache Iceberg, Parquet" } ] },
      { week: "11", title: { vi: "Cloud & CI/CD cho dữ liệu", en: "Cloud & CI/CD for data" },
        topics: [ { vi: "Dịch vụ dữ liệu trên AWS/GCP (S3, Glue, BigQuery)", en: "AWS/GCP data services (S3, Glue, BigQuery)" }, { vi: "CI/CD & Infrastructure as Code cơ bản", en: "CI/CD & Infrastructure as Code basics" }, { vi: "Giám sát pipeline, data quality & chi phí", en: "Pipeline monitoring, data quality & cost" } ] },
      { week: "12", title: { vi: "Đồ án cuối & sẵn sàng đi làm", en: "Capstone & job-ready" },
        topics: [ { vi: "Tài liệu kiến trúc & portfolio GitHub", en: "Architecture docs & GitHub portfolio" }, { vi: "Luyện phỏng vấn Data Engineer", en: "Data Engineer interview prep" }, { vi: "Review CV & định hướng nghề", en: "CV review & career guidance" } ],
        project: { vi: "Đồ án 5 (capstone): pipeline dữ liệu end-to-end trên cloud (batch + streaming)", en: "Project 5 (capstone): end-to-end cloud data pipeline (batch + streaming)" } }
    ],
    ml: [
      { week: "1", title: { vi: "Toán & Python cho Machine Learning", en: "Math & Python for Machine Learning" },
        topics: [ { vi: "Python, NumPy & pandas cho ML", en: "Python, NumPy & pandas for ML" }, { vi: "Đại số tuyến tính & giải tích cần thiết", en: "Essential linear algebra & calculus" }, { vi: "Xác suất & thống kê nền tảng", en: "Foundational probability & statistics" } ] },
      { week: "2", title: { vi: "Quy trình ML & phân tích khám phá", en: "ML workflow & EDA" },
        topics: [ { vi: "Vòng đời ML end-to-end", en: "End-to-end ML lifecycle" }, { vi: "EDA, làm sạch & tiền xử lý dữ liệu", en: "EDA, cleaning & preprocessing" }, { vi: "Train/val/test split, tránh data leakage", en: "Train/val/test split, avoiding data leakage" } ] },
      { week: "3", title: { vi: "Hồi quy", en: "Regression" },
        topics: [ { vi: "Linear & polynomial regression", en: "Linear & polynomial regression" }, { vi: "Gradient descent & regularization (L1/L2)", en: "Gradient descent & regularization (L1/L2)" }, { vi: "Đánh giá: RMSE, MAE, R²", en: "Evaluation: RMSE, MAE, R²" } ],
        project: { vi: "Đồ án 1: Dự đoán giá nhà bằng hồi quy", en: "Project 1: House-price prediction with regression" } },
      { week: "4", title: { vi: "Phân loại", en: "Classification" },
        topics: [ { vi: "Logistic regression, KNN, Naive Bayes", en: "Logistic regression, KNN, Naive Bayes" }, { vi: "Decision trees", en: "Decision trees" }, { vi: "Confusion matrix, precision/recall, ROC-AUC", en: "Confusion matrix, precision/recall, ROC-AUC" } ] },
      { week: "5", title: { vi: "Feature engineering & pipeline", en: "Feature engineering & pipelines" },
        topics: [ { vi: "Encoding, scaling, xử lý missing/outlier", en: "Encoding, scaling, missing/outlier handling" }, { vi: "Feature selection", en: "Feature selection" }, { vi: "scikit-learn Pipeline & cross-validation", en: "scikit-learn Pipeline & cross-validation" } ],
        project: { vi: "Đồ án 2: Pipeline phân loại end-to-end có feature engineering", en: "Project 2: End-to-end classification pipeline with feature engineering" } },
      { week: "6–7", title: { vi: "Ensemble & mô hình mạnh", en: "Ensembles & powerful models" },
        topics: [ { vi: "Random Forest, bagging vs boosting", en: "Random Forest, bagging vs boosting" }, { vi: "Gradient Boosting, XGBoost, LightGBM", en: "Gradient Boosting, XGBoost, LightGBM" }, { vi: "Tuning siêu tham số (GridSearch/Optuna)", en: "Hyperparameter tuning (GridSearch/Optuna)" } ],
        project: { vi: "Đồ án 3: Mô hình ensemble cho bài toán dự báo (kiểu Kaggle)", en: "Project 3: Ensemble model for a forecasting task (Kaggle-style)" } },
      { week: "8", title: { vi: "Học không giám sát & giảm chiều", en: "Unsupervised learning & dimensionality reduction" },
        topics: [ { vi: "K-Means & clustering", en: "K-Means & clustering" }, { vi: "PCA & giảm chiều", en: "PCA & dimensionality reduction" }, { vi: "Phát hiện bất thường, recommender cơ bản", en: "Anomaly detection, basic recommenders" } ] },
      { week: "9", title: { vi: "Đưa mô hình lên production", en: "Shipping models to production" },
        topics: [ { vi: "Đóng gói & versioning mô hình", en: "Model packaging & versioning" }, { vi: "Phục vụ mô hình bằng FastAPI (REST)", en: "Serving models with FastAPI (REST)" }, { vi: "Giám sát cơ bản sau triển khai", en: "Basic post-deployment monitoring" } ] },
      { week: "10", title: { vi: "Đồ án & sẵn sàng đi làm", en: "Capstone & job-ready" },
        topics: [ { vi: "Storytelling & trình bày kết quả", en: "Storytelling & presenting results" }, { vi: "Portfolio & GitHub", en: "Portfolio & GitHub" }, { vi: "Luyện phỏng vấn ML", en: "ML interview prep" } ],
        project: { vi: "Đồ án 4 (capstone): dự đoán churn + deploy API", en: "Project 4 (capstone): churn prediction + API deploy" } }
    ],
    ai: [
      { week: "1", title: { vi: "Nền tảng LLM", en: "LLM foundations" },
        topics: [ { vi: "LLM hoạt động thế nào, tokens & context window", en: "How LLMs work, tokens & context window" }, { vi: "Nhà cung cấp: OpenAI, Claude, Gemini, Llama", en: "Providers: OpenAI, Claude, Gemini, Llama" }, { vi: "Gọi API, chi phí, giới hạn & mô hình mở", en: "Calling APIs, cost, limits & open models" } ] },
      { week: "2", title: { vi: "Prompt & Context Engineering", en: "Prompt & Context Engineering" },
        topics: [ { vi: "Zero/few-shot, Chain-of-Thought, ReAct", en: "Zero/few-shot, Chain-of-Thought, ReAct" }, { vi: "System prompting & structured output", en: "System prompting & structured output" }, { vi: "Prompt caching, sampling (temperature, top-p)", en: "Prompt caching, sampling (temperature, top-p)" } ] },
      { week: "3", title: { vi: "Embeddings & Vector Search", en: "Embeddings & Vector Search" },
        topics: [ { vi: "Embeddings & semantic search", en: "Embeddings & semantic search" }, { vi: "Vector DB: Pinecone, Qdrant, Chroma, FAISS", en: "Vector DBs: Pinecone, Qdrant, Chroma, FAISS" }, { vi: "Indexing & similarity search", en: "Indexing & similarity search" } ],
        project: { vi: "Đồ án 1: Semantic search trên tập tài liệu", en: "Project 1: Semantic search over a document set" } },
      { week: "4–5", title: { vi: "RAG end-to-end", en: "End-to-end RAG" },
        topics: [ { vi: "Kiến trúc RAG: chunking, retrieval, generation", en: "RAG architecture: chunking, retrieval, generation" }, { vi: "RAG vs fine-tuning", en: "RAG vs fine-tuning" }, { vi: "LangChain / LlamaIndex, đánh giá RAG", en: "LangChain / LlamaIndex, evaluating RAG" } ],
        project: { vi: "Đồ án 2: RAG chatbot có trích dẫn nguồn", en: "Project 2: RAG chatbot with source citations" } },
      { week: "6", title: { vi: "Tools & Function Calling", en: "Tools & Function Calling" },
        topics: [ { vi: "Function/tool calling & structured tool use", en: "Function/tool calling & structured tool use" }, { vi: "Tích hợp API bên ngoài", en: "Integrating external APIs" }, { vi: "Model Context Protocol (MCP)", en: "Model Context Protocol (MCP)" } ] },
      { week: "7", title: { vi: "AI Agents", en: "AI Agents" },
        topics: [ { vi: "ReAct agents & lập kế hoạch nhiều bước", en: "ReAct agents & multi-step planning" }, { vi: "OpenAI Agent SDK, Claude Agent SDK", en: "OpenAI Agent SDK, Claude Agent SDK" }, { vi: "Multi-agent & bộ nhớ", en: "Multi-agent & memory" } ],
        project: { vi: "Đồ án 3: AI agent tự động hoàn thành tác vụ (tool-use)", en: "Project 3: An AI agent that autonomously completes tasks (tool-use)" } },
      { week: "8", title: { vi: "Fine-tuning & Multimodal", en: "Fine-tuning & Multimodal" },
        topics: [ { vi: "Khi nào fine-tune, LoRA/PEFT", en: "When to fine-tune, LoRA/PEFT" }, { vi: "Chuẩn bị dữ liệu huấn luyện", en: "Preparing training data" }, { vi: "Multimodal: vision, Whisper (STT), TTS", en: "Multimodal: vision, Whisper (STT), TTS" } ] },
      { week: "9", title: { vi: "Đánh giá, an toàn & observability", en: "Evaluation, safety & observability" },
        topics: [ { vi: "LLM evals: deterministic, model-based, human", en: "LLM evals: deterministic, model-based, human" }, { vi: "RAGAS / DeepEval, tracing (Langfuse/LangSmith)", en: "RAGAS / DeepEval, tracing (Langfuse/LangSmith)" }, { vi: "Prompt injection, AISafety, giám sát chi phí/latency", en: "Prompt injection, AI safety, cost/latency monitoring" } ] },
      { week: "10", title: { vi: "Đồ án & sẵn sàng đi làm", en: "Capstone & job-ready" },
        topics: [ { vi: "Triển khai app (FastAPI + UI)", en: "Deploy the app (FastAPI + UI)" }, { vi: "Portfolio & GitHub", en: "Portfolio & GitHub" }, { vi: "Luyện phỏng vấn AI Engineer", en: "AI Engineer interview prep" } ],
        project: { vi: "Đồ án 4 (capstone): trợ lý AI doanh nghiệp (RAG + agent) deploy hoàn chỉnh", en: "Project 4 (capstone): enterprise AI assistant (RAG + agent), fully deployed" } }
    ],
    ds: [
      { week: "1", title: { vi: "Nền tảng & tư duy dữ liệu", en: "Foundations & data thinking" },
        topics: [ { vi: "Vòng đời phân tích dữ liệu", en: "The data analysis lifecycle" }, { vi: "Loại phân tích: mô tả → chẩn đoán → dự đoán", en: "Types of analytics: descriptive → diagnostic → predictive" }, { vi: "Excel/Sheets nền tảng & đặt câu hỏi đúng", en: "Excel/Sheets basics & asking the right questions" } ] },
      { week: "2", title: { vi: "Python & pandas cho phân tích", en: "Python & pandas for analysis" },
        topics: [ { vi: "Python cơ bản", en: "Python basics" }, { vi: "pandas: lọc, nhóm, join", en: "pandas: filter, group, join" }, { vi: "Làm sạch: missing, duplicate, outlier", en: "Cleaning: missing, duplicates, outliers" } ],
        project: { vi: "Đồ án 1: Làm sạch & phân tích một bộ dữ liệu thực", en: "Project 1: Clean & analyze a real dataset" } },
      { week: "3", title: { vi: "SQL cho phân tích", en: "SQL for analytics" },
        topics: [ { vi: "SELECT, JOIN, GROUP BY", en: "SELECT, JOIN, GROUP BY" }, { vi: "Window functions, subquery, CTE", en: "Window functions, subqueries, CTEs" }, { vi: "Truy vấn phân tích trên database thật", en: "Analytical queries on a real database" } ] },
      { week: "4", title: { vi: "Thống kê ứng dụng", en: "Applied statistics" },
        topics: [ { vi: "Thống kê mô tả: mean, median, variance", en: "Descriptive stats: mean, median, variance" }, { vi: "Phân phối & xác suất", en: "Distributions & probability" }, { vi: "Tương quan & hồi quy đơn giản", en: "Correlation & simple regression" } ] },
      { week: "5", title: { vi: "A/B testing & kiểm định giả thuyết", en: "A/B testing & hypothesis testing" },
        topics: [ { vi: "Hypothesis testing, p-value", en: "Hypothesis testing, p-value" }, { vi: "Thiết kế thí nghiệm & A/B test", en: "Experiment design & A/B testing" }, { vi: "Diễn giải kết quả cho quyết định", en: "Interpreting results for decisions" } ],
        project: { vi: "Đồ án 2: Thiết kế & phân tích một A/B test", en: "Project 2: Design & analyze an A/B test" } },
      { week: "6", title: { vi: "Trực quan hóa dữ liệu", en: "Data visualization" },
        topics: [ { vi: "Matplotlib & Seaborn", en: "Matplotlib & Seaborn" }, { vi: "Chọn biểu đồ đúng", en: "Choosing the right chart" }, { vi: "Nguyên tắc trực quan, tránh gây hiểu nhầm", en: "Visualization principles, avoiding misleading charts" } ] },
      { week: "7", title: { vi: "Dashboard & BI", en: "Dashboards & BI" },
        topics: [ { vi: "Power BI / Looker Studio", en: "Power BI / Looker Studio" }, { vi: "Xây dashboard, KPI & metrics", en: "Building dashboards, KPIs & metrics" }, { vi: "Product analytics cơ bản", en: "Basic product analytics" } ] },
      { week: "8", title: { vi: "Storytelling, đồ án & đi làm", en: "Storytelling, capstone & job-ready" },
        topics: [ { vi: "Data storytelling & trình bày insight", en: "Data storytelling & presenting insights" }, { vi: "Portfolio & GitHub", en: "Portfolio & GitHub" }, { vi: "Luyện phỏng vấn Data Analyst", en: "Data Analyst interview prep" } ],
        project: { vi: "Đồ án 3 (capstone): phân tích sản phẩm end-to-end + dashboard", en: "Project 3 (capstone): end-to-end product analysis + dashboard" } }
    ],
    mlops: [
      { week: "1", title: { vi: "Nền tảng MLOps", en: "MLOps foundations" },
        topics: [ { vi: "MLOps là gì & vòng đời ML", en: "What is MLOps & the ML lifecycle" }, { vi: "Git workflow & môi trường tái lập", en: "Git workflow & reproducible environments" }, { vi: "Nguyên tắc & thành phần MLOps", en: "MLOps principles & components" } ] },
      { week: "2", title: { vi: "Đóng gói & Experiment Tracking", en: "Packaging & experiment tracking" },
        topics: [ { vi: "Đóng gói model & quản lý phụ thuộc", en: "Model packaging & dependency management" }, { vi: "MLflow tracking & model registry", en: "MLflow tracking & model registry" }, { vi: "Versioning tham số & metrics", en: "Versioning params & metrics" } ],
        project: { vi: "Đồ án 1: Theo dõi thí nghiệm & registry với MLflow", en: "Project 1: Experiment tracking & registry with MLflow" } },
      { week: "3", title: { vi: "Data & Model Versioning", en: "Data & model versioning" },
        topics: [ { vi: "DVC & data lineage", en: "DVC & data lineage" }, { vi: "Feature store cơ bản", en: "Feature store basics" }, { vi: "Khả năng tái lập (reproducibility)", en: "Reproducibility" } ] },
      { week: "4", title: { vi: "Container hóa", en: "Containerization" },
        topics: [ { vi: "Docker cho ML & tối ưu image", en: "Docker for ML & image optimization" }, { vi: "docker-compose", en: "docker-compose" }, { vi: "Đóng gói API phục vụ model", en: "Packaging a model-serving API" } ],
        project: { vi: "Đồ án 2: Đóng gói & phục vụ model bằng Docker + FastAPI", en: "Project 2: Package & serve a model with Docker + FastAPI" } },
      { week: "5", title: { vi: "CI/CD cho ML", en: "CI/CD for ML" },
        topics: [ { vi: "GitHub Actions & CML", en: "GitHub Actions & CML" }, { vi: "Kiểm thử tự động cho pipeline", en: "Automated testing for pipelines" }, { vi: "Infrastructure as Code cơ bản (Terraform)", en: "Infrastructure as Code basics (Terraform)" } ],
        project: { vi: "Đồ án 3: Pipeline CI/CD tự động train & deploy", en: "Project 3: CI/CD pipeline that auto-trains & deploys" } },
      { week: "6", title: { vi: "Orchestration & Serving trên Kubernetes", en: "Orchestration & serving on Kubernetes" },
        topics: [ { vi: "Kubernetes cơ bản: deploy & scaling", en: "Kubernetes basics: deploy & scaling" }, { vi: "KubeFlow / model serving", en: "KubeFlow / model serving" }, { vi: "Triển khai trên cloud (AWS/GCP)", en: "Deploying on cloud (AWS/GCP)" } ] },
      { week: "7", title: { vi: "Monitoring & Observability", en: "Monitoring & observability" },
        topics: [ { vi: "Data & model drift", en: "Data & model drift" }, { vi: "Prometheus & Grafana, logging, alerting", en: "Prometheus & Grafana, logging, alerting" }, { vi: "Explainability (SHAP), chi phí & hiệu năng", en: "Explainability (SHAP), cost & performance" } ] },
      { week: "8", title: { vi: "Đồ án & sẵn sàng đi làm", en: "Capstone & job-ready" },
        topics: [ { vi: "Tài liệu vận hành & runbook", en: "Operational docs & runbooks" }, { vi: "Portfolio & GitHub", en: "Portfolio & GitHub" }, { vi: "Luyện phỏng vấn MLOps", en: "MLOps interview prep" } ],
        project: { vi: "Đồ án 4 (capstone): pipeline ML tự động end-to-end có giám sát", en: "Project 4 (capstone): automated end-to-end ML pipeline with monitoring" } }
    ],
    dl: [
      { week: "1", title: { vi: "Nền tảng Deep Learning & PyTorch", en: "Deep learning foundations & PyTorch" },
        topics: [ { vi: "Tensor & autograd, PyTorch cơ bản", en: "Tensors & autograd, PyTorch basics" }, { vi: "Ôn đại số tuyến tính & giải tích", en: "Linear algebra & calculus refresher" }, { vi: "GPU & CUDA", en: "GPU & CUDA" } ] },
      { week: "2–3", title: { vi: "Mạng nơ-ron & huấn luyện", en: "Neural networks & training" },
        topics: [ { vi: "Perceptron, MLP & lan truyền ngược", en: "Perceptron, MLP & backpropagation" }, { vi: "Hàm kích hoạt, loss & optimizer", en: "Activations, loss & optimizers" }, { vi: "Regularization: dropout, batch norm", en: "Regularization: dropout, batch norm" } ],
        project: { vi: "Đồ án 1: Xây & huấn luyện mạng nơ-ron từ đầu", en: "Project 1: Build & train a neural network from scratch" } },
      { week: "4–5", title: { vi: "CNN & thị giác máy tính", en: "CNNs & computer vision" },
        topics: [ { vi: "Convolution, pooling, kiến trúc CNN (ResNet)", en: "Convolution, pooling, CNN architectures (ResNet)" }, { vi: "Data augmentation", en: "Data augmentation" }, { vi: "Transfer learning", en: "Transfer learning" } ],
        project: { vi: "Đồ án 2: Phân loại ảnh với CNN + transfer learning", en: "Project 2: Image classification with CNN + transfer learning" } },
      { week: "6", title: { vi: "RNN & dữ liệu chuỗi", en: "RNNs & sequence data" },
        topics: [ { vi: "RNN, LSTM/GRU", en: "RNN, LSTM/GRU" }, { vi: "Chuỗi thời gian", en: "Time series" }, { vi: "Xử lý văn bản & embeddings", en: "Text processing & embeddings" } ] },
      { week: "7–8", title: { vi: "Transformer & Attention", en: "Transformers & attention" },
        topics: [ { vi: "Cơ chế attention & self-attention", en: "Attention & self-attention" }, { vi: "Kiến trúc Transformer", en: "Transformer architecture" }, { vi: "Mô hình pretrained (BERT) & Hugging Face", en: "Pretrained models (BERT) & Hugging Face" } ],
        project: { vi: "Đồ án 3: Fine-tune Transformer cho NLP (phân loại văn bản)", en: "Project 3: Fine-tune a Transformer for NLP (text classification)" } },
      { week: "9", title: { vi: "Huấn luyện hiệu quả & triển khai", en: "Efficient training & deployment" },
        topics: [ { vi: "Mixed precision & checkpointing", en: "Mixed precision & checkpointing" }, { vi: "Tối ưu GPU", en: "GPU optimization" }, { vi: "Đóng gói & phục vụ mô hình, ONNX", en: "Packaging & serving models, ONNX" } ] },
      { week: "10", title: { vi: "Đồ án & sẵn sàng đi làm", en: "Capstone & job-ready" },
        topics: [ { vi: "Đọc & tái hiện paper", en: "Reading & reproducing papers" }, { vi: "Portfolio & GitHub", en: "Portfolio & GitHub" }, { vi: "Luyện phỏng vấn Deep Learning", en: "Deep Learning interview prep" } ],
        project: { vi: "Đồ án 4 (capstone): dự án Computer Vision hoặc NLP hoàn chỉnh", en: "Project 4 (capstone): a complete Computer Vision or NLP project" } }
    ]
  },

  instructors: [
    { id: "minh-anh", name: "Minh Anh", initials: "MA", grad: "linear-gradient(120deg,#7c5cff,#22d3ee)", role: "Senior Data Engineer @ FPT", photo: "https://i.pravatar.cc/280?img=12", teaches: ["de", "mlops"], expertise: ["Spark", "Kafka", "dbt", "Airflow", "AWS"],
      bio: { vi: "8 năm dựng data platform, Spark/Kafka/dbt ở quy mô petabyte.", en: "8 years building data platforms — Spark/Kafka/dbt at petabyte scale." },
      about: { vi: "Minh Anh dẫn dắt đội data platform tại FPT, xây các pipeline xử lý hàng tỷ bản ghi mỗi ngày. Anh tin vào việc học qua dự án thật và luôn mang các bài toán production vào lớp học.", en: "Minh Anh leads the data platform team at FPT, building pipelines that process billions of records daily. He believes in learning by real projects and brings production problems into class." } },
    { id: "thanh-hung", name: "Thành Hưng", initials: "TH", grad: "linear-gradient(120deg,#ff5ca8,#ff9d5c)", role: "ML Engineer @ VinAI", photo: "https://i.pravatar.cc/280?img=13", teaches: ["ml", "dl"], expertise: ["PyTorch", "Computer Vision", "CNN", "Transformer"],
      bio: { vi: "Nghiên cứu & triển khai mô hình computer vision cho sản phẩm thực tế.", en: "Researches & ships computer-vision models for real products." },
      about: { vi: "Hưng làm việc với các mô hình thị giác máy tính đưa vào sản phẩm hàng triệu người dùng. Anh giỏi biến lý thuyết deep learning thành code chạy được.", en: "Hung works on computer-vision models shipped to millions of users. He excels at turning deep-learning theory into working code." } },
    { id: "lan-phuong", name: "Lan Phương", initials: "LP", grad: "linear-gradient(120deg,#34d399,#22d3ee)", role: "AI Engineer @ Techcombank", photo: "https://i.pravatar.cc/280?img=45", teaches: ["ai", "mlops"], expertise: ["LLM", "RAG", "LangChain", "MLOps", "Đánh giá mô hình"],
      bio: { vi: "Xây hệ thống RAG & LLM cho ngân hàng, chuyên MLOps và đánh giá mô hình.", en: "Builds RAG & LLM systems for banking; MLOps and model evaluation." },
      about: { vi: "Phương xây các trợ lý AI dựa trên LLM cho ngành ngân hàng, nơi độ chính xác và kiểm soát là bắt buộc. Cô chú trọng đánh giá và vận hành AN toàn.", en: "Phuong builds LLM-based AI assistants for banking, where accuracy and control are mandatory. She focuses on evaluation and safe operations." } },
    { id: "quoc-dung", name: "Quốc Dũng", initials: "QD", grad: "linear-gradient(120deg,#7c5cff,#ff5ca8)", role: "Data Scientist @ Shopee", photo: "https://i.pravatar.cc/280?img=33", teaches: ["ds", "ml"], expertise: ["Thống kê", "A/B testing", "Recommender", "Python"],
      bio: { vi: "Phân tích dữ liệu quy mô lớn, hệ gợi ý và thử nghiệm A/B.", en: "Large-scale data analysis, recommender systems and A/B testing." },
      about: { vi: "Dũng làm về hệ gợi ý và thử nghiệm quy mô lớn tại Shopee. Anh dạy học viên cách đặt câu hỏi đúng trước khi chạm vào mô hình.", en: "Dung works on recommender systems and large-scale experimentation at Shopee. He teaches students to ask the right questions before touching a model." } },
    { id: "ngoc-ha", name: "Ngọc Hà", initials: "NH", grad: "linear-gradient(120deg,#22d3ee,#7c5cff)", role: "Analytics Lead @ MoMo", photo: "https://i.pravatar.cc/280?img=44", teaches: ["ds"], expertise: ["SQL", "Power BI", "Storytelling", "Product Analytics"],
      bio: { vi: "Dẫn dắt đội phân tích, storytelling dữ liệu cho quyết định kinh doanh.", en: "Leads an analytics team; data storytelling for business decisions." },
      about: { vi: "Hà dẫn dắt đội phân tích tại MoMo, biến dữ liệu thành quyết định. Cô đặc biệt mạnh về storytelling và trình bày insight.", en: "Ha leads the analytics team at MoMo, turning data into decisions. She is especially strong at storytelling and presenting insights." } },
    { id: "tuan-son", name: "Tuấn Sơn", initials: "TS", grad: "linear-gradient(120deg,#ff9d5c,#ff5ca8)", role: "Platform Engineer @ VNG", photo: "https://i.pravatar.cc/280?img=15", teaches: ["mlops", "de"], expertise: ["Kubernetes", "CI/CD", "Streaming", "Docker"],
      bio: { vi: "Kubernetes, CI/CD và hạ tầng dữ liệu streaming thời gian thực.", en: "Kubernetes, CI/CD and real-time streaming data infrastructure." },
      about: { vi: "Sơn xây hạ tầng dữ liệu và triển khai tại VNG. Anh giúp học viên hiểu vòng đời của một hệ thống từ code đến production.", en: "Son builds data infrastructure and deployments at VNG. He helps students understand a system's lifecycle from code to production." } },
    { id: "bao-chau", name: "Bảo Châu", initials: "BC", grad: "linear-gradient(120deg,#34d399,#7c5cff)", role: "Research Engineer @ Viettel", photo: "https://i.pravatar.cc/280?img=32", teaches: ["dl", "ai"], expertise: ["Deep Learning", "NLP", "Vietnamese NLP", "GPU"],
      bio: { vi: "Deep learning, NLP tiếng Việt và huấn luyện mô hình trên GPU cluster.", en: "Deep learning, Vietnamese NLP and training on GPU clusters." },
      about: { vi: "Châu nghiên cứu xử lý ngôn ngữ tự nhiên tiếng Việt và huấn luyện mô hình lớn. Cô mang góc nhìn nghiên cứu vào từng bài giảng.", en: "Chau researches Vietnamese NLP and trains large models. She brings a research perspective to every lesson." } },
    { id: "hoang-long", name: "Hoàng Long", initials: "HL", grad: "linear-gradient(120deg,#ff5ca8,#22d3ee)", role: "MLOps Engineer @ Binance", photo: "https://i.pravatar.cc/280?img=52", teaches: ["mlops"], expertise: ["MLflow", "Drift detection", "Multi-cloud", "Monitoring"],
      bio: { vi: "Giám sát mô hình, drift detection và triển khai ML đa cloud.", en: "Model monitoring, drift detection and multi-cloud ML deployment." },
      about: { vi: "Long vận hành hệ thống ML ở quy mô toàn cầu tại Binance. Anh dạy cách giữ cho mô hình luôn khỏe sau khi lên production.", en: "Long operates ML systems at global scale at Binance. He teaches how to keep models healthy after they hit production." } }
  ],

  // Zero -> hired learning paths
  tracks: [
    {
      id: "da", cat: "eng", role: "Data Analyst", salary: "12 – 25 triệu/tháng",
      stages: [
        { label: { vi: "Chưa biết gì", en: "Zero" }, skills: ["Excel", "Tư duy dữ liệu", "SQL cơ bản"], course: { vi: "Data Science nền tảng", en: "Data Science Foundations" }, weeks: 2 },
        { label: { vi: "Nền tảng", en: "Foundation" }, skills: ["SQL nâng cao", "Python (pandas)", "Làm sạch dữ liệu"], course: { vi: "Data Science nền tảng", en: "Data Science Foundations" }, weeks: 3 },
        { label: { vi: "Chuyên sâu", en: "Core skills" }, skills: ["Thống kê", "Trực quan hóa", "Power BI / Looker"], course: { vi: "Data Science nền tảng", en: "Data Science Foundations" }, weeks: 3 },
        { label: { vi: "Sẵn sàng đi làm", en: "Job-ready" }, skills: ["Dashboard portfolio", "SQL phỏng vấn", "Storytelling"], course: { vi: "Career: CV & phỏng vấn", en: "Career: CV & interview" }, weeks: 2 }
      ]
    },
    {
      id: "de", cat: "data", role: "Data Engineer", salary: "18 – 45 triệu/tháng",
      stages: [
        { label: { vi: "Chưa biết gì", en: "Zero" }, skills: ["Linux / Shell", "Git", "Python", "SQL"], course: { vi: "Nền tảng lập trình", en: "Programming foundations" }, weeks: 3 },
        { label: { vi: "Nền tảng", en: "Foundation" }, skills: ["Python nâng cao", "SQL analytics", "Mô hình dữ liệu"], course: { vi: "Data Engineering Zero → Hero", en: "Data Engineering Zero → Hero" }, weeks: 4 },
        { label: { vi: "Chuyên sâu", en: "Core skills" }, skills: ["Spark", "Kafka", "dbt", "Airflow", "Lakehouse"], course: { vi: "Data Engineering Zero → Hero", en: "Data Engineering Zero → Hero" }, weeks: 5 },
        { label: { vi: "Sẵn sàng đi làm", en: "Job-ready" }, skills: ["Cloud (AWS/GCP)", "CI/CD", "Portfolio 5 dự án"], course: { vi: "MLOps & Deployment", en: "MLOps & Deployment" }, weeks: 3 }
      ]
    },
    {
      id: "ml", cat: "ai", role: "AI / ML Engineer", salary: "20 – 60 triệu/tháng",
      stages: [
        { label: { vi: "Chưa biết gì", en: "Zero" }, skills: ["Python", "Toán & Xác suất", "NumPy / pandas"], course: { vi: "Nền tảng ML", en: "ML foundations" }, weeks: 3 },
        { label: { vi: "Nền tảng", en: "Foundation" }, skills: ["Scikit-learn", "Feature engineering", "Đánh giá mô hình"], course: { vi: "Machine Learning thực chiến", en: "Practical Machine Learning" }, weeks: 4 },
        { label: { vi: "Chuyên sâu", en: "Core skills" }, skills: ["PyTorch", "CNN / RNN / Transformer", "NLP & CV"], course: { vi: "Deep Learning với PyTorch", en: "Deep Learning with PyTorch" }, weeks: 4 },
        { label: { vi: "Sẵn sàng đi làm", en: "Job-ready" }, skills: ["LLM", "RAG", "Agent", "MLOps & Deploy"], course: { vi: "AI Engineer: LLM & RAG", en: "AI Engineer: LLM & RAG" }, weeks: 4 }
      ]
    },
    {
      id: "ds", cat: "ml", role: "AI & Data Scientist", salary: "18 – 50 triệu/tháng",
      stages: [
        { label: { vi: "Chưa biết gì", en: "Zero" }, skills: ["Python", "Thống kê", "SQL"], course: { vi: "Data Science nền tảng", en: "Data Science Foundations" }, weeks: 3 },
        { label: { vi: "Nền tảng", en: "Foundation" }, skills: ["EDA", "Trực quan hóa", "A/B testing"], course: { vi: "Data Science nền tảng", en: "Data Science Foundations" }, weeks: 3 },
        { label: { vi: "Chuyên sâu", en: "Core skills" }, skills: ["Machine Learning", "Feature engineering", "Mô hình dự báo"], course: { vi: "Machine Learning thực chiến", en: "Practical Machine Learning" }, weeks: 4 },
        { label: { vi: "Sẵn sàng đi làm", en: "Job-ready" }, skills: ["Business case", "Model deploy", "Portfolio"], course: { vi: "MLOps & Deployment", en: "MLOps & Deployment" }, weeks: 3 }
      ]
    }
  ],

  plans: [
    {
      name: { vi: "Khởi đầu", en: "Starter" }, price: "5.900.000đ", old: "14.900.000đ",
      features: [
        { vi: "1 khóa nền tảng (Data Science / Python)", en: "1 foundation course (Data Science / Python)" },
        { vi: "3 dự án thực hành", en: "3 hands-on projects" },
        { vi: "Mentor theo nhóm", en: "Group mentoring" },
        { vi: "Bản ghi trọn đời + chứng chỉ", en: "Lifetime recordings + certificate" }
      ]
    },
    {
      name: { vi: "Chuyên sâu", en: "Pro" }, price: "8.900.000đ", old: "22.900.000đ", popular: true,
      features: [
        { vi: "1 khóa chuyên sâu (ML / AI / DE)", en: "1 advanced course (ML / AI / DE)" },
        { vi: "4–5 dự án end-to-end", en: "4–5 end-to-end projects" },
        { vi: "Mentor 1-1 + review CV", en: "1-on-1 mentoring + CV review" },
        { vi: "Cộng đồng alumni", en: "Alumni community" }
      ]
    },
    {
      name: { vi: "Lộ trình sự nghiệp", en: "Career Path" }, price: "19.900.000đ", old: "48.900.000đ",
      features: [
        { vi: "Trọn 3 khóa theo 1 nghề", en: "Full 3-course path for one role" },
        { vi: "Học lại miễn phí", en: "Free re-study" },
        { vi: "Luyện phỏng vấn chuyên sâu", en: "In-depth interview prep" },
        { vi: "Định hướng nghề nghiệp & mạng lưới alumni", en: "Career guidance & alumni network" }
      ]
    }
  ],

  combos: [
    { name: { vi: "Lộ trình Data Engineer", en: "Data Engineer path" }, includes: { vi: "DE Zero → Hero + MLOps + Career", en: "DE Zero → Hero + MLOps + Career" }, price: "18.900.000đ", old: "42.900.000đ" },
    { name: { vi: "Lộ trình AI / ML Engineer", en: "AI / ML Engineer path" }, includes: { vi: "ML thực chiến + Deep Learning + AI LLM & RAG", en: "Practical ML + Deep Learning + AI LLM & RAG" }, price: "21.900.000đ", old: "54.700.000đ" },
    { name: { vi: "Lộ trình Data Analyst", en: "Data Analyst path" }, includes: { vi: "Data Science nền tảng + SQL/BI + Career", en: "Data Science Foundations + SQL/BI + Career" }, price: "12.900.000đ", old: "29.900.000đ" }
  ],

  // Student-friendly offers & discounts (stackable rules described per card)
  discounts: [
    { icon: "🎓", name: { vi: "Ưu đãi sinh viên", en: "Student discount" }, value: { vi: "Giảm 25%", en: "25% off" },
      desc: { vi: "Xuất trình thẻ sinh viên hoặc email .edu là được giảm 25% mọi khóa.", en: "Show a valid student ID or .edu email for 25% off any course." } },
    { icon: "⏰", name: { vi: "Đăng ký sớm", en: "Early-bird" }, value: { vi: "Giảm 15%", en: "15% off" },
      desc: { vi: "Ghi danh trước ngày khai giảng ít nhất 14 ngày để được giảm 15%.", en: "Enroll at least 14 days before the cohort starts for 15% off." } },
    { icon: "🤝", name: { vi: "Giới thiệu bạn", en: "Referral" }, value: { vi: "Cả hai giảm 500K", en: "500K off each" },
      desc: { vi: "Giới thiệu bạn cùng học — bạn và người được giới thiệu đều được giảm 500.000đ.", en: "Refer a friend — both you and your friend get 500,000đ off." } },
    { icon: "👥", name: { vi: "Nhóm & combo", en: "Group & combo" }, value: { vi: "Giảm tới 20%", en: "Up to 20% off" },
      desc: { vi: "Đăng ký nhóm từ 3 người hoặc mua combo lộ trình để giảm tới 20% mỗi suất.", en: "Sign up as a group of 3+ or buy a path combo for up to 20% off each." } }
  ],

  schedule: [
    { course: { vi: "Data Engineering Zero → Hero", en: "Data Engineering Zero → Hero" }, start: "15/07/2026", mode: { vi: "Online", en: "Online" }, time: { vi: "T3 · T5 — 19:30", en: "Tue · Thu — 7:30 PM" }, seats: { vi: "Còn 6 chỗ", en: "6 seats left" }, level: "open" },
    { course: { vi: "Machine Learning thực chiến", en: "Practical Machine Learning" }, start: "22/07/2026", mode: { vi: "Online", en: "Online" }, time: { vi: "T7 · CN — 09:00", en: "Sat · Sun — 9:00 AM" }, seats: { vi: "Còn 4 chỗ", en: "4 seats left" }, level: "open" },
    { course: { vi: "AI Engineer: LLM & RAG", en: "AI Engineer: LLM & RAG" }, start: "05/08/2026", mode: { vi: "Online", en: "Online" }, time: { vi: "T2 · T4 — 19:00", en: "Mon · Wed — 7:00 PM" }, seats: { vi: "Còn 8 chỗ", en: "8 seats left" }, level: "open" },
    { course: { vi: "Data Science nền tảng", en: "Data Science Foundations" }, start: "12/08/2026", mode: { vi: "Online", en: "Online" }, time: { vi: "T3 · T5 — 19:30", en: "Tue · Thu — 7:30 PM" }, seats: { vi: "Sắp đầy · 2 chỗ", en: "Almost full · 2 seats" }, level: "almost" },
    { course: { vi: "MLOps & Deployment", en: "MLOps & Deployment" }, start: "19/08/2026", mode: { vi: "Online", en: "Online" }, time: { vi: "T7 — 09:00", en: "Sat — 9:00 AM" }, seats: { vi: "Còn chỗ", en: "Seats available" }, level: "open" },
    { course: { vi: "Deep Learning với PyTorch", en: "Deep Learning with PyTorch" }, start: "02/09/2026", mode: { vi: "Online", en: "Online" }, time: { vi: "T4 · T6 — 19:00", en: "Wed · Fri — 7:00 PM" }, seats: { vi: "Mở đăng ký", en: "Now open" }, level: "open" }
  ],

  posts: [
    {
      slug: "lo-trinh-data-engineer-6-thang", tag: "Data Engineering", grad: "linear-gradient(120deg,#22d3ee,#7c5cff)", date: "28/06/2026", read: 8,
      title: { vi: "Lộ trình tự học Data Engineer trong 6 tháng", en: "A 6-month self-study roadmap to Data Engineer" },
      excerpt: { vi: "Kế hoạch từng tuần: SQL, Python, Spark, Kafka, dbt và dự án nào nên làm trước.", en: "A week-by-week plan: SQL, Python, Spark, Kafka, dbt and which projects to build first." },
      body: [
        { h: { vi: "Tháng 1–2: Nền tảng", en: "Months 1–2: Foundations" }, p: { vi: "Bắt đầu với Linux, Git, Python và SQL. Đây là bộ kỹ năng bạn dùng mỗi ngày, nên hãy luyện thật chắc trước khi chạm tới công cụ big data.", en: "Start with Linux, Git, Python and SQL. These are the skills you use every day, so nail them before touching big-data tools." } },
        { h: { vi: "Tháng 3–4: Xử lý dữ liệu lớn", en: "Months 3–4: Big data" }, p: { vi: "Học Spark cho batch và Kafka cho streaming. Song song, làm quen mô hình hóa dữ liệu và dbt để biến dữ liệu thô thành bảng sạch.", en: "Learn Spark for batch and Kafka for streaming. In parallel, get comfortable with data modeling and dbt to turn raw data into clean tables." } },
        { h: { vi: "Tháng 5–6: Dự án & cloud", en: "Months 5–6: Projects & cloud" }, p: { vi: "Ghép mọi thứ thành một pipeline end-to-end trên cloud, thêm Airflow để orchestrate và CI/CD. Đây chính là dự án bạn khoe khi phỏng vấn.", en: "Wire everything into an end-to-end pipeline on the cloud, add Airflow for orchestration and CI/CD. This is the project you show in interviews." } }
      ]
    },
    {
      slug: "rag-la-gi-chatbot-llm-oss", tag: "AI / LLM", grad: "linear-gradient(120deg,#7c5cff,#ff5ca8)", date: "20/06/2026", read: 10,
      title: { vi: "RAG là gì? Xây chatbot doanh nghiệp với LLM mã nguồn mở", en: "What is RAG? Build an enterprise chatbot with open-source LLMs" },
      excerpt: { vi: "Kiến trúc RAG, chọn embedding, vector DB và cách đánh giá chất lượng trả lời.", en: "RAG architecture, choosing embeddings, vector DBs and how to evaluate answer quality." },
      body: [
        { h: { vi: "RAG giải quyết vấn đề gì?", en: "What problem does RAG solve?" }, p: { vi: "LLM không biết dữ liệu nội bộ của bạn và có thể 'chém'. RAG nạp ngữ cảnh liên quan từ kho tài liệu vào prompt, giúp câu trả lời bám sát nguồn thật.", en: "An LLM doesn't know your internal data and may hallucinate. RAG injects relevant context from your documents into the prompt so answers stay grounded in real sources." } },
        { h: { vi: "Các mảnh ghép", en: "The building blocks" }, p: { vi: "Chunk tài liệu → tạo embedding → lưu vào vector DB → truy hồi đoạn liên quan → đưa vào LLM. Với hàng mã nguồn mở, bạn có thể tự host toàn bộ.", en: "Chunk documents → create embeddings → store in a vector DB → retrieve relevant passages → feed the LLM. With open-source components you can self-host the whole thing." } },
        { h: { vi: "Đừng quên đánh giá", en: "Don't skip evaluation" }, p: { vi: "Đo độ chính xác truy hồi và chất lượng câu trả lời (có trích dẫn, không bịa). Một bộ eval nhỏ giúp bạn biết thay đổi nào thực sự cải thiện hệ thống.", en: "Measure retrieval accuracy and answer quality (cited, not made up). A small eval set tells you which changes actually improve the system." } }
      ]
    },
    {
      slug: "5-du-an-data-analyst-portfolio", tag: "Data Analyst", grad: "linear-gradient(120deg,#34d399,#22d3ee)", date: "12/06/2026", read: 6,
      title: { vi: "5 dự án Data Analyst nên có trong portfolio", en: "5 Data Analyst projects your portfolio needs" },
      excerpt: { vi: "Từ phân tích doanh thu đến dashboard cohort — kèm bộ dữ liệu để bắt tay làm ngay.", en: "From revenue analysis to cohort dashboards — with datasets to start right away." },
      body: [
        { h: { vi: "Vì sao portfolio quan trọng hơn bằng cấp", en: "Why a portfolio beats a certificate" }, p: { vi: "Nhà tuyển dụng muốn thấy bạn xử lý dữ liệu thật và kể được câu chuyện từ con số, chứ không phải danh sách khóa học đã hoàn thành.", en: "Recruiters want to see you handle real data and tell a story from numbers — not a list of completed courses." } },
        { h: { vi: "5 dự án gợi ý", en: "5 suggested projects" }, p: { vi: "Phân tích doanh thu, dashboard cohort giữ chân người dùng, phân tích A/B test, phân khúc khách hàng (RFM) và một báo cáo insight end-to-end.", en: "Revenue analysis, a retention cohort dashboard, an A/B test analysis, customer segmentation (RFM) and one end-to-end insight report." } },
        { h: { vi: "Trình bày thế nào", en: "How to present it" }, p: { vi: "Mỗi dự án nên có: câu hỏi kinh doanh, cách bạn xử lý, biểu đồ rõ ràng và 2–3 insight hành động được. Đưa lên GitHub kèm README.", en: "Each project should have: the business question, your approach, clear charts and 2–3 actionable insights. Put it on GitHub with a README." } }
      ]
    },
    {
      slug: "zero-den-ml-engineer-hoc-gi-truoc", tag: "Machine Learning", grad: "linear-gradient(120deg,#ff9d5c,#ff5ca8)", date: "05/06/2026", read: 7,
      title: { vi: "Từ zero đến Machine Learning Engineer: học gì trước?", en: "From zero to ML Engineer: what to learn first" },
      excerpt: { vi: "Toán cần bao nhiêu là đủ, thư viện nào ưu tiên và cách tránh 'tutorial hell'.", en: "How much math is enough, which libraries to prioritize and how to avoid tutorial hell." },
      body: [
        { h: { vi: "Cần bao nhiêu toán?", en: "How much math?" }, p: { vi: "Đủ để hiểu mô hình đang làm gì: đại số tuyến tính cơ bản, đạo hàm và xác suất. Bạn không cần chứng minh định lý — cần trực giác.", en: "Enough to understand what a model does: basic linear algebra, derivatives and probability. You don't need to prove theorems — you need intuition." } },
        { h: { vi: "Ưu tiên thực hành", en: "Prioritize practice" }, p: { vi: "Học Python, pandas và scikit-learn qua các bài toán thật. Làm trọn một dự án nhỏ còn giá trị hơn xem mười tutorial.", en: "Learn Python, pandas and scikit-learn through real problems. Finishing one small project beats watching ten tutorials." } },
        { h: { vi: "Thoát 'tutorial hell'", en: "Escape tutorial hell" }, p: { vi: "Chọn một bộ dữ liệu bạn quan tâm, đặt câu hỏi, và tự xây từ đầu đến cuối. Vướng ở đâu học ở đó — đó là cách nhớ lâu nhất.", en: "Pick a dataset you care about, ask a question, and build end-to-end yourself. Learn what you get stuck on — that's what sticks." } }
      ]
    },
    {
      slug: "mlops-cho-nguoi-moi-cicd-ml", tag: "MLOps", grad: "linear-gradient(120deg,#7c5cff,#22d3ee)", date: "28/05/2026", read: 9,
      title: { vi: "MLOps cho người mới: CI/CD cho mô hình ML", en: "MLOps for beginners: CI/CD for ML models" },
      excerpt: { vi: "Đóng gói model, versioning, giám sát drift và tự động triển khai lên cloud.", en: "Packaging models, versioning, drift monitoring and automated cloud deployment." },
      body: [
        { h: { vi: "Vì sao model 'chết' sau khi deploy", en: "Why models 'die' after deploy" }, p: { vi: "Dữ liệu thực thay đổi theo thời gian (drift), khiến mô hình từng chính xác dần kém đi. MLOps là bộ thực hành giữ cho model luôn khỏe.", en: "Real data shifts over time (drift), so a once-accurate model degrades. MLOps is the set of practices that keeps models healthy." } },
        { h: { vi: "CI/CD cho ML khác gì?", en: "How is CI/CD for ML different?" }, p: { vi: "Ngoài code, bạn còn version dữ liệu và model. Pipeline nên tự động test, huấn luyện lại và triển khai khi có thay đổi.", en: "Beyond code, you version data and models too. The pipeline should automatically test, retrain and deploy when things change." } },
        { h: { vi: "Bắt đầu nhỏ", en: "Start small" }, p: { vi: "Dùng MLflow để tracking, Docker để đóng gói và GitHub Actions để tự động hóa. Thêm giám sát drift ngay khi có người dùng thật.", en: "Use MLflow for tracking, Docker for packaging and GitHub Actions for automation. Add drift monitoring as soon as you have real users." } }
      ]
    },
    {
      slug: "sql-phong-van-20-cau-hoi", tag: "SQL", grad: "linear-gradient(120deg,#22d3ee,#34d399)", date: "20/05/2026", read: 5,
      title: { vi: "SQL phỏng vấn: 20 câu hỏi thường gặp", en: "SQL interviews: 20 common questions" },
      excerpt: { vi: "Window functions, join nâng cao và mẹo tối ưu truy vấn nhà tuyển dụng hay hỏi.", en: "Window functions, advanced joins and query-tuning tips recruiters love to ask." },
      body: [
        { h: { vi: "Nhóm câu hỏi cơ bản", en: "The basics they always ask" }, p: { vi: "JOIN các loại, GROUP BY với HAVING, và khác biệt giữa WHERE và HAVING. Nắm chắc nhóm này là qua vòng sàng lọc đầu tiên.", en: "The JOIN types, GROUP BY with HAVING, and the difference between WHERE and HAVING. Master these to clear the first screen." } },
        { h: { vi: "Window functions", en: "Window functions" }, p: { vi: "ROW_NUMBER, RANK, LAG/LEAD và running total là 'đặc sản' phỏng vấn phân tích. Hãy luyện bài toán top-N theo nhóm.", en: "ROW_NUMBER, RANK, LAG/LEAD and running totals are analytics-interview staples. Practice top-N-per-group problems." } },
        { h: { vi: "Tối ưu truy vấn", en: "Query optimization" }, p: { vi: "Biết đọc EXPLAIN, dùng index đúng chỗ và tránh subquery lồng không cần thiết. Ứng viên giải thích được 'vì sao chậm' luôn ghi điểm.", en: "Read EXPLAIN, index the right columns and avoid needless nested subqueries. Candidates who can explain 'why it's slow' always score." } }
      ]
    }
  ]
};

/* ============ Nav + footer (single source, injected) ============ */
const NAV_LINKS = [
  { href: "index.html", key: "nav.home" },
  { href: "roadmap.html", key: "nav.roadmap" },
  { href: "courses.html", key: "nav.courses" },
  { href: "tuition.html", key: "nav.tuition" },
  { href: "schedule.html", key: "nav.schedule" },
  { href: "blog.html", key: "nav.blog" },
  { href: "contact.html", key: "nav.contact" }
];

function currentPage() {
  const p = location.pathname.split("/").pop();
  return p && p.length ? p : "index.html";
}

function renderChrome() {
  if (!document.querySelector('link[rel="icon"]')) {
    const l = document.createElement("link");
    l.rel = "icon";
    l.type = "image/svg+xml";
    l.href = "assets/logo.svg";
    document.head.appendChild(l);
  }
  injectLd("ld-site", {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": SITE_URL + "#org",
        name: "TalentNode",
        url: SITE_URL,
        logo: SITE_URL + "assets/og-cover.png",
        description: "Trung tâm đào tạo Data Engineering, Machine Learning và AI theo dự án thực chiến tại Hà Nội.",
        email: "hello@talentnode.vn",
        telephone: "+842412345678",
        areaServed: "VN",
        address: { "@type": "PostalAddress", addressLocality: "Cầu Giấy", addressRegion: "Hà Nội", addressCountry: "VN" }
      },
      { "@type": "WebSite", "@id": SITE_URL + "#site", url: SITE_URL, name: "TalentNode", inLanguage: ["vi", "en"], publisher: { "@id": SITE_URL + "#org" } }
    ]
  });
  if (!document.querySelector(".skip-link")) {
    const sk = document.createElement("a");
    sk.className = "skip-link";
    sk.href = "#main-content";
    sk.setAttribute("data-i18n", "a11y.skip");
    sk.textContent = "Bỏ qua tới nội dung";
    document.body.insertBefore(sk, document.body.firstChild);
  }
  const navMount = document.getElementById("site-nav");
  if (navMount) {
    const page = currentPage();
    const links = NAV_LINKS.map(
      (l) => `<a href="${l.href}"${l.href === page ? ' class="active"' : ""} data-i18n="${l.key}"></a>`
    ).join("");
    navMount.outerHTML = `
      <header class="nav">
        <div class="container nav-inner">
          <a href="index.html" class="brand"><span class="logo">${LOGO_SVG}</span> Talent<b>Node</b></a>
          <nav class="nav-links">${links}</nav>
          <div class="nav-cta">
            <button class="theme-toggle" aria-label="theme"></button>
            <div class="lang-toggle"><button data-lang="vi">VI</button><button data-lang="en">EN</button></div>
            <a href="register.html" class="btn btn-primary" data-i18n="nav.cta"></a>
            <button class="hamburger" aria-label="menu">☰</button>
          </div>
        </div>
      </header>`;
  }

  const footMount = document.getElementById("site-footer");
  if (footMount) {
    footMount.outerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <a href="index.html" class="brand" style="margin-bottom:14px;"><span class="logo">${LOGO_SVG}</span> Talent<b>Node</b></a>
              <p class="desc" data-i18n="footer.desc"></p>
            </div>
            <div>
              <h5 data-i18n="footer.explore"></h5>
              <ul>
                <li><a href="roadmap.html" data-i18n="nav.roadmap"></a></li>
                <li><a href="courses.html" data-i18n="nav.courses"></a></li>
                <li><a href="tuition.html" data-i18n="nav.tuition"></a></li>
                <li><a href="schedule.html" data-i18n="nav.schedule"></a></li>
                <li><a href="blog.html" data-i18n="nav.blog"></a></li>
                <li><a href="instructors.html" data-i18n="nav.instructors"></a></li>
              </ul>
            </div>
            <div>
              <h5 data-i18n="footer.courses"></h5>
              <ul>
                <li><a href="courses.html" data-i18n="filter.data"></a></li>
                <li><a href="courses.html" data-i18n="filter.ml"></a></li>
                <li><a href="courses.html" data-i18n="filter.ai"></a></li>
                <li><a href="courses.html" data-i18n="filter.ds"></a></li>
              </ul>
            </div>
            <div>
              <h5 data-i18n="footer.contactH"></h5>
              <ul>
                <li><a href="mailto:hello@talentnode.vn">hello@talentnode.vn</a></li>
                <li><a href="tel:+842412345678">024 1234 5678</a></li>
                <li><a href="contact.html" data-i18n="contact.addrV"></a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span data-i18n="footer.rights"></span>
            <span data-i18n="footer.made"></span>
          </div>
        </div>
      </footer>`;
  }
}

/* ============ Dynamic page content ============ */
function renderDynamic() {
  // Roadmap — destinations
  const dest = document.getElementById("roadmap-dest");
  if (dest) {
    const soon = IS_VI() ? "Sắp ra mắt" : "Soon";
    dest.innerHTML = DATA.destinations
      .map((d) =>
        d.soon
          ? `<div class="dest soon"><span>${d.name}</span><span class="soon-badge">${soon}</span></div>`
          : `<a class="dest" href="#track-${d.track}"><span>${d.name}</span><span class="dest-ic">🔖</span></a>`
      )
      .join("");
  }

  // Roadmap — tracks
  const tracks = document.getElementById("roadmap-tracks");
  if (tracks) {
    const courseWord = IS_VI() ? "Khóa" : "Course";
    const wWord = IS_VI() ? "tuần" : "wks";
    const salaryWord = IS_VI() ? "Lương tham khảo" : "Salary range";
    const goalWord = IS_VI() ? "Sẵn sàng ứng tuyển" : "Ready to apply";
    tracks.innerHTML = DATA.tracks
      .map(
        (tk) => `
      <div class="track reveal" id="track-${tk.id}">
        <div class="track-head">
          <div class="track-role"><span class="tag ${tk.cat}">${tk.role}</span></div>
          <div class="track-salary"><span>${salaryWord}</span><b>${tk.salary}</b></div>
        </div>
        <div class="track-stages">
          ${tk.stages
            .map(
              (s, i) => `
            <div class="tnode">
              <div class="tnode-top"><span class="tnode-n">${i}</span><span class="tnode-label">${T(s.label)}</span></div>
              <div class="tnode-skills">${s.skills.map((k) => `<span>${k}</span>`).join("")}</div>
              <div class="tnode-course">🎓 ${courseWord}: ${T(s.course)} · ${s.weeks} ${wWord}</div>
            </div>`
            )
            .join('<div class="tnode-arrow">→</div>')}
        </div>
        <div class="track-goal">🎯 ${goalWord} → <b>${tk.role}</b></div>
      </div>`
      )
      .join("");
  }

  // Tuition — plans
  const plans = document.getElementById("pricing-plans");
  if (plans) {
    const popular = IS_VI() ? "Phổ biến nhất" : "Most popular";
    const enroll = IS_VI() ? "Ghi danh" : "Enroll";
    plans.innerHTML = DATA.plans
      .map(
        (p) => `
      <div class="plan ${p.popular ? "popular" : ""} reveal">
        ${p.popular ? `<div class="plan-badge">${popular}</div>` : ""}
        <h3>${T(p.name)}</h3>
        <div class="plan-amount">${p.price}</div>
        <div class="plan-old">${p.old}</div>
        <ul>${p.features.map((f) => `<li>${T(f)}</li>`).join("")}</ul>
        <a href="register.html" class="btn ${p.popular ? "btn-primary" : "btn-ghost"}">${enroll}</a>
      </div>`
      )
      .join("");
  }

  // Tuition — combos
  const combos = document.getElementById("pricing-combos");
  if (combos) {
    const enroll = IS_VI() ? "Ghi danh" : "Enroll";
    combos.innerHTML = DATA.combos
      .map(
        (c) => `
      <div class="combo reveal">
        <div class="combo-info"><h4>${T(c.name)}</h4><p>${T(c.includes)}</p></div>
        <div class="combo-buy"><div class="combo-price">${c.price} <small>${c.old}</small></div><a href="register.html" class="btn btn-primary">${enroll}</a></div>
      </div>`
      )
      .join("");
  }

  // Tuition — discounts
  const discs = document.getElementById("pricing-discounts");
  if (discs && DATA.discounts) {
    discs.innerHTML = DATA.discounts
      .map(
        (d) => `
      <div class="disc-card reveal">
        <div class="disc-icon">${d.icon}</div>
        <div class="disc-body">
          <div class="disc-top"><h4>${T(d.name)}</h4><span class="disc-value">${T(d.value)}</span></div>
          <p>${T(d.desc)}</p>
        </div>
      </div>`
      )
      .join("");
  }

  // Schedule
  const sched = document.getElementById("schedule-list");
  if (sched) {
    const reg = IS_VI() ? "Giữ chỗ" : "Reserve";
    const cStart = IS_VI() ? "Khai giảng" : "Starts";
    const cMode = IS_VI() ? "Hình thức" : "Mode";
    const cTime = IS_VI() ? "Lịch học" : "Schedule";
    sched.innerHTML = DATA.schedule
      .map(
        (s) => `
      <div class="sched-item reveal">
        <div class="sched-course">${T(s.course)}</div>
        <div class="sched-cell"><span class="sc-label">${cStart}</span>${s.start}</div>
        <div class="sched-cell"><span class="sc-label">${cMode}</span>${T(s.mode)}</div>
        <div class="sched-cell"><span class="sc-label">${cTime}</span>${T(s.time)}</div>
        <div class="sched-cell"><span class="seat ${s.level}">${T(s.seats)}</span></div>
        <a href="register.html" class="btn btn-primary sched-btn">${reg}</a>
      </div>`
      )
      .join("");
  }

  // Blog listing (search + tag filter + pagination)
  const blog = document.getElementById("blog-posts");
  if (blog) {
    const minWord = IS_VI() ? "phút đọc" : "min read";
    const more = IS_VI() ? "Đọc tiếp" : "Read more";

    // Tag chips
    const tagsMount = document.getElementById("blog-tags");
    if (tagsMount) {
      const tags = ["all"].concat(DATA.posts.map((p) => p.tag).filter((t, i, a) => a.indexOf(t) === i));
      tagsMount.innerHTML = tags
        .map((t) => `<button data-tag="${esc(t)}" class="${t === BLOG_TAG ? "active" : ""}">${t === "all" ? I18N[CURRENT_LANG]["blog.all"] : esc(t)}</button>`)
        .join("");
    }

    // Filter
    const q = BLOG_QUERY.trim().toLowerCase();
    const filtered = DATA.posts.filter((p) => {
      const okTag = BLOG_TAG === "all" || p.tag === BLOG_TAG;
      const hay = (T(p.title) + " " + T(p.excerpt) + " " + p.tag).toLowerCase();
      return okTag && (!q || hay.includes(q));
    });

    // Paginate
    const pages = Math.max(1, Math.ceil(filtered.length / BLOG_PAGE_SIZE));
    if (BLOG_PAGE > pages) BLOG_PAGE = pages;
    const start = (BLOG_PAGE - 1) * BLOG_PAGE_SIZE;
    const pageItems = filtered.slice(start, start + BLOG_PAGE_SIZE);

    blog.innerHTML = pageItems.length
      ? pageItems
          .map(
            (p) => `
      <a class="post reveal" href="post.html?slug=${p.slug}">
        <div class="post-thumb" style="background:${p.grad}"><span>${p.tag}</span></div>
        <div class="post-body">
          <div class="post-meta">${p.date} · ${p.read} ${minWord}</div>
          <h3>${T(p.title)}</h3>
          <p>${T(p.excerpt)}</p>
          <span class="post-readmore">${more} →</span>
        </div>
      </a>`
          )
          .join("")
      : `<p class="blog-empty">${I18N[CURRENT_LANG]["blog.none"]}</p>`;

    // Pagination controls
    const pg = document.getElementById("blog-pagination");
    if (pg) {
      if (pages <= 1) {
        pg.innerHTML = "";
      } else {
        let html = `<button data-page="${BLOG_PAGE - 1}" ${BLOG_PAGE === 1 ? "disabled" : ""}>‹</button>`;
        for (let i = 1; i <= pages; i++) html += `<button data-page="${i}" class="${i === BLOG_PAGE ? "active" : ""}">${i}</button>`;
        html += `<button data-page="${BLOG_PAGE + 1}" ${BLOG_PAGE === pages ? "disabled" : ""}>›</button>`;
        pg.innerHTML = html;
      }
    }
  }

  // Instructors grid (cards link to profile)
  const instr = document.getElementById("instructors-grid");
  if (instr) {
    const view = IS_VI() ? "Xem hồ sơ →" : "View profile →";
    instr.innerHTML = DATA.instructors
      .map(
        (m) => `
      <a class="card mentor reveal" href="instructor.html?id=${m.id}">
        <div class="avatar" style="background:${m.grad}">${m.initials}<img class="avatar-img" src="${m.photo}" alt="${esc(m.name)}" loading="lazy" onerror="this.remove()" /></div>
        <h3>${esc(m.name)}</h3>
        <div class="role">${esc(m.role)}</div>
        <p>${T(m.bio)}</p>
        <span class="mentor-link">${view}</span>
      </a>`
      )
      .join("");
  }

  // Instructor detail
  const idet = document.getElementById("instructor-detail");
  if (idet) {
    const m = DATA.instructors.find((x) => x.id === QS("id"));
    if (!m) {
      idet.innerHTML = `<div class="container" style="padding:80px 0;text-align:center;"><h2>${IS_VI() ? "Không tìm thấy giảng viên" : "Instructor not found"}</h2><a class="btn btn-primary" href="instructors.html" style="margin-top:16px;">${IS_VI() ? "Xem tất cả giảng viên" : "All instructors"}</a></div>`;
    } else {
      document.title = `${m.name} — TalentNode`;
      const L = {
        crumb: IS_VI() ? "Giảng viên" : "Instructors",
        about: IS_VI() ? "Giới thiệu" : "About",
        expertise: IS_VI() ? "Chuyên môn" : "Expertise",
        teaches: IS_VI() ? "Khóa học giảng dạy" : "Courses taught",
        weeks: IS_VI() ? "tuần" : "weeks", detail: IS_VI() ? "Chi tiết" : "Details"
      };
      const taught = (m.teaches || [])
        .map((cid) => DATA.courses.find((c) => c.id === cid))
        .filter(Boolean)
        .map(
          (c) => `
        <a class="taught-course" href="course.html?id=${c.id}">
          <span class="tag ${c.tagClass}">${T(c.tagLabel)}</span>
          <h4>${T(c.title)}</h4>
          <div class="taught-meta">🕒 ${c.weeks} ${L.weeks} · ${T(c.level)}</div>
          <span class="post-readmore">${L.detail} →</span>
        </a>`
        )
        .join("");
      idet.innerHTML = `
      <section class="detail-hero">
        <div class="container">
          <div class="crumb"><a href="instructors.html">${L.crumb}</a> › ${esc(m.name)}</div>
          <div class="instructor-head">
            <div class="avatar avatar-lg" style="background:${m.grad}">${m.initials}<img class="avatar-img" src="${m.photo}" alt="${esc(m.name)}" onerror="this.remove()" /></div>
            <div>
              <h1>${esc(m.name)}</h1>
              <div class="role">${esc(m.role)}</div>
              <div class="socials"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="GitHub">gh</a></div>
            </div>
          </div>
        </div>
      </section>
      <section style="padding-top:20px;">
        <div class="container detail-grid">
          <div class="detail-main">
            <h2>${L.about}</h2>
            <p style="color:var(--muted);font-size:1.05rem;line-height:1.8;">${T(m.about || m.bio)}</p>
            <h2>${L.teaches}</h2>
            <div class="taught-grid">${taught || `<p style="color:var(--muted)">—</p>`}</div>
          </div>
          <aside class="detail-side">
            <div class="side-card">
              <div class="side-tools" style="border:0;margin:0;padding:0;">
                <h4>${L.expertise}</h4>
                <div class="toolset">${(m.expertise || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
              </div>
            </div>
          </aside>
        </div>
      </section>`;
    }
  }

  // Courses grid
  const cgrid = document.getElementById("courses-grid");
  if (cgrid) {
    const wWord = IS_VI() ? "tuần" : "weeks";
    const pWord = IS_VI() ? "dự án" : "projects";
    const detail = IS_VI() ? "Chi tiết" : "Details";
    const enroll = IS_VI() ? "Ghi danh" : "Enroll";
    cgrid.innerHTML = DATA.courses
      .map(
        (c) => `
      <div class="card course reveal" data-cat="${c.cat}">
        <span class="tag ${c.tagClass}">${T(c.tagLabel)}</span>
        <h3>${T(c.title)}</h3>
        <p class="desc">${T(c.tagline)}</p>
        <div class="course-meta">
          <span>🕒 ${c.weeks} ${wWord}</span>
          <span>📊 ${T(c.level)}</span>
          <span>🧩 ${c.projects} ${pWord}</span>
        </div>
        <div class="course-foot">
          <div class="price">${c.price} <small>${c.old}</small>${c.studentPrice ? `<span class="stu-badge">🎓 ${IS_VI() ? "SV" : "Student"} ${c.studentPrice}</span>` : ""}</div>
          <div class="course-actions">
            <a href="course.html?id=${c.id}" class="btn btn-ghost">${detail}</a>
            <a href="register.html" class="btn btn-primary">${enroll}</a>
          </div>
        </div>
      </div>`
      )
      .join("");
    applyCourseFilter();
  }

  // Course detail
  const cdet = document.getElementById("course-detail");
  if (cdet) {
    const c = DATA.courses.find((x) => x.id === QS("id"));
    if (!c) {
      cdet.innerHTML = `<div class="container" style="padding:80px 0;text-align:center;"><h2>${IS_VI() ? "Không tìm thấy khóa học" : "Course not found"}</h2><a class="btn btn-primary" href="courses.html" style="margin-top:16px;">${IS_VI() ? "Xem tất cả khóa học" : "Browse all courses"}</a></div>`;
    } else {
      document.title = `${T(c.title)} — TalentNode`;
      injectLd("ld-course", {
        "@context": "https://schema.org",
        "@type": "Course",
        name: T(c.title),
        description: T(c.tagline),
        url: SITE_URL + "course.html?id=" + c.id,
        provider: { "@type": "EducationalOrganization", name: "TalentNode", sameAs: SITE_URL },
        offers: { "@type": "Offer", price: (c.price || "").replace(/[^\d]/g, ""), priceCurrency: "VND", category: "Paid" },
        hasCourseInstance: { "@type": "CourseInstance", courseMode: ["online"], courseWorkload: `P${c.weeks}W` }
      });
      const L = {
        crumb: IS_VI() ? "Khóa học" : "Courses",
        weeks: IS_VI() ? "tuần" : "weeks", projects: IS_VI() ? "dự án" : "projects",
        levelW: IS_VI() ? "Trình độ" : "Level", formatW: IS_VI() ? "Hình thức" : "Format",
        outcomes: IS_VI() ? "Bạn sẽ học được gì" : "What you'll learn",
        curr: IS_VI() ? "Nội dung khóa học" : "Course content",
        tools: IS_VI() ? "Công cụ & công nghệ" : "Tools & technologies",
        who: IS_VI() ? "Dành cho ai" : "Who it's for",
        enroll: IS_VI() ? "Ghi danh ngay" : "Enroll now",
        sched: IS_VI() ? "Xem lịch khai giảng" : "See the schedule"
      };
      cdet.innerHTML = `
      <section class="detail-hero">
        <div class="container">
          <div class="crumb"><a href="courses.html">${L.crumb}</a> › ${T(c.title)}</div>
          <span class="tag ${c.tagClass}">${T(c.tagLabel)}</span>
          <h1>${T(c.title)}</h1>
          <p class="detail-tagline">${T(c.tagline)}</p>
          <div class="course-meta">
            <span>🕒 ${c.weeks} ${L.weeks}</span>
            <span>📊 ${T(c.level)}</span>
            <span>🧩 ${c.projects} ${L.projects}</span>
            <span>💻 ${T(c.format)}</span>
          </div>
        </div>
      </section>
      <section style="padding-top:20px;">
        <div class="container detail-grid">
          <div class="detail-main">
            <h2>${L.outcomes}</h2>
            <div class="outcomes">${c.outcomes.map((o) => `<div class="outcome">${T(o)}</div>`).join("")}</div>
            <h2>${L.curr}</h2>
            ${(() => {
              const syl = DATA.syllabi && DATA.syllabi[c.id];
              if (!syl) return `<ol class="curriculum">${c.curriculum.map((m) => `<li><span>${T(m)}</span></li>`).join("")}</ol>`;
              const wk = IS_VI() ? "Tuần" : "Week";
              return `<div class="syllabus">${syl.map((m) => `
                <div class="syl-module">
                  <div class="syl-head"><span class="syl-week">${wk} ${esc(m.week)}</span><h3>${T(m.title)}</h3></div>
                  <ul class="syl-topics">${m.topics.map((t) => `<li>${T(t)}</li>`).join("")}</ul>
                  ${m.project ? `<div class="syl-project">🧩 ${T(m.project)}</div>` : ""}
                </div>`).join("")}</div>`;
            })()}
            <h2>${L.who}</h2>
            <ul class="audience">${c.audience.map((a) => `<li>${T(a)}</li>`).join("")}</ul>
          </div>
          <aside class="detail-side">
            <div class="side-card">
              <div class="plan-amount">${c.price}</div>
              <div class="plan-old">${c.old}</div>
              ${c.studentPrice ? `<div class="stu-price">🎓 ${IS_VI() ? "Giá sinh viên" : "Student price"}: <b>${c.studentPrice}</b></div>` : ""}
              <a href="register.html" class="btn btn-primary" style="width:100%;justify-content:center;">${L.enroll}</a>
              <a href="schedule.html" class="btn btn-ghost" style="width:100%;justify-content:center;margin-top:10px;">${L.sched}</a>
              <div class="side-tools">
                <h4>${L.tools}</h4>
                <div class="toolset">${c.tools.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
              </div>
            </div>
          </aside>
        </div>
      </section>`;
    }
  }

  // Post detail
  const pdet = document.getElementById("post-detail");
  if (pdet) {
    const p = DATA.posts.find((x) => x.slug === QS("slug"));
    if (!p) {
      pdet.innerHTML = `<div class="container" style="padding:80px 0;text-align:center;"><h2>${IS_VI() ? "Không tìm thấy bài viết" : "Post not found"}</h2><a class="btn btn-primary" href="blog.html" style="margin-top:16px;">${IS_VI() ? "Về trang Blog" : "Back to Blog"}</a></div>`;
    } else {
      document.title = `${T(p.title)} — TalentNode`;
      injectLd("ld-post", {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: T(p.title),
        description: T(p.excerpt),
        datePublished: isoDate(p.date),
        image: SITE_URL + "assets/og-cover.png",
        url: SITE_URL + "post.html?slug=" + p.slug,
        author: { "@type": "Organization", name: "TalentNode" },
        publisher: { "@type": "Organization", name: "TalentNode", logo: { "@type": "ImageObject", url: SITE_URL + "assets/logo.svg" } }
      });
      const minWord = IS_VI() ? "phút đọc" : "min read";
      const back = IS_VI() ? "← Về Blog" : "← Back to Blog";
      const shareW = IS_VI() ? "Chia sẻ:" : "Share:";
      const copyW = IS_VI() ? "Sao chép link" : "Copy link";
      const shareRow = `
        <div class="share-row">
          <span class="share-label">${shareW}</span>
          <button class="share-btn" data-share="facebook" aria-label="Facebook">f</button>
          <button class="share-btn" data-share="twitter" aria-label="X / Twitter">𝕏</button>
          <button class="share-btn" data-share="linkedin" aria-label="LinkedIn">in</button>
          <button class="share-btn" data-share="native" aria-label="Share">↗</button>
          <button class="share-btn share-copy" data-share="copy">${copyW}</button>
        </div>`;
      pdet.innerHTML = `
      <article class="article">
        <div class="container-narrow">
          <a class="crumb" href="blog.html">${back}</a>
          <span class="tag ai" style="margin:14px 0 0;">${p.tag}</span>
          <h1>${T(p.title)}</h1>
          <div class="post-meta">${p.date} · ${p.read} ${minWord}</div>
        </div>
        <div class="article-thumb" style="background:${p.grad}"></div>
        <div class="container-narrow article-body">
          <p class="article-lead">${T(p.excerpt)}</p>
          ${p.body.map((s) => `<h2>${T(s.h)}</h2><p>${T(s.p)}</p>`).join("")}
          ${shareRow}
        </div>
      </article>`;
    }
  }
}

/* ============ Share ============ */
function handleShare(kind) {
  const url = location.href;
  const title = document.title;
  const enc = encodeURIComponent;
  if (kind === "copy") {
    const done = () => {
      const b = document.querySelector('.share-btn[data-share="copy"]');
      if (b) { const o = b.textContent; b.textContent = IS_VI() ? "Đã sao chép ✓" : "Copied ✓"; setTimeout(() => (b.textContent = o), 1600); }
    };
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, done);
    else done();
    return;
  }
  if (kind === "native") {
    if (navigator.share) navigator.share({ title, url }).catch(() => {});
    else handleShare("copy");
    return;
  }
  const urls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`
  };
  if (urls[kind]) window.open(urls[kind], "_blank", "noopener,width=620,height=560");
}

/* ============ i18n ============ */
function applyLang(lang) {
  CURRENT_LANG = lang;
  document.documentElement.lang = lang;
  renderDynamic();
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = I18N[lang][el.getAttribute("data-i18n")];
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const val = I18N[lang][el.getAttribute("data-i18n-ph")];
    if (val !== undefined) el.setAttribute("placeholder", val);
  });
  document.querySelectorAll(".lang-toggle button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  observeReveals();
  try { localStorage.setItem("tn_lang", lang); } catch (e) {}
}

/* ============ Theme (dark / light) ============ */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.querySelector(".theme-toggle");
  if (btn) btn.textContent = theme === "light" ? "🌙" : "☀️";
  try { localStorage.setItem("tn_theme", theme); } catch (e) {}
}
function initTheme() {
  let theme = "dark";
  try { theme = localStorage.getItem("tn_theme") || "dark"; } catch (e) {}
  applyTheme(theme);
}

/* ============ Reveal-on-scroll ============ */
let REVEAL_IO;
function observeReveals() {
  if (!REVEAL_IO) {
    REVEAL_IO = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); REVEAL_IO.unobserve(en.target); } }),
      { threshold: 0.1 }
    );
  }
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => REVEAL_IO.observe(el));
}

/* ============ Init ============ */
document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  initTheme();

  // Main-content anchor for skip link + a11y focus
  const firstMain = document.querySelector("section, [id$='-detail']");
  if (firstMain) {
    if (!firstMain.id) firstMain.id = "main-content";
    firstMain.setAttribute("tabindex", "-1");
    const sk = document.querySelector(".skip-link");
    if (sk) sk.setAttribute("href", "#" + firstMain.id);
  }

  let lang = "vi";
  try { lang = localStorage.getItem("tn_lang") || "vi"; } catch (e) {}
  applyLang(lang);

  document.querySelectorAll(".lang-toggle button").forEach((b) => {
    b.addEventListener("click", () => applyLang(b.dataset.lang));
  });

  const themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next);
    });
  }

  // Share buttons (event delegation)
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-share]");
    if (b) handleShare(b.dataset.share);
  });

  const burger = document.querySelector(".hamburger");
  const links = document.querySelector(".nav-links");
  if (burger && links) burger.addEventListener("click", () => links.classList.toggle("open"));

  // Course filters (re-render-safe via applyCourseFilter)
  const filterBtns = document.querySelectorAll(".filters button");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      COURSE_FILTER = btn.dataset.filter;
      applyCourseFilter();
    });
  });

  // Blog search + tag + pagination
  const blogSearch = document.getElementById("blog-search");
  if (blogSearch) {
    blogSearch.addEventListener("input", () => {
      BLOG_QUERY = blogSearch.value;
      BLOG_PAGE = 1;
      renderDynamic();
      observeReveals();
    });
  }
  const blogTags = document.getElementById("blog-tags");
  if (blogTags) {
    blogTags.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-tag]");
      if (!b) return;
      BLOG_TAG = b.dataset.tag;
      BLOG_PAGE = 1;
      renderDynamic();
      observeReveals();
    });
  }
  const blogPg = document.getElementById("blog-pagination");
  if (blogPg) {
    blogPg.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-page]");
      if (!b || b.disabled) return;
      BLOG_PAGE = parseInt(b.dataset.page, 10);
      renderDynamic();
      observeReveals();
      const top = document.querySelector(".page-head");
      if (top) top.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // Forms — POST to real endpoint if configured, else demo success
  document.querySelectorAll("form[data-demo]").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const msg = form.querySelector(".form-success") || (form.closest(".form-wrap") || document).querySelector(".form-success");
      const btn = form.querySelector('button[type="submit"]');
      const endpoint = form.getAttribute("data-endpoint");
      if (endpoint && !endpoint.includes("YOUR_")) {
        const isGoogle = endpoint.includes("script.google.com");
        try {
          if (btn) btn.disabled = true;
          await fetch(
            endpoint,
            isGoogle
              ? { method: "POST", mode: "no-cors", body: new FormData(form) }
              : { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) }
          );
        } catch (err) {
          /* fall through: still confirm to the user */
        } finally {
          if (btn) btn.disabled = false;
        }
      }
      if (msg) { msg.style.display = "block"; msg.scrollIntoView({ behavior: "smooth", block: "center" }); }
      form.reset();
    });
  });

  observeReveals();
});
