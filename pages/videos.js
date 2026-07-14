// 1. 국어 영상 데이터
const koreanVideos = [
    { title: "1화 아이야", link: "https://youtu.be/sjxbhMNV97M?si=rmk-PFprTEUijHDo", desc: "모음 'ㅏ','ㅣ','ㅑ'의 소리를 인식한다." },
    { title: "2화 오이", link: "https://youtu.be/labPzGmG0jw?si=v6CxCPRIddspqbty", desc: "모음 'ㅗ', 'ㅣ' 의 소리를 인식한다." },
    { title: "3화 어디", link: "https://youtu.be/k_eCbbmXXmc?si=4bMphfqvTBKmwX8N", desc: "모음 'ㅓ', 'ㅣ'의 소리를 인식한다." },
    { title: "4화 여우", link: "https://youtu.be/C4tBDGOA34M?si=OQWZKlW7pUjtNbgZ", desc: "모음 'ㅕ', 'ㅜ' 의 소리를 인식한다." },
    { title: "5화 우유", link: "https://youtu.be/m1G8Wz3hxco?si=puSU9FhuEoOF0ZhK", desc: "모음 'ㅜ','ㅠ'의 소리를 인식한다." },
    { title: "6화 요가", link: "https://youtu.be/RgqOMeXTZQ0?si=5K3uGOs6xXDi0th8", desc: "모음 'ㅗ','ㅏ'의 소리를 인식한다." },
    { title: "7화 으", link: "https://youtu.be/cHS61BdT98I?si=Br1X_fGpq6nCmq4H", desc: "모음 'ㅡ'의 소리를 인식한다." },
    { title: "8화 가수", link: "https://youtu.be/kANDJoLtgbQ?si=tvP7YEe_rmquFMai", desc: "자음 'ㄱ'의 소리를 인식한다." },
    { title: "9화 나비", link: "https://youtu.be/1DA6tueYG3s?si=I-j5a-ZgAilrGgIZ", desc: "자음 'ㄴ'의 소리를 인식한다." },
    { title: "10화 두유", link: "https://youtu.be/SYbQL7SOyxs?si=FBulquzb6JKjRZhK", desc: "자음 'ㄷ'의 소리를 인식한다" },
    { title: "11화 라디오", link: "https://youtu.be/5XpgVOqSRFA?si=3HM51XcUIslvhI4y", desc: "자음 'ㄹ'의 소리를 인식한다." },
    { title: "12화 모자", link: "https://youtu.be/ovZ0A3u56ts?si=0IaJjLvKjLdrG3xB", desc: "자음 'ㅁ'의 소리를 인식한다." },
    { title: "13화 버스", link: "https://youtu.be/7ykvLdRFNWQ?si=FYAn_6n-MJ7BKXFz", desc: "자음 'ㅂ'의 소리를 인식한다." },
    { title: "14화 소리", link: "https://youtu.be/zPPAN1bp0DA?si=qQzUWlr8Ub9URzGG", desc: "자음 'ㅅ'의 소리를 인식한다." },
    { title: "15화 자유", link: "https://youtu.be/7JJup1IZETQ?si=58cYGiSykyIufxU4", desc: "자음 'ㅈ'의 소리를 인식한다." },
    { title: "16화 차", link: "https://youtu.be/lm4C6NGaz5E?si=LgTeuarD016vqVi7", desc: "자음 'ㅊ'의 소리를 인식한다." },
    { title: "17화 코", link: "https://youtu.be/E4RmFPnpfM0?si=-TiQXlZyfW9VSA5c", desc: "자음 'ㅋ'의 소리를 인식한다." },
    { title: "18화 토마토", link: "https://youtu.be/G0FoYv9-w68?si=igUhLZiVTRMZQpGx", desc: "자음 'ㅌ'의 소리를 인식한다." },
    { title: "19화 피자", link: "https://youtu.be/bnYttMdutvE?si=lj614H_kySU_ucrZ", desc: "자음 'ㅍ'의 소리를 인식한다." },
    { title: "20화 휴지", link: "https://youtu.be/YBgQ-Hh7rfY?si=MmWp7KVTjsxj5SLm", desc: "자음 'ㅎ'의 소리를 인식한다." },
    { title: "21화 약", link: "https://youtu.be/EgerMhNs2qk?si=yJHEgkLd--tLDG8g", desc: "받침 'ㄱ'을 인식한다." },
    { title: "22화 문", link: "https://youtu.be/NLlC2ESCuQQ?si=hib_AqAJ2fX7WHBl", desc: "받침 'ㄴ'을 인식한다." },
    { title: "23화 돋보기", link: "https://youtu.be/gaNXiFFUCns?si=SZGqsmJID-kZ7ehu", desc: "받침 'ㄷ'을 인식한다." },
    { title: "24화 탈", link: "https://youtu.be/D_IxtYfzKCo?si=LYQZGj5tHtZLpJ1I", desc: "받침 'ㄹ'을 인식한다." },
    { title: "25화 잠", link: "https://youtu.be/J1ofRc5zu_A?si=Gv6yFrIasFpXhqNZ", desc: "받침 'ㅁ'을 인식한다." },
    { title: "26화 밥", link: "https://youtu.be/bw_ujZQf9gE?si=AuwMV_XtbKscP4np", desc: "받침 'ㅂ'을 인식한다." },
    { title: "27화 옷", link: "https://youtu.be/XMuVJPpDF-w?si=MqPr1wXovB1tKsyJ", desc: "받침 'ㅅ'을 인식한다." },
    { title: "28화 공", link: "https://youtu.be/BwiaTokUxbg?si=ZcQtxtKZUF-72zql", desc: "받침 'ㅇ'을 인식한다." },
    { title: "29화 낮", link: "https://youtu.be/siY0jZ0EWIc?si=pWvEU3viEZiGzPYK", desc: "받침 'ㅈ'을 인식한다." },
    { title: "30화 빛", link: "https://youtu.be/ASHYS4nW_yA?si=0HreGfXtLp1XUovJ", desc: "받침 'ㅊ'을 인식한다." },
    { title: "31화 부엌", link: "https://youtu.be/F84QcxzuNOI?si=fw-4V1UcI-iObhQs", desc: "받침 'ㅋ'을 인식한다." },
    { title: "32화 팥", link: "https://youtu.be/nHZJiv1fMw4?si=elqL_eZ-RqM_OLMh", desc: "받침 'ㅌ'을 인식한다." },
    { title: "33화 숲", link: "https://youtu.be/bx4b_3oxHZY?si=rOZ5G9U4PuJaZ1M-", desc: "받침 'ㅍ'을 인식한다." },
    { title: "34화 좋아", link: "https://youtu.be/h2SKIFx4clo?si=zxkJQ-VQb8DCLSeT", desc: "받침 'ㅎ'을 인식한다." }
];

// 2. 수학 영상 데이터
const mathVideos = [
    { title: "넘버블록스 11-20 모음", link: "https://www.youtube.com/watch?v=..." }
];

// 3. 영어 영상 데이터
const englishVideos = [
    { title: "Hello Song", link: "https://www.youtube.com/watch?v=..." }
];