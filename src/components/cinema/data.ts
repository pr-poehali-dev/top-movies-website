export const IMAGES = {
  noir: "https://cdn.poehali.dev/projects/27a64614-09b7-484f-8fe9-15c0996d1407/files/0a9dabea-4e41-491e-a3bc-b70812fff605.jpg",
  fantasy: "https://cdn.poehali.dev/projects/27a64614-09b7-484f-8fe9-15c0996d1407/files/9b3ef848-4c4b-4407-9d43-ebc3d06c8457.jpg",
  scifi: "https://cdn.poehali.dev/projects/27a64614-09b7-484f-8fe9-15c0996d1407/files/9788ddaa-9de6-43f4-b0d7-6c69e72cc136.jpg",
  crime: "https://cdn.poehali.dev/projects/27a64614-09b7-484f-8fe9-15c0996d1407/files/48922405-756b-43e5-a1ea-04298a0f54dc.jpg",
};

export interface FilmItem {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  votes: number;
  duration: string;
  image: string;
  tags: string[];
  mood: string;
  description: string;
  seasons?: number;
}

export interface TrailerItem {
  id: number;
  title: string;
  genre: string;
  year: number;
  youtubeId: string;
  image: string;
  duration: string;
  type: string;
  description: string;
}

export const FILMS: FilmItem[] = [
  { id: 1, title: "Тень Токио", genre: "Триллер", year: 2024, rating: 9.2, votes: 14200, duration: "2ч 18м", image: IMAGES.noir, tags: ["Триллер", "Нуар"], mood: "Для размышлений", description: "Детектив распутывает цепочку загадочных исчезновений в ночном мегаполисе, балансируя между законом и совестью." },
  { id: 2, title: "Хроники Тьмы", genre: "Фэнтези", year: 2023, rating: 8.9, votes: 21500, duration: "2ч 45м", image: IMAGES.fantasy, tags: ["Фэнтези", "Эпик"], mood: "Эпическое приключение", description: "Последний страж древнего ордена отправляется в путешествие, чтобы остановить пробуждение тёмного бога." },
  { id: 3, title: "Горизонт событий", genre: "Sci-Fi", year: 2024, rating: 9.5, votes: 31000, duration: "2ч 32м", image: IMAGES.scifi, tags: ["Sci-Fi", "Драма"], mood: "Захватывает дух", description: "Экипаж межзвёздного корабля оказывается у границы чёрной дыры, где законы физики перестают работать." },
  { id: 4, title: "Пять семей", genre: "Криминал", year: 2023, rating: 8.7, votes: 9800, duration: "2ч 05м", image: IMAGES.crime, tags: ["Криминал", "Драма"], mood: "Напряжённо", description: "Война кланов в современном городе. Один молодой детектив против всей системы." },
];

export const SERIES: FilmItem[] = [
  { id: 5, title: "Ночной патруль", genre: "Детектив", year: 2024, rating: 9.1, votes: 18700, duration: "45м / эп.", image: IMAGES.noir, tags: ["Детектив", "Криминал"], mood: "Держит в напряжении", seasons: 2, description: "Группа следователей работает в ночную смену, раскрывая дела, которые днём кажутся невозможными." },
  { id: 6, title: "Последний рубеж", genre: "Sci-Fi", year: 2024, rating: 8.8, votes: 24300, duration: "55м / эп.", image: IMAGES.scifi, tags: ["Sci-Fi", "Экшн"], mood: "Адреналин", seasons: 3, description: "Станция на краю галактики — последнее человеческое поселение перед бескрайней пустотой космоса." },
  { id: 7, title: "Семь грехов", genre: "Криминал", year: 2023, rating: 9.3, votes: 41200, duration: "50м / эп.", image: IMAGES.crime, tags: ["Криминал", "Психология"], mood: "Для размышлений", seasons: 4, description: "Психолог-криминалист помогает раскрывать преступления, каждое из которых — отражение человеческих пороков." },
  { id: 8, title: "Мир теней", genre: "Фэнтези", year: 2024, rating: 8.6, votes: 15600, duration: "60м / эп.", image: IMAGES.fantasy, tags: ["Фэнтези", "Мистика"], mood: "Атмосферно", seasons: 2, description: "Параллельный мир, где магия и технологии существуют бок о бок. Детектив из нашего мира попадает туда против воли." },
];

export const GENRES = [
  { name: "Триллер", icon: "Eye", count: 48, color: "#c0392b" },
  { name: "Sci-Fi", icon: "Rocket", count: 35, color: "#2980b9" },
  { name: "Фэнтези", icon: "Sparkles", count: 52, color: "#8e44ad" },
  { name: "Криминал", icon: "Shield", count: 41, color: "#d35400" },
  { name: "Драма", icon: "Heart", count: 67, color: "#c0392b" },
  { name: "Комедия", icon: "Smile", count: 29, color: "#27ae60" },
  { name: "Ужасы", icon: "Ghost", count: 23, color: "#7f8c8d" },
  { name: "Документальный", icon: "Camera", count: 18, color: "#f39c12" },
];

export const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "films", label: "Топ фильмов" },
  { id: "series", label: "Топ сериалов" },
  { id: "trailers", label: "Трейлеры" },
  { id: "genres", label: "По жанрам" },
  { id: "about", label: "О проекте" },
  { id: "contacts", label: "Контакты" },
];

export const TRAILERS: TrailerItem[] = [
  {
    id: 1, title: "Тень Токио", genre: "Триллер", year: 2024,
    youtubeId: "YoHD9XEInc0",
    image: IMAGES.noir, duration: "2:34", type: "Фильм",
    description: "Официальный трейлер. Детектив против ночного мегаполиса.",
  },
  {
    id: 2, title: "Хроники Тьмы", genre: "Фэнтези", year: 2023,
    youtubeId: "sGbxmsDFVnE",
    image: IMAGES.fantasy, duration: "3:12", type: "Фильм",
    description: "Эпический трейлер. Последний страж против тёмного бога.",
  },
  {
    id: 3, title: "Горизонт событий", genre: "Sci-Fi", year: 2024,
    youtubeId: "2LqzF5WauAw",
    image: IMAGES.scifi, duration: "2:48", type: "Фильм",
    description: "Тизер-трейлер. На краю чёрной дыры.",
  },
  {
    id: 4, title: "Пять семей", genre: "Криминал", year: 2023,
    youtubeId: "ioR5np1fmEc",
    image: IMAGES.crime, duration: "2:21", type: "Фильм",
    description: "Финальный трейлер. Война кланов.",
  },
  {
    id: 5, title: "Ночной патруль", genre: "Детектив", year: 2024,
    youtubeId: "YoHD9XEInc0",
    image: IMAGES.noir, duration: "1:55", type: "Сериал",
    description: "Трейлер 2 сезона. Ночные тайны.",
  },
  {
    id: 6, title: "Последний рубеж", genre: "Sci-Fi", year: 2024,
    youtubeId: "2LqzF5WauAw",
    image: IMAGES.scifi, duration: "2:07", type: "Сериал",
    description: "Трейлер 3 сезона. Конец известной вселенной.",
  },
];
