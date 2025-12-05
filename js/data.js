const universities = [
    {
        id: 1,
        name: "Массачусетский технологический институт",
        country: "США",
        image: "images/mit.jpg",
        requirements: {
            ielts: 7.0,
            toefl: 100,
            sat: 1500,
            gpa: 3.8,
        },
        programs: ["Компьютерные науки", "Инженерия", "Физика"],
        ranking: {
            qs: 1,
            scholarships: 95,
            it: 1,
            medicine: 5
        }
    },
    {
        id: 2,
        name: "Оксфордский университет",
        country: "Великобритания",
        image: "images/oxford.jpg",
        requirements: {
            ielts: 7.0,
            toefl: 110,
            sat: 1450,
            gpa: 3.7,
        },
        programs: ["Экономика", "Право", "Медицина"],
        ranking: {
            qs: 2,
            scholarships: 90,
            it: 5,
            medicine: 1
        }
    },
    {
        id: 3,
        name: "ETH Zürich",
        country: "Швейцария",
        image: "images/eth.jpg",
        requirements: {
            ielts: 6.5,
            toefl: 90,
            sat: 1400,
            gpa: 3.5,
        },
        programs: ["Инженерия", "Архитектура", "Математика"],
        ranking: {
            qs: 8,
            scholarships: 85,
            it: 3,
            medicine: 15
        }
    },
    {
        id: 4,
        name: "Кембриджский университет",
        country: "Великобритания",
        image: "images/cambridge.jpg",
        requirements: {
            ielts: 7.5,
            toefl: 110,
            sat: 1480,
            gpa: 3.7,
        },
        programs: ["Естественные науки", "Гуманитарные науки", "Медицина"],
        ranking: {
            qs: 3,
            scholarships: 88,
            it: 4,
            medicine: 2
        }
    },
    {
        id: 5,
        name: "Стэнфордский университет",
        country: "США",
        image: "images/stanford.jpg",
        requirements: {
            ielts: 7.0,
            toefl: 100,
            sat: 1470,
            gpa: 3.7,
        },
        programs: ["Бизнес", "Инженерия", "Медицина"],
        ranking: {
            qs: 4,
            scholarships: 92,
            it: 2,
            medicine: 3
        }
    },
    {
        id: 6,
        name: "Гарвардский университет",
        country: "США",
        image: "images/harvard.jpg",
        requirements: {
            ielts: 7.5,
            toefl: 100,
            sat: 1520,
            gpa: 3.8,
        },
        programs: ["Право", "Медицина", "Бизнес"],
        ranking: {
            qs: 5,
            scholarships: 94,
            it: 6,
            medicine: 4
        }
    },
    {
        id: 7,
        name: "Имперский колледж Лондона",
        country: "Великобритания",
        image: "images/imperial.jpg",
        requirements: {
            ielts: 7.0,
            toefl: 92,
            sat: 1420,
            gpa: 3.5,
        },
        programs: ["Инженерия", "Медицина", "Бизнес"],
        ranking: {
            qs: 6,
            scholarships: 82,
            it: 7,
            medicine: 6
        }
    },
    {
        id: 8,
        name: "Калифорнийский технологический институт",
        country: "США",
        image: "images/caltech.jpg",
        requirements: {
            ielts: 7.0,
            toefl: 100,
            sat: 1530,
            gpa: 3.8,
        },
        programs: ["Физика", "Химия", "Инженерия"],
        ranking: {
            qs: 7,
            scholarships: 89,
            it: 8,
            medicine: 20
        }
    },
    // Казахстанские университеты с ЕНТ
    {
        id: 9,
        name: "Назарбаев Университет",
        country: "Казахстан",
        image: "images/nu.jpg",
        requirements: {
            ielts: 6.5,
            toefl: 79,
            sat: 1200,
            ent: 120,
            gpa: 3.5,
        },
        programs: ["Инженерия", "Медицина", "Бизнес", "IT"],
        ranking: {
            qs: 220,
            scholarships: 100,
            it: 50,
            medicine: 100
        }
    },
    {
        id: 10,
        name: "Казахский национальный университет им. аль-Фараби",
        country: "Казахстан",
        image: "images/kaznu.jpg",
        requirements: {
            ielts: 5.5,
            toefl: 60,
            ent: 100,
            gpa: 3.0,
        },
        programs: ["Право", "Экономика", "Филология", "IT"],
        ranking: {
            qs: 230,
            scholarships: 70,
            it: 80,
            medicine: 60
        }
    },
    {
        id: 11,
        name: "КБТУ (Казахстанско-Британский технический университет)",
        country: "Казахстан",
        image: "images/kbtu.jpg",
        requirements: {
            ielts: 5.5,
            toefl: 55,
            ent: 90,
            gpa: 2.8,
        },
        programs: ["IT", "Нефтегаз", "Бизнес", "Инженерия"],
        ranking: {
            qs: 450,
            scholarships: 60,
            it: 30,
            medicine: 200
        }
    },
    {
        id: 12,
        name: "КИМЭП",
        country: "Казахстан",
        image: "images/kimep.jpg",
        requirements: {
            ielts: 5.5,
            toefl: 50,
            ent: 85,
            gpa: 2.5,
        },
        programs: ["Бизнес", "Право", "Журналистика", "Экономика"],
        ranking: {
            qs: 500,
            scholarships: 55,
            it: 100,
            medicine: 300
        }
    },
    {
        id: 13,
        name: "Satbayev University",
        country: "Казахстан",
        image: "images/satbayev.jpg",
        requirements: {
            ielts: 5.0,
            toefl: 45,
            ent: 80,
            gpa: 2.5,
        },
        programs: ["Инженерия", "IT", "Геология", "Архитектура"],
        ranking: {
            qs: 480,
            scholarships: 65,
            it: 40,
            medicine: 250
        }
    },
    {
        id: 14,
        name: "Международный университет информационных технологий (МУИТ)",
        country: "Казахстан",
        image: "images/iitu.jpg",
        requirements: {
            ielts: 5.0,
            toefl: 45,
            ent: 75,
            gpa: 2.3,
        },
        programs: ["IT", "Кибербезопасность", "Data Science", "Робототехника"],
        ranking: {
            qs: 600,
            scholarships: 50,
            it: 25,
            medicine: 400
        }
    },
    // Университеты с низкими требованиями (международные)
    {
        id: 15,
        name: "Университет Аризоны",
        country: "США",
        image: "images/arizona.jpg",
        requirements: {
            ielts: 6.0,
            toefl: 70,
            sat: 1100,
            gpa: 2.5,
        },
        programs: ["Бизнес", "Инженерия", "Наука"],
        ranking: {
            qs: 270,
            scholarships: 60,
            it: 90,
            medicine: 80
        }
    },
    {
        id: 16,
        name: "Университет Манчестера",
        country: "Великобритания",
        image: "images/manchester.jpg",
        requirements: {
            ielts: 6.0,
            toefl: 80,
            gpa: 3.0,
        },
        programs: ["Бизнес", "Инженерия", "Медицина"],
        ranking: {
            qs: 32,
            scholarships: 70,
            it: 35,
            medicine: 25
        }
    },
    {
        id: 17,
        name: "Университет Сиднея",
        country: "Австралия",
        image: "images/sydney.jpg",
        requirements: {
            ielts: 6.5,
            toefl: 85,
            gpa: 3.2,
        },
        programs: ["Право", "Медицина", "IT", "Бизнес"],
        ranking: {
            qs: 19,
            scholarships: 75,
            it: 45,
            medicine: 18
        }
    },
    {
        id: 18,
        name: "Технический университет Мюнхена",
        country: "Германия",
        image: "images/tum.jpg",
        requirements: {
            ielts: 6.0,
            toefl: 80,
            gpa: 3.0,
        },
        programs: ["Инженерия", "IT", "Архитектура", "Физика"],
        ranking: {
            qs: 37,
            scholarships: 80,
            it: 20,
            medicine: 40
        }
    }
];

// Рекомендуемые разрешения для изображений: 400x300px (соотношение 4:3)
// Форматы: JPG, PNG или WebP
// Размер файла: не более 200KB для оптимальной загрузки
