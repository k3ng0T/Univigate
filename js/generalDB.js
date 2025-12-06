/**
 * Единая база данных казахстанских университетов
 * Используется для: AI Searcher, Compare, Страницы университетов, Карта
 * Синхронизировано с map-data.js
 */

const UNIVERSITIES = {
    // ==================== АСТАНА ====================
    "NU": {
        id: "NU",
        name: "Nazarbayev University",
        nameRu: "Назарбаев Университет",
        shortName: "NU",
        logo: "images/universities/nu.png",
        
        info: {
            description: "Nazarbayev University — автономный исследовательский университет мирового класса. Обучение на английском языке. 100% грантовое обучение для всех студентов бакалавриата.",
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

        requirements: {
            ielts: { min: 6.5, grant: 7.0 },
            sat: { min: 1200, grant: 1350 },
            ent: null,
            gpa: { min: 3.5, grant: 4.0 },
            entRequired: false,
            entNote: "ЕНТ не требуется. Приём на основе внутреннего экзамена."
        },

        rankings: {
            qsWorld: 207,
            qsAsia: 41,
            national: 1
        },

        accreditations: ["ABET", "AACSB", "Партнёрства с Cambridge, Duke, UPenn"],

        strengths: [
            "100% грантовое обучение",
            "Обучение на английском",
            "Международный преподавательский состав",
            "Топ-1 в Казахстане"
        ],

        scholarships: {
            types: ["Full Scholarship (100%)"],
            international: ["Обмены в США, Европе, Азии", "Двойные дипломы"]
        },

        programs: {
            bachelor: ["Computer Science", "Engineering", "Medicine", "Business", "Law", "Economics", "Biology", "Chemistry", "Physics", "Mathematics"],
            master: ["Computer Science", "Data Science", "MBA", "Public Policy", "Law", "Medicine"],
            doctorate: ["Computer Science", "Engineering", "Physics", "Economics", "Medicine"]
        },

        entScores: null,
        directions: ["it", "engineering", "medicine", "economics", "law", "math-physics"]
    },

    "ENU": {
        id: "ENU",
        name: "L.N. Gumilyov Eurasian National University",
        nameRu: "Евразийский национальный университет им. Л.Н. Гумилёва",
        shortName: "ЕНУ",
        logo: "images/universities/enu.png",
        
        info: {
            description: "Крупнейший классический университет столицы. Входит в топ-200 QS Asia. Широкий выбор специальностей.",
            type: "Национальный",
            founded: 1996,
            students: 20000,
            location: {
                city: "Астана",
                address: "ул. Сатпаева, 2",
                coordinates: { lat: 51.1282, lng: 71.4306 }
            },
            website: "https://enu.kz",
            email: "info@enu.kz",
            phone: "+7 7172 70 9500"
        },

        requirements: {

            ent: { min: 65, grant: 95 },
            gpa: { min: 3.0, grant: 3.7 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: {
            qsWorld: null,
            qsAsia: 191,
            national: 3
        },

        accreditations: ["IQAA", "ASIIN"],

        strengths: [
            "Топ-200 QS Asia",
            "Широкий выбор специальностей",
            "Государственные гранты",
            "Международные программы обмена"
        ],

        scholarships: {
            types: ["Государственные гранты", "Именные стипендии"],
            international: ["Erasmus+", "Обмены с вузами СНГ и Европы"]
        },

        programs: {
            bachelor: ["IT", "Математика", "Физика", "Право", "Экономика", "Филология", "Международные отношения", "Химия", "Биология", "История"],
            master: ["IT", "Право", "Экономика", "Филология", "Физика"],
            doctorate: ["IT", "Право", "Экономика", "Физика"]
        },

        entScores: {
            "Информатика": { threshold: 65, grant: 95 },
            "Право": { threshold: 70, grant: 100 },
            "Экономика": { threshold: 65, grant: 90 },
            "Международные отношения": { threshold: 75, grant: 105 }
        },
        directions: ["it", "law", "economics", "languages", "math-physics"]
    },

    "AstanaIT": {
        id: "AstanaIT",
        name: "Astana IT University",
        nameRu: "Astana IT University",
        shortName: "AITU",
        logo: "images/universities/aitu.png",

        info: {
            description: "Специализированный IT-университет нового поколения. Партнёрство с Microsoft, AWS, Google.",
            type: "IT",
            founded: 2017,
            students: 2500,
            location: {
                city: "Астана",
                address: "пр. Мангилик ел, 55/11",
                coordinates: { lat: 51.0899, lng: 71.4170 }
            },
            website: "https://astanait.edu.kz",
            email: "info@astanait.edu.kz",
            phone: "+7 7172 64 5710"
        },

        requirements: {

            ent: { min: 50, grant: 115 },
            gpa: { min: 3.0, grant: 3.7 },
            entRequired: true,
            entNote: "Требуется ЕНТ и тест по английскому"
        },

        rankings: {
            qsWorld: null,
            qsAsia: null,
            national: 15
        },

        accreditations: ["IQAA", "Партнёрства с Microsoft, Cisco, AWS"],

        strengths: [
            "Специализация на IT",
            "Партнёрства с IT-гигантами",
            "Обучение на английском",
            "Технопарк и инкубатор"
        ],

        scholarships: {
            types: ["Государственные гранты", "Стипендии от IT-компаний"],
            international: ["Стажировки в международных компаниях"]
        },

        programs: {
            bachelor: ["Computer Science", "Software Engineering", "Cybersecurity", "Data Science", "AI", "Blockchain", "Game Development", "IT Management"],
            master: ["Computer Science", "Data Science", "Cybersecurity", "AI"],
            doctorate: ["Computer Science", "Cybersecurity"]
        },

        entScores: {
            "Computer Science": { threshold: 50, grant: 120 },
            "Software Engineering": { threshold: 50, grant: 118 },
            "Cybersecurity": { threshold: 50, grant: 115 },
            "Data Science": { threshold: 50, grant: 122 },
            "AI": { threshold: 50, grant: 125 }
        },
        directions: ["it", "software", "cybersecurity", "data-science"]
    },

    "AMU": {
        id: "AMU",
        name: "Astana Medical University",
        nameRu: "Медицинский университет Астана",
        shortName: "AMU",
        logo: "images/universities/amu.png",

        info: {
            description: "Ведущий медицинский университет столицы Казахстана.",
            type: "Медицинский",
            founded: 1964,
            students: 5000,
            location: {
                city: "Астана",
                address: "ул. Бейбитшилик, 49а",
                coordinates: { lat: 51.1438, lng: 71.4703 }
            },
            website: "https://amu.edu.kz",
            email: "info@amu.edu.kz",
            phone: "+7 7172 53 9447"
        },

        requirements: {

            ent: { min: 70, grant: 90 },
            gpa: { min: 3.0, grant: 3.5 },
            entRequired: true,
            entNote: "Требуется ЕНТ по биологии-химии"
        },

        rankings: { qsWorld: null, qsAsia: null, national: 8 },

        accreditations: ["IQAA", "WFME"],

        strengths: ["Медицинское образование", "Клинические базы", "Международные партнёрства"],

        scholarships: {
            types: ["Государственные гранты"],
            international: ["Обмены с медвузами СНГ"]
        },

        programs: {
            bachelor: ["Общая медицина", "Стоматология", "Фармация", "Общественное здравоохранение", "Сестринское дело"],
            master: ["Медицина", "Общественное здравоохранение"],
            doctorate: ["Медицина"]
        },

        entScores: {
            "Общая медицина": { threshold: 70, grant: 90 },
            "Стоматология": { threshold: 70, grant: 88 },
            "Фармация": { threshold: 65, grant: 85 }
        },
        directions: ["medicine"]
    },

    "MNU": {
        id: "MNU",
        name: "M. Narikbayev KAZGUU University",
        nameRu: "Университет КАЗГЮУ им. М. Нарикбаева",
        shortName: "KAZGUU/MNU",
        logo: "images/universities/mnu.png",

        info: {
            description: "Ведущий юридический и бизнес-университет Казахстана. Международные аккредитации FIBAA.",
            type: "Юридический",
            founded: 1994,
            students: 3500,
            location: {
                city: "Астана",
                address: "ул. Коргалжын, 8",
                coordinates: { lat: 51.1280, lng: 71.4300 }
            },
            website: "https://kazguu.kz",
            email: "info@kazguu.kz",
            phone: "+7 7172 70 2020"
        },

        requirements: {

            ent: { min: 50, grant: 115 },
            gpa: { min: 2.8, grant: 3.5 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: { qsWorld: null, qsAsia: null, national: 12 },

        accreditations: ["IQAA", "FIBAA", "EFMD"],

        strengths: ["Лидер в юридическом образовании", "Международные аккредитации", "Связи с юридическим сообществом"],

        scholarships: {
            types: ["Государственные гранты", "Внутренние стипендии"],
            international: ["Партнёрства с юридическими школами Европы и США"]
        },

        programs: {
            bachelor: ["Юриспруденция", "Международное право", "MBA", "Менеджмент", "Финансы", "Государственное управление", "IT право"],
            master: ["Юриспруденция (LLM)", "MBA", "Государственное управление"],
            doctorate: ["Юриспруденция", "Экономика"]
        },

        entScores: {
            "Юриспруденция": { threshold: 50, grant: 118 },
            "Международное право": { threshold: 50, grant: 120 },
            "Государственное управление": { threshold: 50, grant: 105 },
            "Финансы": { threshold: 50, grant: 108 }
        },
        directions: ["law", "management", "finance"]
    },

    "KazATU": {
        id: "KazATU",
        name: "S. Seifullin Kazakh Agro Technical University",
        nameRu: "Казахский агротехнический университет им. С. Сейфуллина",
        shortName: "КазАТУ",
        logo: "images/universities/kazatu.png",

        info: {
            description: "Ведущий аграрный университет Казахстана. В топ-600 QS Asia.",
            type: "Аграрный",
            founded: 1957,
            students: 12000,
            location: {
                city: "Астана",
                address: "пр. Победы, 62",
                coordinates: { lat: 51.1500, lng: 71.4500 }
            },
            website: "https://kazatu.edu.kz",
            email: "info@kazatu.edu.kz",
            phone: "+7 7172 31 7419"
        },

        requirements: {

            ent: { min: 50, grant: 75 },
            gpa: { min: 2.5, grant: 3.2 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: { qsWorld: null, qsAsia: 551, national: 12 },

        accreditations: ["IQAA"],

        strengths: ["Специализация на сельском хозяйстве", "Практические базы", "Государственные гранты"],

        scholarships: {
            types: ["Государственные гранты"],
            international: ["Партнёрства с аграрными вузами СНГ"]
        },

        programs: {
            bachelor: ["Агрономия", "Ветеринария", "Пищевые технологии", "Агроинженерия", "IT в сельском хозяйстве", "Землеустройство"],
            master: ["Агрономия", "Ветеринария", "Пищевые технологии"],
            doctorate: ["Агрономия", "Ветеринария"]
        },

        entScores: {
            "Агрономия": { threshold: 50, grant: 75 },
            "Ветеринария": { threshold: 50, grant: 80 },
            "Пищевые технологии": { threshold: 50, grant: 72 }
        },
        directions: ["agriculture"]
    },

    // ==================== АЛМАТЫ ====================
    "KazNU": {
        id: "KazNU",
        name: "Al-Farabi Kazakh National University",
        nameRu: "КазНУ им. аль-Фараби",
        shortName: "КазНУ",
        logo: "images/universities/kaznu.png",

        info: {
            description: "Крупнейший классический университет Казахстана. Входит в топ-50 QS Asia и топ-250 QS World.",
            type: "Национальный",
            founded: 1934,
            students: 20000,
            location: {
                city: "Алматы",
                address: "пр. аль-Фараби, 71",
                coordinates: { lat: 43.2220, lng: 76.9260 }
            },
            website: "https://kaznu.kz",
            email: "info@kaznu.kz",
            phone: "+7 727 377 3333"
        },

        requirements: {

            ent: { min: 50, grant: 100 },
            gpa: { min: 3.0, grant: 3.5 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: { qsWorld: 220, qsAsia: 44, national: 2 },

        accreditations: ["IQAA", "ABET", "FIBAA", "ACQUIN", "EUA", "ASIIN"],

        strengths: [
            "Топ-250 QS World",
            "Крупнейший университет Казахстана",
            "100+ специальностей",
            "Богатая история"
        ],

        scholarships: {
            types: ["Государственные гранты", "Именные стипендии", "Стипендия Президента РК"],
            international: ["Erasmus+", "Обмены с университетами Европы, Азии, США"]
        },

        programs: {
            bachelor: ["Computer Science", "Математика", "Физика", "Химия", "Биология", "Юриспруденция", "Экономика", "Менеджмент", "Медицина", "Журналистика", "История", "Философия"],
            master: ["Computer Science", "Data Science", "Юриспруденция", "Экономика", "MBA", "Медицина", "Физика"],
            doctorate: ["Computer Science", "Физика", "Химия", "Биология", "Юриспруденция", "Экономика"]
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

    "Satbayev": {
        id: "Satbayev",
        name: "Satbayev University",
        nameRu: "Университет Сатпаева",
        shortName: "Satbayev",
        logo: "images/universities/satbayev.png",

        info: {
            description: "Ведущий технический вуз Казахстана. Топ-500 QS World. Специализируется на инженерии, горном деле, нефтегазе.",
            type: "Технический",
            founded: 1934,
            students: 15000,
            location: {
                city: "Алматы",
                address: "ул. Сатпаева, 22а",
                coordinates: { lat: 43.2365, lng: 76.9435 }
            },
            website: "https://satbayev.university",
            email: "info@satbayev.university",
            phone: "+7 727 292 7679"
        },

        requirements: {

            ent: { min: 50, grant: 95 },
            gpa: { min: 2.5, grant: 3.2 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: { qsWorld: 480, qsAsia: 124, national: 4 },

        accreditations: ["IQAA", "ASIIN", "EUA"],

        strengths: [
            "Топ-500 QS World",
            "Лидер в инженерном образовании",
            "Партнёрства с добывающими компаниями",
            "90+ лет истории"
        ],

        scholarships: {
            types: ["Государственные гранты", "Научные гранты", "Стипендии от добывающих компаний"],
            international: ["Erasmus+", "Стажировки в добывающих компаниях"]
        },

        programs: {
            bachelor: ["Геология", "Нефтегазовое дело", "Горное дело", "Computer Science", "Cybersecurity", "Архитектура", "Строительство", "Энергетика", "Металлургия"],
            master: ["Геология", "Нефтегазовое дело", "Computer Science", "Энергетика", "Архитектура"],
            doctorate: ["Геология", "Нефтегазовое дело", "Computer Science", "Горное дело"]
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

    "KBTU": {
        id: "KBTU",
        name: "Kazakh-British Technical University",
        nameRu: "Казахстанско-Британский технический университет",
        shortName: "КБТУ",
        logo: "images/universities/kbtu.png",

        info: {
            description: "Технический университет с британскими стандартами образования. Аккредитация ABET. Сильные IT и нефтегазовые программы.",
            type: "Технический",
            founded: 2001,
            students: 5000,
            location: {
                city: "Алматы",
                address: "ул. Толе би, 59",
                coordinates: { lat: 43.2380, lng: 76.9456 }
            },
            website: "https://kbtu.kz",
            email: "admission@kbtu.kz",
            phone: "+7 727 272 1965"
        },

        requirements: {

            ent: { min: 50, grant: 115 },
            gpa: { min: 2.8, grant: 3.5 },
            entRequired: true,
            entNote: "Принимается ЕНТ или внутренний экзамен"
        },

        rankings: { qsWorld: null, qsAsia: 401, national: 7 },

        accreditations: ["ABET", "FIBAA", "IQAA"],

        strengths: [
            "Сильные IT-программы",
            "Партнёрство с британскими университетами",
            "Обучение на английском",
            "Аккредитации ABET и FIBAA"
        ],

        scholarships: {
            types: ["Государственные гранты", "Гранты за успеваемость", "Стипендии от компаний"],
            international: ["Обмены с британскими вузами", "Двойные дипломы"]
        },

        programs: {
            bachelor: ["Computer Science", "Software Engineering", "Information Systems", "Cybersecurity", "Data Science", "AI", "Petroleum Engineering", "Chemical Engineering", "Finance", "Management"],
            master: ["Computer Science", "Data Science", "Petroleum Engineering", "MBA", "Finance"],
            doctorate: ["Computer Science", "Petroleum Engineering", "Physics", "Economics"]
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
        directions: ["it", "software", "cybersecurity", "data-science", "petroleum", "finance"]
    },

    "KazNMU": {
        id: "KazNMU",
        name: "Asfendiyarov Kazakh National Medical University",
        nameRu: "КазНМУ им. С.Д. Асфендиярова",
        shortName: "КазНМУ",
        logo: "images/universities/kaznmu.png",

        info: {
            description: "Старейший и крупнейший медицинский университет Казахстана. Основан в 1930 году.",
            type: "Медицинский",
            founded: 1930,
            students: 10000,
            location: {
                city: "Алматы",
                address: "ул. Толе би, 94",
                coordinates: { lat: 43.2456, lng: 76.9289 }
            },
            website: "https://kaznmu.kz",
            email: "info@kaznmu.kz",
            phone: "+7 727 338 7090"
        },

        requirements: {

            ent: { min: 70, grant: 95 },
            gpa: { min: 3.2, grant: 3.7 },
            entRequired: true,
            entNote: "Требуется ЕНТ по биологии-химии"
        },

        rankings: { qsWorld: null, qsAsia: 351, national: 5 },

        accreditations: ["IQAA", "WFME"],

        strengths: ["Старейший медвуз Казахстана", "Крупнейшие клинические базы", "Международное признание"],

        scholarships: {
            types: ["Государственные гранты"],
            international: ["Обмены с медвузами мира"]
        },

        programs: {
            bachelor: ["Общая медицина", "Стоматология", "Фармация", "Общественное здравоохранение", "Педиатрия", "Сестринское дело"],
            master: ["Медицина", "Общественное здравоохранение", "Фармакология"],
            doctorate: ["Медицина", "Фармакология"]
        },

        entScores: {
            "Общая медицина": { threshold: 70, grant: 95 },
            "Стоматология": { threshold: 70, grant: 92 },
            "Фармация": { threshold: 65, grant: 88 },
            "Педиатрия": { threshold: 70, grant: 90 }
        },
        directions: ["medicine"]
    },

    "KIMEP": {
        id: "KIMEP",
        name: "KIMEP University",
        nameRu: "Университет КИМЭП",
        shortName: "КИМЭП",
        logo: "images/universities/kimep.png",

        info: {
            description: "Старейший частный университет в Центральной Азии. Аккредитация AACSB и AMBA. Лидер в бизнес-образовании.",
            type: "Бизнес",
            founded: 1992,
            students: 3000,
            location: {
                city: "Алматы",
                address: "пр. Абая, 4",
                coordinates: { lat: 43.2341, lng: 76.9098 }
            },
            website: "https://kimep.kz",
            email: "admission@kimep.kz",
            phone: "+7 727 270 4200"
        },

        requirements: {

            ent: { min: 50, grant: 100 },
            gpa: { min: 2.5, grant: 3.5 },
            entRequired: false,
            entNote: "ЕНТ принимается, основной отбор через внутренние экзамены"
        },

        rankings: { qsWorld: null, qsAsia: 451, national: 9 },

        accreditations: ["AACSB", "ACBSP", "EFMD", "IQAA"],

        strengths: [
            "Обучение на английском",
            "Международный преподавательский состав",
            "96% трудоустройства",
            "Аккредитации AACSB и EFMD"
        ],

        scholarships: {
            types: ["Грант Бiлiм (100% и 50%)", "Гранты за академические достижения", "Need-based scholarships"],
            international: ["95+ университетов-партнёров", "Обмены в США, Европе, Азии"]
        },

        programs: {
            bachelor: ["Бизнес-администрирование", "Финансы", "Маркетинг", "Менеджмент", "Международные отношения", "Журналистика", "Экономика", "Юриспруденция"],
            master: ["MBA", "Executive MBA", "Finance", "Economics", "Public Administration", "Law (LLM)"],
            doctorate: ["DBA", "PhD in Business Administration", "PhD in Economics"]
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

    "MUIT": {
        id: "MUIT",
        name: "International IT University",
        nameRu: "МУИТ (IITU)",
        shortName: "МУИТ",
        logo: "images/universities/muit.png",

        info: {
            description: "Ведущий IT-университет Казахстана в Алматы. Партнёрства с Cisco, Microsoft, Oracle.",
            type: "IT",
            founded: 2009,
            students: 4000,
            location: {
                city: "Алматы",
                address: "ул. Манаса, 34/1",
                coordinates: { lat: 43.2290, lng: 76.8700 }
            },
            website: "https://iitu.edu.kz",
            email: "admission@iitu.edu.kz",
            phone: "+7 727 330 8585"
        },

        requirements: {

            ent: { min: 50, grant: 110 },
            gpa: { min: 2.3, grant: 3.2 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: { qsWorld: null, qsAsia: null, national: 14 },

        accreditations: ["IQAA", "Партнёрства с Cisco, Microsoft, Oracle"],

        strengths: [
            "Специализация на IT",
            "Партнёрства с IT-компаниями",
            "Программы Game Development и Digital Media"
        ],

        scholarships: {
            types: ["Государственные гранты", "Стипендии от IT-компаний"],
            international: ["Стажировки в технологических компаниях"]
        },

        programs: {
            bachelor: ["Computer Science", "Software Engineering", "Cybersecurity", "Data Science", "Game Development", "Telecommunications", "Digital Media", "Graphic Design", "Animation"],
            master: ["Computer Science", "Cybersecurity", "Data Science", "AI", "Telecommunications"],
            doctorate: ["Computer Science", "Information Systems", "Telecommunications"]
        },

        entScores: {
            "Computer Science": { threshold: 50, grant: 115 },
            "Software Engineering": { threshold: 50, grant: 113 },
            "Cybersecurity": { threshold: 50, grant: 112 },
            "Game Development": { threshold: 50, grant: 105 },
            "Data Science": { threshold: 50, grant: 118 },
            "Graphic Design": { threshold: 50, grant: 95 }
        },
        directions: ["it", "software", "cybersecurity", "data-science", "design"]
    },

    "SDU": {
        id: "SDU",
        name: "Suleyman Demirel University",
        nameRu: "Университет Сулеймана Демиреля",
        shortName: "SDU",
        logo: "images/universities/sdu.png",

        info: {
            description: "Международный частный университет. 125+ программ бакалавриата. Erasmus+ и программы обмена.",
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

            ent: { min: 50, grant: 100 },
            gpa: { min: 2.5, grant: 3.3 },
            entRequired: true,
            entNote: "Принимается ЕНТ"
        },

        rankings: { qsWorld: null, qsAsia: 542, national: 13 },

        accreditations: ["10 национальных аккредитаций", "10 международных аккредитаций"],

        strengths: [
            "125+ программ бакалавриата",
            "Erasmus+ и программы обмена",
            "Современный кампус",
            "Поддержка карьерного роста"
        ],

        scholarships: {
            types: ["Государственные гранты", "Внутренние стипендии", "Гранты для олимпиадников"],
            international: ["Erasmus+", "Mevlana"]
        },

        programs: {
            bachelor: ["Computer Science", "Информационные системы", "Data Science", "Экономика", "Менеджмент", "Юриспруденция", "Медицина", "Стоматология", "Педагогика"],
            master: ["Computer Science", "Data Science", "Экономика", "MBA", "Юриспруденция", "Медицина"],
            doctorate: ["Computer Science", "Экономика", "Медицина", "Педагогика"]
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
            description: "Ведущий экономический университет Казахстана. Один из старейших экономических вузов страны.",
            type: "Бизнес",
            founded: 1963,
            students: 5000,
            location: {
                city: "Алматы",
                address: "ул. Жандосова, 55",
                coordinates: { lat: 43.2183, lng: 76.8967 }
            },
            website: "https://narxoz.kz",
            email: "admission@narxoz.kz",
            phone: "+7 727 377 1111"
        },

        requirements: {

            ent: { min: 50, grant: 100 },
            gpa: { min: 2.5, grant: 3.3 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: { qsWorld: null, qsAsia: 501, national: 11 },

        accreditations: ["IQAA", "FIBAA", "EFMD", "ACBSP"],

        strengths: [
            "Лидер в экономическом образовании",
            "Связи с бизнес-сообществом",
            "Международные аккредитации"
        ],

        scholarships: {
            types: ["Государственные гранты", "Внутренние стипендии", "Гранты партнёров"],
            international: ["Erasmus+", "Двойные дипломы"]
        },

        programs: {
            bachelor: ["Экономика", "Менеджмент", "Маркетинг", "Финансы", "Учёт и аудит", "Юриспруденция", "IT-менеджмент", "Журналистика", "Психология"],
            master: ["MBA", "Executive MBA", "Финансы", "Экономика", "Юриспруденция", "Digital Marketing"],
            doctorate: ["Экономика", "Финансы", "Менеджмент", "Юриспруденция"]
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
            description: "Первый британский университет в Казахстане. Британский диплом, признанный в 196 странах.",
            type: "Международный",
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

            ent: null,
            gpa: { min: 3.0, grant: 3.5 },
            entRequired: false,
            entNote: "ЕНТ не требуется. Приём на основе IELTS и собеседования."
        },

        rankings: { qsWorld: 715, qsAsia: null, national: 25 },

        accreditations: ["QAA UK", "Британский диплом DMU", "Признание в 196 странах"],

        strengths: [
            "Британский диплом",
            "95% преподавателей — иностранцы",
            "Кампус в стиле Google/Amazon",
            "100% на английском"
        ],

        scholarships: {
            types: ["Global Gateway Scholarship (32%)", "Частичный грант 4000 USD", "Academic Excellence"],
            international: ["Обучение в кампусах DMU в Лестере, Дубае"]
        },

        programs: {
            bachelor: ["Computer Science", "Cybersecurity", "AI", "Business Management", "Finance", "Marketing", "Graphic Design", "Fashion Design"],
            master: ["MBA", "Finance", "Marketing Management", "Cybersecurity", "Data Analytics", "AI"],
            doctorate: []
        },

        entScores: null,
        directions: ["it", "cybersecurity", "finance", "management", "marketing", "design"]
    },

    "ATU": {
        id: "ATU",
        name: "Almaty Technological University",
        nameRu: "Алматинский технологический университет",
        shortName: "АТУ",
        logo: "images/universities/atu.png",

        info: {
            description: "Технологический университет. Специализация на пищевых технологиях и лёгкой промышленности.",
            type: "Технический",
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

            ent: { min: 50, grant: 85 },
            gpa: { min: 2.3, grant: 3.0 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: { qsWorld: null, qsAsia: null, national: 28 },

        accreditations: ["IQAA"],

        strengths: ["Специализация на пищевых технологиях", "Практико-ориентированное обучение", "Собственные лаборатории"],

        scholarships: {
            types: ["Государственные гранты", "Социальные стипендии"],
            international: ["Партнёрства с университетами России, Турции, Китая"]
        },

        programs: {
            bachelor: ["Пищевая инженерия", "Технология продуктов питания", "Дизайн одежды", "Автоматизация", "Машиностроение", "Экономика", "Менеджмент", "Информатика"],
            master: ["Пищевая инженерия", "Технология продуктов питания", "Автоматизация", "Менеджмент"],
            doctorate: ["Пищевая инженерия", "Биотехнология"]
        },

        entScores: {
            "Пищевая инженерия": { threshold: 50, grant: 85 },
            "Дизайн одежды": { threshold: 50, grant: 88 },
            "Автоматизация и управление": { threshold: 50, grant: 90 },
            "Экономика": { threshold: 50, grant: 95 }
        },
        directions: ["engineering", "economics", "design"]
    },

    "Turan": {
        id: "Turan",
        name: "Turan University",
        nameRu: "Университет Туран",
        shortName: "Туран",
        logo: "images/universities/turan.png",

        info: {
            description: "Один из ведущих частных университетов. Основан в 1992 году.",
            type: "Частный",
            founded: 1992,
            students: 5000,
            location: {
                city: "Алматы",
                address: "ул. Сатпаева, 16",
                coordinates: { lat: 43.2350, lng: 76.9200 }
            },
            website: "https://turan-edu.kz",
            email: "info@turan-edu.kz",
            phone: "+7 727 260 4000"
        },

        requirements: {

            ent: { min: 50, grant: 85 },
            gpa: { min: 2.5, grant: 3.2 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: { qsWorld: null, qsAsia: null, national: 20 },

        accreditations: ["IQAA"],

        strengths: ["Практико-ориентированное обучение", "Связи с бизнесом", "Доступное образование"],

        scholarships: {
            types: ["Государственные гранты", "Внутренние стипендии"],
            international: ["Партнёрства с зарубежными вузами"]
        },

        programs: {
            bachelor: ["Экономика", "Финансы", "Право", "IT", "Туризм", "Дизайн", "Журналистика", "Международные отношения"],
            master: ["Экономика", "MBA", "Право", "Туризм"],
            doctorate: ["Экономика"]
        },

        entScores: {
            "Экономика": { threshold: 50, grant: 85 },
            "Право": { threshold: 50, grant: 90 },
            "IT": { threshold: 50, grant: 88 },
            "Туризм": { threshold: 50, grant: 78 }
        },
        directions: ["economics", "law", "it", "tourism"]
    },

    "AlmaU": {
        id: "AlmaU",
        name: "Almaty Management University",
        nameRu: "Алматы Менеджмент Университет",
        shortName: "AlmaU",
        logo: "images/universities/almau.png",

        info: {
            description: "Бизнес-университет с международными аккредитациями AMBA, EFMD.",
            type: "Бизнес",
            founded: 1988,
            students: 3000,
            location: {
                city: "Алматы",
                address: "ул. Розыбакиева, 227",
                coordinates: { lat: 43.2250, lng: 76.9150 }
            },
            website: "https://almau.edu.kz",
            email: "info@almau.edu.kz",
            phone: "+7 727 302 2222"
        },

        requirements: {

            ent: { min: 50, grant: 95 },
            gpa: { min: 2.8, grant: 3.5 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: { qsWorld: null, qsAsia: null, national: 22 },

        accreditations: ["AMBA", "EFMD", "IQAA"],

        strengths: ["Бизнес-образование", "Международные аккредитации", "Связи с бизнесом"],

        scholarships: {
            types: ["Государственные гранты", "Корпоративные стипендии"],
            international: ["Обмены с бизнес-школами мира"]
        },

        programs: {
            bachelor: ["Business Administration", "Finance", "Marketing", "Management", "IT Management", "HR"],
            master: ["MBA", "Executive MBA", "Finance", "Marketing", "Management"],
            doctorate: ["Business Administration"]
        },

        entScores: {
            "Business Administration": { threshold: 50, grant: 95 },
            "Finance": { threshold: 50, grant: 98 },
            "Marketing": { threshold: 50, grant: 90 },
            "Management": { threshold: 50, grant: 88 }
        },
        directions: ["finance", "management", "marketing"]
    },

    "DKU": {
        id: "DKU",
        name: "German-Kazakh University",
        nameRu: "Казахстанско-Немецкий университет",
        shortName: "DKU",
        logo: "images/universities/dku.png",

        info: {
            description: "Казахстанско-Немецкий университет. Двойные дипломы с немецкими вузами.",
            type: "Международный",
            founded: 1999,
            students: 1500,
            location: {
                city: "Алматы",
                address: "ул. Пушкина, 111",
                coordinates: { lat: 43.2300, lng: 76.9400 }
            },
            website: "https://dku.kz",
            email: "info@dku.kz",
            phone: "+7 727 355 0555"
        },

        requirements: {

            ent: { min: 50, grant: 95 },
            gpa: { min: 3.0, grant: 3.5 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: { qsWorld: null, qsAsia: null, national: 24 },

        accreditations: ["IQAA", "Партнёрства с немецкими вузами"],

        strengths: ["Двойные дипломы с Германией", "Немецкое качество образования", "Обучение на немецком и английском"],

        scholarships: {
            types: ["Государственные гранты", "DAAD стипендии"],
            international: ["Стажировки в Германии", "Двойные дипломы"]
        },

        programs: {
            bachelor: ["Engineering", "IT", "Logistics", "Economics", "Management", "Renewable Energy"],
            master: ["Engineering", "Logistics", "Management", "Renewable Energy"],
            doctorate: ["Engineering"]
        },

        entScores: {
            "Engineering": { threshold: 50, grant: 95 },
            "IT": { threshold: 50, grant: 100 },
            "Logistics": { threshold: 50, grant: 90 },
            "Economics": { threshold: 50, grant: 88 }
        },
        directions: ["engineering", "it", "logistics", "economics", "energy"]
    },

    // ==================== КАРАГАНДА ====================
    "KarU": {
        id: "KarU",
        name: "E.A. Buketov Karaganda University",
        nameRu: "Карагандинский университет им. Е.А. Букетова",
        shortName: "КарУ",
        logo: "images/universities/karu.png",

        info: {
            description: "Крупнейший классический университет Центрального Казахстана. Входит в QS Asia.",
            type: "Региональный",
            founded: 1972,
            students: 15000,
            location: {
                city: "Караганда",
                address: "ул. Университетская, 28",
                coordinates: { lat: 49.8028, lng: 73.0950 }
            },
            website: "https://buketov.edu.kz",
            email: "info@buketov.edu.kz",
            phone: "+7 7212 35 6398"
        },

        requirements: {

            ent: { min: 50, grant: 80 },
            gpa: { min: 2.5, grant: 3.2 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: { qsWorld: null, qsAsia: 501, national: 6 },

        accreditations: ["IQAA"],

        strengths: ["Крупнейший вуз Центрального Казахстана", "Входит в QS Asia", "Широкий выбор специальностей"],

        scholarships: {
            types: ["Государственные гранты"],
            international: ["Программы обмена"]
        },

        programs: {
            bachelor: ["Педагогика", "Филология", "История", "Математика", "IT", "Экономика", "Химия", "Физика", "Биология", "Право"],
            master: ["Педагогика", "IT", "Экономика", "Право"],
            doctorate: ["Педагогика", "Химия", "Физика"]
        },

        entScores: {
            "IT": { threshold: 50, grant: 85 },
            "Право": { threshold: 50, grant: 88 },
            "Экономика": { threshold: 50, grant: 80 },
            "Педагогика": { threshold: 50, grant: 75 }
        },
        directions: ["pedagogy", "it", "law", "economics", "languages"]
    },

    "KMU": {
        id: "KMU",
        name: "Karaganda Medical University",
        nameRu: "Карагандинский медицинский университет",
        shortName: "КМУ",
        logo: "images/universities/kmu.png",

        info: {
            description: "Ведущий медицинский университет Центрального Казахстана.",
            type: "Медицинский",
            founded: 1950,
            students: 5000,
            location: {
                city: "Караганда",
                address: "ул. Гоголя, 40",
                coordinates: { lat: 49.7900, lng: 73.0800 }
            },
            website: "https://kgmu.kz",
            email: "info@kgmu.kz",
            phone: "+7 7212 51 8931"
        },

        requirements: {

            ent: { min: 65, grant: 85 },
            gpa: { min: 2.8, grant: 3.5 },
            entRequired: true,
            entNote: "Требуется ЕНТ по биологии-химии"
        },

        rankings: { qsWorld: null, qsAsia: null, national: 16 },

        accreditations: ["IQAA", "WFME"],

        strengths: ["Медицинское образование", "Клинические базы"],

        scholarships: {
            types: ["Государственные гранты"],
            international: ["Обмены с медвузами СНГ"]
        },

        programs: {
            bachelor: ["Общая медицина", "Стоматология", "Фармация", "Общественное здравоохранение"],
            master: ["Медицина", "Общественное здравоохранение"],
            doctorate: ["Медицина"]
        },

        entScores: {
            "Общая медицина": { threshold: 65, grant: 85 },
            "Стоматология": { threshold: 65, grant: 82 },
            "Фармация": { threshold: 60, grant: 78 }
        },
        directions: ["medicine"]
    },

    // ==================== ШЫМКЕНТ ====================
    "SKU": {
        id: "SKU",
        name: "M. Auezov South Kazakhstan University",
        nameRu: "Южно-Казахстанский университет им. М. Ауэзова",
        shortName: "ЮКУ",
        logo: "images/universities/sku.png",

        info: {
            description: "Крупнейший региональный университет юга Казахстана. Входит в QS Asia.",
            type: "Региональный",
            founded: 1943,
            students: 20000,
            location: {
                city: "Шымкент",
                address: "пр. Тауке хана, 5",
                coordinates: { lat: 42.3200, lng: 69.5967 }
            },
            website: "https://auezov.edu.kz",
            email: "info@auezov.edu.kz",
            phone: "+7 7252 21 1632"
        },

        requirements: {

            ent: { min: 50, grant: 75 },
            gpa: { min: 2.5, grant: 3.0 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: { qsWorld: null, qsAsia: 451, national: 18 },

        accreditations: ["IQAA"],

        strengths: ["Крупнейший вуз юга Казахстана", "Входит в QS Asia", "Широкий выбор специальностей"],

        scholarships: {
            types: ["Государственные гранты"],
            international: ["Программы обмена"]
        },

        programs: {
            bachelor: ["Инженерия", "Педагогика", "IT", "Химия", "Экономика", "Нефтегаз", "Право", "Медицина"],
            master: ["Инженерия", "IT", "Экономика", "Нефтегаз"],
            doctorate: ["Инженерия", "Химия"]
        },

        entScores: {
            "IT": { threshold: 50, grant: 78 },
            "Нефтегаз": { threshold: 50, grant: 80 },
            "Право": { threshold: 50, grant: 82 },
            "Экономика": { threshold: 50, grant: 75 }
        },
        directions: ["engineering", "it", "petroleum", "law", "economics"]
    },

    // ==================== ТУРКЕСТАН ====================
    "IKTU": {
        id: "IKTU",
        name: "Khoja Akhmet Yassawi International Kazakh-Turkish University",
        nameRu: "Международный казахско-турецкий университет им. Х.А. Ясави",
        shortName: "МКТУ",
        logo: "images/universities/iktu.png",

        info: {
            description: "Международный университет с особым статусом. Совместный проект Казахстана и Турции.",
            type: "Международный",
            founded: 1991,
            students: 15000,
            location: {
                city: "Туркестан",
                address: "ул. Б. Саттарханов, 29",
                coordinates: { lat: 43.3000, lng: 68.2500 }
            },
            website: "https://ayu.edu.kz",
            email: "info@ayu.edu.kz",
            phone: "+7 72533 6 3645"
        },

        requirements: {

            ent: { min: 50, grant: 85 },
            gpa: { min: 2.8, grant: 3.5 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: { qsWorld: null, qsAsia: 401, national: 22 },

        accreditations: ["IQAA", "Международный статус"],

        strengths: ["Международный статус", "Совместный проект с Турцией", "Обучение на турецком и казахском"],

        scholarships: {
            types: ["Государственные гранты", "Турецкие стипендии"],
            international: ["Обмены с турецкими вузами"]
        },

        programs: {
            bachelor: ["Теология", "История", "Филология", "Право", "IT", "Медицина", "Инженерия", "Экономика", "Педагогика"],
            master: ["Теология", "История", "Право", "Медицина"],
            doctorate: ["Теология", "История", "Право"]
        },

        entScores: {
            "Право": { threshold: 50, grant: 88 },
            "IT": { threshold: 50, grant: 85 },
            "Медицина": { threshold: 65, grant: 90 },
            "Экономика": { threshold: 50, grant: 80 }
        },
        directions: ["theology", "law", "it", "medicine", "history"]
    },

    // ==================== СЕМЕЙ ====================
    "SMU": {
        id: "SMU",
        name: "Semey Medical University",
        nameRu: "Медицинский университет Семей",
        shortName: "МУС",
        logo: "images/universities/smu.png",

        info: {
            description: "Медицинский университет Восточного Казахстана.",
            type: "Медицинский",
            founded: 1953,
            students: 4000,
            location: {
                city: "Семей",
                address: "ул. Абая Кунанбаева, 103",
                coordinates: { lat: 50.4111, lng: 80.2275 }
            },
            website: "https://semeymedical.edu.kz",
            email: "info@semeymedical.edu.kz",
            phone: "+7 7222 56 9979"
        },

        requirements: {

            ent: { min: 65, grant: 85 },
            gpa: { min: 2.8, grant: 3.5 },
            entRequired: true,
            entNote: "Требуется ЕНТ по биологии-химии"
        },

        rankings: { qsWorld: null, qsAsia: null, national: 19 },

        accreditations: ["IQAA"],

        strengths: ["Медицинское образование", "Клинические базы Восточного Казахстана"],

        scholarships: {
            types: ["Государственные гранты"],
            international: []
        },

        programs: {
            bachelor: ["Общая медицина", "Стоматология", "Фармация", "Общественное здравоохранение"],
            master: ["Медицина"],
            doctorate: ["Медицина"]
        },

        entScores: {
            "Общая медицина": { threshold: 65, grant: 85 },
            "Стоматология": { threshold: 65, grant: 82 }
        },
        directions: ["medicine"]
    },

    "ShakU": {
        id: "ShakU",
        name: "Shakarim University",
        nameRu: "Университет Шакарима",
        shortName: "ШУ",
        logo: "images/universities/shaku.png",

        info: {
            description: "Региональный университет Восточного Казахстана.",
            type: "Региональный",
            founded: 1996,
            students: 8000,
            location: {
                city: "Семей",
                address: "ул. Глинки, 20а",
                coordinates: { lat: 50.4200, lng: 80.2400 }
            },
            website: "https://shakarim.edu.kz",
            email: "info@shakarim.edu.kz",
            phone: "+7 7222 35 4567"
        },

        requirements: {

            ent: { min: 50, grant: 75 },
            gpa: { min: 2.5, grant: 3.0 },
            entRequired: true,
            entNote: "Требуется ЕНТ"
        },

        rankings: { qsWorld: null, qsAsia: null, national: 21 },

        accreditations: ["IQAA"],

        strengths: ["Региональный университет", "Доступное образование"],

        scholarships: {
            types: ["Государственные гранты"],
            international: []
        },

        programs: {
            bachelor: ["Педагогика", "Сельское хозяйство", "IT", "Экономика", "Инженерия", "Ветеринария", "Право"],
            master: ["Педагогика", "IT", "Экономика"],
            doctorate: ["Педагогика"]
        },

        entScores: {
            "IT": { threshold: 50, grant: 78 },
            "Право": { threshold: 50, grant: 80 },
            "Экономика": { threshold: 50, grant: 75 },
            "Ветеринария": { threshold: 50, grant: 72 }
        },
        directions: ["pedagogy", "it", "agriculture", "economics", "law"]
    }
};

// ==================== НАПРАВЛЕНИЯ ДЛЯ ФИЛЬТРАЦИИ ====================
const DIRECTIONS = {
    "it": { name: "IT / Информатика", keywords: ["computer", "информатика", "software", "it", "программ"] },
    "software": { name: "Программная инженерия", keywords: ["software", "разработка", "программ"] },
    "cybersecurity": { name: "Кибербезопасность", keywords: ["cyber", "безопасность", "security"] },
    "data-science": { name: "Data Science / AI", keywords: ["data", "ai", "machine", "искусственный"] },
    "engineering": { name: "Инженерия", keywords: ["engineering", "инженер", "mechanical", "машин"] },
    "petroleum": { name: "Нефтегаз", keywords: ["petroleum", "нефт", "oil", "gas", "газ"] },
    "mining": { name: "Горное дело", keywords: ["mining", "горн", "геолог"] },
    "energy": { name: "Энергетика", keywords: ["energy", "энергет", "power"] },
    "architecture": { name: "Архитектура", keywords: ["architec", "архитект", "строит"] },
    "math-physics": { name: "Математика / Физика", keywords: ["математ", "math", "физик", "physics"] },
    "chemistry-biology": { name: "Химия / Биология", keywords: ["хими", "chemistry", "биолог", "biology"] },
    "economics": { name: "Экономика", keywords: ["эконом", "economics"] },
    "finance": { name: "Финансы", keywords: ["финанс", "finance", "учёт", "аудит"] },
    "management": { name: "Менеджмент / MBA", keywords: ["менеджм", "management", "mba", "бизнес"] },
    "marketing": { name: "Маркетинг", keywords: ["маркет", "marketing", "реклам"] },
    "law": { name: "Юриспруденция", keywords: ["юрис", "law", "право", "legal"] },
    "international": { name: "Международные отношения", keywords: ["международн", "international", "политолог"] },
    "journalism": { name: "Журналистика", keywords: ["журнал", "journalism", "pr", "media"] },
    "languages": { name: "Филология / Языки", keywords: ["филолог", "перевод", "язык", "лингвист"] },
    "psychology": { name: "Психология", keywords: ["психолог", "psychology"] },
    "medicine": { name: "Медицина", keywords: ["медицин", "medicine", "врач", "стоматолог", "фармац"] },
    "pedagogy": { name: "Педагогика", keywords: ["педагог", "образован", "teach"] },
    "agriculture": { name: "Сельское хозяйство", keywords: ["агро", "сельско", "ветеринар", "agri"] },
    "design": { name: "Дизайн", keywords: ["дизайн", "design", "графич"] },
    "tourism": { name: "Туризм", keywords: ["туризм", "tourism", "гостинич"] },
    "theology": { name: "Теология", keywords: ["теолог", "религ"] },
    "logistics": { name: "Логистика", keywords: ["логист", "transport"] },
    "history": { name: "История", keywords: ["истор", "history", "археолог"] }
};

// ==================== ФУНКЦИИ-ХЕЛПЕРЫ ====================

function getUniversitiesArray() {
    return Object.values(UNIVERSITIES);
}

function getUniversityById(id) {
    return UNIVERSITIES[id] || null;
}

function getUniversitiesByDirection(direction) {
    return Object.values(UNIVERSITIES).filter(uni => 
        uni.directions && uni.directions.includes(direction)
    );
}

function filterUniversities(criteria) {
    return Object.values(UNIVERSITIES).filter(uni => {
        const req = uni.requirements;
        
        if (criteria.hasEnt === 'yes' && req.ent) {
            if (criteria.ent < req.ent.min) return false;
        }
        
        if (req.gpa && criteria.gpa < req.gpa.min) {
            return false;
        }
        
        return true;
    });
}

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

// Экспорт
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { UNIVERSITIES, DIRECTIONS, getUniversitiesArray, getUniversityById, filterUniversities, findProgramsByDirection };
}
