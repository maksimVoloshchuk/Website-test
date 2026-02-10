// Полное меню SushiyaRoll - 61 позиция из технической карты
const menuData = [
  // Роли (26 позиций)
  {
    id: 1,
    category: "Роли",
    name: "Аляска краб LITE",
    composition: `Рис 130г
Кунжут білий 20г
Краб 30г
Огірок 30г
Сир Раса 30г
ВСЬОГО 220г`,
    weight: "220г",
    price: 185,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    category: "Роли",
    name: "Буніто тунець",
    composition: `Рис 150г
Тунець 40г
Стружка тунець 15г
Цибуля зелена 10г
Огірок 35г
Перець 15г
Спайсі 5г
ВСЬОГО 270г`,
    weight: "270г",
    price: 185,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    category: "Роли",
    name: "Ріо",
    composition: `Рис 130г
Чеддер Тостовий 35г
Спайсі 15г
Кунжут чорнобілий 5г
Лосось копчений 30г
Сир Раса 40г
Тамаго 30г
ВСЬОГО 240г`,
    weight: "240г",
    price: 195,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    category: "Роли",
    name: "Буніто Бейк",
    composition: `Рис 120г
Стружка тунця 7г
Печений лосось 50г
Огірок 30г
Спайсі 25г
ВСЬОГО 230г`,
    weight: "230г",
    price: 195,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    category: "Роли",
    name: "Філадельфія LITE",
    composition: `Рис 130г
Лосось 45г
Огірок 30г
Сир Раса 50г
ВСЬОГО 235г`,
    weight: "235г",
    price: 205,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    category: "Роли",
    name: "Міро",
    composition: `Рис 150г
Сир Раса 60г
Тамаго 20г
Грушка 30г
Лосось 40г
Норі полоски
ВСЬОГО 300г`,
    weight: "300г",
    price: 215,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    category: "Роли",
    name: "Оріон",
    composition: `Рис 150г
Норі полоски
Лосось 30г
Сир Раса 60г
Авокадо 30г
Тамаго 30г
ВСЬОГО 290г`,
    weight: "290г",
    price: 225,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    category: "Роли",
    name: "Хаос",
    composition: `Рис 150г
Сир Раса 60г
Огірок 35г
Креветка 30г
Краб 70г
Кунжут чорний 3г
ВСЬОГО 340г`,
    weight: "340г",
    price: 245,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 9,
    category: "Роли",
    name: "Крейзі",
    composition: `Рис 150г
Кунжут чорний 5г
Лосось копчений 50г
Сніжний краб 50г
Сир Раса 30г
Яблуко 30г
Спайсі 20г
Масаго червоне 5г
ВСЬОГО 320г`,
    weight: "320г",
    price: 235,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 10,
    category: "Роли",
    name: "Епл",
    composition: `Рис 150г
Яблуко 30г
Сніжний краб 50г
Сири Раса 50г
Сир плавлений 20г
ВСЬОГО 290г`,
    weight: "290г",
    price: 215,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 11,
    category: "Роли",
    name: "Клайд",
    composition: `Рис 150г
Кунжут чорнобілий 5г
Ширача 5г
Перець 15г
Сніжний краб 50г
Сир Раса 50г
Спайсі 10г
Зелена цибуля 5г
ВСЬОГО 280г`,
    weight: "280г",
    price: 225,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },
  {
    id: 12,
    category: "Роли",
    name: "Крабі",
    composition: `Рис 150г
Огірок 40г
Сир Раса 50г
Масаго 10г
Сніжний краб 70г
Кунжут біл 10г
ВСЬОГО 330г`,
    weight: "330г",
    price: 235,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 13,
    category: "Роли",
    name: "Філадельфія Бланш",
    composition: `Рис 150г
Лосось обпалений 60г
Теріякі 10г
Мигдаль 15г
Сир Раса 60г
Грушка 30г
ВСЬОГО 310г`,
    weight: "310г",
    price: 255,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 14,
    category: "Роли",
    name: "Буніто копчений",
    composition: `Рис 150г
Лосось копчений 150г
Огірок 35г
Перець 15г
Спайсі 3г
Стружка тунця 7г
ВСЬОГО 260г`,
    weight: "260г",
    price: 245,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },
  {
    id: 15,
    category: "Роли",
    name: "Цезар Курка/Лосось/Креветка",
    composition: `Рис 150г
Кунжут 15г
Пармезан 10г
Айсберг 60г
Горіховий і майонез 15г
БАЗА 30г
Сир Раса 50г
Помідор 20г
Тамаго 20г
ВСЬОГО 310г`,
    weight: "310г",
    price: 245,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 16,
    category: "Роли",
    name: "Ескімо",
    composition: `Рис 150г
Сир Раса 70г
Сніжний краб 50г
Огірок 35г
Кунжут біл 20г
Унагі 15г
ВСЬОГО 340г`,
    weight: "340г",
    price: 255,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 17,
    category: "Роли",
    name: "Фенікс",
    composition: `Рис 150г
Сир тостовий 32г (2шт)
Теріякі 10г
Мигдаль 15г
Сир Раса 60г
Вугор 30г
Грушка 30г
ВСЬОГО 310г`,
    weight: "310г",
    price: 265,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },
  {
    id: 18,
    category: "Роли",
    name: "Філадельфія вугор",
    composition: `Рис 150г
Сир Раса 60г
Авокадо 40г
Унагі 15г
Кунжут біл 3г
Вугор 60г
ВСЬОГО 325г`,
    weight: "325г",
    price: 275,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 19,
    category: "Роли",
    name: "Кракен",
    composition: `Рис 150г
Брі 20г
Манго 30г
Сир Раса 50г
Полоски норі
Восьминіг бейбі
Масаго червоне
Спайсі, Унагі
Смужки норі
ВСЬОГО 341-351г`,
    weight: "350г",
    price: 285,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 20,
    category: "Роли",
    name: "Осака",
    composition: `Рис 120г
Чука 70г
Горіховий соус 20г
Кунжут біл 10г
Сніжний краб 30г
Плавлений сир 30г
Сир Раса 30г
ВСЬОГО 310г`,
    weight: "310г",
    price: 235,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },
  {
    id: 21,
    category: "Роли",
    name: "Єлоу",
    composition: `Рис 120г
Полоски норі
Манго + Світ Чілі 50+15г
Лосось смажений 40г
Сир Раса 50г
ВСЬОГО 255г`,
    weight: "255г",
    price: 245,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 22,
    category: "Роли",
    name: "Філа копчена",
    composition: `Рис 120г
Лосось копчений 50г
Сир Раса 60г
Манго 30г
ВСЬОГО 260г`,
    weight: "260г",
    price: 235,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 23,
    category: "Роли",
    name: "Скімо",
    composition: `Рис 150г
Сир Раса 90г
Унагі 15г
Кунжут ЧБ + Мікро зелень
Креветка темпура 35г
Сніжний краб 50г
Авокадо 35г
ВСЬОГО 360г`,
    weight: "360г",
    price: 265,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },
  {
    id: 24,
    category: "Роли",
    name: "Вакаме",
    composition: `Рис 120г
Печений лосось 40г
Сир Раса 30г
Перець 15г
Чука 70г
Горіховий соус 5г
Кунжут біл 3г
Полоски норі
ВСЬОГО 280г`,
    weight: "280г",
    price: 245,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 25,
    category: "Роли",
    name: "Філадельфія",
    composition: `Рис 150г
Лосось 60г
Сир Раса 60г
Авокадо 35г
ВСЬОГО 290г`,
    weight: "290г",
    price: 255,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 26,
    category: "Роли",
    name: "Золотий дракон",
    composition: `Рис 150г
Лосось 40г
Вугор 55г
Огірок 45г
Сир 45г
Унагі 10г
Кунжут 10г
ВСЬОГО 330г`,
    weight: "330г",
    price: 275,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },

  // Темпура роли (5 позиций)
  {
    id: 27,
    category: "Темпура роли",
    name: "Темпура Каліфорнія",
    composition: `Рис 150г
Сніжний краб 60г
Огірок 35г
Масаго оранж 30г
В темпурі
ВСЬОГО 270г`,
    weight: "270г",
    price: 215,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 28,
    category: "Темпура роли",
    name: "Темпура Філадельфія",
    composition: `Рис 150г
Лосось 60г
Сир Раса 60г
Авокадо 35г
В темпурі
ВСЬОГО 290г`,
    weight: "290г",
    price: 245,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 29,
    category: "Темпура роли",
    name: "Темпура Каліфорнія з лососем",
    composition: `Рис 150г
Лосось 60г
Огірок 35г
Масаго оранж 30г
В темпурі
ВСЬОГО 270г`,
    weight: "270г",
    price: 235,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },
  {
    id: 30,
    category: "Темпура роли",
    name: "Темпура спайсі",
    composition: `Рис 150г
Лосось 50г
Спайсі 20г
Огірок 30г
В темпурі
ВСЬОГО 240г`,
    weight: "240г",
    price: 225,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 31,
    category: "Темпура роли",
    name: "Темпура вугор",
    composition: `Рис 150г
Вугор 60г
Огірок 35г
Унагі 15г
В темпурі
ВСЬОГО 250г`,
    weight: "250г",
    price: 255,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },

  // Запечені роли (1 позиция)
  {
    id: 32,
    category: "Запечені роли",
    name: "Запечений рол з лососем",
    composition: `Рис 150г
Лосось 80г
Сир Раса 60г
Сирна шапка 50г
Запечений
ВСЬОГО 340г`,
    weight: "340г",
    price: 265,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },

  // Маки (10 позиций)
  {
    id: 33,
    category: "Маки",
    name: "Мак з тамаго",
    composition: `Рис 80г
Норі 0,5
Тамаго 40г
ВАГА 120г`,
    weight: "120г",
    price: 85,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 34,
    category: "Маки",
    name: "Мак з крабом",
    composition: `Рис 80г
Норі 0,5
Краб 40г
ВАГА 120г`,
    weight: "120г",
    price: 95,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 35,
    category: "Маки",
    name: "Мак з тунцем",
    composition: `Рис 80г
Норі 0,5
Тунець 40г
ВАГА 120г`,
    weight: "120г",
    price: 105,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },
  {
    id: 36,
    category: "Маки",
    name: "Мак з огірком",
    composition: `Рис 80г
Норі 0,5
Огірок 40г
ВАГА 120г`,
    weight: "120г",
    price: 75,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 37,
    category: "Маки",
    name: "Мак з креветкою",
    composition: `Рис 80г
Норі 0,5
Креветка 40г
ВАГА 120г`,
    weight: "120г",
    price: 105,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 38,
    category: "Маки",
    name: "Мак з криветкою темпура",
    composition: `Рис 80г
Норі 0,5
Криветка темпура 2 шт (40/50г)
ВАГА 130г`,
    weight: "130г",
    price: 115,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },
  {
    id: 39,
    category: "Маки",
    name: "Мак з авокадо",
    composition: `Рис 80г
Норі 0,5
Авокадо 40г
ВАГА 120г`,
    weight: "120г",
    price: 85,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 40,
    category: "Маки",
    name: "Мак з лососем",
    composition: `Рис 80г
Норі 0,5
Лосось 40г
ВАГА 120г`,
    weight: "120г",
    price: 105,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 41,
    category: "Маки",
    name: "Мак з копченим лососем",
    composition: `Рис 80г
Норі 0,5
Копчений лосось 40г
ВАГА 120г`,
    weight: "120г",
    price: 115,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },
  {
    id: 42,
    category: "Маки",
    name: "Мак з вугрем",
    composition: `Рис 80г
Норі 0,5
Вугор 40г
Унагі 7г
Кунжут 3г
ВАГА 125г`,
    weight: "125г",
    price: 125,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },

  // Футомаки (5 позиций)
  {
    id: 43,
    category: "Футомаки",
    name: "Футомак з креветкою",
    composition: `Рис 150г
Норі 1 шт
Креветка 40г
Огірок 30г
Тамаго 20г
Айсберг 20г
ВСЬОГО 260г`,
    weight: "260г",
    price: 165,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 44,
    category: "Футомаки",
    name: "Футомак з лососем",
    composition: `Рис 150г
Норі 1 шт
Лосось 40г
Огірок 30г
Тамаго 20г
Айсберг 20г
ВСЬОГО 260г`,
    weight: "260г",
    price: 175,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },
  {
    id: 45,
    category: "Футомаки",
    name: "Футомак з вугрем",
    composition: `Рис 150г
Норі 1 шт
Вугор 40г
Огірок 30г
Тамаго 20г
Айсберг 20г
ВСЬОГО 260г`,
    weight: "260г",
    price: 185,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 46,
    category: "Футомаки",
    name: "Футомак з крабом",
    composition: `Рис 150г
Норі 1 шт
Краб 40г
Огірок 30г
Тамаго 20г
Айсберг 20г
ВСЬОГО 260г`,
    weight: "260г",
    price: 155,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 47,
    category: "Футомаки",
    name: "Футомак вегетаріанський",
    composition: `Рис 150г
Норі 1 шт
Огірок 40г
Авокадо 30г
Тамаго 20г
Айсберг 20г
ВСЬОГО 260г`,
    weight: "260г",
    price: 145,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },

  // Гункани (9 позиций)
  {
    id: 48,
    category: "Гункани",
    name: "Гункан з креветкою",
    composition: `Рис 40г
Норі
Сніжний краб 20г
Кунжут
ВАГА 80г (2 шт)`,
    weight: "80г",
    price: 95,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 49,
    category: "Гункани",
    name: "Гункан кері",
    composition: `Рис 40г
Норі
Смажений лосось 20г
Кунжут
Унагі 3г
ВАГА 80г (2 шт)`,
    weight: "80г",
    price: 105,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 50,
    category: "Гункани",
    name: "Спайсі креветка",
    composition: `Рис 40г
Норі
Криветка 20г
Спайсі 3г
Ікра масаго 2г
ВАГА 80г (2 шт)`,
    weight: "80г",
    price: 105,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },
  {
    id: 51,
    category: "Гункани",
    name: "Гункан чука",
    composition: `Рис 40г
Норі
Чука 20г
Горіховий соус
Кунжут
ВАГА 80г (2 шт)`,
    weight: "80г",
    price: 95,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 52,
    category: "Гункани",
    name: "Спайсі лосось",
    composition: `Рис 40г
Норі
Лосось 20г
Спайсі 3г
Ікра масаго 2г
ВАГА 80г (2 шт)`,
    weight: "80г",
    price: 115,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 53,
    category: "Гункани",
    name: "Спайсі вугор",
    composition: `Рис 40г
Норі
Вугор 20г
Спайсі 3г
Зелена цибуля 2г
ВАГА 80г (2 шт)`,
    weight: "80г",
    price: 125,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },
  {
    id: 54,
    category: "Гункани",
    name: "Гункан твін",
    composition: `Рис 40г
Норі
Лосось 20г
Сир Раса 20г
Кунжут
ВАГА 80г (2 шт)`,
    weight: "80г",
    price: 115,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 55,
    category: "Гункани",
    name: "Спайсі тунець",
    composition: `Рис 40г
Норі
Тунець 20г
Спайсі 3г
Ікра масаго 2г
ВАГА 80г (2 шт)`,
    weight: "80г",
    price: 115,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 56,
    category: "Гункани",
    name: "Спайсі восьминіг",
    composition: `Рис 40г
Норі
Восьминіг 20г
Спайсі 3г
Ікра масаго 7г
Сир Раса 5г
ВАГА 95г (2 шт)`,
    weight: "95г",
    price: 125,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },

  // Бургери та Хот доги (4 позиції)
  {
    id: 57,
    category: "Бургери та Хот доги",
    name: "Хот дог з лососем",
    composition: `Рис 120г
Норі 1 шт
Лосось 50г
Огірок 20г
Айсберг 10г
Спайсі майонез
ВСЬОГО 200г`,
    weight: "200г",
    price: 135,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },
  {
    id: 58,
    category: "Бургери та Хот доги",
    name: "Хот дог з креветкою",
    composition: `Рис 120г
Норі 1 шт
Креветка 50г
Огірок 20г
Айсберг 10г
Спайсі майонез
ВСЬОГО 200г`,
    weight: "200г",
    price: 135,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: 59,
    category: "Бургери та Хот доги",
    name: "Бургер з лососем",
    composition: `Рис 150г (2 булочки)
Лосось 60г
Огірок 20г
Айсберг 15г
Помідор 15г
Сир Раса 30г
Спайсі майонез
ВСЬОГО 290г`,
    weight: "290г",
    price: 165,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
  },
  {
    id: 60,
    category: "Бургери та Хот доги",
    name: "Бургер з креветкою",
    composition: `Рис 150г (2 булочки)
Креветка 60г
Огірок 20г
Айсберг 15г
Помідор 15г
Сир Раса 30г
Спайсі майонез
ВСЬОГО 290г`,
    weight: "290г",
    price: 165,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
  },

  // Місо супи (1 позиція)
  {
    id: 61,
    category: "Місо супи",
    name: "Місо суп класичний",
    composition: `Місо навар 350мл
Тофу 30г
Цибуля зелена 5г
Норі 2г
Місо паста 20г
ВСЬОГО 400мл`,
    weight: "400мл",
    price: 85,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  }
];

// Отримати всі унікальні категорії
const categories = [...new Set(menuData.map(item => item.category))];

// Експортувати дані
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { menuData, categories };
}
