// JavaScript code
const toggleLangButton = document.getElementById('toggle-lang');
const translatableElements = document.querySelectorAll('[data-key]');

// Define translations
const translations = {
    english: {
        contact: "Contact",
        schedule: "Schedule a call with Rich",
        aboutRichdevider: "RICHARD OFFERS A RELAXED GENTLE TENOR WITH EXCELLENT WARM LOW-END SUPPORT.",
        aboutRichPara1: "Rich is a voice over actor based in Tokyo with deep ties to San Francisco. His transpacific mindset makes Rich a sought- after voice for Japanese public service announcements, university projects, corporate           narrations, web presentations, and e- learning tutorials.",
        aboutRichPara2: "Rich has lent his distinct voice to such prestigous projects as MEXT, Woven Industries, Waseda University, Cyberdyn Sytems, Q-Games and many more.",
        aboutRichPara3: "Rich’s warm, relatable, and authentic tenor captivates listeners with a versitile performance style that effortlessly ranges from light-hearted charm to trusted authority. This unique ability to connect with listeners stems from Rich’s 30+ years as a university teacher and weekend saxophonist in jazz and rock bands across Tokyo. Rich approaches every project with creativity, expertise, and an unwavering commitment to bringing his clients’visions to life.",
        demoAudio: "Demo Recorded From My Home Studio",
        lang: "JP",
        schedulefooter: "Schedule Call With Rich",
  },
japanese: {
    contact: "Contact",
    schedule: "オンライン面談を日程設定する",
    aboutRichdevider: "リチャードは、リラックスした穏やかなテノールと優れた温かみのある低音を提供します。",
    aboutRichPara1: "リチャードは、サンフランシスコと深いつながりを持ち、東京を拠点に活動している声優です。太平洋を越えた広い視野に基づく価値観から、日本の公共サービスに関するアナウンス、大学教育における様々なプロジェクト、企業向けナレーション、オンライン・プレゼンテーション、eラーニング・チュートリアル等で求められる音声を手掛けてきました。",
    aboutRichPara2: "リチャードは、文部科学省(MEXT)、ウーブン・バイ・トヨタ、早稲田大学、CYBERDYNE株式会社、Q-Gamesといった一流企業・機関にも声を提供してきました。",
    aboutRichPara3: "リチャードの優しくなおかつ明瞭なテノールボイスは、愛嬌のある軽快さから荘厳な権威まで幅広くこなす柔軟な技巧により、聴き手を魅了しています。彼の聴く人と心を通わせる卓越したその技術は、30年以上にわたる大学での教育者としての経歴のみならず、週末に東京のジャズ・ロックバンドでサックス奏者として活動してきた経験からも培われました。リチャードは、すべてのプロジェクトに対して、創造性や専門知識を駆使し、クライアントの構想（ヴィジョン）を具現化するために全力を注いでいます。",
    demoAudio: "自宅のスタジオで録音したデモ",
    lang: "EN",
    schedulefooter: "オンライン面談を日程設定する",
  }
};

// Track current language (default to English)
let isEnglish = true;

// Add a click event listener to the flag
toggleLangButton.addEventListener('click', () => {
    // Toggle language
    const currentLang = isEnglish ? 'japanese' : 'english';

    // Loop through all translatable elements and update their text
    translatableElements.forEach((element) => {
        const key = element.getAttribute('data-key'); // Get the data-key value
        element.textContent = translations[currentLang][key]; // Set the translated text
    });

    toggleLangButton.src = isEnglish
        ? 'assets/images/japanflag.png'
        : 'assets/images/japanflag.png';
        // ? 'assets/images/en-flag.png'
        // : 'assets/images/japanflag.png';

    isEnglish = !isEnglish; // Flip the language state
});

////////////MAKING Meeting Scheduler : 


const modal = document.getElementById('scheduleModal');
const openModalLink = document.querySelector('a[data-key="schedule"]');
const bookAppointmentBtn = document.getElementById('bookAppointmentBtn');

// Open modal when either the "Schedule a Call" link or "Book Appointment" button is clicked
openModalLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    modal.style.display = 'block';
});

bookAppointmentBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});
