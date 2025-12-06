// Данные по городам/областям Казахстана с университетами
// Источники: QS Asia Rankings 2024, QS World Rankings 2024, kz.h-index.com, edu.gov.kz

const kazakhstanRegions = [
    { id: 'astana-city', name: 'Астана', center: [51.169392, 71.449074], type: 'city' },
    { id: 'almaty-city', name: 'Алматы', center: [43.238949, 76.945465], type: 'city' },
    { id: 'karaganda-region', name: 'Караганда', center: [49.8028, 73.0950], type: 'city' },
    { id: 'shymkent-city', name: 'Шымкент', center: [42.315514, 69.586907], type: 'city' },
    { id: 'pavlodar-region', name: 'Павлодар', center: [52.2833, 76.9500], type: 'city' },
    { id: 'aktobe-region', name: 'Актобе', center: [50.2839, 57.2066], type: 'city' },
    { id: 'semey-city', name: 'Семей', center: [50.4111, 80.2275], type: 'city' },
    { id: 'turkestan-region', name: 'Туркестан', center: [43.297222, 68.251667], type: 'city' },
    { id: 'ust-kamenogorsk', name: 'Усть-Каменогорск', center: [49.9480, 82.6283], type: 'city' },
    { id: 'petropavlovsk', name: 'Петропавловск', center: [54.8753, 69.1620], type: 'city' },
    { id: 'uralsk', name: 'Уральск', center: [51.2333, 51.3667], type: 'city' },
    { id: 'kostanay', name: 'Костанай', center: [53.2144, 63.6246], type: 'city' },
    { id: 'aktau', name: 'Актау', center: [43.6500, 51.1500], type: 'city' },
    { id: 'atyrau', name: 'Атырау', center: [46.8000, 51.8833], type: 'city' },
    { id: 'kokshetau', name: 'Кокшетау', center: [53.2833, 69.4000], type: 'city' },
    { id: 'taldykorgan', name: 'Талдыкорган', center: [45.0167, 78.3667], type: 'city' },
    { id: 'kyzylorda', name: 'Кызылорда', center: [44.8528, 65.5092], type: 'city' },
    { id: 'taraz', name: 'Тараз', center: [42.9000, 71.3667], type: 'city' },
    { id: 'ekibastuz', name: 'Экибастуз', center: [51.7333, 75.3167], type: 'city' }
];

