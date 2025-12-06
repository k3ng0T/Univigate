/**
 * Единая база данных казахстанских университетов
 * Используется для: AI Searcher, Compare, Страницы университетов
 */

const UNIVERSITIES = {
    "NU": {
        id: "NU",
        name: "Nazarbayev University",
        nameRu: "Назарбаев Университет",
        shortName: "NU",
        logo: "images/universities/nu.png",
        
        // Основная информация
        info: {
            description: "Nazarbayev University — автономный исследовательский университет мирового класса, работающий по модели американских исследовательских университетов. Обучение ведётся исключительно на английском языке.",
            type: "Автономный",
            founded: 2010,
            students: 6000,
            location: {
                city: "Астана",
                address: "Kabanbay Batyr Ave 53",
                coordinates: { lat: 51.0906, lng: 71.3984 }
            },
            website: "https://nu.edu.kz",
            email: "admissions@nu.edu.kz",
            phone: "+7 7172 70 6000"
        },

        // Требования для поступления (AI Searcher)
        requirements: {
            ielts: { min: 6.5, grant: 7.0 },
            toefl: { min: 79, grant: 90 },
            sat: { min: 1200, grant: 1350 },
            ent: null, // ЕНТ не требуется
            gpa: { min: 3.5, grant: 4.0 },
            entRequired: false,
            entNote: "ЕНТ не требуется. Приём на основе SAT/ACT."
        },

        // Рейтинги
        rankings: {
            qsWorld: 207,
            qsAsia: 50,
            national: 1,
            qsSubjects: {
                engineering: 250,
                business: 300
            }
        },

        // Аккредитации
        accreditations: [
            "ABET (инженерные программы)",
            "AACSB (бизнес-школа)",
            "Партнёрства с Cambridge, Duke, UPenn, Wisconsin"
        ],

        // Сильные стороны
        strengths: [
            "Полные стипендии для всех студентов бакалавриата",
            "Обучение на английском языке",
            "Международный преподавательский состав из топ-университетов",
            "Современный кампус мирового уровня",
            "Сильные исследовательские программы",
            "Высокий уровень трудоустройства (95%+)"
        ],

        // Стипендии и международные возможности
        scholarships: {
            types: [
                "Full Scholarship (100% — обучение, проживание, стипендия)",
                "Все принятые студенты бакалавриата получают полную стипендию"
            ],
            international: [
                "Семестровые обмены в США, Европе, Азии",
                "Летние школы и стажировки",
                "Двойные дипломы с партнёрскими университетами"
            ]
        },

        // Факультеты/Школы
        faculties: {
            "School of Engineering and Digital Sciences": {
                programs: ["Computer Science", "Electrical Engineering", "Civil Engineering", "Chemical Engineering", "Mechanical Engineering", "Robotics"],
                entThreshold: null
            },
            "School of Sciences and Humanities": {
                programs: ["Biology", "Chemistry", "Physics", "Mathematics", "Economics", "Political Science", "History"],
                entThreshold: null
            },
            "School of Medicine": {
                programs: ["General Medicine (MD)", "Nursing", "Public Health"],
                entThreshold: null
            },
            "Graduate School of Business": {
                programs: ["MBA", "Executive MBA", "Finance", "Management"],
                entThreshold: null
            },
            "School of Mining and Geosciences": {
                programs: ["Mining Engineering", "Petroleum Engineering", "Geology"],
                entThreshold: null
            }
        },

        // Программы по степеням
        programs: {
            bachelor: [
                "Computer Science", "Electrical and Computer Engineering", "Civil Engineering",
                "Chemical Engineering", "Mechanical Engineering", "Robotics",
                "Biology", "Chemistry", "Physics", "Mathematics",
                "Economics", "Political Science", "History", "Sociology",
                "Law (LLB)"
            ],
            master: [
                "Computer Science", "Data Science", "Engineering",
                "MBA", "Finance", "Public Policy", "Law (LLM)",
                "Educational Leadership", "Medicine"
            ],
            doctorate: [
                "Computer Science", "Engineering", "Physics", "Chemistry",
                "Economics", "Public Policy", "Medicine (MD)"
            ]
        },

        // Баллы ЕНТ (не применимо для NU)
        entScores: null,

        // Направления для фильтра сравнения
        directions: ["it", "engineering", "medicine", "economics", "law", "math-physics", "chemistry-biology"]
    },

    "KBTU": {
        id: "KBTU",
        name: "Kazakh-British Technical University",
        nameRu: "Казахстанско-Британский технический университет",
        shortName: "КБТУ",
        logo: "images/universities/kbtu.png",

        info: {
            description: "КБТУ — ведущий технический университет Казахстана, созданный совместно с British Council. Один из топовых вузов в области IT и нефтегазовой инженерии.",
            type: "Частный",
            founded: 2001,
            students: 5000,
            location: {
                city: "Алматы",
                address: "ул. Толе би, 59",
                coordinates: { lat: 43.2389, lng: 76.9453 }
            },
            website: "https://kbtu.edu.kz",
            email: "admission@kbtu.kz",
            phone: "+7 727 272 5888"
        },

        requirements: {
            ielts: { min: 5.5, grant: 6.5 },
            toefl: { min: 55, grant: 79 },
            sat: { min: 1100, grant: 1250 },
            ent: { min: 50, grant: 115 },
            gpa: { min: 2.8, grant: 3.5 },
            entRequired: true,
            entNote: "Принимается ЕНТ или внутренний экзамен"
        },

        rankings: {
            qsWorld: null,
            qsAsia: 225,
            national: 5
        },

        accreditations: [
            "ABET (инженерные программы)",
            "FIBAA (бизнес-программы)",
            "Партнёрства с британскими университетами",
            "IQAA"
        ],

        strengths: [
            "Сильные IT-программы",
            "Партнёрство с британскими университетами",
            "Преподавание на английском языке",
            "Высокий уровень трудоустройства в IT и нефтегазе",
            "Международные аккредитации ABET и FIBAA"
        ],

        scholarships: {
            types: [
                "Государственные гранты",
                "Гранты за академическую успеваемость",
                "Стипендии от компаний-партнёров"
            ],
            international: [
                "Обмены с британскими и европейскими университетами",
                "Двойные дипломы",
                "Летние школы"
            ]
        },

        faculties: {
            "Факультет информационных технологий": {
                programs: ["Computer Science", "Software Engineering", "Information Systems", "Cybersecurity", "Data Science", "AI"],
                entThreshold: { min: 50, grant: 118 }
            },
            "Факультет энергетики и нефтегазовой индустрии": {
                programs: ["Petroleum Engineering", "Chemical Engineering", "Power Engineering"],
                entThreshold: { min: 50, grant: 108 }
            },
            "Бизнес-школа": {
                programs: ["Finance", "Management", "Marketing", "Economics"],
                entThreshold: { min: 50, grant: 105 }
            },
            "Школа права": {
                programs: ["Jurisprudence", "International Law"],
                entThreshold: { min: 50, grant: 110 }
            }
        },

        programs: {
            bachelor: [
                "Computer Science", "Software Engineering", "Information Systems",
                "Cybersecurity", "Data Science", "AI",
                "Petroleum Engineering", "Chemical Engineering",
                "Finance", "Management", "Economics", "Law"
            ],
            master: [
                "Computer Science", "Software Engineering", "Data Science",
                "Petroleum Engineering", "MBA", "Finance", "Law"
            ],
            doctorate: [
                "Computer Science", "Petroleum Engineering", "Physics", "Economics"
            ]
        },

        entScores: {
            "Computer Science": { threshold: 50, grant: 120 },
            "Software Engineering": { threshold: 50, grant: 118 },
            "Information Systems": { threshold: 50, grant: 115 },
            "Cybersecurity": { threshold: 50, grant: 118 },
            "Data Science": { threshold: 50, grant: 120 },
            "Petroleum Engineering": { threshold: 50, grant: 110 },
            "Finance": { threshold: 50, grant: 108 },
            "Economics": { threshold: 50, grant: 102 }
        },

        directions: ["it", "software", "cybersecurity", "data-science", "petroleum", "finance", "law"]
    },

    "KazNU": {
        id: "KazNU",
        name: "Al-Farabi Kazakh National University",
        nameRu: "КазНУ им. аль-Фараби",
        shortName: "КазНУ",
        logo: "images/universities/kaznu.png",

        info: {
            description: "КазНУ — крупнейший и старейший университет Казахстана. Входит в топ-200 QS World University Rankings. Предлагает широкий спектр программ.",
            type: "Государственный",
            founded: 1934,
            students: 20000,
            location: {
                city: "Алматы",
                address: "пр. аль-Фараби, 71",
                coordinates: { lat: 43.2183, lng: 76.8686 }
            },
            website: "https://kaznu.kz",
            email: "admission@kaznu.kz",
            phone: "+7 727 377 3333"
        },

        requirements: {
            ielts: { min: 5.5, grant: 6.0 },
            toefl: { min: 60, grant: 79 },
            sat: null,
            ent: { min: 50, grant: 100 },
            gpa: { min: 3.0, grant: 3.5 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: {
            qsWorld: 150,
            qsAsia: 30,
            national: 2
        },

        accreditations: [
            "IQAA",
            "ABET", "FIBAA", "ACQUIN",
            "Членство в EUA (European University Association)",
            "ASIIN"
        ],

        strengths: [
            "Топ-200 QS World University Rankings",
            "Крупнейший университет Казахстана",
            "Широкий выбор специальностей (100+)",
            "Богатая история и традиции",
            "Государственные гранты",
            "Развитая инфраструктура"
        ],

        scholarships: {
            types: [
                "Государственные гранты",
                "Именные стипендии",
                "Стипендия Президента РК"
            ],
            international: [
                "Erasmus+",
                "Обмены с университетами Европы, Азии, США",
                "Летние школы",
                "Двойные дипломы"
            ]
        },

        faculties: {
            "Факультет информационных технологий": {
                programs: ["Computer Science", "Information Systems", "Cybersecurity", "Data Science", "AI"],
                entThreshold: { min: 50, grant: 115 }
            },
            "Юридический факультет": {
                programs: ["Юриспруденция", "Международное право"],
                entThreshold: { min: 50, grant: 118 }
            },
            "Медицинский факультет": {
                programs: ["Общая медицина", "Стоматология", "Фармация"],
                entThreshold: { min: 70, grant: 128 }
            },
            "Экономический факультет": {
                programs: ["Экономика", "Финансы", "Менеджмент", "Маркетинг"],
                entThreshold: { min: 50, grant: 105 }
            },
            "Биологический факультет": {
                programs: ["Биология", "Биотехнология", "Экология", "Генетика"],
                entThreshold: { min: 50, grant: 95 }
            },
            "Химический факультет": {
                programs: ["Химия", "Химическая технология"],
                entThreshold: { min: 50, grant: 92 }
            },
            "Физико-технический факультет": {
                programs: ["Физика", "Ядерная физика", "Нанотехнологии"],
                entThreshold: { min: 50, grant: 95 }
            }
        },

        programs: {
            bachelor: [
                "Computer Science", "Information Systems", "Cybersecurity",
                "Математика", "Физика", "Химия", "Биология",
                "Юриспруденция", "Экономика", "Менеджмент",
                "Медицина", "Журналистика", "История"
            ],
            master: [
                "Computer Science", "Data Science", "Юриспруденция",
                "Экономика", "MBA", "Медицина", "Физика"
            ],
            doctorate: [
                "Computer Science", "Физика", "Химия", "Биология",
                "Юриспруденция", "Экономика"
            ]
        },

        entScores: {
            "Информатика": { threshold: 50, grant: 115 },
            "Юриспруденция": { threshold: 50, grant: 118 },
            "Международные отношения": { threshold: 50, grant: 120 },
            "Медицина": { threshold: 70, grant: 128 },
            "Экономика": { threshold: 50, grant: 105 },
            "Физика": { threshold: 50, grant: 95 },
            "Химия": { threshold: 50, grant: 92 },
            "Биология": { threshold: 50, grant: 95 },
            "Математика": { threshold: 50, grant: 100 }
        },

        directions: ["it", "law", "medicine", "economics", "math-physics", "chemistry-biology", "journalism"]
    },

    "KIMEP": {
        id: "KIMEP",
        name: "KIMEP University",
        nameRu: "Университет КИМЭП",
        shortName: "КИМЭП",
        logo: "images/universities/kimep.png",

        info: {
            description: "KIMEP — старейший частный университет в Центральной Азии, работающий по североамериканской модели. Лидер в бизнес-образовании.",
            type: "Частный",
            founded: 1992,
            students: 3000,
            location: {
                city: "Алматы",
                address: "пр. Абая, 4",
                coordinates: { lat: 43.2400, lng: 76.9200 }
            },
            website: "https://kimep.kz",
            email: "admissions@kimep.kz",
            phone: "+7 727 270 4440"
        },

        requirements: {
            ielts: { min: 5.5, grant: 6.5 },
            toefl: { min: 50, grant: 79 },
            sat: { min: 1000, grant: 1200 },
            ent: { min: 50, grant: 100 },
            gpa: { min: 2.5, grant: 3.5 },
            entRequired: false,
            entNote: "ЕНТ принимается, основной отбор через SAT и внутренние экзамены"
        },

        rankings: {
            qsWorld: null,
            qsAsia: null,
            national: 8
        },

        accreditations: [
            "AACSB (Association to Advance Collegiate Schools of Business)",
            "ACBSP",
            "EFMD",
            "IQAA"
        ],

        strengths: [
            "Обучение на английском языке",
            "Международный преподавательский состав",
            "Крупнейшая англоязычная библиотека в ЦА",
            "96% выпускников трудоустроены",
            "Аккредитации AACSB и EFMD"
        ],

        scholarships: {
            types: [
                "Грант Бiлiм (100% и 50%)",
                "Гранты за академические достижения",
                "Need-based scholarships"
            ],
            international: [
                "Партнёрства с 95+ университетами мира",
                "Программы обмена в США, Европе, Азии",
                "Двойные дипломы"
            ]
        },

        faculties: {
            "Bang College of Business": {
                programs: ["Бизнес-администрирование", "Финансы", "Маркетинг", "Менеджмент"],
                entThreshold: { min: 50, grant: 105 }
            },
            "College of Social Sciences": {
                programs: ["Международные отношения", "Журналистика", "Экономика", "Политология"],
                entThreshold: { min: 50, grant: 110 }
            },
            "School of Law": {
                programs: ["Юриспруденция", "Международное право"],
                entThreshold: { min: 50, grant: 115 }
            }
        },

        programs: {
            bachelor: [
                "Бизнес-администрирование", "Финансы", "Маркетинг", "Менеджмент",
                "Международные отношения", "Журналистика", "Экономика",
                "Юриспруденция", "Переводческое дело"
            ],
            master: [
                "MBA", "Executive MBA", "Finance", "Economics",
                "Public Administration", "International Relations", "Law (LLM)"
            ],
            doctorate: [
                "DBA", "PhD in Business Administration", "PhD in Economics"
            ]
        },

        entScores: {
            "Финансы": { threshold: 50, grant: 110 },
            "Менеджмент": { threshold: 50, grant: 105 },
            "Маркетинг": { threshold: 50, grant: 102 },
            "Международные отношения": { threshold: 50, grant: 115 },
            "Юриспруденция": { threshold: 50, grant: 118 }
        },

        directions: ["finance", "management", "marketing", "international", "law", "journalism"]
    },

    "AstanaIT": {
        id: "AstanaIT",
        name: "Astana IT University",
        nameRu: "Astana IT University",
        shortName: "AITU",
        logo: "images/universities/aitu.png",

        info: {
            description: "AITU — специализированный IT-университет нового поколения. Центр цифровых инноваций и технологического предпринимательства.",
            type: "Частный",
            founded: 2017,
            students: 2500,
            location: {
                city: "Астана",
                address: "ул. Мангилик Ел, 55/11",
                coordinates: { lat: 51.0890, lng: 71.4180 }
            },
            website: "https://astanait.edu.kz",
            email: "admission@astanait.edu.kz",
            phone: "+7 7172 645 710"
        },

        requirements: {
            ielts: { min: 5.5, grant: 6.5 },
            toefl: { min: 55, grant: 79 },
            sat: { min: 1100, grant: 1250 },
            ent: { min: 50, grant: 115 },
            gpa: { min: 3.0, grant: 3.7 },
            entRequired: true,
            entNote: "Требуется ЕНТ и тест по английскому"
        },

        rankings: {
            qsWorld: null,
            qsAsia: null,
            national: 10
        },

        accreditations: [
            "IQAA",
            "Партнёрства с Microsoft, Cisco, AWS",
            "Государственная лицензия МОН РК"
        ],

        strengths: [
            "Специализация на IT",
            "Партнёрства с Microsoft, Cisco, AWS, Google",
            "Преподавание на английском языке",
            "Инкубатор стартапов и технопарк",
            "Практико-ориентированное обучение"
        ],

        scholarships: {
            types: [
                "Государственные гранты",
                "Внутренние стипендии для отличников",
                "Стипендии от IT-компаний партнёров"
            ],
            international: [
                "Партнёрства с IT-компаниями",
                "Обмены с зарубежными IT-университетами",
                "Стажировки в международных компаниях"
            ]
        },

        faculties: {
            "School of Information Technology": {
                programs: ["Computer Science", "Software Engineering", "Cybersecurity", "Data Science", "AI", "Blockchain"],
                entThreshold: { min: 50, grant: 118 }
            },
            "School of Digital Technologies": {
                programs: ["Digital Marketing", "IT Management", "UX/UI Design"],
                entThreshold: { min: 50, grant: 105 }
            }
        },

        programs: {
            bachelor: [
                "Computer Science", "Software Engineering", "Cybersecurity",
                "Data Science", "AI", "Machine Learning", "Blockchain",
                "Digital Marketing", "IT Management", "Game Development"
            ],
            master: [
                "Computer Science", "Software Engineering", "Data Science",
                "Cybersecurity", "AI", "IT Management"
            ],
            doctorate: [
                "Computer Science", "Information Systems", "Cybersecurity"
            ]
        },

        entScores: {
            "Computer Science": { threshold: 50, grant: 120 },
            "Software Engineering": { threshold: 50, grant: 118 },
            "Cybersecurity": { threshold: 50, grant: 115 },
            "Data Science": { threshold: 50, grant: 122 },
            "AI": { threshold: 50, grant: 125 },
            "IT Management": { threshold: 50, grant: 105 }
        },

        directions: ["it", "software", "cybersecurity", "data-science"]
    },

    "MUIT": {
        id: "MUIT",
        name: "International IT University",
        nameRu: "МУИТ (IITU)",
        shortName: "МУИТ",
        logo: "images/universities/muit.png",

        info: {
            description: "МУИТ — ведущий IT-университет Казахстана в Алматы. Специализируется на IT, телекоммуникациях и цифровых медиа.",
            type: "Частный",
            founded: 2009,
            students: 4000,
            location: {
                city: "Алматы",
                address: "ул. Манаса, 34А",
                coordinates: { lat: 43.2567, lng: 76.9286 }
            },
            website: "https://iitu.edu.kz",
            email: "admission@iitu.edu.kz",
            phone: "+7 727 330 8600"
        },

        requirements: {
            ielts: { min: 5.0, grant: 6.0 },
            toefl: { min: 45, grant: 70 },
            sat: null,
            ent: { min: 50, grant: 110 },
            gpa: { min: 2.3, grant: 3.2 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: {
            qsWorld: null,
            qsAsia: null,
            national: 15
        },

        accreditations: [
            "IQAA",
            "Партнёрства с Cisco, Microsoft, Oracle"
        ],

        strengths: [
            "Специализация на IT и телекоммуникациях",
            "Партнёрства с Cisco, Microsoft, Oracle",
            "Программы Game Development и Digital Media",
            "Современные лаборатории"
        ],

        scholarships: {
            types: [
                "Государственные гранты",
                "Внутренние стипендии",
                "Стипендии от IT-компаний"
            ],
            international: [
                "Партнёрства с IT-компаниями",
                "Обмены с зарубежными IT-вузами",
                "Стажировки в технологических компаниях"
            ]
        },

        faculties: {
            "Факультет информационных технологий": {
                programs: ["Computer Science", "Software Engineering", "Cybersecurity", "Data Science", "Game Development"],
                entThreshold: { min: 50, grant: 115 }
            },
            "Факультет телекоммуникаций": {
                programs: ["Telecommunications", "Network Technologies", "IoT"],
                entThreshold: { min: 50, grant: 105 }
            },
            "Факультет цифровых медиа": {
                programs: ["Digital Media", "Graphic Design", "Animation", "Game Design"],
                entThreshold: { min: 50, grant: 95 }
            }
        },

        programs: {
            bachelor: [
                "Computer Science", "Software Engineering", "Cybersecurity",
                "Data Science", "Game Development", "Telecommunications",
                "Digital Media", "Graphic Design", "Animation"
            ],
            master: [
                "Computer Science", "Software Engineering", "Cybersecurity",
                "Data Science", "AI", "Telecommunications"
            ],
            doctorate: [
                "Computer Science", "Information Systems", "Telecommunications"
            ]
        },

        entScores: {
            "Computer Science": { threshold: 50, grant: 115 },
            "Software Engineering": { threshold: 50, grant: 113 },
            "Cybersecurity": { threshold: 50, grant: 112 },
            "Game Development": { threshold: 50, grant: 105 },
            "Data Science": { threshold: 50, grant: 118 },
            "Graphic Design": { threshold: 50, grant: 95 }
        },

        directions: ["it", "software", "cybersecurity", "data-science"]
    },

    "Satbayev": {
        id: "Satbayev",
        name: "Satbayev University",
        nameRu: "Университет Сатпаева",
        shortName: "Satbayev",
        logo: "images/universities/satbayev.png",

        info: {
            description: "Satbayev University — ведущий технический университет Казахстана. Топ-500 QS. Специализируется на инженерии, горном деле, нефтегазе.",
            type: "Государственный",
            founded: 1934,
            students: 15000,
            location: {
                city: "Алматы",
                address: "ул. Сатпаева, 22а",
                coordinates: { lat: 43.2311, lng: 76.9454 }
            },
            website: "https://satbayev.university",
            email: "admission@satbayev.university",
            phone: "+7 727 292 6125"
        },

        requirements: {
            ielts: { min: 5.0, grant: 5.5 },
            toefl: { min: 45, grant: 60 },
            sat: null,
            ent: { min: 50, grant: 95 },
            gpa: { min: 2.5, grant: 3.2 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: {
            qsWorld: 480,
            qsAsia: 100,
            national: 3
        },

        accreditations: [
            "IQAA",
            "ASIIN (инженерные программы)",
            "Членство в EUA",
            "Партнёрства с добывающими компаниями"
        ],

        strengths: [
            "Топ-500 QS World University Rankings",
            "Лидер в инженерном и горном образовании",
            "Партнёрства с добывающими компаниями",
            "Богатая история (90+ лет)",
            "Современные лаборатории"
        ],

        scholarships: {
            types: [
                "Государственные гранты",
                "Научные гранты",
                "Стипендии от добывающих компаний"
            ],
            international: [
                "Erasmus+",
                "Партнёрства с техническими университетами мира",
                "Стажировки в добывающих компаниях"
            ]
        },

        faculties: {
            "Институт геологии и нефтегазового дела": {
                programs: ["Геология", "Нефтегазовое дело", "Геофизика"],
                entThreshold: { min: 50, grant: 105 }
            },
            "Институт горного дела": {
                programs: ["Горное дело", "Обогащение полезных ископаемых"],
                entThreshold: { min: 50, grant: 95 }
            },
            "Институт информационных технологий": {
                programs: ["Computer Science", "Cybersecurity", "Data Science"],
                entThreshold: { min: 50, grant: 115 }
            },
            "Институт энергетики": {
                programs: ["Энергетика", "Электроэнергетика", "Возобновляемая энергетика"],
                entThreshold: { min: 50, grant: 98 }
            }
        },

        programs: {
            bachelor: [
                "Геология", "Нефтегазовое дело", "Горное дело",
                "Computer Science", "Cybersecurity", "Архитектура",
                "Строительство", "Энергетика", "Металлургия"
            ],
            master: [
                "Геология", "Нефтегазовое дело", "Computer Science",
                "Энергетика", "Архитектура", "Горное дело"
            ],
            doctorate: [
                "Геология", "Нефтегазовое дело", "Computer Science",
                "Горное дело", "Металлургия"
            ]
        },

        entScores: {
            "Computer Science": { threshold: 50, grant: 115 },
            "Нефтегазовое дело": { threshold: 50, grant: 108 },
            "Горное дело": { threshold: 50, grant: 95 },
            "Геология": { threshold: 50, grant: 92 },
            "Архитектура": { threshold: 50, grant: 100 },
            "Энергетика": { threshold: 50, grant: 98 }
        },

        directions: ["it", "petroleum", "mining", "energy", "architecture"]
    },

    "SDU": {
        id: "SDU",
        name: "Suleyman Demirel University",
        nameRu: "СДУ",
        shortName: "SDU",
        logo: "images/universities/sdu.png",

        info: {
            description: "SDU — международный частный университет с широким выбором программ (125+ бакалавриат). Известен академическим разнообразием.",
            type: "Частный",
            founded: 1996,
            students: 7000,
            location: {
                city: "Каскелен",
                address: "ул. Абылай хана, 1/1",
                coordinates: { lat: 43.2023, lng: 76.6314 }
            },
            website: "https://sdu.edu.kz",
            email: "admission@sdu.edu.kz",
            phone: "+7 727 307 9500"
        },

        requirements: {
            ielts: { min: 5.0, grant: 6.0 },
            toefl: { min: 45, grant: 70 },
            sat: { min: 1000, grant: 1150 },
            ent: { min: 50, grant: 100 },
            gpa: { min: 2.5, grant: 3.3 },
            entRequired: true,
            entNote: "Принимается ЕНТ или SAT"
        },

        rankings: {
            qsWorld: null,
            qsAsia: 542,
            national: 13
        },

        accreditations: [
            "10 национальных аккредитаций",
            "10 международных аккредитаций"
        ],

        strengths: [
            "125+ программ бакалавриата",
            "Erasmus+ и программы обмена",
            "Современный кампус",
            "Поддержка карьерного роста",
            "Разнообразие студенческих клубов"
        ],

        scholarships: {
            types: [
                "Государственные гранты",
                "Внутренние стипендии",
                "Гранты для победителей олимпиад"
            ],
            international: [
                "Erasmus+",
                "Mevlana",
                "Обучение в вузах-партнёрах"
            ]
        },

        faculties: {
            "Инженерия и естественные науки": {
                programs: ["Computer Science", "Информационные системы", "Химическая инженерия", "Биология"],
                entThreshold: { min: 50, grant: 115 }
            },
            "Бизнес и управление": {
                programs: ["Бизнес-администрирование", "Экономика", "Менеджмент", "Маркетинг"],
                entThreshold: { min: 50, grant: 105 }
            },
            "Медицина и здравоохранение": {
                programs: ["Медицина", "Стоматология", "Фармация"],
                entThreshold: { min: 70, grant: 128 }
            },
            "Право": {
                programs: ["Юриспруденция", "Международное право"],
                entThreshold: { min: 50, grant: 118 }
            }
        },

        programs: {
            bachelor: [
                "Computer Science", "Информационные системы", "Data Science",
                "Экономика", "Менеджмент", "Юриспруденция",
                "Медицина", "Стоматология", "Педагогика"
            ],
            master: [
                "Computer Science", "Data Science", "Экономика",
                "MBA", "Юриспруденция", "Медицина"
            ],
            doctorate: [
                "Computer Science", "Экономика", "Медицина", "Педагогика"
            ]
        },

        entScores: {
            "Информатика": { threshold: 50, grant: 118 },
            "Медицина": { threshold: 70, grant: 130 },
            "Юриспруденция": { threshold: 50, grant: 118 },
            "Экономика": { threshold: 50, grant: 105 },
            "Финансы": { threshold: 50, grant: 110 }
        },

        directions: ["it", "medicine", "law", "economics", "pedagogy"]
    },

    "Narxoz": {
        id: "Narxoz",
        name: "Narxoz University",
        nameRu: "Университет Нархоз",
        shortName: "Нархоз",
        logo: "images/universities/narxoz.png",

        info: {
            description: "Нархоз — ведущий экономический университет Казахстана. Один из старейших экономических вузов страны.",
            type: "Частный",
            founded: 1963,
            students: 5000,
            location: {
                city: "Алматы",
                address: "ул. Жандосова, 55",
                coordinates: { lat: 43.2100, lng: 76.8500 }
            },
            website: "https://narxoz.edu.kz",
            email: "admission@narxoz.edu.kz",
            phone: "+7 727 377 1111"
        },

        requirements: {
            ielts: { min: 5.0, grant: 6.0 },
            toefl: { min: 45, grant: 70 },
            sat: null,
            ent: { min: 50, grant: 100 },
            gpa: { min: 2.5, grant: 3.3 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: {
            qsWorld: null,
            qsAsia: null,
            national: 18
        },

        accreditations: [
            "IQAA",
            "FIBAA",
            "EFMD",
            "ACBSP"
        ],

        strengths: [
            "Лидер в экономическом образовании",
            "Связи с бизнес-сообществом",
            "Международные аккредитации FIBAA и ACBSP",
            "Практико-ориентированное обучение",
            "Современный кампус"
        ],

        scholarships: {
            types: [
                "Государственные гранты",
                "Внутренние стипендии",
                "Гранты партнёров"
            ],
            international: [
                "Erasmus+",
                "Партнёрства с европейскими вузами",
                "Двойные дипломы"
            ]
        },

        faculties: {
            "Школа экономики и менеджмента": {
                programs: ["Экономика", "Менеджмент", "Маркетинг", "Логистика"],
                entThreshold: { min: 50, grant: 102 }
            },
            "Школа финансов и учёта": {
                programs: ["Финансы", "Учёт и аудит", "Банковское дело"],
                entThreshold: { min: 50, grant: 108 }
            },
            "Школа права": {
                programs: ["Юриспруденция"],
                entThreshold: { min: 50, grant: 115 }
            },
            "Школа цифровых технологий": {
                programs: ["IT-менеджмент", "Бизнес-аналитика", "Digital Marketing"],
                entThreshold: { min: 50, grant: 108 }
            }
        },

        programs: {
            bachelor: [
                "Экономика", "Менеджмент", "Маркетинг", "Финансы",
                "Учёт и аудит", "Юриспруденция", "IT-менеджмент",
                "Журналистика", "Психология"
            ],
            master: [
                "MBA", "Executive MBA", "Финансы", "Экономика",
                "Юриспруденция", "Digital Marketing"
            ],
            doctorate: [
                "Экономика", "Финансы", "Менеджмент", "Юриспруденция"
            ]
        },

        entScores: {
            "Экономика": { threshold: 50, grant: 105 },
            "Финансы": { threshold: 50, grant: 110 },
            "Менеджмент": { threshold: 50, grant: 100 },
            "Юриспруденция": { threshold: 50, grant: 115 },
            "Маркетинг": { threshold: 50, grant: 98 },
            "IT-менеджмент": { threshold: 50, grant: 108 }
        },

        directions: ["economics", "finance", "management", "marketing", "law"]
    },

    "DMUK": {
        id: "DMUK",
        name: "De Montfort University Kazakhstan",
        nameRu: "DMU Kazakhstan",
        shortName: "DMUK",
        logo: "images/universities/dmuk.png",

        info: {
            description: "DMUK — первый британский университет в Казахстане. Студенты получают британский диплом, признанный в 196 странах.",
            type: "Частный",
            founded: 2021,
            students: 500,
            location: {
                city: "Алматы",
                address: "Esentai City",
                coordinates: { lat: 43.2200, lng: 76.9300 }
            },
            website: "https://dmuk.edu.kz",
            email: "admissions@dmuk.edu.kz",
            phone: "+7 727 311 0101"
        },

        requirements: {
            ielts: { min: 6.0, grant: 6.5 },
            toefl: { min: 70, grant: 85 },
            sat: null,
            ent: null,
            gpa: { min: 3.0, grant: 3.5 },
            entRequired: false,
            entNote: "ЕНТ не требуется. Приём на основе IELTS и собеседования."
        },

        rankings: {
            qsWorld: 715,
            qsAsia: null,
            national: null
        },

        accreditations: [
            "QAA UK (Quality Assurance Agency)",
            "Британский диплом De Montfort University",
            "Признание в 196 странах"
        ],

        strengths: [
            "Британский диплом",
            "95% преподавателей — иностранцы",
            "Кампус в стиле Google/Amazon",
            "Обучение в международных кампусах (Лестер, Дубай)",
            "100% на английском языке"
        ],

        scholarships: {
            types: [
                "Global Gateway Scholarship (32%)",
                "Частичный грант 4000 USD",
                "Academic Excellence"
            ],
            international: [
                "Обучение в кампусах DMU в Лестере, Дубае",
                "Образовательные поездки в Японию, Корею, Грузию"
            ]
        },

        faculties: {
            "Business Faculty": {
                programs: ["Business Management", "Finance", "Marketing", "Economics"],
                entThreshold: null
            },
            "IT Faculty": {
                programs: ["Computer Science", "Cybersecurity", "AI", "Data Analytics"],
                entThreshold: null
            },
            "Design Faculty": {
                programs: ["Graphic Design", "Fashion Design", "Interior Design"],
                entThreshold: null
            }
        },

        programs: {
            bachelor: [
                "Computer Science", "Cybersecurity", "AI",
                "Business Management", "Finance", "Marketing",
                "Graphic Design", "Fashion Design"
            ],
            master: [
                "MBA", "Finance", "Marketing Management",
                "Cybersecurity", "Data Analytics", "AI"
            ],
            doctorate: []
        },

        entScores: null,

        directions: ["it", "cybersecurity", "finance", "management", "marketing"]
    },

    "MNU": {
        id: "MNU",
        name: "M. Narikbayev University (KAZGUU)",
        nameRu: "Университет Нарикбаева (КАЗГЮУ)",
        shortName: "MNU",
        logo: "images/universities/mnu.png",

        info: {
            description: "MNU (бывший КАЗГЮУ) — ведущий юридический университет Казахстана. Специализируется на праве, бизнесе и государственном управлении.",
            type: "Частный",
            founded: 1994,
            students: 3500,
            location: {
                city: "Астана",
                address: "ул. Коргалжын, 8",
                coordinates: { lat: 51.1280, lng: 71.4300 }
            },
            website: "https://mnu.edu.kz",
            email: "admission@mnu.edu.kz",
            phone: "+7 7172 70 2020"
        },

        requirements: {
            ielts: { min: 5.5, grant: 6.0 },
            toefl: { min: 55, grant: 79 },
            sat: null,
            ent: { min: 50, grant: 115 },
            gpa: { min: 2.8, grant: 3.5 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: {
            qsWorld: null,
            qsAsia: null,
            national: 12
        },

        accreditations: [
            "IQAA",
            "FIBAA",
            "EFMD",
            "Партнёр IBA (International Bar Association)"
        ],

        strengths: [
            "Лидер в юридическом образовании",
            "Международные аккредитации",
            "Связи с юридическим сообществом",
            "Сильная программа MBA",
            "Юридическая клиника для студентов"
        ],

        scholarships: {
            types: [
                "Государственные гранты",
                "Внутренние стипендии",
                "Социальные гранты"
            ],
            international: [
                "Партнёрства с юридическими школами Европы и США",
                "Программы обмена",
                "Совместные программы"
            ]
        },

        faculties: {
            "Школа права": {
                programs: ["Юриспруденция", "Международное право", "Корпоративное право", "IT право"],
                entThreshold: { min: 50, grant: 118 }
            },
            "Бизнес-школа": {
                programs: ["MBA", "Менеджмент", "Финансы", "Маркетинг"],
                entThreshold: { min: 50, grant: 105 }
            },
            "Школа государственного управления": {
                programs: ["Государственное управление", "Политология", "Международные отношения"],
                entThreshold: { min: 50, grant: 108 }
            }
        },

        programs: {
            bachelor: [
                "Юриспруденция", "Международное право", "Корпоративное право",
                "Менеджмент", "Финансы", "Государственное управление",
                "Политология", "IT право"
            ],
            master: [
                "Юриспруденция (LLM)", "Международное право", "MBA",
                "Executive MBA", "Государственное управление"
            ],
            doctorate: [
                "Юриспруденция", "Экономика", "Государственное управление"
            ]
        },

        entScores: {
            "Юриспруденция": { threshold: 50, grant: 118 },
            "Международное право": { threshold: 50, grant: 120 },
            "Государственное управление": { threshold: 50, grant: 105 },
            "Финансы": { threshold: 50, grant: 108 },
            "Менеджмент": { threshold: 50, grant: 100 }
        },

        directions: ["law", "international", "management", "finance"]
    },

    "ATU": {
        id: "ATU",
        name: "Almaty Technological University",
        nameRu: "Алматинский технологический университет",
        shortName: "АТУ",
        logo: "images/universities/atu.png",

        info: {
            description: "АТУ — технический университет, специализирующийся на пищевых технологиях, лёгкой промышленности и инженерии.",
            type: "Частный",
            founded: 1957,
            students: 4000,
            location: {
                city: "Алматы",
                address: "ул. Толе би, 100",
                coordinates: { lat: 43.2400, lng: 76.9100 }
            },
            website: "https://atu.edu.kz",
            email: "admission@atu.edu.kz",
            phone: "+7 727 293 5262"
        },

        requirements: {
            ielts: { min: 4.5, grant: 5.5 },
            toefl: { min: 40, grant: 55 },
            sat: null,
            ent: { min: 50, grant: 85 },
            gpa: { min: 2.3, grant: 3.0 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: {
            qsWorld: null,
            qsAsia: null,
            national: 25
        },

        accreditations: [
            "IQAA",
            "Государственная лицензия МОН РК"
        ],

        strengths: [
            "Специализация на пищевых технологиях",
            "Практико-ориентированное обучение",
            "Собственные лаборатории и производство",
            "Сотрудничество с пищевой промышленностью"
        ],

        scholarships: {
            types: [
                "Государственные гранты",
                "Социальные стипендии"
            ],
            international: [
                "Партнёрства с университетами России, Турции, Китая"
            ]
        },

        faculties: {
            "Факультет пищевых технологий": {
                programs: ["Пищевая инженерия", "Технология продуктов питания", "Безопасность пищевых продуктов"],
                entThreshold: { min: 50, grant: 85 }
            },
            "Факультет лёгкой промышленности": {
                programs: ["Дизайн одежды", "Технология текстиля"],
                entThreshold: { min: 50, grant: 88 }
            },
            "Инженерный факультет": {
                programs: ["Автоматизация", "Машиностроение", "Мехатроника"],
                entThreshold: { min: 50, grant: 90 }
            }
        },

        programs: {
            bachelor: [
                "Пищевая инженерия", "Технология продуктов питания",
                "Дизайн одежды", "Автоматизация", "Машиностроение",
                "Экономика", "Менеджмент", "Информатика"
            ],
            master: [
                "Пищевая инженерия", "Технология продуктов питания",
                "Автоматизация", "Менеджмент"
            ],
            doctorate: [
                "Пищевая инженерия", "Биотехнология"
            ]
        },

        entScores: {
            "Пищевая инженерия": { threshold: 50, grant: 85 },
            "Дизайн одежды": { threshold: 50, grant: 88 },
            "Автоматизация и управление": { threshold: 50, grant: 90 },
            "Экономика": { threshold: 50, grant: 95 }
        },

        directions: ["engineering", "economics"]
    }
};

// Направления для фильтрации
const DIRECTIONS = {
    "it": {
        name: "IT / Информатика",
        keywords: ["computer science", "информатика", "information systems", "информационные системы", "software"]
    },
    "software": {
        name: "Программная инженерия",
        keywords: ["software engineering", "программная инженерия", "разработка"]
    },
    "cybersecurity": {
        name: "Кибербезопасность",
        keywords: ["cybersecurity", "кибербезопасность", "security", "безопасность"]
    },
    "data-science": {
        name: "Data Science / AI",
        keywords: ["data science", "artificial intelligence", "ai", "машинное обучение", "big data"]
    },
    "engineering": {
        name: "Инженерия",
        keywords: ["engineering", "инженерия", "mechanical", "машиностроение"]
    },
    "petroleum": {
        name: "Нефтегаз",
        keywords: ["petroleum", "нефтегаз", "нефть", "oil", "gas"]
    },
    "mining": {
        name: "Горное дело",
        keywords: ["mining", "горное дело", "металлургия", "геология"]
    },
    "energy": {
        name: "Энергетика",
        keywords: ["energy", "энергетика", "электроэнергетика", "power"]
    },
    "architecture": {
        name: "Архитектура / Строительство",
        keywords: ["architecture", "архитектура", "строительство", "construction"]
    },
    "math-physics": {
        name: "Математика / Физика",
        keywords: ["математика", "mathematics", "физика", "physics"]
    },
    "chemistry-biology": {
        name: "Химия / Биология",
        keywords: ["химия", "chemistry", "биология", "biology"]
    },
    "economics": {
        name: "Экономика",
        keywords: ["экономика", "economics"]
    },
    "finance": {
        name: "Финансы / Учёт",
        keywords: ["финансы", "finance", "учёт", "аудит", "accounting"]
    },
    "management": {
        name: "Менеджмент / MBA",
        keywords: ["менеджмент", "management", "mba", "бизнес"]
    },
    "marketing": {
        name: "Маркетинг",
        keywords: ["маркетинг", "marketing", "реклама"]
    },
    "law": {
        name: "Юриспруденция",
        keywords: ["юриспруденция", "law", "право", "legal"]
    },
    "international": {
        name: "Международные отношения",
        keywords: ["международные отношения", "international relations", "политология"]
    },
    "journalism": {
        name: "Журналистика / PR",
        keywords: ["журналистика", "journalism", "pr", "public relations", "media"]
    },
    "languages": {
        name: "Филология / Языки",
        keywords: ["филология", "перевод", "translation", "лингвистика", "языки"]
    },
    "psychology": {
        name: "Психология / Социология",
        keywords: ["психология", "psychology", "социология", "sociology"]
    },
    "medicine": {
        name: "Медицина",
        keywords: ["медицина", "medicine", "врач", "стоматология", "фармация"]
    },
    "pedagogy": {
        name: "Педагогика",
        keywords: ["педагогика", "pedagogy", "образование", "education"]
    }
};

// Функции-хелперы для работы с данными

/**
 * Получить список всех университетов как массив (для AI Searcher)
 */
function getUniversitiesArray() {
    return Object.values(UNIVERSITIES);
}

/**
 * Получить университет по ID
 */
function getUniversityById(id) {
    return UNIVERSITIES[id] || null;
}

/**
 * Получить университеты по направлению
 */
function getUniversitiesByDirection(direction) {
    return Object.values(UNIVERSITIES).filter(uni => 
        uni.directions && uni.directions.includes(direction)
    );
}

/**
 * Фильтрация университетов по критериям (для AI Searcher)
 */
function filterUniversities(criteria) {
    return Object.values(UNIVERSITIES).filter(uni => {
        const req = uni.requirements;
        
        // Проверка IELTS
        if (criteria.hasIelts === 'yes' && req.ielts) {
            if (criteria.ielts < req.ielts.min) return false;
        }
        
        // Проверка TOEFL
        if (criteria.hasToefl === 'yes' && req.toefl) {
            if (criteria.toefl < req.toefl.min) return false;
        }
        
        // Проверка SAT
        if (criteria.hasSat === 'yes' && req.sat) {
            if (criteria.sat < req.sat.min) return false;
        }
        
        // Проверка ЕНТ
        if (criteria.hasEnt === 'yes' && req.ent) {
            if (criteria.ent < req.ent.min) return false;
        }
        
        // Проверка GPA
        if (req.gpa && criteria.gpa < req.gpa.min) {
            return false;
        }
        
        return true;
    });
}

/**
 * Поиск программ по направлению в университете
 */
function findProgramsByDirection(university, directionKey) {
    const direction = DIRECTIONS[directionKey];
    if (!direction || !university.programs) return { bachelor: [], master: [], doctorate: [] };
    
    const keywords = direction.keywords;
    
    const filterByKeywords = (programs) => {
        if (!programs) return [];
        return programs.filter(program => 
            keywords.some(keyword => 
                program.toLowerCase().includes(keyword.toLowerCase())
            )
        );
    };
    
    return {
        bachelor: filterByKeywords(university.programs.bachelor),
        master: filterByKeywords(university.programs.master),
        doctorate: filterByKeywords(university.programs.doctorate)
    };
}

/**
 * Получить баллы ЕНТ для направления
 */
function getENTScoresForDirection(university, directionKey) {
    if (!university.entScores) {
        return {
            notRequired: !university.requirements.entRequired,
            message: university.requirements.entNote,
            scores: []
        };
    }
    
    const direction = DIRECTIONS[directionKey];
    if (!direction) return { notRequired: false, scores: [], noData: true };
    
    const scores = [];
    for (const [program, data] of Object.entries(university.entScores)) {
        if (direction.keywords.some(kw => program.toLowerCase().includes(kw.toLowerCase()))) {
            scores.push({ program, ...data });
        }
    }
    
    return {
        notRequired: false,
        scores: scores,
        noData: scores.length === 0
    };
}

// Экспорт для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { UNIVERSITIES, DIRECTIONS, getUniversitiesArray, getUniversityById, filterUniversities, findProgramsByDirection, getENTScoresForDirection };
}
