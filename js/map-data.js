// Данные по городам/областям Казахстана с топ-вузами
// Источники: QS Asia Rankings 2024, QS World Rankings 2024, kz.h-index.com

const kazakhstanRegions = [
    { id: 'astana-city', name: 'Астана', center: [51.169392, 71.449074], type: 'city' },
    { id: 'almaty-city', name: 'Алматы', center: [43.238949, 76.945465], type: 'city' },
    { id: 'karaganda-region', name: 'Караганда', center: [49.8028, 73.0950], type: 'city' },
    { id: 'shymkent-city', name: 'Шымкент', center: [42.315514, 69.586907], type: 'city' },
    { id: 'pavlodar-region', name: 'Павлодар', center: [52.2833, 76.9500], type: 'city' },
    { id: 'aktobe-region', name: 'Актобе', center: [50.2839, 57.2066], type: 'city' },
    { id: 'semey-city', name: 'Семей', center: [50.4111, 80.2275], type: 'city' },
    { id: 'turkestan-region', name: 'Туркестан', center: [43.297222, 68.251667], type: 'city' }
];

// Университеты Казахстана по рейтингам QS Asia 2024 и QS World 2024
// h-index данные с kz.h-index.com
const universitiesByRegion = {
    'astana-city': [
        {
            id: 'nu',
            name: 'Nazarbayev University',
            shortName: 'NU',
            city: 'Астана',
            coords: [51.0906, 71.3986],
            type: 'research',
            requirements: { ielts: 6.5, toefl: 79, sat: 1200, gpa: 3.5 },
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
            requirements: { ielts: 5.5, toefl: 60, ent: 95, gpa: 3.0 },
            programs: ['IT', 'Mathematics', 'Physics', 'Law', 'Economics', 'Philology', 'International Relations', 'Chemistry'],
            ranking: { qsAsia: 191, qsWorld: null, hIndex: 3, national: 3, scholarships: 65 },
            contacts: {
                website: 'https://enu.kz',
                phone: '+7 (7172) 70-95-00',
                email: 'info@enu.kz',
                address: 'ул. Сатпаева, 2'
            },
            description: 'Крупнейший классический университет столицы. Стабильно в топ-200 QS Asia.'
        },
        {
            id: 'astana-it',
            name: 'Astana IT University',
            shortName: 'AITU',
            city: 'Астана',
            coords: [51.0899, 71.4170],
            type: 'it',
            requirements: { ielts: 5.5, toefl: 60, ent: 85, gpa: 3.0 },
            programs: ['Software Engineering', 'Data Science', 'Cybersecurity', 'IT Management', 'Digital Business', 'AI'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 15, national: 15, scholarships: 70 },
            contacts: {
                website: 'https://astanait.edu.kz',
                phone: '+7 (7172) 64-57-10',
                email: 'info@astanait.edu.kz',
                address: 'пр. Мангилик ел, 55/11'
            },
            description: 'Специализированный IT-университет нового поколения. Партнёрство с мировыми IT-компаниями.'
        },
        {
            id: 'astana-med',
            name: 'Astana Medical University',
            shortName: 'AMU',
            city: 'Астана',
            coords: [51.1438, 71.4703],
            type: 'medical',
            requirements: { ielts: 5.5, toefl: 55, ent: 90, gpa: 3.0 },
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
            id: 'kazatu',
            name: 'S. Seifullin Kazakh Agro Technical University',
            shortName: 'KazATU',
            city: 'Астана',
            coords: [51.1500, 71.4500],
            type: 'agricultural',
            requirements: { ielts: 5.0, toefl: 45, ent: 75, gpa: 2.5 },
            programs: ['Agronomy', 'Veterinary', 'Food Technology', 'Agricultural Engineering', 'IT in Agriculture'],
            ranking: { qsAsia: '551-600', qsWorld: null, hIndex: 12, national: 12, scholarships: 50 },
            contacts: {
                website: 'https://kazatu.edu.kz',
                phone: '+7 (7172) 31-74-19',
                email: 'info@kazatu.edu.kz',
                address: 'пр. Победы, 62'
            },
            description: 'Ведущий аграрный университет Казахстана. В топ-600 QS Asia.'
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
            requirements: { ielts: 5.5, toefl: 60, ent: 100, gpa: 3.0 },
            programs: ['Natural Sciences', 'IT', 'Economics', 'Law', 'International Relations', 'Journalism', 'Physics', 'Chemistry', 'Biology'],
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
            requirements: { ielts: 5.0, toefl: 50, ent: 80, gpa: 2.8 },
            programs: ['Engineering', 'IT', 'Geology', 'Mining', 'Architecture', 'Metallurgy', 'Oil & Gas'],
            ranking: { qsAsia: 124, qsWorld: null, hIndex: 4, national: 4, scholarships: 65 },
            contacts: {
                website: 'https://satbayev.university',
                phone: '+7 (727) 292-76-79',
                email: 'info@satbayev.university',
                address: 'ул. Сатпаева, 22а'
            },
            description: 'Ведущий технический вуз Казахстана. Основан в 1934 году как Казахский горно-металлургический институт.'
        },
        {
            id: 'kbtu',
            name: 'Kazakh-British Technical University',
            shortName: 'KBTU',
            city: 'Алматы',
            coords: [43.2380, 76.9456],
            type: 'technical',
            requirements: { ielts: 5.5, toefl: 55, ent: 90, gpa: 2.8 },
            programs: ['IT', 'Oil & Gas', 'Business', 'Data Science', 'Engineering', 'Finance'],
            ranking: { qsAsia: '401-450', qsWorld: null, hIndex: 7, national: 7, scholarships: 60 },
            contacts: {
                website: 'https://kbtu.kz',
                phone: '+7 (727) 272-19-65',
                email: 'admission@kbtu.kz',
                address: 'ул. Толе би, 59'
            },
            description: 'Технический университет с британскими стандартами образования. Сильные IT и нефтегазовые программы.'
        },
        {
            id: 'kaznmu',
            name: 'Asfendiyarov Kazakh National Medical University',
            shortName: 'KazNMU',
            city: 'Алматы',
            coords: [43.2456, 76.9289],
            type: 'medical',
            requirements: { ielts: 5.5, toefl: 55, ent: 95, gpa: 3.2 },
            programs: ['General Medicine', 'Dentistry', 'Pharmacy', 'Public Health', 'Pediatrics'],
            ranking: { qsAsia: '351-400', qsWorld: null, hIndex: 5, national: 5, scholarships: 60 },
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
            requirements: { ielts: 6.0, toefl: 60, ent: 85, gpa: 2.8 },
            programs: ['Business Administration', 'Finance', 'Law', 'Journalism', 'International Relations', 'Public Administration'],
            ranking: { qsAsia: '451-500', qsWorld: null, hIndex: 9, national: 9, scholarships: 55 },
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
            shortName: 'IITU',
            city: 'Алматы',
            coords: [43.2290, 76.8700],
            type: 'it',
            requirements: { ielts: 5.0, toefl: 50, ent: 75, gpa: 2.5 },
            programs: ['IT', 'Cybersecurity', 'Data Science', 'AI', 'Robotics', 'Digital Marketing', 'Game Development'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 14, national: 14, scholarships: 50 },
            contacts: {
                website: 'https://iitu.edu.kz',
                phone: '+7 (727) 330-85-85',
                email: 'admission@iitu.edu.kz',
                address: 'ул. Манаса, 34/1'
            },
            description: 'Специализированный IT-университет с современными программами в области информационных технологий.'
        },
        {
            id: 'narxoz',
            name: 'Narxoz University',
            shortName: 'Narxoz',
            city: 'Алматы',
            coords: [43.2183, 76.8967],
            type: 'business',
            requirements: { ielts: 5.5, toefl: 50, ent: 75, gpa: 2.5 },
            programs: ['Economics', 'Finance', 'Business', 'Marketing', 'Law', 'Tourism', 'IT'],
            ranking: { qsAsia: '501-550', qsWorld: null, hIndex: 11, national: 11, scholarships: 45 },
            contacts: {
                website: 'https://narxoz.kz',
                phone: '+7 (727) 377-11-11',
                email: 'admission@narxoz.kz',
                address: 'ул. Жандосова, 55'
            },
            description: 'Один из старейших экономических университетов Казахстана. Основан в 1963 году.'
        },
        {
            id: 'kaznaru',
            name: 'Kazakh National Agrarian Research University',
            shortName: 'KazNARU',
            city: 'Алматы',
            coords: [43.2547, 76.9269],
            type: 'agricultural',
            requirements: { ielts: 5.0, toefl: 45, ent: 80, gpa: 2.6 },
            programs: ['Agronomy', 'Veterinary', 'Food Technology', 'Biotechnology', 'IT in Agriculture'],
            ranking: { qsAsia: '551-600', qsWorld: null, hIndex: 10, national: 10, scholarships: 55 },
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
            requirements: { ielts: 5.0, toefl: 45, ent: 75, gpa: 2.5 },
            programs: ['Power Engineering', 'Telecommunications', 'IT', 'Electronics', 'Automation'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 13, national: 13, scholarships: 50 },
            contacts: {
                website: 'https://aupet.kz',
                phone: '+7 (727) 292-69-54',
                email: 'info@aupet.kz',
                address: 'ул. Байтурсынова, 126/1'
            },
            description: 'Технический университет в области энергетики и телекоммуникаций.'
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
            requirements: { ielts: 5.0, toefl: 45, ent: 75, gpa: 2.5 },
            programs: ['Pedagogy', 'Philology', 'History', 'Mathematics', 'IT', 'Economics', 'Chemistry'],
            ranking: { qsAsia: '501-550', qsWorld: null, hIndex: 6, national: 6, scholarships: 50 },
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
            requirements: { ielts: 5.0, toefl: 50, ent: 85, gpa: 2.8 },
            programs: ['General Medicine', 'Dentistry', 'Pharmacy', 'Public Health'],
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
            requirements: { ielts: 5.0, toefl: 45, ent: 75, gpa: 2.5 },
            programs: ['Mining', 'Metallurgy', 'IT', 'Mechanical Engineering', 'Energy'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 17, national: 17, scholarships: 55 },
            contacts: {
                website: 'https://ktu.edu.kz',
                phone: '+7 (7212) 56-59-35',
                email: 'info@ktu.edu.kz',
                address: 'бул. Мира, 56'
            },
            description: 'Технический университет, готовящий специалистов для горнодобывающей отрасли.'
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
            requirements: { ielts: 5.0, toefl: 45, ent: 70, gpa: 2.5 },
            programs: ['Engineering', 'Pedagogy', 'IT', 'Chemistry', 'Economics', 'Oil & Gas'],
            ranking: { qsAsia: '451-500', qsWorld: null, hIndex: 18, national: 18, scholarships: 45 },
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
            requirements: { ielts: 5.0, toefl: 45, ent: 85, gpa: 2.8 },
            programs: ['General Medicine', 'Dentistry', 'Pharmacy', 'Pediatrics'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 20, national: 20, scholarships: 50 },
            contacts: {
                website: 'https://skma.edu.kz',
                phone: '+7 (7252) 39-95-01',
                email: 'info@skma.edu.kz',
                address: 'пл. Аль-Фараби, 1'
            },
            description: 'Медицинская академия, готовящая врачей для южного региона.'
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
            requirements: { ielts: 5.0, toefl: 50, ent: 85, gpa: 2.8 },
            programs: ['General Medicine', 'Dentistry', 'Pharmacy', 'Public Health'],
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
            shortName: 'ShU',
            city: 'Семей',
            coords: [50.4200, 80.2400],
            type: 'regional',
            requirements: { ielts: 5.0, toefl: 45, ent: 70, gpa: 2.5 },
            programs: ['Pedagogy', 'Agriculture', 'IT', 'Economics', 'Engineering'],
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
            requirements: { ielts: 5.5, toefl: 55, ent: 80, gpa: 2.8 },
            programs: ['Theology', 'History', 'Philology', 'Law', 'IT', 'Medicine', 'Engineering'],
            ranking: { qsAsia: '401-450', qsWorld: null, hIndex: 22, national: 22, scholarships: 60 },
            contacts: {
                website: 'https://ayu.edu.kz',
                phone: '+7 (72533) 6-36-45',
                email: 'info@ayu.edu.kz',
                address: 'ул. Б. Саттарханов, 29'
            },
            description: 'Международный университет с особым статусом. Совместный проект Казахстана и Турции.'
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
            requirements: { ielts: 5.0, toefl: 45, ent: 70, gpa: 2.5 },
            programs: ['Engineering', 'IT', 'Pedagogy', 'Agriculture', 'Economics'],
            ranking: { qsAsia: null, qsWorld: null, hIndex: 23, national: 23, scholarships: 45 },
            contacts: {
                website: 'https://tou.edu.kz',
                phone: '+7 (7182) 67-36-69',
                email: 'info@tou.edu.kz',
                address: 'ул. Ломова, 64'
            },
            description: 'Ведущий университет Павлодарской области.'
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
            requirements: { ielts: 5.0, toefl: 45, ent: 70, gpa: 2.5 },
            programs: ['Pedagogy', 'Philology', 'History', 'IT', 'Economics'],
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
