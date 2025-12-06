const universities = [
    {
        id: 1,
        name: "Массачусетский технологический институт",
        country: "США",
        image: "images/mit.jpg", // Рекомендуемое разрешение: 400x300px
        requirements: {
            ielts: 7.0,
            toefl: 100,
            sat: 1500,
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
        image: "images/oxford.jpg", // Рекомендуемое разрешение: 400x300px
        requirements: {
            ielts: 7.0,
            toefl: 110,
            sat: 1450,
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
        image: "images/eth.jpg", // Рекомендуемое разрешение: 400x300px
        requirements: {
            ielts: 6.5,
            toefl: 90,
            sat: 1400,
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
        image: "images/cambridge.jpg", // Рекомендуемое разрешение: 400x300px
        requirements: {
            ielts: 7.5,
            toefl: 110,
            sat: 1480,
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
        image: "images/stanford.jpg", // Рекомендуемое разрешение: 400x300px
        requirements: {
            ielts: 7.0,
            toefl: 100,
            sat: 1470,
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
        image: "images/harvard.jpg", // Рекомендуемое разрешение: 400x300px
        requirements: {
            ielts: 7.5,
            toefl: 100,
            sat: 1520,
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
        image: "images/imperial.jpg", // Рекомендуемое разрешение: 400x300px
        requirements: {
            ielts: 7.0,
            toefl: 92,
            sat: 1420,
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
        image: "images/caltech.jpg", // Рекомендуемое разрешение: 400x300px
        requirements: {
            ielts: 7.0,
            toefl: 100,
            sat: 1530,
        },
        programs: ["Физика", "Химия", "Инженерия"],
        ranking: {
            qs: 7,
            scholarships: 89,
            it: 8,
            medicine: 20
        }
    }
];

// Рекомендуемые разрешения для изображений: 400x300px (соотношение 4:3)
// Форматы: JPG, PNG или WebP
// Размер файла: не более 200KB для оптимальной загрузки
