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
    "course.ds.t": "AI & Data Scientist",
    "course.ds.d": "Toán, thống kê, Machine Learning, Deep Learning và đưa mô hình vào quyết định.",
    "course.da.t": "Data Analyst: Phân tích dữ liệu",
    "course.pyda.t": "Python for Data Analysis",
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
    "contact.addrV": "Bách Khoa, Hà Nội",
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
    "footer.c_de": "Data Engineering Zero → Hero",
    "footer.c_ml": "Machine Learning thực chiến",
    "footer.c_ai": "AI Engineer: LLM & RAG",
    "footer.c_ds": "AI & Data Scientist",
    "footer.c_mlops": "MLOps & Deployment",
    "footer.c_da": "Data Analyst",
    "footer.c_pyda": "Python for Data Analysis",
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
    "course.ds.t": "AI & Data Scientist",
    "course.ds.d": "Math, statistics, Machine Learning, Deep Learning and turning models into decisions.",
    "course.da.t": "Data Analyst",
    "course.pyda.t": "Python for Data Analysis",
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
    "contact.addrV": "Bach Khoa, Hanoi",
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
    "footer.c_de": "Data Engineering Zero → Hero",
    "footer.c_ml": "Practical Machine Learning",
    "footer.c_ai": "AI Engineer: LLM & RAG",
    "footer.c_ds": "AI & Data Scientist",
    "footer.c_mlops": "MLOps & Deployment",
    "footer.c_da": "Data Analyst",
    "footer.c_pyda": "Python for Data Analysis",
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
    { name: "AI Engineer", track: "aieng" },
    { name: "MLOps", track: "mlops" },
    { name: "Python for Data Analysis", track: "pyda" },
    { name: "Backend", soon: true },
    { name: "DevOps", soon: true },
    { name: "Full Stack", soon: true },
    { name: "Software Architect", soon: true },
    { name: "Product Manager", soon: true }
  ],

  courses: [
    {
      "id": "da",
      "cat": "ds",
      "tagClass": "eng",
      "tagLabel": {
        "vi": "Data Analyst",
        "en": "Data Analyst"
      },
      "title": {
        "vi": "Data Analyst: Phân tích dữ liệu",
        "en": "Data Analyst"
      },
      "tagline": {
        "vi": "Excel, SQL, Python, thống kê, trực quan hóa và storytelling cho quyết định kinh doanh.",
        "en": "Excel, SQL, Python, statistics, visualization and storytelling for business decisions."
      },
      "price": "5.900.000đ",
      "old": "14.900.000đ",
      "studentPrice": "4.400.000đ",
      "weeks": 8,
      "projects": 3,
      "level": {
        "vi": "Cơ bản",
        "en": "Beginner"
      },
      "format": {
        "vi": "Online",
        "en": "Online"
      },
      "outcomes": [
        {
          "vi": "Phân tích dữ liệu với Python & SQL",
          "en": "Analyze data with Python & SQL"
        },
        {
          "vi": "Kiểm định giả thuyết & A/B testing",
          "en": "Hypothesis testing & A/B testing"
        },
        {
          "vi": "Trực quan hóa & xây dashboard (Power BI)",
          "en": "Visualization & dashboards (Power BI)"
        },
        {
          "vi": "Storytelling dữ liệu cho quyết định",
          "en": "Data storytelling for decisions"
        }
      ],
      "curriculum": [
        {
          "vi": "Excel & tư duy phân tích",
          "en": "Excel & analytical thinking"
        },
        {
          "vi": "SQL cho phân tích",
          "en": "SQL for analytics"
        },
        {
          "vi": "Python & pandas",
          "en": "Python & pandas"
        },
        {
          "vi": "Thống kê & A/B testing",
          "en": "Statistics & A/B testing"
        },
        {
          "vi": "Trực quan hóa & dashboard/BI",
          "en": "Visualization & dashboards/BI"
        },
        {
          "vi": "Đồ án: phân tích sản phẩm end-to-end",
          "en": "Project: end-to-end product analysis"
        }
      ],
      "tools": [
        "Excel",
        "SQL",
        "Python",
        "pandas",
        "Power BI",
        "Matplotlib",
        "Seaborn"
      ],
      "audience": [
        {
          "vi": "Người mới bắt đầu với dữ liệu",
          "en": "Complete beginners with data"
        },
        {
          "vi": "Muốn làm Data Analyst / BI",
          "en": "Aiming for Data Analyst / BI"
        },
        {
          "vi": "Dân kinh doanh muốn ra quyết định bằng dữ liệu",
          "en": "Business folks who want data-driven decisions"
        }
      ]
    },
    {
      "id": "de",
      "cat": "data",
      "tagClass": "data",
      "tagLabel": {
        "vi": "Data Engineering",
        "en": "Data Engineering"
      },
      "title": {
        "vi": "Data Engineering Zero → Hero",
        "en": "Data Engineering Zero → Hero"
      },
      "tagline": {
        "vi": "Dựng pipeline dữ liệu production từ số 0 — SQL, Spark, Kafka, dbt, Airflow và lakehouse.",
        "en": "Build production data pipelines from scratch — SQL, Spark, Kafka, dbt, Airflow and lakehouse."
      },
      "price": "7.900.000đ",
      "old": "18.900.000đ",
      "studentPrice": "5.900.000đ",
      "weeks": 12,
      "projects": 5,
      "level": {
        "vi": "Cơ bản → Trung cấp",
        "en": "Beginner → Intermediate"
      },
      "format": {
        "vi": "Online",
        "en": "Online"
      },
      "outcomes": [
        {
          "vi": "Thiết kế & vận hành pipeline batch và streaming",
          "en": "Design & run batch and streaming pipelines"
        },
        {
          "vi": "Mô hình hóa dữ liệu và xây lakehouse",
          "en": "Data modeling and building a lakehouse"
        },
        {
          "vi": "Xử lý dữ liệu lớn với Spark, streaming với Kafka",
          "en": "Big data with Spark, streaming with Kafka"
        },
        {
          "vi": "Orchestrate với Airflow, transform với dbt",
          "en": "Orchestrate with Airflow, transform with dbt"
        },
        {
          "vi": "Triển khai lên cloud kèm CI/CD",
          "en": "Deploy to the cloud with CI/CD"
        }
      ],
      "curriculum": [
        {
          "vi": "Nền tảng: Linux, Git, Python & SQL nâng cao",
          "en": "Foundations: Linux, Git, Python & advanced SQL"
        },
        {
          "vi": "Mô hình dữ liệu & Data Warehouse (star schema, dbt)",
          "en": "Data modeling & warehousing (star schema, dbt)"
        },
        {
          "vi": "Xử lý dữ liệu lớn với Apache Spark",
          "en": "Big data processing with Apache Spark"
        },
        {
          "vi": "Streaming với Kafka & xử lý thời gian thực",
          "en": "Streaming with Kafka & real-time processing"
        },
        {
          "vi": "Orchestration với Airflow & Lakehouse (Delta/Iceberg)",
          "en": "Orchestration with Airflow & Lakehouse (Delta/Iceberg)"
        },
        {
          "vi": "Đồ án cuối: pipeline end-to-end trên cloud",
          "en": "Capstone: an end-to-end pipeline on the cloud"
        }
      ],
      "tools": [
        "Python",
        "SQL",
        "PostgreSQL",
        "Apache Spark",
        "Kafka",
        "dbt",
        "Airflow",
        "Docker",
        "AWS"
      ],
      "audience": [
        {
          "vi": "Người mới muốn vào nghề Data Engineer",
          "en": "Newcomers aiming for a Data Engineer role"
        },
        {
          "vi": "Lập trình viên / Data Analyst muốn chuyển sang DE",
          "en": "Developers / Data Analysts moving into DE"
        },
        {
          "vi": "Sinh viên IT muốn có portfolio thực chiến",
          "en": "IT students who want a real portfolio"
        }
      ]
    },
    {
      "id": "ds",
      "cat": "ds",
      "tagClass": "eng",
      "tagLabel": {
        "vi": "AI & Data Scientist",
        "en": "AI & Data Scientist"
      },
      "title": {
        "vi": "AI & Data Scientist",
        "en": "AI & Data Scientist"
      },
      "tagline": {
        "vi": "Từ toán, thống kê đến Machine Learning, Deep Learning và đưa mô hình vào quyết định.",
        "en": "From math and statistics to Machine Learning, Deep Learning and turning models into decisions."
      },
      "price": "9.900.000đ",
      "old": "24.900.000đ",
      "studentPrice": "7.400.000đ",
      "weeks": 12,
      "projects": 5,
      "level": {
        "vi": "Cơ bản → Nâng cao",
        "en": "Beginner → Advanced"
      },
      "format": {
        "vi": "Online",
        "en": "Online"
      },
      "outcomes": [
        {
          "vi": "Nắm toán & thống kê cho khoa học dữ liệu",
          "en": "Master math & statistics for data science"
        },
        {
          "vi": "Xây mô hình ML từ hồi quy đến ensemble",
          "en": "Build ML models from regression to ensembles"
        },
        {
          "vi": "Deep learning: CNN, RNN, Transformer",
          "en": "Deep learning: CNN, RNN, Transformer"
        },
        {
          "vi": "Thí nghiệm & suy luận nhân quả",
          "en": "Experiment design & causal inference"
        },
        {
          "vi": "Đưa mô hình & insight vào quyết định",
          "en": "Turn models & insights into decisions"
        }
      ],
      "curriculum": [
        {
          "vi": "Toán, thống kê & xác suất",
          "en": "Math, statistics & probability"
        },
        {
          "vi": "Python, EDA & trực quan hóa",
          "en": "Python, EDA & visualization"
        },
        {
          "vi": "Machine Learning (sup/unsup, ensemble)",
          "en": "Machine Learning (sup/unsup, ensembles)"
        },
        {
          "vi": "Deep Learning (CNN, RNN, Transformer)",
          "en": "Deep Learning (CNN, RNN, Transformer)"
        },
        {
          "vi": "Thí nghiệm, A/B testing & nhân quả",
          "en": "Experiments, A/B testing & causal inference"
        },
        {
          "vi": "Đồ án: mô hình dự báo end-to-end",
          "en": "Project: end-to-end predictive model"
        }
      ],
      "tools": [
        "Python",
        "pandas",
        "scikit-learn",
        "PyTorch",
        "statsmodels",
        "Matplotlib",
        "SQL"
      ],
      "audience": [
        {
          "vi": "Muốn trở thành Data Scientist",
          "en": "Aspiring Data Scientists"
        },
        {
          "vi": "Analyst muốn lên Data Scientist",
          "en": "Analysts leveling up to Data Scientist"
        },
        {
          "vi": "Có nền Python, muốn học ML/DL bài bản",
          "en": "Python users wanting rigorous ML/DL"
        }
      ]
    },
    {
      "id": "ml",
      "cat": "ml",
      "tagClass": "ml",
      "tagLabel": {
        "vi": "Machine Learning",
        "en": "Machine Learning"
      },
      "title": {
        "vi": "Machine Learning thực chiến",
        "en": "Practical Machine Learning"
      },
      "tagline": {
        "vi": "Từ hồi quy đến ensemble, feature engineering và đưa mô hình lên production.",
        "en": "From regression to ensembles, feature engineering and shipping models to production."
      },
      "price": "7.900.000đ",
      "old": "19.900.000đ",
      "studentPrice": "5.900.000đ",
      "weeks": 10,
      "projects": 4,
      "level": {
        "vi": "Trung cấp",
        "en": "Intermediate"
      },
      "format": {
        "vi": "Online",
        "en": "Online"
      },
      "outcomes": [
        {
          "vi": "Nắm quy trình ML end-to-end",
          "en": "Master the end-to-end ML workflow"
        },
        {
          "vi": "Feature engineering & xây pipeline",
          "en": "Feature engineering & building pipelines"
        },
        {
          "vi": "Đánh giá, tuning và tránh overfitting/leakage",
          "en": "Evaluate, tune and avoid overfitting/leakage"
        },
        {
          "vi": "Đưa mô hình thành API phục vụ thực tế",
          "en": "Serve models as a real-world API"
        }
      ],
      "curriculum": [
        {
          "vi": "Toán & Python cho Machine Learning",
          "en": "Math & Python for Machine Learning"
        },
        {
          "vi": "Hồi quy & phân loại",
          "en": "Regression & classification"
        },
        {
          "vi": "Feature engineering & pipeline",
          "en": "Feature engineering & pipelines"
        },
        {
          "vi": "Ensemble: Random Forest, XGBoost",
          "en": "Ensembles: Random Forest, XGBoost"
        },
        {
          "vi": "Đánh giá, tuning & cross-validation",
          "en": "Evaluation, tuning & cross-validation"
        },
        {
          "vi": "Đồ án: dự đoán churn + deploy API",
          "en": "Project: churn prediction + API deploy"
        }
      ],
      "tools": [
        "Python",
        "NumPy",
        "pandas",
        "scikit-learn",
        "XGBoost",
        "Matplotlib",
        "FastAPI"
      ],
      "audience": [
        {
          "vi": "Biết Python cơ bản, muốn vào ML",
          "en": "Know basic Python, want to break into ML"
        },
        {
          "vi": "Data Analyst muốn lên Data Scientist / ML",
          "en": "Analysts leveling up to Data Scientist / ML"
        },
        {
          "vi": "Kỹ sư phần mềm muốn thêm kỹ năng ML",
          "en": "Software engineers adding ML skills"
        }
      ]
    },
    {
      "id": "ai",
      "cat": "ai",
      "tagClass": "ai",
      "tagLabel": {
        "vi": "AI Engineer",
        "en": "AI Engineer"
      },
      "title": {
        "vi": "AI Engineer: LLM & RAG",
        "en": "AI Engineer: LLM & RAG"
      },
      "tagline": {
        "vi": "Xây ứng dụng LLM thực chiến — RAG, agent, fine-tuning, đánh giá và MLOps cho AI.",
        "en": "Build real LLM apps — RAG, agents, fine-tuning, evaluation and MLOps for AI."
      },
      "price": "8.900.000đ",
      "old": "22.900.000đ",
      "studentPrice": "6.700.000đ",
      "weeks": 10,
      "projects": 4,
      "level": {
        "vi": "Nâng cao",
        "en": "Advanced"
      },
      "format": {
        "vi": "Online",
        "en": "Online"
      },
      "outcomes": [
        {
          "vi": "Xây RAG pipeline end-to-end",
          "en": "Build an end-to-end RAG pipeline"
        },
        {
          "vi": "Dùng embeddings & vector database",
          "en": "Use embeddings & vector databases"
        },
        {
          "vi": "Thiết kế agent và tool-use",
          "en": "Design agents and tool-use"
        },
        {
          "vi": "Đánh giá chất lượng LLM & triển khai app",
          "en": "Evaluate LLM quality & deploy the app"
        }
      ],
      "curriculum": [
        {
          "vi": "Nền tảng LLM & prompt engineering",
          "en": "LLM foundations & prompt engineering"
        },
        {
          "vi": "Embeddings & vector search",
          "en": "Embeddings & vector search"
        },
        {
          "vi": "RAG end-to-end",
          "en": "End-to-end RAG"
        },
        {
          "vi": "Agents & tool-use",
          "en": "Agents & tool-use"
        },
        {
          "vi": "Fine-tuning & đánh giá (LLM-as-judge)",
          "en": "Fine-tuning & evaluation (LLM-as-judge)"
        },
        {
          "vi": "Đồ án: chatbot doanh nghiệp có trích dẫn",
          "en": "Project: an enterprise chatbot with citations"
        }
      ],
      "tools": [
        "Python",
        "PyTorch",
        "Hugging Face",
        "LangChain",
        "FAISS / Qdrant",
        "Ollama",
        "FastAPI"
      ],
      "audience": [
        {
          "vi": "Dev / ML Engineer muốn làm AI Engineer",
          "en": "Devs / ML engineers moving into AI Engineering"
        },
        {
          "vi": "Đã biết Python & ML cơ bản",
          "en": "Already know Python & basic ML"
        },
        {
          "vi": "Muốn xây sản phẩm trên nền LLM",
          "en": "Want to build LLM-powered products"
        }
      ]
    },
    {
      "id": "mlops",
      "cat": "ml",
      "tagClass": "ml",
      "tagLabel": {
        "vi": "MLOps",
        "en": "MLOps"
      },
      "title": {
        "vi": "MLOps & Deployment",
        "en": "MLOps & Deployment"
      },
      "tagline": {
        "vi": "CI/CD cho ML, giám sát drift và triển khai mô hình lên đa cloud.",
        "en": "CI/CD for ML, drift monitoring and multi-cloud model deployment."
      },
      "price": "8.900.000đ",
      "old": "21.900.000đ",
      "studentPrice": "6.700.000đ",
      "weeks": 8,
      "projects": 4,
      "level": {
        "vi": "Nâng cao",
        "en": "Advanced"
      },
      "format": {
        "vi": "Online",
        "en": "Online"
      },
      "outcomes": [
        {
          "vi": "Đóng gói & versioning mô hình",
          "en": "Package & version models"
        },
        {
          "vi": "CI/CD cho pipeline ML",
          "en": "CI/CD for ML pipelines"
        },
        {
          "vi": "Giám sát drift & hiệu năng",
          "en": "Monitor drift & performance"
        },
        {
          "vi": "Triển khai container / Kubernetes",
          "en": "Deploy on containers / Kubernetes"
        }
      ],
      "curriculum": [
        {
          "vi": "Nền tảng MLOps & Git workflow",
          "en": "MLOps foundations & Git workflow"
        },
        {
          "vi": "Đóng gói model & MLflow tracking",
          "en": "Model packaging & MLflow tracking"
        },
        {
          "vi": "CI/CD với GitHub Actions",
          "en": "CI/CD with GitHub Actions"
        },
        {
          "vi": "Docker & Kubernetes cho ML",
          "en": "Docker & Kubernetes for ML"
        },
        {
          "vi": "Giám sát drift & observability",
          "en": "Drift monitoring & observability"
        },
        {
          "vi": "Đồ án: pipeline ML tự động end-to-end",
          "en": "Project: automated end-to-end ML pipeline"
        }
      ],
      "tools": [
        "Python",
        "MLflow",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Prometheus",
        "Grafana"
      ],
      "audience": [
        {
          "vi": "ML / Data Scientist muốn đưa model ra production",
          "en": "ML / Data Scientists shipping models to production"
        },
        {
          "vi": "DevOps muốn chuyển sang MLOps",
          "en": "DevOps engineers moving into MLOps"
        },
        {
          "vi": "Data Engineer muốn mở rộng sang ML",
          "en": "Data Engineers expanding into ML"
        }
      ]
    },
    {
      "id": "pyda",
      "cat": "ds",
      "tagClass": "eng",
      "tagLabel": {
        "vi": "Python for Data",
        "en": "Python for Data"
      },
      "title": {
        "vi": "Python for Data Analysis",
        "en": "Python for Data Analysis"
      },
      "tagline": {
        "vi": "Học Python, pandas và NumPy để phân tích dữ liệu thực tế — từ số 0.",
        "en": "Learn Python, pandas and NumPy to analyze real data — from scratch."
      },
      "price": "4.900.000đ",
      "old": "9.900.000đ",
      "studentPrice": "3.700.000đ",
      "weeks": 6,
      "projects": 3,
      "level": {
        "vi": "Cơ bản",
        "en": "Beginner"
      },
      "format": {
        "vi": "Online",
        "en": "Online"
      },
      "outcomes": [
        {
          "vi": "Thành thạo Python cho xử lý dữ liệu",
          "en": "Master Python for data work"
        },
        {
          "vi": "Làm chủ pandas & NumPy",
          "en": "Master pandas & NumPy"
        },
        {
          "vi": "Làm sạch, biến đổi & tổng hợp dữ liệu",
          "en": "Clean, transform & aggregate data"
        },
        {
          "vi": "Trực quan hóa & rút insight",
          "en": "Visualize & extract insights"
        }
      ],
      "curriculum": [
        {
          "vi": "Python cơ bản & Jupyter",
          "en": "Python basics & Jupyter"
        },
        {
          "vi": "NumPy & tính toán số",
          "en": "NumPy & numerical computing"
        },
        {
          "vi": "pandas: lọc, nhóm, join",
          "en": "pandas: filter, group, join"
        },
        {
          "vi": "Làm sạch & biến đổi dữ liệu",
          "en": "Data cleaning & transformation"
        },
        {
          "vi": "Trực quan hóa với Matplotlib/Seaborn",
          "en": "Visualization with Matplotlib/Seaborn"
        },
        {
          "vi": "Đồ án: phân tích một bộ dữ liệu thực",
          "en": "Project: analyze a real dataset"
        }
      ],
      "tools": [
        "Python",
        "pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter"
      ],
      "audience": [
        {
          "vi": "Người mới hoàn toàn với lập trình/dữ liệu",
          "en": "Complete beginners to coding/data"
        },
        {
          "vi": "Sinh viên muốn kỹ năng phân tích",
          "en": "Students wanting analysis skills"
        },
        {
          "vi": "Dân văn phòng muốn làm việc với dữ liệu",
          "en": "Office workers wanting to work with data"
        }
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
        topics: [ { vi: "SQL nâng cao: JOIN, CTE, window functions", en: "Advanced SQL: JOINs, CTEs, window functions" }, { vi: "PostgreSQL, chỉ mục & tối ưu truy vấn", en: "PostgreSQL, indexing & query tuning" }, { vi: "OLTP vs OLAP, transactions", en: "OLTP vs OLAP, transactions" }, { vi: "NoSQL: MongoDB, Cassandra, Redis, DynamoDB", en: "NoSQL: MongoDB, Cassandra, Redis, DynamoDB" } ] },
      { week: "4", title: { vi: "Mô hình hóa dữ liệu & Data Warehouse", en: "Data modeling & warehousing" },
        topics: [ { vi: "Dimensional modeling, star/snowflake schema", en: "Dimensional modeling, star/snowflake schema" }, { vi: "Chuẩn hóa & CAP theorem", en: "Normalization & the CAP theorem" }, { vi: "Slowly Changing Dimensions (SCD)", en: "Slowly Changing Dimensions (SCD)" }, { vi: "Warehouse & Data Lake (BigQuery, Snowflake, Redshift)", en: "Warehouse & data lake (BigQuery, Snowflake, Redshift)" } ] },
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
        topics: [ { vi: "Dịch vụ dữ liệu trên AWS/GCP (S3, Glue, BigQuery)", en: "AWS/GCP data services (S3, Glue, BigQuery)" }, { vi: "Container hóa: Docker & Kubernetes", en: "Containerization: Docker & Kubernetes" }, { vi: "CI/CD & Infrastructure as Code (Terraform)", en: "CI/CD & Infrastructure as Code (Terraform)" }, { vi: "Data governance & bảo mật: quality, lineage, GDPR", en: "Data governance & security: quality, lineage, GDPR" }, { vi: "Giám sát pipeline & chi phí", en: "Pipeline monitoring & cost" } ] },
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
        topics: [ { vi: "Logistic regression, KNN, Naive Bayes", en: "Logistic regression, KNN, Naive Bayes" }, { vi: "Decision trees & SVM", en: "Decision trees & SVM" }, { vi: "Confusion matrix, precision/recall, ROC-AUC", en: "Confusion matrix, precision/recall, ROC-AUC" } ] },
      { week: "5", title: { vi: "Feature engineering & pipeline", en: "Feature engineering & pipelines" },
        topics: [ { vi: "Encoding, scaling, xử lý missing/outlier", en: "Encoding, scaling, missing/outlier handling" }, { vi: "Feature selection", en: "Feature selection" }, { vi: "scikit-learn Pipeline & cross-validation", en: "scikit-learn Pipeline & cross-validation" } ],
        project: { vi: "Đồ án 2: Pipeline phân loại end-to-end có feature engineering", en: "Project 2: End-to-end classification pipeline with feature engineering" } },
      { week: "6–7", title: { vi: "Ensemble & mô hình mạnh", en: "Ensembles & powerful models" },
        topics: [ { vi: "Random Forest, bagging vs boosting", en: "Random Forest, bagging vs boosting" }, { vi: "Gradient Boosting, XGBoost, LightGBM", en: "Gradient Boosting, XGBoost, LightGBM" }, { vi: "Tuning siêu tham số (GridSearch/Optuna)", en: "Hyperparameter tuning (GridSearch/Optuna)" } ],
        project: { vi: "Đồ án 3: Mô hình ensemble cho bài toán dự báo (kiểu Kaggle)", en: "Project 3: Ensemble model for a forecasting task (Kaggle-style)" } },
      { week: "8", title: { vi: "Học không giám sát & giảm chiều", en: "Unsupervised learning & dimensionality reduction" },
        topics: [ { vi: "K-Means & clustering", en: "K-Means & clustering" }, { vi: "PCA & giảm chiều", en: "PCA & dimensionality reduction" }, { vi: "Chuỗi thời gian (time-series forecasting)", en: "Time-series forecasting" }, { vi: "Phát hiện bất thường, recommender cơ bản", en: "Anomaly detection, basic recommenders" } ] },
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
    da: [
      { week: "1", title: { vi: "Nền tảng & tư duy dữ liệu", en: "Foundations & data thinking" },
        topics: [ { vi: "Vòng đời phân tích dữ liệu", en: "The data analysis lifecycle" }, { vi: "Loại phân tích: mô tả → chẩn đoán → dự đoán", en: "Types of analytics: descriptive → diagnostic → predictive" }, { vi: "Excel/Sheets nền tảng & đặt câu hỏi đúng", en: "Excel/Sheets basics & asking the right questions" } ] },
      { week: "2", title: { vi: "Python & pandas cho phân tích", en: "Python & pandas for analysis" },
        topics: [ { vi: "Python cơ bản", en: "Python basics" }, { vi: "pandas: lọc, nhóm, join", en: "pandas: filter, group, join" }, { vi: "Thu thập dữ liệu: API, web scraping", en: "Data collection: APIs, web scraping" }, { vi: "Làm sạch: missing, duplicate, outlier", en: "Cleaning: missing, duplicates, outliers" } ],
        project: { vi: "Đồ án 1: Làm sạch & phân tích một bộ dữ liệu thực", en: "Project 1: Clean & analyze a real dataset" } },
      { week: "3", title: { vi: "SQL cho phân tích", en: "SQL for analytics" },
        topics: [ { vi: "SELECT, JOIN, GROUP BY", en: "SELECT, JOIN, GROUP BY" }, { vi: "Window functions, subquery, CTE", en: "Window functions, subqueries, CTEs" }, { vi: "Truy vấn phân tích trên database thật", en: "Analytical queries on a real database" } ] },
      { week: "4", title: { vi: "Thống kê ứng dụng", en: "Applied statistics" },
        topics: [ { vi: "Thống kê mô tả: mean, median, variance", en: "Descriptive stats: mean, median, variance" }, { vi: "Phân phối & xác suất", en: "Distributions & probability" }, { vi: "Tương quan & hồi quy đơn giản", en: "Correlation & simple regression" }, { vi: "Giới thiệu Machine Learning cho phân tích", en: "Intro to Machine Learning for analytics" } ] },
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
        topics: [ { vi: "MLOps là gì & vòng đời ML", en: "What is MLOps & the ML lifecycle" }, { vi: "Python, Bash & Git workflow", en: "Python, Bash & Git workflow" }, { vi: "Nền tảng Data Engineering: pipelines, Airflow/Spark", en: "Data engineering fundamentals: pipelines, Airflow/Spark" }, { vi: "Nguyên tắc & thành phần MLOps", en: "MLOps principles & components" } ] },
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
    ds: [
      {
        "week": "1",
        "title": {
          "vi": "Toán & thống kê nền tảng",
          "en": "Math & statistics foundations"
        },
        "topics": [
          {
            "vi": "Đại số tuyến tính & giải tích",
            "en": "Linear algebra & calculus"
          },
          {
            "vi": "Xác suất & thống kê mô tả",
            "en": "Probability & descriptive statistics"
          },
          {
            "vi": "Kiểm định giả thuyết",
            "en": "Hypothesis testing"
          }
        ]
      },
      {
        "week": "2",
        "title": {
          "vi": "Python & phân tích khám phá (EDA)",
          "en": "Python & exploratory data analysis"
        },
        "topics": [
          {
            "vi": "Python, NumPy & pandas",
            "en": "Python, NumPy & pandas"
          },
          {
            "vi": "EDA & làm sạch dữ liệu",
            "en": "EDA & data cleaning"
          },
          {
            "vi": "Trực quan hóa (Matplotlib/Seaborn)",
            "en": "Visualization (Matplotlib/Seaborn)"
          }
        ],
        "project": {
          "vi": "Đồ án 1: EDA & rút insight từ dữ liệu thực",
          "en": "Project 1: EDA & insights from real data"
        }
      },
      {
        "week": "3",
        "title": {
          "vi": "SQL & feature engineering",
          "en": "SQL & feature engineering"
        },
        "topics": [
          {
            "vi": "SQL phân tích",
            "en": "Analytical SQL"
          },
          {
            "vi": "Feature engineering",
            "en": "Feature engineering"
          },
          {
            "vi": "Chuẩn hóa & xử lý dữ liệu",
            "en": "Scaling & data preprocessing"
          }
        ]
      },
      {
        "week": "4–5",
        "title": {
          "vi": "Machine Learning có giám sát",
          "en": "Supervised Machine Learning"
        },
        "topics": [
          {
            "vi": "Hồi quy & phân loại",
            "en": "Regression & classification"
          },
          {
            "vi": "Cây quyết định & ensemble (RF, XGBoost)",
            "en": "Trees & ensembles (RF, XGBoost)"
          },
          {
            "vi": "Đánh giá mô hình & cross-validation",
            "en": "Model evaluation & cross-validation"
          }
        ],
        "project": {
          "vi": "Đồ án 2: mô hình dự báo (kiểu Kaggle)",
          "en": "Project 2: predictive model (Kaggle-style)"
        }
      },
      {
        "week": "6",
        "title": {
          "vi": "Học không giám sát",
          "en": "Unsupervised learning"
        },
        "topics": [
          {
            "vi": "Clustering (K-Means)",
            "en": "Clustering (K-Means)"
          },
          {
            "vi": "PCA & giảm chiều",
            "en": "PCA & dimensionality reduction"
          },
          {
            "vi": "Recommender & phát hiện bất thường",
            "en": "Recommenders & anomaly detection"
          }
        ]
      },
      {
        "week": "7–8",
        "title": {
          "vi": "Deep Learning",
          "en": "Deep Learning"
        },
        "topics": [
          {
            "vi": "Mạng nơ-ron & PyTorch",
            "en": "Neural networks & PyTorch"
          },
          {
            "vi": "CNN cho thị giác máy tính",
            "en": "CNNs for computer vision"
          },
          {
            "vi": "RNN/Transformer cho chuỗi & NLP",
            "en": "RNN/Transformer for sequences & NLP"
          }
        ],
        "project": {
          "vi": "Đồ án 3: dự án Computer Vision hoặc NLP",
          "en": "Project 3: a Computer Vision or NLP project"
        }
      },
      {
        "week": "9",
        "title": {
          "vi": "Thí nghiệm & suy luận nhân quả",
          "en": "Experiments & causal inference"
        },
        "topics": [
          {
            "vi": "A/B testing & thiết kế thí nghiệm",
            "en": "A/B testing & experiment design"
          },
          {
            "vi": "Suy luận nhân quả cơ bản",
            "en": "Causal inference basics"
          },
          {
            "vi": "Diễn giải kết quả cho quyết định",
            "en": "Interpreting results for decisions"
          }
        ]
      },
      {
        "week": "10",
        "title": {
          "vi": "NLP & LLM ứng dụng",
          "en": "Applied NLP & LLMs"
        },
        "topics": [
          {
            "vi": "Embeddings & semantic search",
            "en": "Embeddings & semantic search"
          },
          {
            "vi": "Fine-tuning cơ bản",
            "en": "Fine-tuning basics"
          },
          {
            "vi": "Dùng LLM cho phân tích dữ liệu",
            "en": "Using LLMs for data analysis"
          }
        ]
      },
      {
        "week": "11",
        "title": {
          "vi": "Đưa mô hình vào quyết định",
          "en": "From model to decision"
        },
        "topics": [
          {
            "vi": "Đóng gói & serving (FastAPI)",
            "en": "Packaging & serving (FastAPI)"
          },
          {
            "vi": "MLOps cơ bản & giám sát",
            "en": "MLOps basics & monitoring"
          },
          {
            "vi": "Storytelling & trình bày insight",
            "en": "Storytelling & presenting insights"
          }
        ]
      },
      {
        "week": "12",
        "title": {
          "vi": "Đồ án & sẵn sàng đi làm",
          "en": "Capstone & job-ready"
        },
        "topics": [
          {
            "vi": "Portfolio & GitHub",
            "en": "Portfolio & GitHub"
          },
          {
            "vi": "Luyện phỏng vấn Data Scientist",
            "en": "Data Scientist interview prep"
          },
          {
            "vi": "Đọc & tái hiện paper",
            "en": "Reading & reproducing papers"
          }
        ],
        "project": {
          "vi": "Đồ án 4 (capstone): dự án Data Science end-to-end",
          "en": "Project 4 (capstone): an end-to-end Data Science project"
        }
      }
    ],
    pyda: [
      {
        "week": "1",
        "title": {
          "vi": "Python cơ bản",
          "en": "Python basics"
        },
        "topics": [
          {
            "vi": "Cú pháp, biến & kiểu dữ liệu",
            "en": "Syntax, variables & data types"
          },
          {
            "vi": "Vòng lặp, điều kiện & hàm",
            "en": "Loops, conditionals & functions"
          },
          {
            "vi": "Jupyter Notebook",
            "en": "Jupyter Notebook"
          }
        ]
      },
      {
        "week": "2",
        "title": {
          "vi": "NumPy & tính toán số",
          "en": "NumPy & numerical computing"
        },
        "topics": [
          {
            "vi": "Mảng & vector hóa",
            "en": "Arrays & vectorization"
          },
          {
            "vi": "Broadcasting & phép toán ma trận",
            "en": "Broadcasting & matrix ops"
          },
          {
            "vi": "Sinh & lấy mẫu dữ liệu",
            "en": "Generating & sampling data"
          }
        ]
      },
      {
        "week": "3",
        "title": {
          "vi": "pandas nền tảng",
          "en": "pandas fundamentals"
        },
        "topics": [
          {
            "vi": "Series & DataFrame",
            "en": "Series & DataFrame"
          },
          {
            "vi": "Lọc, chọn & sắp xếp",
            "en": "Filter, select & sort"
          },
          {
            "vi": "Đọc CSV/Excel/JSON",
            "en": "Read CSV/Excel/JSON"
          }
        ],
        "project": {
          "vi": "Đồ án 1: khám phá một bộ dữ liệu",
          "en": "Project 1: explore a dataset"
        }
      },
      {
        "week": "4",
        "title": {
          "vi": "pandas nâng cao",
          "en": "Advanced pandas"
        },
        "topics": [
          {
            "vi": "GroupBy & tổng hợp",
            "en": "GroupBy & aggregation"
          },
          {
            "vi": "Join / merge",
            "en": "Join / merge"
          },
          {
            "vi": "Pivot table & reshape",
            "en": "Pivot tables & reshaping"
          }
        ],
        "project": {
          "vi": "Đồ án 2: tổng hợp & báo cáo",
          "en": "Project 2: aggregate & report"
        }
      },
      {
        "week": "5",
        "title": {
          "vi": "Làm sạch & trực quan hóa",
          "en": "Cleaning & visualization"
        },
        "topics": [
          {
            "vi": "Xử lý missing/duplicate/outlier",
            "en": "Handle missing/duplicates/outliers"
          },
          {
            "vi": "Matplotlib & Seaborn",
            "en": "Matplotlib & Seaborn"
          },
          {
            "vi": "Chọn biểu đồ đúng",
            "en": "Choosing the right chart"
          }
        ]
      },
      {
        "week": "6",
        "title": {
          "vi": "Đồ án & bước tiếp theo",
          "en": "Capstone & next steps"
        },
        "topics": [
          {
            "vi": "Phân tích end-to-end",
            "en": "End-to-end analysis"
          },
          {
            "vi": "Portfolio & GitHub",
            "en": "Portfolio & GitHub"
          },
          {
            "vi": "Lộ trình lên Data Analyst",
            "en": "Path to Data Analyst"
          }
        ],
        "project": {
          "vi": "Đồ án 3 (capstone): phân tích một bộ dữ liệu thực",
          "en": "Project 3 (capstone): analyze a real dataset"
        }
      }
    ]
  },

  instructors: [
    { id: "sophie-nguyen", name: "Sophie Nguyễn", initials: "SN", grad: "linear-gradient(120deg,#7c5cff,#ff5ca8)", role: "Senior AI & Data Leader · Agentic AI & MLOps", photo: "assets/instructors/sophie-nguyen.jpg", teaches: ["ai", "mlops", "de"], expertise: ["Agentic AI", "RAG & Multi-agent", "MLOps & LLM Observability", "Data Lakehouse", "AWS & Azure"],
      bio: { vi: "Lãnh đạo AI & Data 5+ năm: agentic AI, MLOps/LLM observability và data lakehouse; PhD candidate.", en: "5+ years of AI & Data leadership: agentic AI, MLOps/LLM observability and data lakehouses; PhD candidate." },
      about: { vi: "Sophie dẫn dắt chiến lược ứng dụng AI cấp doanh nghiệp — từ agentic AI (RAG + multi-agent) đến chuẩn observability cho LLM (TTFT, P95, drift, hallucination) và data lakehouse xử lý hàng tỷ token. Cô từng triển khai giải pháp AI tại AWS Professional Services và dựng nền tảng dữ liệu tại FPT Smart Cloud, là PhD candidate (MLOps + Lyapunov stability cho vòng lặp retrain LLM) và tác giả các công bố về độ tin cậy dữ liệu.", en: "Sophie leads enterprise AI application strategy — from agentic AI (RAG + multi-agent) to LLM observability standards (TTFT, P95, drift, hallucination) and data lakehouses processing billions of tokens. She has delivered AI solutions at AWS Professional Services and built data platforms at FPT Smart Cloud, is a PhD candidate (MLOps + Lyapunov stability for LLM retraining loops) and a published author on data reliability." } },
  ],

  // Zero -> hired learning paths
  tracks: [
    {
      id: "da", cat: "eng", role: "Data Analyst", salary: "12 – 25 triệu/tháng",
      stages: [
        { label: { vi: "Chưa biết gì", en: "Zero" }, skills: ["Excel", "Tư duy dữ liệu", "SQL cơ bản"], course: { vi: "Data Analyst", en: "Data Analyst" }, weeks: 2 },
        { label: { vi: "Nền tảng", en: "Foundation" }, skills: ["SQL nâng cao", "Python (pandas)", "Làm sạch dữ liệu"], course: { vi: "Data Analyst", en: "Data Analyst" }, weeks: 3 },
        { label: { vi: "Chuyên sâu", en: "Core skills" }, skills: ["Thống kê", "Trực quan hóa", "Power BI / Looker"], course: { vi: "Data Analyst", en: "Data Analyst" }, weeks: 3 },
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
      id: "ml", cat: "ai", role: "Machine Learning Engineer", salary: "20 – 60 triệu/tháng",
      stages: [
        { label: { vi: "Chưa biết gì", en: "Zero" }, skills: ["Python", "Toán & Xác suất", "NumPy / pandas"], course: { vi: "Nền tảng ML", en: "ML foundations" }, weeks: 3 },
        { label: { vi: "Nền tảng", en: "Foundation" }, skills: ["Scikit-learn", "Feature engineering", "Đánh giá mô hình"], course: { vi: "Machine Learning thực chiến", en: "Practical Machine Learning" }, weeks: 4 },
        { label: { vi: "Chuyên sâu", en: "Core skills" }, skills: ["PyTorch", "CNN / RNN / Transformer", "NLP & CV"], course: { vi: "Deep Learning với PyTorch", en: "Deep Learning with PyTorch" }, weeks: 4 },
        { label: { vi: "Sẵn sàng đi làm", en: "Job-ready" }, skills: ["MLOps & Deploy", "Kaggle", "Portfolio dự án ML"], course: { vi: "MLOps & Deployment", en: "MLOps & Deployment" }, weeks: 3 }
      ]
    },
    {
      id: "ds", cat: "ml", role: "AI & Data Scientist", salary: "18 – 50 triệu/tháng",
      stages: [
        { label: { vi: "Chưa biết gì", en: "Zero" }, skills: ["Python", "Thống kê", "SQL"], course: { vi: "AI & Data Scientist", en: "AI & Data Scientist" }, weeks: 3 },
        { label: { vi: "Nền tảng", en: "Foundation" }, skills: ["EDA", "Trực quan hóa", "A/B testing"], course: { vi: "AI & Data Scientist", en: "AI & Data Scientist" }, weeks: 3 },
        { label: { vi: "Chuyên sâu", en: "Core skills" }, skills: ["Machine Learning", "Feature engineering", "Mô hình dự báo"], course: { vi: "Machine Learning thực chiến", en: "Practical Machine Learning" }, weeks: 4 },
        { label: { vi: "Sẵn sàng đi làm", en: "Job-ready" }, skills: ["Business case", "Model deploy", "Portfolio"], course: { vi: "MLOps & Deployment", en: "MLOps & Deployment" }, weeks: 3 }
      ]
    },
    {
      id: "aieng", cat: "ai", role: "AI Engineer", salary: "20 – 60 triệu/tháng",
      stages: [
        { label: { vi: "Chưa biết gì", en: "Zero" }, skills: ["Python", "Gọi API LLM", "Prompt cơ bản"], course: { vi: "Nền tảng lập trình", en: "Programming foundations" }, weeks: 2 },
        { label: { vi: "Nền tảng", en: "Foundation" }, skills: ["Prompt engineering", "Embeddings", "Vector database"], course: { vi: "AI Engineer: LLM & RAG", en: "AI Engineer: LLM & RAG" }, weeks: 3 },
        { label: { vi: "Chuyên sâu", en: "Core skills" }, skills: ["RAG", "Function calling", "AI Agents"], course: { vi: "AI Engineer: LLM & RAG", en: "AI Engineer: LLM & RAG" }, weeks: 4 },
        { label: { vi: "Sẵn sàng đi làm", en: "Job-ready" }, skills: ["Đánh giá LLM", "Guardrails & an toàn", "Deploy app AI", "Portfolio"], course: { vi: "MLOps & Deployment", en: "MLOps & Deployment" }, weeks: 3 }
      ]
    },
    {
      id: "mlops", cat: "ml", role: "MLOps Engineer", salary: "20 – 55 triệu/tháng",
      stages: [
        { label: { vi: "Chưa biết gì", en: "Zero" }, skills: ["Python", "Git", "Linux / Bash", "Docker cơ bản"], course: { vi: "Nền tảng lập trình", en: "Programming foundations" }, weeks: 3 },
        { label: { vi: "Nền tảng", en: "Foundation" }, skills: ["ML cơ bản", "MLflow tracking", "Data/Model versioning"], course: { vi: "MLOps & Deployment", en: "MLOps & Deployment" }, weeks: 3 },
        { label: { vi: "Chuyên sâu", en: "Core skills" }, skills: ["CI/CD", "Docker & Kubernetes", "Model serving", "Cloud"], course: { vi: "MLOps & Deployment", en: "MLOps & Deployment" }, weeks: 4 },
        { label: { vi: "Sẵn sàng đi làm", en: "Job-ready" }, skills: ["Giám sát drift", "Prometheus / Grafana", "IaC (Terraform)", "Portfolio"], course: { vi: "MLOps & Deployment", en: "MLOps & Deployment" }, weeks: 3 }
      ]
    },
    {
      id: "pyda", cat: "eng", role: "Python for Data Analysis", salary: "10 – 22 triệu/tháng",
      stages: [
        { label: { vi: "Chưa biết gì", en: "Zero" }, skills: ["Python cơ bản", "Cấu trúc dữ liệu", "Jupyter"], course: { vi: "Python for Data Analysis", en: "Python for Data Analysis" }, weeks: 2 },
        { label: { vi: "Nền tảng", en: "Foundation" }, skills: ["pandas", "NumPy", "Làm sạch dữ liệu"], course: { vi: "Python for Data Analysis", en: "Python for Data Analysis" }, weeks: 3 },
        { label: { vi: "Chuyên sâu", en: "Core skills" }, skills: ["Trực quan hóa", "Thống kê ứng dụng", "SQL"], course: { vi: "Python for Data Analysis", en: "Python for Data Analysis" }, weeks: 2 },
        { label: { vi: "Sẵn sàng đi làm", en: "Job-ready" }, skills: ["EDA end-to-end", "Dashboard", "Portfolio", "Storytelling"], course: { vi: "Career: CV & phỏng vấn", en: "Career: CV & interview" }, weeks: 2 }
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
    { name: { vi: "Lộ trình Data Analyst", en: "Data Analyst path" }, includes: { vi: "Data Analyst + SQL/BI + Career", en: "Data Analyst + SQL/BI + Career" }, price: "12.900.000đ", old: "29.900.000đ" }
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
    { id: "da", course: { vi: "Data Analyst: Phân tích dữ liệu", en: "Data Analyst" }, start: "08/07/2026", mode: { vi: "Online", en: "Online" }, time: { vi: "T2 · T4 · T6 — Ca 1 (18:00–20:00)", en: "Mon · Wed · Fri — Slot 1 (6:00–8:00 PM)" }, seats: { vi: "Còn 6 chỗ", en: "6 seats left" }, level: "open" },
    { id: "de", course: { vi: "Data Engineering Zero → Hero", en: "Data Engineering Zero → Hero" }, start: "15/07/2026", mode: { vi: "Online", en: "Online" }, time: { vi: "T3 · T5 — Ca 1 (18:00–20:00)", en: "Tue · Thu — Slot 1 (6:00–8:00 PM)" }, seats: { vi: "Còn 6 chỗ", en: "6 seats left" }, level: "open" },
    { id: "ds", course: { vi: "AI & Data Scientist", en: "AI & Data Scientist" }, start: "12/08/2026", mode: { vi: "Online", en: "Online" }, time: { vi: "T3 · T5 — Ca 2 (20:00–22:00)", en: "Tue · Thu — Slot 2 (8:00–10:00 PM)" }, seats: { vi: "Còn 5 chỗ", en: "5 seats left" }, level: "open" },
    { id: "ml", course: { vi: "Machine Learning thực chiến", en: "Practical Machine Learning" }, start: "22/07/2026", mode: { vi: "Online", en: "Online" }, time: { vi: "T3 · T5 — Ca 2 (20:00–22:00)", en: "Tue · Thu — Slot 2 (8:00–10:00 PM)" }, seats: { vi: "Còn 4 chỗ", en: "4 seats left" }, level: "open" },
    { id: "ai", course: { vi: "AI Engineer: LLM & RAG", en: "AI Engineer: LLM & RAG" }, start: "05/08/2026", mode: { vi: "Online", en: "Online" }, time: { vi: "T3 · T5 — Ca 1 (18:00–20:00)", en: "Tue · Thu — Slot 1 (6:00–8:00 PM)" }, seats: { vi: "Còn 8 chỗ", en: "8 seats left" }, level: "open" },
    { id: "mlops", course: { vi: "MLOps & Deployment", en: "MLOps & Deployment" }, start: "19/08/2026", mode: { vi: "Online", en: "Online" }, time: { vi: "T2 · T4 · T6 — Ca 2 (20:00–22:00)", en: "Mon · Wed · Fri — Slot 2 (8:00–10:00 PM)" }, seats: { vi: "Còn chỗ", en: "Seats available" }, level: "open" },
    { id: "pyda", course: { vi: "Python for Data Analysis", en: "Python for Data Analysis" }, start: "10/07/2026", mode: { vi: "Online", en: "Online" }, time: { vi: "T2 · T4 · T6 — Ca 1 (18:00–20:00)", en: "Mon · Wed · Fri — Slot 1 (6:00–8:00 PM)" }, seats: { vi: "Mở đăng ký", en: "Now open" }, level: "open" },
    { id: "de", course: { vi: "Data Engineering Zero → Hero", en: "Data Engineering Zero → Hero" }, start: "18/07/2026", mode: { vi: "Online", en: "Online" }, time: { vi: "T7 · CN — cả ngày (09:00–17:00)", en: "Sat · Sun — full day (9:00 AM–5:00 PM)" }, seats: { vi: "Còn 5 chỗ", en: "5 seats left" }, level: "open" },
    { id: "ml", course: { vi: "Machine Learning thực chiến", en: "Practical Machine Learning" }, start: "25/07/2026", mode: { vi: "Online", en: "Online" }, time: { vi: "T7 · CN — cả ngày (09:00–17:00)", en: "Sat · Sun — full day (9:00 AM–5:00 PM)" }, seats: { vi: "Còn 7 chỗ", en: "7 seats left" }, level: "open" }
  ],

  posts: [
    {
      "slug": "danh-gia-he-thong-rag",
      "tag": "AI / LLM",
      "grad": "linear-gradient(120deg,#7c5cff,#22d3ee)",
      "date": "01/07/2026",
      "read": 9,
      "title": {
        "vi": "Đánh giá hệ thống RAG: đo cái gì và đo thế nào",
        "en": "Evaluating RAG systems: what to measure and how"
      },
      "excerpt": {
        "vi": "Tách bạch chất lượng truy hồi và chất lượng sinh, kèm các chỉ số như faithfulness và context precision.",
        "en": "Separate retrieval quality from generation quality, with metrics like faithfulness and context precision."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">🧪</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 104\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><rect x=\"0\" y=\"20\" rx=\"10\" width=\"120\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"60\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Câu hỏi</text><path d=\"M122 52 H148\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"150\" y=\"20\" rx=\"10\" width=\"120\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"210\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Truy hồi</text><path d=\"M272 52 H298\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"300\" y=\"20\" rx=\"10\" width=\"120\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"360\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Ngữ cảnh</text><path d=\"M422 52 H448\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"450\" y=\"20\" rx=\"10\" width=\"120\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"510\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Sinh</text><path d=\"M572 52 H598\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"600\" y=\"20\" rx=\"10\" width=\"120\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"660\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Đánh giá</text><defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0 0L6 3L0 6z\" fill=\"var(--brand-2)\"/></marker></defs></svg>",
      "figCaption": {
        "vi": "Vòng đánh giá RAG end-to-end",
        "en": "The end-to-end RAG evaluation loop"
      },
      "ref": "RAGAS: Automated Evaluation of Retrieval Augmented Generation (Es et al., 2023)",
      "body": [
        {
          "h": {
            "vi": "Hai lớp cần đo riêng",
            "en": "Two layers to measure separately"
          },
          "p": {
            "vi": "Đo truy hồi (có lấy đúng đoạn không) tách khỏi sinh (câu trả lời có bám ngữ cảnh không). Gộp chung sẽ che giấu lỗi thật sự nằm ở đâu.",
            "en": "Measure retrieval (did we fetch the right passages?) separately from generation (is the answer grounded?). Bundling them hides where the real error is."
          }
        },
        {
          "h": {
            "vi": "Chỉ số hữu ích",
            "en": "Metrics that matter"
          },
          "p": {
            "vi": "Truy hồi: context precision/recall. Sinh: faithfulness (không bịa) và answer relevancy. Bộ eval nhỏ có nhãn giúp so sánh thay đổi một cách khách quan.",
            "en": "Retrieval: context precision/recall. Generation: faithfulness (no hallucination) and answer relevancy. A small labeled eval set lets you compare changes objectively."
          }
        },
        {
          "h": {
            "vi": "Tự động hóa đánh giá",
            "en": "Automate the loop"
          },
          "p": {
            "vi": "Dùng LLM-as-judge cùng bộ câu hỏi vàng, chạy lại mỗi khi đổi chunking, embedding hay prompt. Theo dõi điểm số theo thời gian như một test hồi quy.",
            "en": "Use LLM-as-judge with a golden question set and re-run it whenever you change chunking, embeddings or prompts. Track scores over time like a regression test."
          }
        }
      ]
    },
    {
      "slug": "vector-db-hnsw-vs-ivf",
      "tag": "AI / LLM",
      "grad": "linear-gradient(120deg,#ff5ca8,#ff9d5c)",
      "date": "26/06/2026",
      "read": 8,
      "title": {
        "vi": "Chỉ mục vector: HNSW hay IVF?",
        "en": "Vector DB indexes: HNSW vs IVF"
      },
      "excerpt": {
        "vi": "So sánh hai họ chỉ mục ANN phổ biến và khi nào nên chọn cái nào cho ứng dụng thật.",
        "en": "Comparing the two popular ANN index families and when to pick each for real workloads."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">🧭</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><rect x=\"0\" y=\"0\" rx=\"12\" width=\"351\" height=\"210\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><rect x=\"0\" y=\"0\" rx=\"12\" width=\"351\" height=\"40\" fill=\"var(--brand-2)\" opacity=\"0.14\"/><text x=\"175.5\" y=\"26\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"var(--text)\">HNSW</text><text x=\"16\" y=\"66\" font-size=\"12.5\" fill=\"var(--muted)\">• Đồ thị / graph</text><text x=\"16\" y=\"96\" font-size=\"12.5\" fill=\"var(--muted)\">• Truy vấn nhanh, recall cao</text><text x=\"16\" y=\"126\" font-size=\"12.5\" fill=\"var(--muted)\">• Tốn RAM</text><text x=\"16\" y=\"156\" font-size=\"12.5\" fill=\"var(--muted)\">• Chỉnh: M, efSearch</text><rect x=\"369\" y=\"0\" rx=\"12\" width=\"351\" height=\"210\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><rect x=\"369\" y=\"0\" rx=\"12\" width=\"351\" height=\"40\" fill=\"var(--brand-2)\" opacity=\"0.14\"/><text x=\"544.5\" y=\"26\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"var(--text)\">IVF / IVF-PQ</text><text x=\"385\" y=\"66\" font-size=\"12.5\" fill=\"var(--muted)\">• Phân cụm / clustering</text><text x=\"385\" y=\"96\" font-size=\"12.5\" fill=\"var(--muted)\">• Nén tốt, tiết kiệm bộ nhớ</text><text x=\"385\" y=\"126\" font-size=\"12.5\" fill=\"var(--muted)\">• Quy mô rất lớn</text><text x=\"385\" y=\"156\" font-size=\"12.5\" fill=\"var(--muted)\">• Chỉnh: nlist, nprobe</text></svg>",
      "figCaption": {
        "vi": "HNSW vs IVF: đánh đổi tốc độ, bộ nhớ, độ chính xác",
        "en": "HNSW vs IVF: trading speed, memory and accuracy"
      },
      "ref": "Malkov & Yashunin, Efficient and robust ANN using Hierarchical Navigable Small World graphs (2018); Faiss docs",
      "body": [
        {
          "h": {
            "vi": "Vì sao cần chỉ mục xấp xỉ",
            "en": "Why approximate indexes"
          },
          "p": {
            "vi": "Tìm hàng xóm gần nhất tuyệt đối trên hàng triệu vector là quá chậm. ANN đánh đổi một chút độ chính xác (recall) để lấy tốc độ truy vấn nhanh gấp nhiều lần.",
            "en": "Exact nearest-neighbor over millions of vectors is too slow. ANN trades a little accuracy (recall) for query speed that is orders of magnitude faster."
          }
        },
        {
          "h": {
            "vi": "HNSW",
            "en": "HNSW"
          },
          "p": {
            "vi": "Đồ thị nhiều tầng, truy vấn rất nhanh với recall cao, phù hợp low-latency. Đổi lại tốn RAM và chèn/xóa phức tạp hơn.",
            "en": "A multi-layer graph with very fast, high-recall queries — great for low latency. The trade-off is higher memory use and trickier inserts/deletes."
          }
        },
        {
          "h": {
            "vi": "IVF (và IVF-PQ)",
            "en": "IVF (and IVF-PQ)"
          },
          "p": {
            "vi": "Chia không gian thành cụm rồi chỉ tìm trong vài cụm gần nhất; kết hợp PQ để nén giúp tiết kiệm bộ nhớ ở quy mô rất lớn, đổi lại phải chỉnh nprobe.",
            "en": "Partitions the space into clusters and searches only the nearest few; pairing it with PQ compression saves memory at huge scale, at the cost of tuning nprobe."
          }
        }
      ]
    },
    {
      "slug": "chien-luoc-chunking-rag",
      "tag": "AI / LLM",
      "grad": "linear-gradient(120deg,#34d399,#22d3ee)",
      "date": "21/06/2026",
      "read": 7,
      "title": {
        "vi": "Chiến lược chunking cho RAG",
        "en": "Chunking strategies for RAG"
      },
      "excerpt": {
        "vi": "Cách cắt tài liệu ảnh hưởng trực tiếp tới chất lượng truy hồi — fixed-size, theo ngữ nghĩa hay theo cấu trúc.",
        "en": "How you split documents directly drives retrieval quality — fixed-size, semantic or structure-aware."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">✂️</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><rect x=\"0\" y=\"0\" rx=\"12\" width=\"351\" height=\"210\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><rect x=\"0\" y=\"0\" rx=\"12\" width=\"351\" height=\"40\" fill=\"var(--brand-2)\" opacity=\"0.14\"/><text x=\"175.5\" y=\"26\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"var(--text)\">Fixed-size</text><text x=\"16\" y=\"66\" font-size=\"12.5\" fill=\"var(--muted)\">• Cắt theo số token</text><text x=\"16\" y=\"96\" font-size=\"12.5\" fill=\"var(--muted)\">• Đơn giản, nhanh</text><text x=\"16\" y=\"126\" font-size=\"12.5\" fill=\"var(--muted)\">• Dễ đứt ý giữa chừng</text><text x=\"16\" y=\"156\" font-size=\"12.5\" fill=\"var(--muted)\">• Có overlap để bù</text><rect x=\"369\" y=\"0\" rx=\"12\" width=\"351\" height=\"210\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><rect x=\"369\" y=\"0\" rx=\"12\" width=\"351\" height=\"40\" fill=\"var(--brand-2)\" opacity=\"0.14\"/><text x=\"544.5\" y=\"26\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"var(--text)\">Semantic</text><text x=\"385\" y=\"66\" font-size=\"12.5\" fill=\"var(--muted)\">• Cắt theo câu/tiêu đề</text><text x=\"385\" y=\"96\" font-size=\"12.5\" fill=\"var(--muted)\">• Giữ mạch ngữ nghĩa</text><text x=\"385\" y=\"126\" font-size=\"12.5\" fill=\"var(--muted)\">• Truy hồi chính xác hơn</text><text x=\"385\" y=\"156\" font-size=\"12.5\" fill=\"var(--muted)\">• Tốn xử lý hơn</text></svg>",
      "figCaption": {
        "vi": "Hai cách cắt tài liệu phổ biến",
        "en": "Two common ways to split documents"
      },
      "ref": "LlamaIndex & LangChain documentation on text splitting / node parsing",
      "body": [
        {
          "h": {
            "vi": "Chunk quyết định recall",
            "en": "Chunks decide recall"
          },
          "p": {
            "vi": "Đoạn quá lớn làm loãng tín hiệu; quá nhỏ thì mất ngữ cảnh. Kích thước và độ chồng lấn (overlap) là hai núm chỉnh đầu tiên bạn nên thử.",
            "en": "Chunks that are too large dilute the signal; too small and you lose context. Chunk size and overlap are the first two knobs to tune."
          }
        },
        {
          "h": {
            "vi": "Fixed-size vs ngữ nghĩa",
            "en": "Fixed-size vs semantic"
          },
          "p": {
            "vi": "Fixed-size dễ làm và nhanh. Cắt theo ngữ nghĩa (theo câu/đoạn/tiêu đề) giữ mạch ý tốt hơn, thường cải thiện chất lượng trả lời cho tài liệu dài.",
            "en": "Fixed-size is simple and fast. Semantic splitting (by sentence/paragraph/heading) preserves meaning and usually improves answers on long documents."
          }
        },
        {
          "h": {
            "vi": "Giữ metadata",
            "en": "Keep metadata"
          },
          "p": {
            "vi": "Đính kèm tiêu đề, nguồn, số trang vào mỗi chunk để lọc và trích dẫn. Metadata tốt giúp truy hồi chính xác và câu trả lời có nguồn rõ ràng.",
            "en": "Attach titles, source and page to each chunk for filtering and citations. Good metadata makes retrieval precise and answers traceable."
          }
        }
      ]
    },
    {
      "slug": "llm-agent-react-function-calling",
      "tag": "AI / LLM",
      "grad": "linear-gradient(120deg,#7c5cff,#ff5ca8)",
      "date": "16/06/2026",
      "read": 9,
      "title": {
        "vi": "LLM agent: ReAct và function calling",
        "en": "LLM agents: ReAct and function calling"
      },
      "excerpt": {
        "vi": "Cách một agent suy nghĩ, gọi công cụ và quan sát kết quả để hoàn thành tác vụ nhiều bước.",
        "en": "How an agent reasons, calls tools and observes results to finish multi-step tasks."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">🤖</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 230\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><circle cx=\"360\" cy=\"115\" r=\"78\" fill=\"none\" stroke=\"var(--brand-2)\" stroke-width=\"2\" stroke-dasharray=\"6 8\"/><rect x=\"290\" y=\"17\" rx=\"9\" width=\"140\" height=\"40\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"360\" y=\"42\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text)\">Thought</text><rect x=\"357.5499814951862\" y=\"134\" rx=\"9\" width=\"140\" height=\"40\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"427.5499814951862\" y=\"159\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text)\">Action (tool)</text><rect x=\"222.45001850481378\" y=\"134.00000000000003\" rx=\"9\" width=\"140\" height=\"40\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"292.4500185048138\" y=\"159.00000000000003\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text)\">Observation</text></svg>",
      "figCaption": {
        "vi": "Vòng lặp suy luận–hành động của agent",
        "en": "The agent reason–act loop"
      },
      "ref": "Yao et al., ReAct: Synergizing Reasoning and Acting in Language Models (2022)",
      "body": [
        {
          "h": {
            "vi": "Vòng lặp Thought–Action–Observation",
            "en": "The Thought–Action–Observation loop"
          },
          "p": {
            "vi": "ReAct đan xen suy luận và hành động: model nghĩ, chọn một công cụ, đọc kết quả rồi lặp lại cho đến khi đủ thông tin để trả lời.",
            "en": "ReAct interleaves reasoning and acting: the model thinks, picks a tool, reads the result, then repeats until it has enough to answer."
          }
        },
        {
          "h": {
            "vi": "Function calling",
            "en": "Function calling"
          },
          "p": {
            "vi": "Thay vì parse văn bản, model trả về lời gọi hàm có cấu trúc (tên + tham số JSON). Điều này giúp tích hợp API đáng tin cậy hơn nhiều.",
            "en": "Instead of parsing free text, the model returns a structured function call (name + JSON args). This makes API integration far more reliable."
          }
        },
        {
          "h": {
            "vi": "Kiểm soát & an toàn",
            "en": "Guardrails"
          },
          "p": {
            "vi": "Giới hạn số bước, xác thực tham số, và cho phép người duyệt hành động có tác dụng phụ. Agent mạnh cần ranh giới rõ ràng.",
            "en": "Cap the number of steps, validate arguments, and require human approval for side-effectful actions. Powerful agents need clear boundaries."
          }
        }
      ]
    },
    {
      "slug": "fine-tuning-vs-rag-vs-prompt",
      "tag": "AI / LLM",
      "grad": "linear-gradient(120deg,#22d3ee,#7c5cff)",
      "date": "11/06/2026",
      "read": 8,
      "title": {
        "vi": "Fine-tuning, RAG hay prompt engineering?",
        "en": "Fine-tuning vs RAG vs prompt engineering"
      },
      "excerpt": {
        "vi": "Ba cách tùy biến LLM cho bài toán của bạn — và tiêu chí chọn cái phù hợp.",
        "en": "Three ways to adapt an LLM to your problem — and how to choose."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">🎛️</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><line x1=\"20\" y1=\"170\" x2=\"700\" y2=\"170\" stroke=\"var(--border-strong)\"/><rect x=\"127.5\" y=\"144\" width=\"70\" height=\"26\" rx=\"6\" fill=\"var(--brand-2)\" opacity=\"0.8\"/><text x=\"162.5\" y=\"136\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text)\">20</text><text x=\"162.5\" y=\"188\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"var(--muted)\">Prompt</text><rect x=\"325\" y=\"98.5\" width=\"70\" height=\"71.5\" rx=\"6\" fill=\"var(--brand-2)\" opacity=\"0.8\"/><text x=\"360\" y=\"90.5\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text)\">55</text><text x=\"360\" y=\"188\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"var(--muted)\">RAG</text><rect x=\"522.5\" y=\"53\" width=\"70\" height=\"117\" rx=\"6\" fill=\"var(--brand-2)\" opacity=\"0.8\"/><text x=\"557.5\" y=\"45\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text)\">90</text><text x=\"557.5\" y=\"188\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"var(--muted)\">Fine-tune</text></svg>",
      "figCaption": {
        "vi": "Chi phí/độ phức tạp tăng dần theo kỹ thuật",
        "en": "Cost/complexity rises across the three techniques"
      },
      "ref": "Lewis et al., Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (2020)",
      "body": [
        {
          "h": {
            "vi": "Bắt đầu từ prompt",
            "en": "Start with prompting"
          },
          "p": {
            "vi": "Rẻ và nhanh nhất. Prompt tốt cùng vài ví dụ (few-shot) giải quyết được nhiều việc trước khi cần đến kỹ thuật nặng hơn.",
            "en": "Cheapest and fastest. A good prompt with a few examples solves a lot before you reach for heavier techniques."
          }
        },
        {
          "h": {
            "vi": "RAG khi cần kiến thức",
            "en": "RAG for knowledge"
          },
          "p": {
            "vi": "Khi câu trả lời cần dữ liệu riêng hoặc cập nhật, RAG nạp ngữ cảnh vào lúc chạy — không phải huấn luyện lại, và dễ trích dẫn nguồn.",
            "en": "When answers need private or fresh data, RAG injects context at run time — no retraining, and easy to cite sources."
          }
        },
        {
          "h": {
            "vi": "Fine-tune khi cần hành vi",
            "en": "Fine-tune for behavior"
          },
          "p": {
            "vi": "Fine-tuning phù hợp khi cần định dạng, phong cách hay kỹ năng ổn định, chấp nhận chi phí chuẩn bị dữ liệu và huấn luyện.",
            "en": "Fine-tuning fits when you need consistent format, style or a specialized skill, accepting the cost of data prep and training."
          }
        }
      ]
    },
    {
      "slug": "self-attention-transformer",
      "tag": "Deep Learning",
      "grad": "linear-gradient(120deg,#ff9d5c,#ff5ca8)",
      "date": "06/06/2026",
      "read": 9,
      "title": {
        "vi": "Self-attention trong Transformer, giải thích trực quan",
        "en": "Transformer self-attention, explained"
      },
      "excerpt": {
        "vi": "Query, Key, Value và vì sao attention để mô hình 'nhìn' toàn bộ chuỗi cùng lúc.",
        "en": "Query, Key, Value and why attention lets a model 'look' at the whole sequence at once."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">🔎</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 104\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><rect x=\"0\" y=\"20\" rx=\"10\" width=\"120\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"60\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Q · K</text><path d=\"M122 52 H148\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"150\" y=\"20\" rx=\"10\" width=\"120\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"210\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Scores</text><path d=\"M272 52 H298\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"300\" y=\"20\" rx=\"10\" width=\"120\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"360\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Softmax</text><path d=\"M422 52 H448\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"450\" y=\"20\" rx=\"10\" width=\"120\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"510\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">× Value</text><path d=\"M572 52 H598\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"600\" y=\"20\" rx=\"10\" width=\"120\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"660\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Output</text><defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0 0L6 3L0 6z\" fill=\"var(--brand-2)\"/></marker></defs></svg>",
      "figCaption": {
        "vi": "Cơ chế tính một lớp self-attention",
        "en": "How one self-attention layer is computed"
      },
      "ref": "Vaswani et al., Attention Is All You Need (2017)",
      "body": [
        {
          "h": {
            "vi": "Q, K, V là gì",
            "en": "What Q, K, V are"
          },
          "p": {
            "vi": "Mỗi token được chiếu thành ba vector: Query hỏi, Key trả lời, Value mang nội dung. Điểm tương đồng giữa Q và K quyết định trọng số chú ý.",
            "en": "Each token is projected into three vectors: a Query asks, a Key answers, a Value carries content. The Q·K similarity sets the attention weights."
          }
        },
        {
          "h": {
            "vi": "Softmax và tổng có trọng số",
            "en": "Softmax and weighted sum"
          },
          "p": {
            "vi": "Điểm số được chuẩn hóa bằng softmax rồi dùng để lấy trung bình có trọng số các Value — token gom thông tin từ những token liên quan nhất.",
            "en": "Scores are normalized with softmax and used to weight-average the Values — each token gathers information from the tokens most relevant to it."
          }
        },
        {
          "h": {
            "vi": "Multi-head",
            "en": "Multi-head"
          },
          "p": {
            "vi": "Nhiều 'đầu' attention học các quan hệ khác nhau song song (cú pháp, ngữ nghĩa, vị trí) rồi ghép lại, giúp biểu diễn giàu hơn.",
            "en": "Multiple attention 'heads' learn different relations in parallel (syntax, meaning, position) and are concatenated for a richer representation."
          }
        }
      ]
    },
    {
      "slug": "cnn-thi-giac-may-tinh",
      "tag": "Deep Learning",
      "grad": "linear-gradient(120deg,#34d399,#7c5cff)",
      "date": "01/06/2026",
      "read": 8,
      "title": {
        "vi": "CNN cho thị giác máy tính: từ convolution đến ResNet",
        "en": "CNNs for vision: from convolution to ResNet"
      },
      "excerpt": {
        "vi": "Vì sao tích chập và pooling hiệu quả với ảnh, và ResNet giải quyết mạng sâu thế nào.",
        "en": "Why convolution and pooling work for images, and how ResNet made very deep nets trainable."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">🖼️</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 304\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><rect x=\"80\" y=\"10\" rx=\"8\" width=\"560\" height=\"34\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"360\" y=\"32\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text)\">Ảnh đầu vào / Input image</text><path d=\"M360 44 v8\" stroke=\"var(--brand-2)\" stroke-width=\"2\"/><rect x=\"80\" y=\"52\" rx=\"8\" width=\"560\" height=\"34\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"360\" y=\"74\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text)\">Conv + ReLU</text><path d=\"M360 86 v8\" stroke=\"var(--brand-2)\" stroke-width=\"2\"/><rect x=\"80\" y=\"94\" rx=\"8\" width=\"560\" height=\"34\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"360\" y=\"116\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text)\">Pooling</text><path d=\"M360 128 v8\" stroke=\"var(--brand-2)\" stroke-width=\"2\"/><rect x=\"80\" y=\"136\" rx=\"8\" width=\"560\" height=\"34\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"360\" y=\"158\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text)\">Conv + ReLU</text><path d=\"M360 170 v8\" stroke=\"var(--brand-2)\" stroke-width=\"2\"/><rect x=\"80\" y=\"178\" rx=\"8\" width=\"560\" height=\"34\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"360\" y=\"200\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text)\">Pooling</text><path d=\"M360 212 v8\" stroke=\"var(--brand-2)\" stroke-width=\"2\"/><rect x=\"80\" y=\"220\" rx=\"8\" width=\"560\" height=\"34\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"360\" y=\"242\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text)\">Fully-connected</text><path d=\"M360 254 v8\" stroke=\"var(--brand-2)\" stroke-width=\"2\"/><rect x=\"80\" y=\"262\" rx=\"8\" width=\"560\" height=\"34\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"360\" y=\"284\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text)\">Nhãn / Output</text></svg>",
      "figCaption": {
        "vi": "Luồng dữ liệu qua một CNN điển hình",
        "en": "Data flow through a typical CNN"
      },
      "ref": "He et al., Deep Residual Learning for Image Recognition (ResNet, 2015)",
      "body": [
        {
          "h": {
            "vi": "Tích chập học đặc trưng",
            "en": "Convolution learns features"
          },
          "p": {
            "vi": "Bộ lọc trượt trên ảnh phát hiện cạnh, góc, kết cấu; chia sẻ trọng số giúp giảm tham số và bất biến với vị trí.",
            "en": "Filters slide across the image to detect edges, corners and textures; weight sharing cuts parameters and adds translation invariance."
          }
        },
        {
          "h": {
            "vi": "Pooling và độ sâu",
            "en": "Pooling and depth"
          },
          "p": {
            "vi": "Pooling giảm kích thước và tăng tính bất biến. Xếp chồng nhiều lớp cho phép học đặc trưng từ đơn giản đến phức tạp.",
            "en": "Pooling shrinks feature maps and adds invariance. Stacking layers lets the network learn features from simple to complex."
          }
        },
        {
          "h": {
            "vi": "ResNet & skip connection",
            "en": "ResNet & skip connections"
          },
          "p": {
            "vi": "Kết nối tắt cho gradient chảy qua mạng rất sâu mà không bị triệt tiêu, mở đường cho các mạng hàng trăm lớp.",
            "en": "Skip connections let gradients flow through very deep networks without vanishing, enabling hundreds of layers."
          }
        }
      ]
    },
    {
      "slug": "xu-ly-mat-can-bang-lop",
      "tag": "Machine Learning",
      "grad": "linear-gradient(120deg,#ff5ca8,#22d3ee)",
      "date": "27/05/2026",
      "read": 7,
      "title": {
        "vi": "Xử lý dữ liệu mất cân bằng lớp",
        "en": "Handling class imbalance"
      },
      "excerpt": {
        "vi": "Khi lớp hiếm là lớp quan trọng: resampling, trọng số lớp và chọn chỉ số đúng.",
        "en": "When the rare class is the important one: resampling, class weights and picking the right metric."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">⚖️</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><rect x=\"0\" y=\"0\" rx=\"12\" width=\"351\" height=\"210\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><rect x=\"0\" y=\"0\" rx=\"12\" width=\"351\" height=\"40\" fill=\"var(--brand-2)\" opacity=\"0.14\"/><text x=\"175.5\" y=\"26\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"var(--text)\">Resampling</text><text x=\"16\" y=\"66\" font-size=\"12.5\" fill=\"var(--muted)\">• SMOTE / oversample</text><text x=\"16\" y=\"96\" font-size=\"12.5\" fill=\"var(--muted)\">• Undersample lớp lớn</text><text x=\"16\" y=\"126\" font-size=\"12.5\" fill=\"var(--muted)\">• Làm trong CV</text><text x=\"16\" y=\"156\" font-size=\"12.5\" fill=\"var(--muted)\">• Coi chừng rò rỉ</text><rect x=\"369\" y=\"0\" rx=\"12\" width=\"351\" height=\"210\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><rect x=\"369\" y=\"0\" rx=\"12\" width=\"351\" height=\"40\" fill=\"var(--brand-2)\" opacity=\"0.14\"/><text x=\"544.5\" y=\"26\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"var(--text)\">Trọng số &amp; ngưỡng</text><text x=\"385\" y=\"66\" font-size=\"12.5\" fill=\"var(--muted)\">• class_weight</text><text x=\"385\" y=\"96\" font-size=\"12.5\" fill=\"var(--muted)\">• Điều chỉnh threshold</text><text x=\"385\" y=\"126\" font-size=\"12.5\" fill=\"var(--muted)\">• Theo chi phí lỗi</text><text x=\"385\" y=\"156\" font-size=\"12.5\" fill=\"var(--muted)\">• Không đổi dữ liệu</text></svg>",
      "figCaption": {
        "vi": "Hai nhóm cách xử lý mất cân bằng",
        "en": "Two families of imbalance fixes"
      },
      "ref": "Chawla et al., SMOTE: Synthetic Minority Over-sampling Technique (2002)",
      "body": [
        {
          "h": {
            "vi": "Vì sao accuracy đánh lừa",
            "en": "Why accuracy misleads"
          },
          "p": {
            "vi": "Với 99% âm tính, mô hình đoán 'âm' luôn đạt 99% accuracy nhưng vô dụng. Hãy dùng precision, recall, F1 hoặc PR-AUC.",
            "en": "At 99% negatives, always predicting 'negative' scores 99% accuracy yet is useless. Use precision, recall, F1 or PR-AUC instead."
          }
        },
        {
          "h": {
            "vi": "Resampling",
            "en": "Resampling"
          },
          "p": {
            "vi": "Oversample lớp hiếm (ví dụ SMOTE) hoặc undersample lớp đa số. Luôn resample bên trong cross-validation để tránh rò rỉ.",
            "en": "Oversample the minority (e.g. SMOTE) or undersample the majority. Always resample inside cross-validation to avoid leakage."
          }
        },
        {
          "h": {
            "vi": "Trọng số & ngưỡng",
            "en": "Weights & thresholds"
          },
          "p": {
            "vi": "Nhiều thuật toán hỗ trợ class_weight; ngoài ra hãy điều chỉnh ngưỡng quyết định theo chi phí thực của false positive/negative.",
            "en": "Many algorithms support class_weight; also tune the decision threshold to the real cost of false positives/negatives."
          }
        }
      ]
    },
    {
      "slug": "xgboost-vs-lightgbm",
      "tag": "Machine Learning",
      "grad": "linear-gradient(120deg,#7c5cff,#22d3ee)",
      "date": "22/05/2026",
      "read": 8,
      "title": {
        "vi": "XGBoost vs LightGBM: chọn cái nào?",
        "en": "XGBoost vs LightGBM: which to pick"
      },
      "excerpt": {
        "vi": "Hai thư viện gradient boosting hàng đầu cho dữ liệu bảng — khác biệt và khi nào dùng.",
        "en": "Two leading gradient-boosting libraries for tabular data — differences and when to use each."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">🌲</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><rect x=\"0\" y=\"0\" rx=\"12\" width=\"351\" height=\"210\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><rect x=\"0\" y=\"0\" rx=\"12\" width=\"351\" height=\"40\" fill=\"var(--brand-2)\" opacity=\"0.14\"/><text x=\"175.5\" y=\"26\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"var(--text)\">XGBoost</text><text x=\"16\" y=\"66\" font-size=\"12.5\" fill=\"var(--muted)\">• Cây theo mức (level-wise)</text><text x=\"16\" y=\"96\" font-size=\"12.5\" fill=\"var(--muted)\">• Rất ổn định</text><text x=\"16\" y=\"126\" font-size=\"12.5\" fill=\"var(--muted)\">• Regularization mạnh</text><text x=\"16\" y=\"156\" font-size=\"12.5\" fill=\"var(--muted)\">• Tài liệu phong phú</text><rect x=\"369\" y=\"0\" rx=\"12\" width=\"351\" height=\"210\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><rect x=\"369\" y=\"0\" rx=\"12\" width=\"351\" height=\"40\" fill=\"var(--brand-2)\" opacity=\"0.14\"/><text x=\"544.5\" y=\"26\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"var(--text)\">LightGBM</text><text x=\"385\" y=\"66\" font-size=\"12.5\" fill=\"var(--muted)\">• Cây theo lá (leaf-wise)</text><text x=\"385\" y=\"96\" font-size=\"12.5\" fill=\"var(--muted)\">• Nhanh, nhẹ</text><text x=\"385\" y=\"126\" font-size=\"12.5\" fill=\"var(--muted)\">• Tốt cho dữ liệu lớn</text><text x=\"385\" y=\"156\" font-size=\"12.5\" fill=\"var(--muted)\">• Coi chừng overfit</text></svg>",
      "figCaption": {
        "vi": "So sánh hai thư viện boosting",
        "en": "Comparing the two boosting libraries"
      },
      "ref": "Chen & Guestrin, XGBoost (2016); Ke et al., LightGBM (2017)",
      "body": [
        {
          "h": {
            "vi": "Cùng ý tưởng, khác chi tiết",
            "en": "Same idea, different details"
          },
          "p": {
            "vi": "Cả hai xây cây tuần tự để sửa lỗi của cây trước. Khác biệt nằm ở cách phát triển cây và xử lý đặc trưng.",
            "en": "Both build trees sequentially to correct prior errors. They differ in how trees grow and how features are handled."
          }
        },
        {
          "h": {
            "vi": "Tốc độ và bộ nhớ",
            "en": "Speed and memory"
          },
          "p": {
            "vi": "LightGBM phát triển cây theo lá (leaf-wise) và dùng histogram nên thường nhanh hơn, nhẹ hơn trên dữ liệu lớn.",
            "en": "LightGBM grows trees leaf-wise with histogram binning, so it is usually faster and lighter on large data."
          }
        },
        {
          "h": {
            "vi": "Ổn định và tuning",
            "en": "Stability and tuning"
          },
          "p": {
            "vi": "XGBoost regularize mạnh, ổn định và tài liệu phong phú. LightGBM dễ overfit trên dữ liệu nhỏ nếu không giới hạn số lá.",
            "en": "XGBoost regularizes strongly, is stable and well-documented. LightGBM can overfit small data unless you cap the number of leaves."
          }
        }
      ]
    },
    {
      "slug": "feature-engineering-tranh-ro-ri",
      "tag": "Machine Learning",
      "grad": "linear-gradient(120deg,#ff5ca8,#ff9d5c)",
      "date": "17/05/2026",
      "read": 8,
      "title": {
        "vi": "Feature engineering & tránh rò rỉ dữ liệu",
        "en": "Feature engineering & preventing data leakage"
      },
      "excerpt": {
        "vi": "Đặc trưng tốt thắng mô hình phức tạp — nhưng rò rỉ dữ liệu sẽ thổi phồng kết quả một cách nguy hiểm.",
        "en": "Good features beat fancy models — but data leakage inflates your results dangerously."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">🧬</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 104\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><rect x=\"0\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"78.75\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Split trước</text><path d=\"M159.5 52 H185.5\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"187.5\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"266.25\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Fit trên train</text><path d=\"M347 52 H373\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"375\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"453.75\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Transform</text><path d=\"M534.5 52 H560.5\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"562.5\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"641.25\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Đánh giá</text><defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0 0L6 3L0 6z\" fill=\"var(--brand-2)\"/></marker></defs></svg>",
      "figCaption": {
        "vi": "Thứ tự đúng để tránh rò rỉ",
        "en": "The correct order to prevent leakage"
      },
      "ref": "Kaufman et al., Leakage in Data Mining: Formulation, Detection, and Avoidance (2012)",
      "body": [
        {
          "h": {
            "vi": "Đặc trưng quan trọng nhất",
            "en": "Features matter most"
          },
          "p": {
            "vi": "Mã hóa hạng mục, tạo đặc trưng tương tác, tổng hợp theo thời gian thường cải thiện nhiều hơn việc đổi thuật toán.",
            "en": "Encoding categoricals, building interactions and time-based aggregates often help more than swapping algorithms."
          }
        },
        {
          "h": {
            "vi": "Rò rỉ là gì",
            "en": "What leakage is"
          },
          "p": {
            "vi": "Rò rỉ xảy ra khi thông tin từ tương lai hoặc từ tập test lọt vào lúc huấn luyện — ví dụ scale trên toàn bộ dữ liệu trước khi split.",
            "en": "Leakage is when future or test-set information sneaks into training — e.g. scaling on the full dataset before splitting."
          }
        },
        {
          "h": {
            "vi": "Quy tắc vàng",
            "en": "The golden rule"
          },
          "p": {
            "vi": "Split trước, rồi fit mọi phép biến đổi chỉ trên tập train (dùng Pipeline). Đánh giá phải mô phỏng đúng lúc dự đoán thật.",
            "en": "Split first, then fit every transformation on the train set only (use a Pipeline). Evaluation must mirror real prediction time."
          }
        }
      ]
    },
    {
      "slug": "danh-gia-mo-hinh-ngoai-accuracy",
      "tag": "Machine Learning",
      "grad": "linear-gradient(120deg,#34d399,#22d3ee)",
      "date": "12/05/2026",
      "read": 7,
      "title": {
        "vi": "Đánh giá mô hình ngoài accuracy",
        "en": "Model evaluation beyond accuracy"
      },
      "excerpt": {
        "vi": "Precision, recall, F1, ROC-AUC, PR-AUC và hiệu chỉnh xác suất — chọn chỉ số theo bài toán.",
        "en": "Precision, recall, F1, ROC-AUC, PR-AUC and calibration — choose metrics to fit the problem."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">🎯</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><line x1=\"20\" y1=\"170\" x2=\"700\" y2=\"170\" stroke=\"var(--border-strong)\"/><rect x=\"88\" y=\"63.400000000000006\" width=\"70\" height=\"106.6\" rx=\"6\" fill=\"var(--brand-2)\" opacity=\"0.8\"/><text x=\"123\" y=\"55.400000000000006\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text)\">82</text><text x=\"123\" y=\"188\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"var(--muted)\">Precision</text><rect x=\"246\" y=\"86.8\" width=\"70\" height=\"83.2\" rx=\"6\" fill=\"var(--brand-2)\" opacity=\"0.8\"/><text x=\"281\" y=\"78.8\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text)\">64</text><text x=\"281\" y=\"188\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"var(--muted)\">Recall</text><rect x=\"404\" y=\"76.4\" width=\"70\" height=\"93.6\" rx=\"6\" fill=\"var(--brand-2)\" opacity=\"0.8\"/><text x=\"439\" y=\"68.4\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text)\">72</text><text x=\"439\" y=\"188\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"var(--muted)\">F1</text><rect x=\"562\" y=\"69.89999999999999\" width=\"70\" height=\"100.10000000000001\" rx=\"6\" fill=\"var(--brand-2)\" opacity=\"0.8\"/><text x=\"597\" y=\"61.89999999999999\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text)\">77</text><text x=\"597\" y=\"188\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"var(--muted)\">PR-AUC</text></svg>",
      "figCaption": {
        "vi": "Một bức tranh nhiều chỉ số thay vì chỉ accuracy",
        "en": "A multi-metric picture instead of accuracy alone"
      },
      "ref": "Davis & Goadrich, The Relationship Between Precision-Recall and ROC Curves (2006)",
      "body": [
        {
          "h": {
            "vi": "Precision vs recall",
            "en": "Precision vs recall"
          },
          "p": {
            "vi": "Precision hỏi 'dự đoán dương có đúng không', recall hỏi 'có bắt hết ca dương không'. Cân bằng tùy chi phí sai sót.",
            "en": "Precision asks 'are positive predictions correct?', recall asks 'did we catch all positives?'. Balance them by the cost of mistakes."
          }
        },
        {
          "h": {
            "vi": "ROC-AUC vs PR-AUC",
            "en": "ROC-AUC vs PR-AUC"
          },
          "p": {
            "vi": "Với dữ liệu mất cân bằng, PR-AUC phản ánh hiệu năng trên lớp hiếm rõ hơn ROC-AUC.",
            "en": "On imbalanced data, PR-AUC reflects performance on the rare class more honestly than ROC-AUC."
          }
        },
        {
          "h": {
            "vi": "Hiệu chỉnh xác suất",
            "en": "Calibration"
          },
          "p": {
            "vi": "Nếu bạn dùng xác suất để ra quyết định, hãy kiểm tra calibration — điểm 0.8 nên thật sự đúng khoảng 80% số lần.",
            "en": "If you use probabilities to decide, check calibration — a score of 0.8 should be right about 80% of the time."
          }
        }
      ]
    },
    {
      "slug": "phat-hien-drift-production",
      "tag": "MLOps",
      "grad": "linear-gradient(120deg,#7c5cff,#ff5ca8)",
      "date": "07/05/2026",
      "read": 8,
      "title": {
        "vi": "Phát hiện & xử lý drift trong production",
        "en": "Detecting & handling drift in production"
      },
      "excerpt": {
        "vi": "Vì sao mô hình xuống cấp theo thời gian và cách dựng vòng giám sát–phát hiện–huấn luyện lại.",
        "en": "Why models decay over time and how to build a monitor–detect–retrain loop."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">📉</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 230\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><circle cx=\"360\" cy=\"115\" r=\"78\" fill=\"none\" stroke=\"var(--brand-2)\" stroke-width=\"2\" stroke-dasharray=\"6 8\"/><rect x=\"290\" y=\"17\" rx=\"9\" width=\"140\" height=\"40\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"360\" y=\"42\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text)\">Giám sát / Monitor</text><rect x=\"357.5499814951862\" y=\"134\" rx=\"9\" width=\"140\" height=\"40\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"427.5499814951862\" y=\"159\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text)\">Phát hiện / Detect</text><rect x=\"222.45001850481378\" y=\"134.00000000000003\" rx=\"9\" width=\"140\" height=\"40\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"292.4500185048138\" y=\"159.00000000000003\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text)\">Huấn luyện lại / Retrain</text></svg>",
      "figCaption": {
        "vi": "Vòng lặp giữ mô hình luôn khỏe",
        "en": "The loop that keeps models healthy"
      },
      "ref": "Gama et al., A Survey on Concept Drift Adaptation (2014)",
      "body": [
        {
          "h": {
            "vi": "Data drift vs concept drift",
            "en": "Data drift vs concept drift"
          },
          "p": {
            "vi": "Data drift là phân phối đầu vào thay đổi; concept drift là quan hệ giữa đầu vào và nhãn thay đổi. Cả hai đều làm mô hình kém đi.",
            "en": "Data drift is a shift in input distribution; concept drift is a change in the input-to-label relationship. Both degrade the model."
          }
        },
        {
          "h": {
            "vi": "Giám sát cái gì",
            "en": "What to monitor"
          },
          "p": {
            "vi": "Theo dõi phân phối đặc trưng, tỉ lệ dự đoán và (khi có nhãn muộn) hiệu năng thực. Cảnh báo khi lệch vượt ngưỡng.",
            "en": "Track feature distributions, prediction rates and (when labels arrive late) live performance. Alert when drift exceeds a threshold."
          }
        },
        {
          "h": {
            "vi": "Đóng vòng lặp",
            "en": "Close the loop"
          },
          "p": {
            "vi": "Tự động kích hoạt huấn luyện lại hoặc gắn cờ để người xem xét. Không có vòng lặp này, mô hình 'chết' âm thầm.",
            "en": "Trigger retraining automatically or flag for human review. Without this loop, models die silently."
          }
        }
      ]
    },
    {
      "slug": "experiment-tracking-mlflow",
      "tag": "MLOps",
      "grad": "linear-gradient(120deg,#22d3ee,#7c5cff)",
      "date": "02/05/2026",
      "read": 7,
      "title": {
        "vi": "Experiment tracking & model registry với MLflow",
        "en": "Experiment tracking & model registry with MLflow"
      },
      "excerpt": {
        "vi": "Ghi lại tham số, chỉ số và artifact để mọi kết quả đều tái lập và so sánh được.",
        "en": "Log params, metrics and artifacts so every result is reproducible and comparable."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">📒</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 104\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><rect x=\"0\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"78.75\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Huấn luyện</text><path d=\"M159.5 52 H185.5\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"187.5\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"266.25\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Log params/metrics</text><path d=\"M347 52 H373\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"375\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"453.75\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Registry</text><path d=\"M534.5 52 H560.5\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"562.5\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"641.25\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Triển khai</text><defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0 0L6 3L0 6z\" fill=\"var(--brand-2)\"/></marker></defs></svg>",
      "figCaption": {
        "vi": "Từ thử nghiệm đến triển khai có kiểm soát",
        "en": "From experiment to controlled deployment"
      },
      "ref": "MLflow documentation (mlflow.org)",
      "body": [
        {
          "h": {
            "vi": "Vì sao cần tracking",
            "en": "Why track experiments"
          },
          "p": {
            "vi": "Không ghi lại thì bạn không thể trả lời 'phiên bản nào tốt nhất và vì sao'. Tracking biến thử nghiệm hỗn loạn thành có kỷ luật.",
            "en": "Without logging you cannot answer 'which version was best and why'. Tracking turns chaotic experimentation into a disciplined process."
          }
        },
        {
          "h": {
            "vi": "Ghi gì",
            "en": "What to log"
          },
          "p": {
            "vi": "Tham số, chỉ số, phiên bản dữ liệu, và artifact (model, biểu đồ). Gắn với commit code để tái lập chính xác.",
            "en": "Params, metrics, data version and artifacts (models, plots). Tie each run to a code commit for exact reproduction."
          }
        },
        {
          "h": {
            "vi": "Model registry",
            "en": "Model registry"
          },
          "p": {
            "vi": "Registry quản lý vòng đời model qua các giai đoạn (Staging, Production) và giúp rollback nhanh khi cần.",
            "en": "The registry manages a model's lifecycle across stages (Staging, Production) and enables fast rollback."
          }
        }
      ]
    },
    {
      "slug": "serving-model-batch-vs-realtime",
      "tag": "MLOps",
      "grad": "linear-gradient(120deg,#ff9d5c,#ff5ca8)",
      "date": "27/04/2026",
      "read": 7,
      "title": {
        "vi": "Phục vụ mô hình: batch hay real-time?",
        "en": "Serving models: batch vs real-time"
      },
      "excerpt": {
        "vi": "Hai kiểu triển khai với ràng buộc độ trễ, chi phí và hạ tầng rất khác nhau.",
        "en": "Two deployment styles with very different latency, cost and infrastructure constraints."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">🚀</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><rect x=\"0\" y=\"0\" rx=\"12\" width=\"351\" height=\"210\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><rect x=\"0\" y=\"0\" rx=\"12\" width=\"351\" height=\"40\" fill=\"var(--brand-2)\" opacity=\"0.14\"/><text x=\"175.5\" y=\"26\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"var(--text)\">Batch</text><text x=\"16\" y=\"66\" font-size=\"12.5\" fill=\"var(--muted)\">• Chạy theo lịch</text><text x=\"16\" y=\"96\" font-size=\"12.5\" fill=\"var(--muted)\">• Độ trễ cao, chi phí thấp</text><text x=\"16\" y=\"126\" font-size=\"12.5\" fill=\"var(--muted)\">• Hạ tầng đơn giản</text><text x=\"16\" y=\"156\" font-size=\"12.5\" fill=\"var(--muted)\">• VD: chấm điểm hằng đêm</text><rect x=\"369\" y=\"0\" rx=\"12\" width=\"351\" height=\"210\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><rect x=\"369\" y=\"0\" rx=\"12\" width=\"351\" height=\"40\" fill=\"var(--brand-2)\" opacity=\"0.14\"/><text x=\"544.5\" y=\"26\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"var(--text)\">Real-time</text><text x=\"385\" y=\"66\" font-size=\"12.5\" fill=\"var(--muted)\">• Theo từng request</text><text x=\"385\" y=\"96\" font-size=\"12.5\" fill=\"var(--muted)\">• Độ trễ mili-giây</text><text x=\"385\" y=\"126\" font-size=\"12.5\" fill=\"var(--muted)\">• Cần scaling &amp; monitor</text><text x=\"385\" y=\"156\" font-size=\"12.5\" fill=\"var(--muted)\">• VD: gợi ý tức thời</text></svg>",
      "figCaption": {
        "vi": "Batch vs real-time serving",
        "en": "Batch vs real-time serving"
      },
      "ref": "Google Cloud Vertex AI docs: online vs batch prediction",
      "body": [
        {
          "h": {
            "vi": "Batch prediction",
            "en": "Batch prediction"
          },
          "p": {
            "vi": "Chấm điểm theo lô định kỳ (ví dụ hằng đêm) rồi lưu kết quả. Đơn giản, rẻ, phù hợp khi không cần tức thời.",
            "en": "Score in periodic batches (e.g. nightly) and store the results. Simple, cheap and fine when instant answers aren't needed."
          }
        },
        {
          "h": {
            "vi": "Real-time serving",
            "en": "Real-time serving"
          },
          "p": {
            "vi": "Phơi model qua API để trả lời từng yêu cầu trong mili-giây. Cần lo scaling, giám sát và độ trễ đuôi.",
            "en": "Expose the model via an API to answer each request in milliseconds. You must handle scaling, monitoring and tail latency."
          }
        },
        {
          "h": {
            "vi": "Chọn theo nhu cầu",
            "en": "Choose by need"
          },
          "p": {
            "vi": "Nếu quyết định phải xảy ra ngay lúc người dùng tương tác thì cần real-time; còn lại, batch thường đủ và tiết kiệm hơn.",
            "en": "If the decision must happen the moment a user interacts, go real-time; otherwise batch is usually enough and cheaper."
          }
        }
      ]
    },
    {
      "slug": "pipeline-batch-vs-streaming",
      "tag": "Data Engineering",
      "grad": "linear-gradient(120deg,#34d399,#7c5cff)",
      "date": "22/04/2026",
      "read": 8,
      "title": {
        "vi": "Thiết kế pipeline: batch hay streaming?",
        "en": "Data pipeline design: batch vs streaming"
      },
      "excerpt": {
        "vi": "Xử lý theo lô hay theo dòng — chọn theo yêu cầu độ tươi của dữ liệu và độ phức tạp chấp nhận được.",
        "en": "Process in batches or as a stream — choose by data-freshness needs and acceptable complexity."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">🏗️</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><rect x=\"0\" y=\"0\" rx=\"12\" width=\"351\" height=\"210\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><rect x=\"0\" y=\"0\" rx=\"12\" width=\"351\" height=\"40\" fill=\"var(--brand-2)\" opacity=\"0.14\"/><text x=\"175.5\" y=\"26\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"var(--text)\">Batch</text><text x=\"16\" y=\"66\" font-size=\"12.5\" fill=\"var(--muted)\">• Xử lý theo khối</text><text x=\"16\" y=\"96\" font-size=\"12.5\" fill=\"var(--muted)\">• Độ trễ phút–giờ</text><text x=\"16\" y=\"126\" font-size=\"12.5\" fill=\"var(--muted)\">• Đơn giản, dễ replay</text><text x=\"16\" y=\"156\" font-size=\"12.5\" fill=\"var(--muted)\">• Spark, dbt</text><rect x=\"369\" y=\"0\" rx=\"12\" width=\"351\" height=\"210\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><rect x=\"369\" y=\"0\" rx=\"12\" width=\"351\" height=\"40\" fill=\"var(--brand-2)\" opacity=\"0.14\"/><text x=\"544.5\" y=\"26\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"var(--text)\">Streaming</text><text x=\"385\" y=\"66\" font-size=\"12.5\" fill=\"var(--muted)\">• Xử lý theo sự kiện</text><text x=\"385\" y=\"96\" font-size=\"12.5\" fill=\"var(--muted)\">• Độ trễ giây</text><text x=\"385\" y=\"126\" font-size=\"12.5\" fill=\"var(--muted)\">• Cần quản lý trạng thái</text><text x=\"385\" y=\"156\" font-size=\"12.5\" fill=\"var(--muted)\">• Kafka, Flink</text></svg>",
      "figCaption": {
        "vi": "Batch vs streaming: đánh đổi độ tươi và độ phức tạp",
        "en": "Batch vs streaming: freshness vs complexity"
      },
      "ref": "Kleppmann, Designing Data-Intensive Applications (2017)",
      "body": [
        {
          "h": {
            "vi": "Batch",
            "en": "Batch"
          },
          "p": {
            "vi": "Gom dữ liệu rồi xử lý theo khối định kỳ. Dễ suy luận, dễ chạy lại, phù hợp báo cáo và tổng hợp.",
            "en": "Collect data and process it in periodic chunks. Easy to reason about, easy to re-run, ideal for reports and aggregations."
          }
        },
        {
          "h": {
            "vi": "Streaming",
            "en": "Streaming"
          },
          "p": {
            "vi": "Xử lý sự kiện ngay khi đến để có kết quả gần thời gian thực; đổi lại phức tạp hơn về thứ tự, cửa sổ thời gian và trạng thái.",
            "en": "Process events as they arrive for near-real-time results; the cost is more complexity around ordering, time windows and state."
          }
        },
        {
          "h": {
            "vi": "Kiến trúc lai",
            "en": "Hybrid"
          },
          "p": {
            "vi": "Nhiều hệ thống kết hợp cả hai: streaming cho tức thời, batch cho tính lại chính xác và lịch sử.",
            "en": "Many systems combine both: streaming for immediacy and batch for accurate recomputation and history."
          }
        }
      ]
    },
    {
      "slug": "dimensional-modeling-star-schema",
      "tag": "Data Engineering",
      "grad": "linear-gradient(120deg,#ff5ca8,#22d3ee)",
      "date": "17/04/2026",
      "read": 8,
      "title": {
        "vi": "Dimensional modeling & star schema",
        "en": "Dimensional modeling & the star schema"
      },
      "excerpt": {
        "vi": "Cách tổ chức kho dữ liệu để truy vấn phân tích vừa nhanh vừa dễ hiểu.",
        "en": "How to organize a warehouse so analytical queries are both fast and intuitive."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">⭐</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 250\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><line x1=\"360\" y1=\"125\" x2=\"360\" y2=\"33\" stroke=\"var(--border-strong)\"/><rect x=\"296\" y=\"16\" rx=\"8\" width=\"128\" height=\"34\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"360\" y=\"38\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--muted)\">Dim Thời gian</text><line x1=\"360\" y1=\"125\" x2=\"452\" y2=\"125\" stroke=\"var(--border-strong)\"/><rect x=\"388\" y=\"108\" rx=\"8\" width=\"128\" height=\"34\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"452\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--muted)\">Dim Sản phẩm</text><line x1=\"360\" y1=\"125\" x2=\"360\" y2=\"217\" stroke=\"var(--border-strong)\"/><rect x=\"296\" y=\"200\" rx=\"8\" width=\"128\" height=\"34\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"360\" y=\"222\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--muted)\">Dim Khách hàng</text><line x1=\"360\" y1=\"125\" x2=\"268\" y2=\"125.00000000000001\" stroke=\"var(--border-strong)\"/><rect x=\"204\" y=\"108.00000000000001\" rx=\"8\" width=\"128\" height=\"34\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"268\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--muted)\">Dim Cửa hàng</text><circle cx=\"360\" cy=\"125\" r=\"46\" fill=\"var(--brand-2)\" opacity=\"0.16\" stroke=\"var(--brand-2)\"/><text x=\"360\" y=\"130\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"800\" fill=\"var(--text)\">Fact</text></svg>",
      "figCaption": {
        "vi": "Star schema: một fact bao quanh bởi các dimension",
        "en": "A star schema: one fact surrounded by dimensions"
      },
      "ref": "Kimball & Ross, The Data Warehouse Toolkit (3rd ed., 2013)",
      "body": [
        {
          "h": {
            "vi": "Fact và dimension",
            "en": "Facts and dimensions"
          },
          "p": {
            "vi": "Bảng fact chứa các phép đo (doanh thu, số lượng); bảng dimension mô tả ngữ cảnh (thời gian, sản phẩm, khách hàng).",
            "en": "Fact tables hold measures (revenue, quantity); dimension tables describe context (time, product, customer)."
          }
        },
        {
          "h": {
            "vi": "Vì sao dùng star schema",
            "en": "Why a star schema"
          },
          "p": {
            "vi": "Cấu trúc hình sao giúp câu truy vấn đơn giản, join ít và dễ hiểu cho người phân tích — tối ưu cho đọc, không phải ghi.",
            "en": "The star shape keeps queries simple with few joins and is intuitive for analysts — optimized for reads, not writes."
          }
        },
        {
          "h": {
            "vi": "Slowly Changing Dimensions",
            "en": "Slowly Changing Dimensions"
          },
          "p": {
            "vi": "Khi thuộc tính thay đổi (khách đổi địa chỉ), SCD quyết định giữ lịch sử hay ghi đè — điều quan trọng cho báo cáo theo thời gian.",
            "en": "When attributes change (a customer moves), SCD decides whether to keep history or overwrite — crucial for time-based reporting."
          }
        }
      ]
    },
    {
      "slug": "spark-performance-tuning",
      "tag": "Data Engineering",
      "grad": "linear-gradient(120deg,#7c5cff,#22d3ee)",
      "date": "12/04/2026",
      "read": 9,
      "title": {
        "vi": "Tối ưu hiệu năng Apache Spark",
        "en": "Apache Spark performance tuning"
      },
      "excerpt": {
        "vi": "Partitioning, shuffle và caching — ba thứ quyết định job Spark của bạn nhanh hay chậm.",
        "en": "Partitioning, shuffles and caching — the three things that decide whether your Spark job flies or crawls."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">⚡</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 104\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><rect x=\"0\" y=\"20\" rx=\"10\" width=\"120\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"60\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Read</text><path d=\"M122 52 H148\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"150\" y=\"20\" rx=\"10\" width=\"120\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"210\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Repartition</text><path d=\"M272 52 H298\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"300\" y=\"20\" rx=\"10\" width=\"120\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"360\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Transform</text><path d=\"M422 52 H448\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"450\" y=\"20\" rx=\"10\" width=\"120\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"510\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Shuffle</text><path d=\"M572 52 H598\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"600\" y=\"20\" rx=\"10\" width=\"120\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"660\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Write</text><defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0 0L6 3L0 6z\" fill=\"var(--brand-2)\"/></marker></defs></svg>",
      "figCaption": {
        "vi": "Các điểm cần canh trong một job Spark",
        "en": "The stages to watch in a Spark job"
      },
      "ref": "Apache Spark official Tuning Guide (spark.apache.org)",
      "body": [
        {
          "h": {
            "vi": "Shuffle là kẻ thù",
            "en": "Shuffles are the enemy"
          },
          "p": {
            "vi": "Các phép như join và groupBy gây shuffle dữ liệu qua mạng — thường là điểm nghẽn lớn nhất. Giảm và tối ưu shuffle trước tiên.",
            "en": "Operations like join and groupBy shuffle data across the network — usually the biggest bottleneck. Reduce and optimize shuffles first."
          }
        },
        {
          "h": {
            "vi": "Partitioning hợp lý",
            "en": "Partition sensibly"
          },
          "p": {
            "vi": "Quá ít partition thì không tận dụng cluster; quá nhiều thì tốn overhead. Canh kích thước partition và xử lý data skew.",
            "en": "Too few partitions underuse the cluster; too many add overhead. Right-size partitions and deal with data skew."
          }
        },
        {
          "h": {
            "vi": "Cache đúng chỗ",
            "en": "Cache wisely"
          },
          "p": {
            "vi": "Cache các DataFrame được dùng lại nhiều lần, nhưng đừng cache bừa vì tốn bộ nhớ. Đọc kế hoạch thực thi để biết nên tối ưu gì.",
            "en": "Cache DataFrames reused multiple times, but don't over-cache — it eats memory. Read the query plan to know what to optimize."
          }
        }
      ]
    },
    {
      "slug": "kafka-nen-tang-realtime",
      "tag": "Data Engineering",
      "grad": "linear-gradient(120deg,#ff5ca8,#ff9d5c)",
      "date": "07/04/2026",
      "read": 8,
      "title": {
        "vi": "Kafka nền tảng cho dữ liệu thời gian thực",
        "en": "Kafka fundamentals for real-time data"
      },
      "excerpt": {
        "vi": "Topic, partition, consumer group — mô hình giúp Kafka mở rộng và bền bỉ.",
        "en": "Topics, partitions and consumer groups — the model that makes Kafka scalable and durable."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">🔀</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 104\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><rect x=\"0\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"78.75\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Producer</text><path d=\"M159.5 52 H185.5\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"187.5\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"266.25\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Topic (partitions)</text><path d=\"M347 52 H373\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"375\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"453.75\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Consumer group</text><path d=\"M534.5 52 H560.5\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"562.5\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"641.25\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Ứng dụng</text><defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0 0L6 3L0 6z\" fill=\"var(--brand-2)\"/></marker></defs></svg>",
      "figCaption": {
        "vi": "Luồng dữ liệu qua Kafka",
        "en": "Data flow through Kafka"
      },
      "ref": "Apache Kafka documentation (kafka.apache.org)",
      "body": [
        {
          "h": {
            "vi": "Topic & partition",
            "en": "Topics & partitions"
          },
          "p": {
            "vi": "Dữ liệu được ghi vào topic, chia thành partition để song song hóa. Thứ tự được đảm bảo trong từng partition.",
            "en": "Data is written to topics, split into partitions for parallelism. Ordering is guaranteed within a partition."
          }
        },
        {
          "h": {
            "vi": "Producer & consumer",
            "en": "Producers & consumers"
          },
          "p": {
            "vi": "Producer ghi sự kiện, consumer đọc theo tốc độ của mình. Kafka lưu log bền vững nên consumer có thể đọc lại (replay).",
            "en": "Producers write events, consumers read at their own pace. Kafka keeps a durable log so consumers can replay."
          }
        },
        {
          "h": {
            "vi": "Consumer group",
            "en": "Consumer groups"
          },
          "p": {
            "vi": "Nhiều consumer trong một group chia nhau các partition để mở rộng thông lượng mà không đọc trùng.",
            "en": "Multiple consumers in a group split partitions to scale throughput without double-reading."
          }
        }
      ]
    },
    {
      "slug": "ab-testing-dung-cach",
      "tag": "Data Analyst",
      "grad": "linear-gradient(120deg,#34d399,#22d3ee)",
      "date": "02/04/2026",
      "read": 9,
      "title": {
        "vi": "A/B testing đúng cách",
        "en": "A/B testing done right"
      },
      "excerpt": {
        "vi": "Sức mạnh thống kê, cỡ mẫu, p-value và những cạm bẫy khiến kết luận sai.",
        "en": "Statistical power, sample size, p-values and the pitfalls that lead to wrong conclusions."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">🔬</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 104\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><rect x=\"0\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"78.75\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Giả thuyết</text><path d=\"M159.5 52 H185.5\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"187.5\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"266.25\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Cỡ mẫu / Power</text><path d=\"M347 52 H373\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"375\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"453.75\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Chạy test</text><path d=\"M534.5 52 H560.5\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"562.5\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"641.25\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Phân tích</text><defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0 0L6 3L0 6z\" fill=\"var(--brand-2)\"/></marker></defs></svg>",
      "figCaption": {
        "vi": "Quy trình một thí nghiệm A/B đáng tin",
        "en": "A trustworthy A/B test workflow"
      },
      "ref": "Kohavi, Tang & Xu, Trustworthy Online Controlled Experiments (2020)",
      "body": [
        {
          "h": {
            "vi": "Thiết kế trước khi chạy",
            "en": "Design before you run"
          },
          "p": {
            "vi": "Xác định chỉ số chính, hiệu ứng tối thiểu đáng quan tâm và cỡ mẫu cần thiết trước — không quyết định khi đang chạy.",
            "en": "Fix the primary metric, the minimum effect worth detecting and the required sample size up front — don't decide mid-flight."
          }
        },
        {
          "h": {
            "vi": "Đừng peek liên tục",
            "en": "Don't peek repeatedly"
          },
          "p": {
            "vi": "Nhìn kết quả liên tục và dừng khi vừa 'có ý nghĩa' làm tăng mạnh tỉ lệ dương tính giả. Hãy chạy đủ thời gian đã định.",
            "en": "Continuously peeking and stopping the moment it looks 'significant' inflates false positives. Run for the pre-planned duration."
          }
        },
        {
          "h": {
            "vi": "Diễn giải cẩn thận",
            "en": "Interpret carefully"
          },
          "p": {
            "vi": "p-value không phải xác suất giả thuyết đúng. Báo cáo cả khoảng tin cậy và ý nghĩa thực tiễn, không chỉ 'có ý nghĩa hay không'.",
            "en": "A p-value is not the probability the hypothesis is true. Report confidence intervals and practical significance, not just pass/fail."
          }
        }
      ]
    },
    {
      "slug": "sql-window-functions-phan-tich",
      "tag": "SQL",
      "grad": "linear-gradient(120deg,#7c5cff,#ff5ca8)",
      "date": "28/03/2026",
      "read": 7,
      "title": {
        "vi": "SQL window functions cho phân tích",
        "en": "SQL window functions for analytics"
      },
      "excerpt": {
        "vi": "ROW_NUMBER, RANK, LAG/LEAD và running total — công cụ 'đặc sản' của phân tích dữ liệu.",
        "en": "ROW_NUMBER, RANK, LAG/LEAD and running totals — the analyst's power tools."
      },
      "hero": "<svg class=\"hero-svg\" viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"rgba(255,255,255,.16)\" stroke-width=\"1.4\"><circle cx=\"330\" cy=\"42\" r=\"66\"/><circle cx=\"362\" cy=\"158\" r=\"42\"/><path d=\"M0 150H400M0 112H400\"/></g><circle cx=\"72\" cy=\"100\" r=\"48\" fill=\"rgba(255,255,255,.15)\"/><text x=\"72\" y=\"118\" font-size=\"46\" text-anchor=\"middle\">🪟</text></svg>",
      "fig": "<svg viewBox=\"0 0 720 104\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><rect x=\"0\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"78.75\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">PARTITION BY</text><path d=\"M159.5 52 H185.5\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"187.5\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"266.25\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">ORDER BY</text><path d=\"M347 52 H373\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"375\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"453.75\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Frame</text><path d=\"M534.5 52 H560.5\" stroke=\"var(--brand-2)\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><rect x=\"562.5\" y=\"20\" rx=\"10\" width=\"157.5\" height=\"64\" fill=\"var(--surface-2)\" stroke=\"var(--border-strong)\"/><text x=\"641.25\" y=\"57\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text)\">Kết quả từng dòng</text><defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0 0L6 3L0 6z\" fill=\"var(--brand-2)\"/></marker></defs></svg>",
      "figCaption": {
        "vi": "Cách một window function được tính",
        "en": "How a window function is evaluated"
      },
      "ref": "PostgreSQL documentation: Window Functions",
      "body": [
        {
          "h": {
            "vi": "Window khác GROUP BY thế nào",
            "en": "How windows differ from GROUP BY"
          },
          "p": {
            "vi": "GROUP BY gộp hàng lại; window function tính toán trên một 'cửa sổ' hàng nhưng vẫn giữ nguyên từng dòng — lý tưởng cho xếp hạng và so sánh.",
            "en": "GROUP BY collapses rows; a window function computes over a 'window' of rows while keeping each row — ideal for ranking and comparisons."
          }
        },
        {
          "h": {
            "vi": "PARTITION BY & ORDER BY",
            "en": "PARTITION BY & ORDER BY"
          },
          "p": {
            "vi": "PARTITION chia dữ liệu thành nhóm, ORDER quyết định thứ tự trong nhóm. Đây là nền tảng cho top-N theo nhóm.",
            "en": "PARTITION splits data into groups, ORDER sets the order within each. This is the basis for top-N-per-group."
          }
        },
        {
          "h": {
            "vi": "Bài toán thường gặp",
            "en": "Common problems"
          },
          "p": {
            "vi": "Running total, so với kỳ trước bằng LAG, và lấy bản ghi mới nhất mỗi nhóm là những dạng bài phỏng vấn hay gặp.",
            "en": "Running totals, period-over-period with LAG, and latest-record-per-group are frequent interview patterns."
          }
        }
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
        email: "sophie.nguyenthuthuy@gmail.com",
        telephone: "+84925629416",
        areaServed: "VN",
        address: { "@type": "PostalAddress", addressLocality: "Bách Khoa", addressRegion: "Hà Nội", addressCountry: "VN" }
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
                <li><a href="course.html?id=da" data-i18n="footer.c_da"></a></li>
                <li><a href="course.html?id=de" data-i18n="footer.c_de"></a></li>
                <li><a href="course.html?id=ds" data-i18n="footer.c_ds"></a></li>
                <li><a href="course.html?id=ml" data-i18n="footer.c_ml"></a></li>
                <li><a href="course.html?id=ai" data-i18n="footer.c_ai"></a></li>
                <li><a href="course.html?id=mlops" data-i18n="footer.c_mlops"></a></li>
                <li><a href="course.html?id=pyda" data-i18n="footer.c_pyda"></a></li>
              </ul>
            </div>
            <div>
              <h5 data-i18n="footer.contactH"></h5>
              <ul>
                <li><a href="mailto:sophie.nguyenthuthuy@gmail.com">sophie.nguyenthuthuy@gmail.com</a></li>
                <li><a href="tel:+84925629416">0925 629 416</a></li>
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
        <div class="sched-course">${s.id ? `<a href="course.html?id=${s.id}">${T(s.course)}</a>` : T(s.course)}</div>
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
        <div class="post-thumb" style="background:${p.grad}">${p.hero || ""}<span>${p.tag}</span></div>
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
        <div class="article-thumb" style="background:${p.grad}">${p.hero || ""}</div>
        <div class="container-narrow article-body">
          <p class="article-lead">${T(p.excerpt)}</p>
          ${p.body.map((s, i) => `<h2>${T(s.h)}</h2><p>${T(s.p)}</p>` + (i === 0 && p.fig ? `<figure class="article-fig">${p.fig}${p.figCaption ? `<figcaption>${T(p.figCaption)}</figcaption>` : ""}</figure>` : "")).join("")}
          ${p.ref ? `<p class="article-ref"><b>${IS_VI() ? "Nguồn tham khảo" : "Reference"}:</b> ${esc(p.ref)}</p>` : ""}
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