// Университеты Казахстана по городам
const universitiesByRegion = {
    'astana-city': [
        {
            id: 'nu',
            name: 'Nazarbayev University',
            shortName: 'NU',
            city: 'Астана',
            coords: [51.0906, 71.3986],
            type: 'research',
            requirements: { ielts: 6.5, sat: 1200, gpa: 3.5, ent: null },
            programs: ['Engineering', 'Medicine', 'Business', 'Computer Science', 'Life Sciences', 'Law', 'Public Policy', 'Education'],
            ranking: { qsAsia: 41, qsWorld: 212, hIndex: 1, national: 1, scholarships: 100 },
            contacts: {
                website: 'https://nu.edu.kz',
                phone: '+7 (7172) 70-60-00',
                email: 'admissions@nu.edu.kz',
                address: 'ул. Кабанбай батыра, 53'
            },
            description: 'Автономный исследовательский университет мирового класса. Лидер Казахстана по всем рейтингам. 100% грантовое обучение.'
        },
        {
            id: 'enu',
            name: 'L.N. Gumilyov Eurasian National University',
            shortName: 'ENU',
            city: 'Астана',
            coords: [51.1282, 71.4306],
            type: 'national',
            requirements: { ent: 95, gpa: 3.0 },
            programs: ['IT', 'Mathematics', 'Physics', 'Law', 'Economics', 'Philology', 'International Relations', 'Chemistry', 'Biology', 'History'],
            ranking: { qsAsia: 191, qsWorld: null, hIndex: 3, national: 3, scholarships: 65 },
            contacts: {
                website: 'https://enu.kz',
                phone: '+7 (7172) 70-95-00',
                email: 'info@enu.kz',
                address: 'ул. Сатпаева, 2'
            },
            description: 'Крупнейший классический университет столицы. Входит в топ-200 QS Asia. Широкий выбор специальностей.'
        },
        {
            id: 'astana-it',
            name: 'Astana IT University',
            shortName: 'AITU',
            city: 'Астана',
            coords: [51.0899, 71.4170],
            type: 'it',
            requirements: { ent: 85, gpa: 3.0 },
            programs: ['Software Engineering', 'Data Science', 'Cybersecurity', 'IT Management', 'Digital Business', 'AI', 'Blockchain', 'Game Development'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 15, national: 15, scholarships: 70 },
            contacts: {
                website: 'https://astanait.edu.kz',
                phone: '+7 (7172) 64-57-10',
                email: 'info@astanait.edu.kz',
                address: 'пр. Мангилик ел, 55/11'
            },
            description: 'Специализированный IT-университет нового поколения. Партнёрство с Microsoft, AWS, Google.'
        },
        {
            id: 'astana-med',
            name: 'Astana Medical University',
            shortName: 'AMU',
            city: 'Астана',
            coords: [51.1438, 71.4703],
            type: 'medical',
            requirements: { ent: 90, gpa: 3.0 },
            programs: ['General Medicine', 'Dentistry', 'Pharmacy', 'Public Health', 'Nursing'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 8, national: 8, scholarships: 55 },
            contacts: {
                website: 'https://amu.edu.kz',
                phone: '+7 (7172) 53-94-47',
                email: 'info@amu.edu.kz',
                address: 'ул. Бейбитшилик, 49а'
            },
            description: 'Ведущий медицинский университет столицы Казахстана.'
        },
        {
            id: 'kazguu',
            name: 'M. Narikbayev KAZGUU University',
            shortName: 'KAZGUU/MNU',
            city: 'Астана',
            coords: [51.1280, 71.4300],
            type: 'law',
            requirements: { ent: 85, gpa: 3.0 },
            programs: ['Law', 'International Law', 'Business', 'MBA', 'Public Administration', 'Finance', 'IT Law'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 12, national: 12, scholarships: 55 },
            contacts: {
                website: 'https://kazguu.kz',
                phone: '+7 (7172) 70-20-20',
                email: 'info@kazguu.kz',
                address: 'ул. Коргалжын, 8'
            },
            description: 'Ведущий юридический и бизнес-университет Казахстана. Международные аккредитации FIBAA.'
        },
        {
            id: 'kazatu',
            name: 'S. Seifullin Kazakh Agro Technical University',
            shortName: 'KazATU',
            city: 'Астана',
            coords: [51.1500, 71.4500],
            type: 'agricultural',
            requirements: { ent: 75, gpa: 2.5 },
            programs: ['Agronomy', 'Veterinary', 'Food Technology', 'Agricultural Engineering', 'IT in Agriculture', 'Land Management'],
            ranking: { qsAsia: 551, qsWorld: null, hIndex: 12, national: 12, scholarships: 50 },
            contacts: {
                website: 'https://kazatu.edu.kz',
                phone: '+7 (7172) 31-74-19',
                email: 'info@kazatu.edu.kz',
                address: 'пр. Победы, 62'
            },
            description: 'Ведущий аграрный университет Казахстана. В топ-600 QS Asia.'
        },
        {
            id: 'turan-astana',
            name: 'Turan-Astana University',
            shortName: 'Turan-Astana',
            city: 'Астана',
            coords: [51.1350, 71.4200],
            type: 'private',
            requirements: { ent: 70, gpa: 2.5 },
            programs: ['Economics', 'Law', 'IT', 'Tourism', 'Design', 'Journalism', 'Finance'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 30, national: 30, scholarships: 40 },
            contacts: {
                website: 'https://turan-astana.kz',
                phone: '+7 (7172) 39-81-11',
                email: 'info@turan-astana.kz',
                address: 'ул. Ы. Дукенулы, 29'
            },
            description: 'Филиал Университета Туран в Астане. Практико-ориентированное образование.'
        },
        {
            id: 'kazuor',
            name: 'Kazakh University of Technology and Business',
            shortName: 'KUTB',
            city: 'Астана',
            coords: [51.1600, 71.4400],
            type: 'private',
            requirements: { ent: 65, gpa: 2.3 },
            programs: ['IT', 'Business', 'Economics', 'Law', 'Design', 'Tourism'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 35, national: 35, scholarships: 35 },
            contacts: {
                website: 'https://kueb.kz',
                phone: '+7 (7172) 27-71-64',
                email: 'info@kueb.kz',
                address: 'пр. Кабанбай батыра, 37'
            },
            description: 'Университет технологии и бизнеса в Астане.'
        }
    ],
    'almaty-city': [
        {
            id: 'kaznu',
            name: 'Al-Farabi Kazakh National University',
            shortName: 'KazNU',
            city: 'Алматы',
            coords: [43.2220, 76.9260],
            type: 'national',
            requirements: { ent: 100, gpa: 3.0 },
            programs: ['Natural Sciences', 'IT', 'Economics', 'Law', 'International Relations', 'Journalism', 'Physics', 'Chemistry', 'Biology', 'Medicine', 'Philosophy', 'Philology'],
            ranking: { qsAsia: 44, qsWorld: 220, hIndex: 2, national: 2, scholarships: 80 },
            contacts: {
                website: 'https://www.kaznu.kz',
                phone: '+7 (727) 377-33-33',
                email: 'info@kaznu.kz',
                address: 'пр. аль-Фараби, 71'
            },
            description: 'Крупнейший классический университет Казахстана. Входит в топ-50 QS Asia и топ-250 QS World.'
        },
        {
            id: 'satbayev',
            name: 'Satbayev University',
            shortName: 'Satbayev',
            city: 'Алматы',
            coords: [43.2365, 76.9435],
            type: 'technical',
            requirements: { ent: 80, gpa: 2.8 },
            programs: ['Engineering', 'IT', 'Geology', 'Mining', 'Architecture', 'Metallurgy', 'Oil & Gas', 'Cybersecurity'],
            ranking: { qsAsia: 124, qsWorld: 480, hIndex: 4, national: 4, scholarships: 65 },
            contacts: {
                website: 'https://satbayev.university',
                phone: '+7 (727) 292-76-79',
                email: 'info@satbayev.university',
                address: 'ул. Сатпаева, 22а'
            },
            description: 'Ведущий технический вуз Казахстана. Топ-500 QS World. Основан в 1934 году.'
        },
        {
            id: 'kbtu',
            name: 'Kazakh-British Technical University',
            shortName: 'KBTU',
            city: 'Алматы',
            coords: [43.2380, 76.9456],
            type: 'technical',
            requirements: { ent: 90, gpa: 2.8 },
            programs: ['IT', 'Oil & Gas', 'Business', 'Data Science', 'Engineering', 'Finance', 'Cybersecurity', 'AI'],
            ranking: { qsAsia: 401, qsWorld: null, hIndex: 7, national: 7, scholarships: 60 },
            contacts: {
                website: 'https://kbtu.kz',
                phone: '+7 (727) 272-19-65',
                email: 'admission@kbtu.kz',
                address: 'ул. Толе би, 59'
            },
            description: 'Технический университет с британскими стандартами образования. Аккредитация ABET.'
        },
        {
            id: 'kaznmu',
            name: 'Asfendiyarov Kazakh National Medical University',
            shortName: 'KazNMU',
            city: 'Алматы',
            coords: [43.2456, 76.9289],
            type: 'medical',
            requirements: { ent: 95, gpa: 3.2 },
            programs: ['General Medicine', 'Dentistry', 'Pharmacy', 'Public Health', 'Pediatrics', 'Nursing'],
            ranking: { qsAsia: 351, qsWorld: null, hIndex: 5, national: 5, scholarships: 60 },
            contacts: {
                website: 'https://kaznmu.kz',
                phone: '+7 (727) 338-70-90',
                email: 'info@kaznmu.kz',
                address: 'ул. Толе би, 94'
            },
            description: 'Старейший и крупнейший медицинский университет Казахстана. Основан в 1930 году.'
        },
        {
            id: 'kimep',
            name: 'KIMEP University',
            shortName: 'KIMEP',
            city: 'Алматы',
            coords: [43.2341, 76.9098],
            type: 'business',
            requirements: { ent: 85, gpa: 2.8 },
            programs: ['Business Administration', 'Finance', 'Law', 'Journalism', 'International Relations', 'Public Administration', 'Marketing', 'Accounting'],
            ranking: { qsAsia: 451, qsWorld: null, hIndex: 9, national: 9, scholarships: 55 },
            contacts: {
                website: 'https://kimep.kz',
                phone: '+7 (727) 270-42-00',
                email: 'admission@kimep.kz',
                address: 'пр. Абая, 4'
            },
            description: 'Первый независимый бизнес-университет Центральной Азии. Аккредитация AACSB и AMBA.'
        },
        {
            id: 'iitu',
            name: 'International IT University',
            shortName: 'IITU/MUIT',
            city: 'Алматы',
            coords: [43.2290, 76.8700],
            type: 'it',
            requirements: { ent: 75, gpa: 2.5 },
            programs: ['IT', 'Cybersecurity', 'Data Science', 'AI', 'Robotics', 'Digital Marketing', 'Game Development', 'Animation'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 14, national: 14, scholarships: 50 },
            contacts: {
                website: 'https://iitu.edu.kz',
                phone: '+7 (727) 330-85-85',
                email: 'admission@iitu.edu.kz',
                address: 'ул. Манаса, 34/1'
            },
            description: 'Специализированный IT-университет. Партнёрства с Cisco, Microsoft, Oracle.'
        },
        {
            id: 'narxoz',
            name: 'Narxoz University',
            shortName: 'Narxoz',
            city: 'Алматы',
            coords: [43.2183, 76.8967],
            type: 'business',
            requirements: { ent: 75, gpa: 2.5 },
            programs: ['Economics', 'Finance', 'Business', 'Marketing', 'Law', 'Tourism', 'IT', 'Journalism', 'Psychology'],
            ranking: { qsAsia: 501, qsWorld: null, hIndex: 11, national: 11, scholarships: 45 },
            contacts: {
                website: 'https://narxoz.kz',
                phone: '+7 (727) 377-11-11',
                email: 'admission@narxoz.kz',
                address: 'ул. Жандосова, 55'
            },
            description: 'Один из старейших экономических университетов Казахстана. Основан в 1963 году.'
        },
        {
            id: 'sdu',
            name: 'Suleyman Demirel University',
            shortName: 'SDU',
            city: 'Каскелен',
            coords: [43.2023, 76.6314],
            type: 'private',
            requirements: { ent: 75, gpa: 2.5 },
            programs: ['IT', 'Economics', 'Law', 'Medicine', 'Pedagogy', 'Engineering', 'Business', 'Philology', 'Design'],
            ranking: { qsAsia: 542, qsWorld: null, hIndex: 13, national: 13, scholarships: 50 },
            contacts: {
                website: 'https://sdu.edu.kz',
                phone: '+7 (727) 307-95-00',
                email: 'admission@sdu.edu.kz',
                address: 'ул. Абылай хана, 1/1, Каскелен'
            },
            description: 'Международный частный университет. 125+ программ бакалавриата. Erasmus+.'
        },
        {
            id: 'kaznaru',
            name: 'Kazakh National Agrarian Research University',
            shortName: 'KazNARU',
            city: 'Алматы',
            coords: [43.2547, 76.9269],
            type: 'agricultural',
            requirements: { ent: 80, gpa: 2.6 },
            programs: ['Agronomy', 'Veterinary', 'Food Technology', 'Biotechnology', 'IT in Agriculture', 'Ecology'],
            ranking: { qsAsia: 551, qsWorld: null, hIndex: 10, national: 10, scholarships: 55 },
            contacts: {
                website: 'https://www.kaznau.kz',
                phone: '+7 (727) 264-58-56',
                email: 'info@kaznau.kz',
                address: 'пр. Абая, 8'
            },
            description: 'Аграрно-исследовательский университет. Входит в топ-600 QS Asia.'
        },
        {
            id: 'aupet',
            name: 'Almaty University of Power Engineering and Telecommunications',
            shortName: 'AUPET',
            city: 'Алматы',
            coords: [43.2400, 76.9100],
            type: 'technical',
            requirements: { ent: 75, gpa: 2.5 },
            programs: ['Power Engineering', 'Telecommunications', 'IT', 'Electronics', 'Automation', 'Cybersecurity'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 13, national: 13, scholarships: 50 },
            contacts: {
                website: 'https://aupet.kz',
                phone: '+7 (727) 292-69-54',
                email: 'info@aupet.kz',
                address: 'ул. Байтурсынова, 126/1'
            },
            description: 'Технический университет в области энергетики и телекоммуникаций.'
        },
        {
            id: 'dmuk',
            name: 'De Montfort University Kazakhstan',
            shortName: 'DMUK',
            city: 'Алматы',
            coords: [43.2200, 76.9300],
            type: 'international',
            requirements: { ent: null, gpa: 3.0 },
            programs: ['Computer Science', 'Cybersecurity', 'AI', 'Business', 'Finance', 'Marketing', 'Graphic Design', 'Fashion Design'],
            ranking: { qsAsia: null, qsWorld: 715, hIndex: 25, national: 25, scholarships: 60 },
            contacts: {
                website: 'https://dmuk.edu.kz',
                phone: '+7 (727) 311-01-01',
                email: 'admissions@dmuk.edu.kz',
                address: 'Esentai City, Алматы'
            },
            description: 'Первый британский университет в Казахстане. Британский диплом, признанный в 196 странах.'
        },
        {
            id: 'atu',
            name: 'Almaty Technological University',
            shortName: 'ATU',
            city: 'Алматы',
            coords: [43.2400, 76.9100],
            type: 'technical',
            requirements: { ent: 65, gpa: 2.3 },
            programs: ['Food Technology', 'Fashion Design', 'Chemical Engineering', 'Automation', 'IT', 'Economics'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 28, national: 28, scholarships: 40 },
            contacts: {
                website: 'https://atu.edu.kz',
                phone: '+7 (727) 293-52-62',
                email: 'admission@atu.edu.kz',
                address: 'ул. Толе би, 100'
            },
            description: 'Технологический университет. Специализация на пищевых технологиях и лёгкой промышленности.'
        },
        {
            id: 'turan',
            name: 'Turan University',
            shortName: 'Turan',
            city: 'Алматы',
            coords: [43.2350, 76.9200],
            type: 'private',
            requirements: { ent: 70, gpa: 2.5 },
            programs: ['Economics', 'Finance', 'Law', 'IT', 'Tourism', 'Design', 'Journalism', 'International Relations'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 20, national: 20, scholarships: 45 },
            contacts: {
                website: 'https://turan-edu.kz',
                phone: '+7 (727) 260-40-00',
                email: 'info@turan-edu.kz',
                address: 'ул. Сатпаева, 16'
            },
            description: 'Один из ведущих частных университетов. Основан в 1992 году.'
        },
        {
            id: 'almau',
            name: 'Almaty Management University',
            shortName: 'AlmaU',
            city: 'Алматы',
            coords: [43.2250, 76.9150],
            type: 'business',
            requirements: { ent: 80, gpa: 2.8 },
            programs: ['Business Administration', 'Finance', 'Marketing', 'Management', 'IT Management', 'HR'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 22, national: 22, scholarships: 45 },
            contacts: {
                website: 'https://almau.edu.kz',
                phone: '+7 (727) 302-22-22',
                email: 'info@almau.edu.kz',
                address: 'ул. Розыбакиева, 227'
            },
            description: 'Бизнес-университет с международными аккредитациями. AMBA, EFMD.'
        },
        {
            id: 'dku',
            name: 'German-Kazakh University',
            shortName: 'DKU',
            city: 'Алматы',
            coords: [43.2300, 76.9400],
            type: 'international',
            requirements: { ent: 85, gpa: 3.0 },
            programs: ['Engineering', 'IT', 'Logistics', 'Economics', 'Management', 'Renewable Energy'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 24, national: 24, scholarships: 55 },
            contacts: {
                website: 'https://dku.kz',
                phone: '+7 (727) 355-05-55',
                email: 'info@dku.kz',
                address: 'ул. Пушкина, 111'
            },
            description: 'Казахстанско-Немецкий университет. Двойные дипломы с немецкими вузами.'
        },
        {
            id: 'kazgasa',
            name: 'Kazakh Leading Academy of Architecture and Civil Engineering',
            shortName: 'KazGASA',
            city: 'Алматы',
            coords: [43.2420, 76.9320],
            type: 'technical',
            requirements: { ent: 80, gpa: 2.8 },
            programs: ['Architecture', 'Civil Engineering', 'Design', 'Urban Planning', 'Construction'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 26, national: 26, scholarships: 50 },
            contacts: {
                website: 'https://kazgasa.kz',
                phone: '+7 (727) 272-14-23',
                email: 'info@kazgasa.kz',
                address: 'ул. Рыскулбекова, 28'
            },
            description: 'Ведущий архитектурно-строительный университет Казахстана.'
        },
        {
            id: 'kazwpu',
            name: 'Kazakh National Women\'s Teacher Training University',
            shortName: 'KazWPU',
            city: 'Алматы',
            coords: [43.2500, 76.9350],
            type: 'pedagogical',
            requirements: { ent: 75, gpa: 2.5 },
            programs: ['Pedagogy', 'Psychology', 'Primary Education', 'Preschool Education', 'Social Work'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 27, national: 27, scholarships: 55 },
            contacts: {
                website: 'https://kazmkpu.kz',
                phone: '+7 (727) 233-18-47',
                email: 'info@kazmkpu.kz',
                address: 'пр. Достык, 50'
            },
            description: 'Педагогический университет. Специализация на подготовке учителей.'
        },
        {
            id: 'kainar',
            name: 'Kainar Academy',
            shortName: 'Kainar',
            city: 'Алматы',
            coords: [43.2180, 76.9050],
            type: 'private',
            requirements: { ent: 60, gpa: 2.3 },
            programs: ['Law', 'Economics', 'IT', 'Journalism', 'Psychology', 'Design'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 32, national: 32, scholarships: 35 },
            contacts: {
                website: 'https://kainar-edu.kz',
                phone: '+7 (727) 309-58-58',
                email: 'info@kainar-edu.kz',
                address: 'ул. Сатпаева, 7а'
            },
            description: 'Частная академия. Доступное образование.'
        },
        {
            id: 'uib',
            name: 'University of International Business',
            shortName: 'UIB',
            city: 'Алматы',
            coords: [43.2280, 76.9180],
            type: 'business',
            requirements: { ent: 70, gpa: 2.5 },
            programs: ['Business', 'Finance', 'Law', 'IT', 'Tourism', 'Marketing', 'International Relations'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 29, national: 29, scholarships: 40 },
            contacts: {
                website: 'https://uib.kz',
                phone: '+7 (727) 259-80-80',
                email: 'info@uib.kz',
                address: 'ул. Абая, 8а'
            },
            description: 'Университет международного бизнеса. Партнёрства с зарубежными вузами.'
        },
        {
            id: 'caspian',
            name: 'Caspian University',
            shortName: 'Caspian',
            city: 'Алматы',
            coords: [43.2320, 76.9250],
            type: 'private',
            requirements: { ent: 65, gpa: 2.5 },
            programs: ['Law', 'Economics', 'IT', 'International Relations', 'Psychology', 'Journalism'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 31, national: 31, scholarships: 40 },
            contacts: {
                website: 'https://cu.edu.kz',
                phone: '+7 (727) 250-69-35',
                email: 'info@cu.edu.kz',
                address: 'ул. Сейфуллина, 521'
            },
            description: 'Каспийский университет. Юридические и экономические программы.'
        },
        {
            id: 'kazart',
            name: 'Kazakh National Academy of Arts',
            shortName: 'KazNAA',
            city: 'Алматы',
            coords: [43.2380, 76.9280],
            type: 'arts',
            requirements: { ent: 70, gpa: 2.5, creative: true },
            programs: ['Music', 'Theatre', 'Film', 'Fine Arts', 'Choreography', 'Design'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 33, national: 33, scholarships: 50 },
            contacts: {
                website: 'https://kaznai.kz',
                phone: '+7 (727) 264-85-86',
                email: 'info@kaznai.kz',
                address: 'ул. Панфилова, 127'
            },
            description: 'Национальная академия искусств. Подготовка творческих специалистов.'
        }
    ],
    'karaganda-region': [
        {
            id: 'karaganda-buketov',
            name: 'E.A. Buketov Karaganda University',
            shortName: 'KarU',
            city: 'Караганда',
            coords: [49.8028, 73.0950],
            type: 'regional',
            requirements: { ent: 75, gpa: 2.5 },
            programs: ['Pedagogy', 'Philology', 'History', 'Mathematics', 'IT', 'Economics', 'Chemistry', 'Physics', 'Biology', 'Law'],
            ranking: { qsAsia: 501, qsWorld: null, hIndex: 6, national: 6, scholarships: 50 },
            contacts: {
                website: 'https://buketov.edu.kz',
                phone: '+7 (7212) 35-63-98',
                email: 'info@buketov.edu.kz',
                address: 'ул. Университетская, 28'
            },
            description: 'Крупнейший классический университет Центрального Казахстана. Входит в QS Asia.'
        },
        {
            id: 'karaganda-med',
            name: 'Karaganda Medical University',
            shortName: 'KMU',
            city: 'Караганда',
            coords: [49.7900, 73.0800],
            type: 'medical',
            requirements: { ent: 85, gpa: 2.8 },
            programs: ['General Medicine', 'Dentistry', 'Pharmacy', 'Public Health', 'Nursing'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 16, national: 16, scholarships: 55 },
            contacts: {
                website: 'https://kgmu.kz',
                phone: '+7 (7212) 51-89-31',
                email: 'info@kgmu.kz',
                address: 'ул. Гоголя, 40'
            },
            description: 'Ведущий медицинский университет Центрального Казахстана.'
        },
        {
            id: 'karaganda-tech',
            name: 'Karaganda Technical University',
            shortName: 'KarTU',
            city: 'Караганда',
            coords: [49.8100, 73.1100],
            type: 'technical',
            requirements: { ent: 75, gpa: 2.5 },
            programs: ['Mining', 'Metallurgy', 'IT', 'Mechanical Engineering', 'Energy', 'Automation'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 17, national: 17, scholarships: 55 },
            contacts: {
                website: 'https://ktu.edu.kz',
                phone: '+7 (7212) 56-59-35',
                email: 'info@ktu.edu.kz',
                address: 'бул. Мира, 56'
            },
            description: 'Технический университет, готовящий специалистов для горнодобывающей отрасли.'
        },
        {
            id: 'karaganda-econ',
            name: 'Karaganda University of Kazpotrebsoyuz',
            shortName: 'KEU',
            city: 'Караганда',
            coords: [49.8050, 73.0900],
            type: 'business',
            requirements: { ent: 70, gpa: 2.5 },
            programs: ['Economics', 'Finance', 'Marketing', 'Tourism', 'IT', 'Law', 'Management'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 23, national: 23, scholarships: 45 },
            contacts: {
                website: 'https://keu.kz',
                phone: '+7 (7212) 44-16-24',
                email: 'info@keu.kz',
                address: 'ул. Академическая, 9'
            },
            description: 'Экономический университет Караганды.'
        }
    ],
    'shymkent-city': [
        {
            id: 'auezov',
            name: 'M. Auezov South Kazakhstan University',
            shortName: 'SKU',
            city: 'Шымкент',
            coords: [42.3200, 69.5967],
            type: 'regional',
            requirements: { ent: 70, gpa: 2.5 },
            programs: ['Engineering', 'Pedagogy', 'IT', 'Chemistry', 'Economics', 'Oil & Gas', 'Law', 'Medicine'],
            ranking: { qsAsia: 451, qsWorld: null, hIndex: 18, national: 18, scholarships: 45 },
            contacts: {
                website: 'https://auezov.edu.kz',
                phone: '+7 (7252) 21-16-32',
                email: 'info@auezov.edu.kz',
                address: 'пр. Тауке хана, 5'
            },
            description: 'Крупнейший региональный университет юга Казахстана. Входит в QS Asia.'
        },
        {
            id: 'skma',
            name: 'South Kazakhstan Medical Academy',
            shortName: 'SKMA',
            city: 'Шымкент',
            coords: [42.3156, 69.5700],
            type: 'medical',
            requirements: { ent: 85, gpa: 2.8 },
            programs: ['General Medicine', 'Dentistry', 'Pharmacy', 'Pediatrics', 'Public Health'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 20, national: 20, scholarships: 50 },
            contacts: {
                website: 'https://skma.edu.kz',
                phone: '+7 (7252) 39-95-01',
                email: 'info@skma.edu.kz',
                address: 'пл. Аль-Фараби, 1'
            },
            description: 'Медицинская академия, готовящая врачей для южного региона.'
        },
        {
            id: 'shymkent-uni',
            name: 'Shymkent University',
            shortName: 'ShU',
            city: 'Шымкент',
            coords: [42.3100, 69.5800],
            type: 'private',
            requirements: { ent: 65, gpa: 2.3 },
            programs: ['Economics', 'Law', 'IT', 'Pedagogy', 'Tourism'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 38, national: 38, scholarships: 35 },
            contacts: {
                website: 'https://shimkent-university.kz',
                phone: '+7 (7252) 53-30-00',
                email: 'info@shimkent-university.kz',
                address: 'ул. Мадели кожа, 37'
            },
            description: 'Частный университет Шымкента.'
        }
    ],
    'semey-city': [
        {
            id: 'semey-med',
            name: 'Semey Medical University',
            shortName: 'SMU',
            city: 'Семей',
            coords: [50.4111, 80.2275],
            type: 'medical',
            requirements: { ent: 85, gpa: 2.8 },
            programs: ['General Medicine', 'Dentistry', 'Pharmacy', 'Public Health', 'Nursing'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 19, national: 19, scholarships: 55 },
            contacts: {
                website: 'https://semeymedical.edu.kz',
                phone: '+7 (7222) 56-99-79',
                email: 'info@semeymedical.edu.kz',
                address: 'ул. Абая Кунанбаева, 103'
            },
            description: 'Медицинский университет Восточного Казахстана.'
        },
        {
            id: 'shakarim',
            name: 'Shakarim University',
            shortName: 'ShakU',
            city: 'Семей',
            coords: [50.4200, 80.2400],
            type: 'regional',
            requirements: { ent: 70, gpa: 2.5 },
            programs: ['Pedagogy', 'Agriculture', 'IT', 'Economics', 'Engineering', 'Veterinary', 'Law'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 21, national: 21, scholarships: 45 },
            contacts: {
                website: 'https://shakarim.edu.kz',
                phone: '+7 (7222) 35-45-67',
                email: 'info@shakarim.edu.kz',
                address: 'ул. Глинки, 20а'
            },
            description: 'Региональный университет Восточного Казахстана.'
        }
    ],
    'turkestan-region': [
        {
            id: 'iktu',
            name: 'Khoja Akhmet Yassawi International Kazakh-Turkish University',
            shortName: 'IKTU',
            city: 'Туркестан',
            coords: [43.3000, 68.2500],
            type: 'international',
            requirements: { ent: 80, gpa: 2.8 },
            programs: ['Theology', 'History', 'Philology', 'Law', 'IT', 'Medicine', 'Engineering', 'Economics', 'Pedagogy'],
            ranking: { qsAsia: 401, qsWorld: null, hIndex: 22, national: 22, scholarships: 60 },
            contacts: {
                website: 'https://ayu.edu.kz',
                phone: '+7 (72533) 6-36-45',
                email: 'info@ayu.edu.kz',
                address: 'ул. Б. Саттарханов, 29'
            },
            description: 'Международный университет с особым статусом. Совместный проект Казахстана и Турции.'
        }
    ],
    'ust-kamenogorsk': [
        {
            id: 'eksu',
            name: 'D. Serikbayev East Kazakhstan Technical University',
            shortName: 'EKTU',
            city: 'Усть-Каменогорск',
            coords: [49.9480, 82.6283],
            type: 'technical',
            requirements: { ent: 75, gpa: 2.5 },
            programs: ['Mining', 'Metallurgy', 'IT', 'Engineering', 'Architecture', 'Energy', 'Automation'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 25, national: 25, scholarships: 50 },
            contacts: {
                website: 'https://ektu.kz',
                phone: '+7 (7232) 54-04-16',
                email: 'info@ektu.kz',
                address: 'ул. Серикбаева, 19'
            },
            description: 'Ведущий технический университет Восточного Казахстана.'
        },
        {
            id: 'vku',
            name: 'S. Amanzholov East Kazakhstan University',
            shortName: 'VKU',
            city: 'Усть-Каменогорск',
            coords: [49.9500, 82.6300],
            type: 'regional',
            requirements: { ent: 70, gpa: 2.5 },
            programs: ['Pedagogy', 'Philology', 'History', 'Mathematics', 'IT', 'Economics', 'Law', 'Biology'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 34, national: 34, scholarships: 45 },
            contacts: {
                website: 'https://vku.edu.kz',
                phone: '+7 (7232) 25-15-57',
                email: 'info@vku.edu.kz',
                address: 'ул. 30 Гвардейской дивизии, 34'
            },
            description: 'Классический университет Восточного Казахстана.'
        }
    ],
    'petropavlovsk': [
        {
            id: 'nksu',
            name: 'M. Kozybayev North Kazakhstan University',
            shortName: 'NKSU',
            city: 'Петропавловск',
            coords: [54.8753, 69.1620],
            type: 'regional',
            requirements: { ent: 70, gpa: 2.5 },
            programs: ['Pedagogy', 'Agriculture', 'IT', 'Economics', 'Law', 'Engineering', 'Philology', 'History'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 36, national: 36, scholarships: 45 },
            contacts: {
                website: 'https://nkzu.kz',
                phone: '+7 (7152) 49-32-33',
                email: 'info@nkzu.kz',
                address: 'ул. Пушкина, 86'
            },
            description: 'Региональный университет Северного Казахстана.'
        }
    ],
    'uralsk': [
        {
            id: 'wkau',
            name: 'M. Utemisov West Kazakhstan University',
            shortName: 'WKU',
            city: 'Уральск',
            coords: [51.2333, 51.3667],
            type: 'regional',
            requirements: { ent: 70, gpa: 2.5 },
            programs: ['Pedagogy', 'IT', 'Economics', 'Law', 'History', 'Philology', 'Biology', 'Chemistry'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 37, national: 37, scholarships: 45 },
            contacts: {
                website: 'https://wkau.kz',
                phone: '+7 (7112) 51-38-17',
                email: 'info@wkau.kz',
                address: 'пр. Н. Назарбаева, 162'
            },
            description: 'Региональный университет Западного Казахстана.'
        },
        {
            id: 'wkatu',
            name: 'Zhangir Khan West Kazakhstan Agrarian Technical University',
            shortName: 'WKATU',
            city: 'Уральск',
            coords: [51.2400, 51.3700],
            type: 'agricultural',
            requirements: { ent: 65, gpa: 2.3 },
            programs: ['Agronomy', 'Veterinary', 'Engineering', 'IT', 'Economics', 'Food Technology'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 42, national: 42, scholarships: 45 },
            contacts: {
                website: 'https://wkau.edu.kz',
                phone: '+7 (7112) 50-16-95',
                email: 'info@wkau.edu.kz',
                address: 'ул. Жангир хана, 51'
            },
            description: 'Аграрно-технический университет Западного Казахстана.'
        }
    ],
    'kostanay': [
        {
            id: 'ksu',
            name: 'A. Baitursynov Kostanay Regional University',
            shortName: 'KRU',
            city: 'Костанай',
            coords: [53.2144, 63.6246],
            type: 'regional',
            requirements: { ent: 70, gpa: 2.5 },
            programs: ['Pedagogy', 'Agriculture', 'IT', 'Economics', 'Law', 'Engineering', 'Philology'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 39, national: 39, scholarships: 45 },
            contacts: {
                website: 'https://ksu.edu.kz',
                phone: '+7 (7142) 51-11-21',
                email: 'info@ksu.edu.kz',
                address: 'ул. Байтурсынова, 47'
            },
            description: 'Региональный университет Костанайской области.'
        },
        {
            id: 'kstu',
            name: 'Kostanay Engineering and Economics University',
            shortName: 'KEEU',
            city: 'Костанай',
            coords: [53.2200, 63.6300],
            type: 'technical',
            requirements: { ent: 65, gpa: 2.3 },
            programs: ['Engineering', 'IT', 'Economics', 'Agriculture', 'Automation'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 45, national: 45, scholarships: 40 },
            contacts: {
                website: 'https://kineu.kz',
                phone: '+7 (7142) 54-87-48',
                email: 'info@kineu.kz',
                address: 'ул. Чернышевского, 59'
            },
            description: 'Инженерно-экономический университет Костаная.'
        }
    ],
    'aktau': [
        {
            id: 'yessenov',
            name: 'Sh. Yessenov Caspian University of Technologies and Engineering',
            shortName: 'Yessenov Uni',
            city: 'Актау',
            coords: [43.6500, 51.1500],
            type: 'regional',
            requirements: { ent: 75, gpa: 2.5 },
            programs: ['Oil & Gas', 'Engineering', 'IT', 'Economics', 'Law', 'Ecology', 'Chemistry'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 40, national: 40, scholarships: 50 },
            contacts: {
                website: 'https://yu.edu.kz',
                phone: '+7 (7292) 30-36-05',
                email: 'info@yu.edu.kz',
                address: 'микрорайон 32'
            },
            description: 'Каспийский университет технологий и инжиниринга. Специализация на нефтегазе.'
        }
    ],
    'atyrau': [
        {
            id: 'atyrau-uni',
            name: 'Kh. Dosmukhamedov Atyrau University',
            shortName: 'AU',
            city: 'Атырау',
            coords: [46.8000, 51.8833],
            type: 'regional',
            requirements: { ent: 70, gpa: 2.5 },
            programs: ['Oil & Gas', 'IT', 'Economics', 'Law', 'Pedagogy', 'Philology', 'Chemistry'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 41, national: 41, scholarships: 45 },
            contacts: {
                website: 'https://asu.edu.kz',
                phone: '+7 (7122) 27-44-95',
                email: 'info@asu.edu.kz',
                address: 'ул. Студенческая, 212'
            },
            description: 'Региональный университет нефтяного региона.'
        },
        {
            id: 'atyrau-oil',
            name: 'Atyrau University of Oil and Gas',
            shortName: 'AUOG',
            city: 'Атырау',
            coords: [46.8100, 51.8900],
            type: 'technical',
            requirements: { ent: 80, gpa: 2.8 },
            programs: ['Oil & Gas', 'Chemical Engineering', 'Automation', 'IT', 'Ecology'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 43, national: 43, scholarships: 55 },
            contacts: {
                website: 'https://aogu.edu.kz',
                phone: '+7 (7122) 21-31-01',
                email: 'info@aogu.edu.kz',
                address: 'ул. Баймуханова, 45а'
            },
            description: 'Университет нефти и газа. Специализация на нефтегазовой отрасли.'
        }
    ],
    'kokshetau': [
        {
            id: 'ku',
            name: 'Sh. Ualikhanov Kokshetau University',
            shortName: 'KU',
            city: 'Кокшетау',
            coords: [53.2833, 69.4000],
            type: 'regional',
            requirements: { ent: 70, gpa: 2.5 },
            programs: ['Pedagogy', 'IT', 'Economics', 'Law', 'History', 'Philology', 'Biology', 'Mathematics'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 44, national: 44, scholarships: 45 },
            contacts: {
                website: 'https://shoqan.edu.kz',
                phone: '+7 (7162) 25-42-92',
                email: 'info@shoqan.edu.kz',
                address: 'ул. Абая, 76'
            },
            description: 'Региональный университет Акмолинской области.'
        }
    ],
    'taldykorgan': [
        {
            id: 'zhetysu',
            name: 'I. Zhansugurov Zhetysu University',
            shortName: 'ZhU',
            city: 'Талдыкорган',
            coords: [45.0167, 78.3667],
            type: 'regional',
            requirements: { ent: 70, gpa: 2.5 },
            programs: ['Pedagogy', 'Agriculture', 'IT', 'Economics', 'Law', 'History', 'Biology'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 46, national: 46, scholarships: 45 },
            contacts: {
                website: 'https://zhetysu.edu.kz',
                phone: '+7 (7282) 27-13-57',
                email: 'info@zhetysu.edu.kz',
                address: 'ул. Жансугурова, 187а'
            },
            description: 'Региональный университет Жетысу.'
        }
    ],
    'kyzylorda': [
        {
            id: 'korkyt',
            name: 'Korkyt Ata Kyzylorda University',
            shortName: 'KorkytU',
            city: 'Кызылорда',
            coords: [44.8528, 65.5092],
            type: 'regional',
            requirements: { ent: 70, gpa: 2.5 },
            programs: ['Pedagogy', 'IT', 'Economics', 'Law', 'Agriculture', 'History', 'Philology'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 47, national: 47, scholarships: 45 },
            contacts: {
                website: 'https://korkyt.edu.kz',
                phone: '+7 (7242) 26-17-40',
                email: 'info@korkyt.edu.kz',
                address: 'ул. Айтеке би, 29А'
            },
            description: 'Региональный университет Кызылординской области.'
        }
    ],
    'taraz': [
        {
            id: 'tau',
            name: 'M.Kh. Dulaty Taraz Regional University',
            shortName: 'TRU',
            city: 'Тараз',
            coords: [42.9000, 71.3667],
            type: 'regional',
            requirements: { ent: 70, gpa: 2.5 },
            programs: ['Pedagogy', 'IT', 'Economics', 'Law', 'Engineering', 'History', 'Philology', 'Chemistry'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 48, national: 48, scholarships: 45 },
            contacts: {
                website: 'https://tarsu.edu.kz',
                phone: '+7 (7262) 45-36-64',
                email: 'info@tarsu.edu.kz',
                address: 'ул. Толе би, 40'
            },
            description: 'Региональный университет Жамбылской области.'
        }
    ],
    'pavlodar-region': [
        {
            id: 'toraighyrov',
            name: 'Toraighyrov University',
            shortName: 'TU',
            city: 'Павлодар',
            coords: [52.2900, 76.9600],
            type: 'regional',
            requirements: { ent: 70, gpa: 2.5 },
            programs: ['Engineering', 'IT', 'Pedagogy', 'Agriculture', 'Economics', 'Law', 'Philology'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 23, national: 23, scholarships: 45 },
            contacts: {
                website: 'https://tou.edu.kz',
                phone: '+7 (7182) 67-36-69',
                email: 'info@tou.edu.kz',
                address: 'ул. Ломова, 64'
            },
            description: 'Ведущий университет Павлодарской области.'
        },
        {
            id: 'innovativ',
            name: 'Innovative University of Eurasia',
            shortName: 'IUE',
            city: 'Павлодар',
            coords: [52.2850, 76.9550],
            type: 'private',
            requirements: { ent: 65, gpa: 2.3 },
            programs: ['IT', 'Economics', 'Law', 'Pedagogy', 'Design'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 49, national: 49, scholarships: 40 },
            contacts: {
                website: 'https://ineu.edu.kz',
                phone: '+7 (7182) 55-68-48',
                email: 'info@ineu.edu.kz',
                address: 'ул. М. Горького, 102/4'
            },
            description: 'Инновационный университет Евразии.'
        }
    ],
    'aktobe-region': [
        {
            id: 'zhubanov',
            name: 'K. Zhubanov Aktobe Regional University',
            shortName: 'ARU',
            city: 'Актобе',
            coords: [50.2839, 57.2066],
            type: 'regional',
            requirements: { ent: 70, gpa: 2.5 },
            programs: ['Pedagogy', 'Philology', 'History', 'IT', 'Economics', 'Law', 'Chemistry', 'Biology'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 24, national: 24, scholarships: 45 },
            contacts: {
                website: 'https://arsu.kz',
                phone: '+7 (7132) 56-36-43',
                email: 'info@arsu.kz',
                address: 'пр. А. Молдагуловой, 34'
            },
            description: 'Региональный университет западного Казахстана.'
        }
    ]
};

// Границы Казахстана для ограничения карты
const kazakhstanBounds = [
    [40.5, 46.5],
    [55.5, 87.5]
];

// Центр Казахстана
const kazakhstanCenter = [48.0196, 66.9237];

// Функция для получения всех университетов как массив
function getAllUniversities() {
    const all = [];
    for (const region in universitiesByRegion) {
        all.push(...universitiesByRegion[region]);
    }
    return all;
}

// Функция для получения общего количества университетов
function getTotalUniversitiesCount() {
    return getAllUniversities().length;
}

// Функция для поиска университета по ID
function getUniversityById(id) {
    for (const region in universitiesByRegion) {
        const uni = universitiesByRegion[region].find(u => u.id === id);
        if (uni) return uni;
    }
    return null;
}

