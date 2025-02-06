// JavaScript code
const toggleLangButton = document.getElementById('toggle-lang');
const translatableElements = document.querySelectorAll('[data-key]');

// Define translations
const translations = {
    english: {
        contact: "Contact",
        schedule: "Schedule a call with Rich",
        aboutRichdevider: "RICHARD OFFERS A RELAXED GENTLE TENOR WITH EXCELLENT WARM LOW-END SUPPORT.",
        aboutRichPara1: "Rich is a voice over actor based in Tokyo with deep ties to San Francisco. His transpacific mindset makes Rich a sought-after voice for Japanese public service announcements, university projects, corporate narrations, web presentations, and e-learning tutorials.",
        aboutRichPara2: "Rich has lent his distinct voice to such prestigous projects as MEXT, Woven Industries, Waseda University, Cyberdyn Sytems, Q-Games and many more.",
        aboutRichPara3: "Rich's warm, relatable, and authentic tenor captivates listeners with a versitile performance style that effortlessly ranges from light-hearted charm to trusted authority. This unique ability to connect with listeners stems from Rich's 30+ years as a university teacher and weekend saxophonist in jazz and rock bands across Tokyo.",
        aboutRichPara4: "Rich approaches every project with creativity, expertise, and an unwavering commitment to bringing his clients’ visions to life.",
        demoAudio: "COMMERCIAL DEMO",
        demoAudio2: "Recorded From My Home Studio",
        lang: "JP",
        schedulefooter: "Schedule Call With Rich",
  },
japanese: {
    contact: "Contact",
    schedule: "オンライン面談を日程設定する",
    aboutRichdevider: "リチャードは、リラックスした穏やかなテノールと優れた温かみのある低音を提供します。",
    aboutRichPara1: "リチャードは、サンフランシスコと深いつながりを持ちながら、東京を拠点に活動するボイスオーバー/ナレーターです。太平洋を越えた広い視野と価値観を活かし、日本の公共サービス向けのアナウンスや大学教育のさまざまなプロジェクト、企業向けナレーション、オンラインプレゼンテーション、eラーニングチュートリアルなど、幅広い分野で音声を提供してきました。",
    aboutRichPara2: "これまでに、文部科学省（MEXT）、ウーブン・バイ・トヨタ、早稲田大学、CYBERDYNE株式会社、Q-Gamesなど、国内外の一流企業や機関に声を提供してきた実績があります。",
    aboutRichPara3: "リチャードの優しく明瞭なテノールボイスは、親しみやすく軽快なトーンから荘厳で威厳のある表現まで自在に使い分けることができ、聴く人々を魅了します。この卓越したスキルは、30年以上にわたる大学教育者としてのキャリアに加え、週末に東京のジャズ・ロックバンドでサックス奏者として活動してきた経験によって培われました。",
    aboutRichPara4: "リチャードは、どのプロジェクトにも創造性と専門性を最大限に注ぎ込み、クライアントのビジョンを形にするため全力で取り組んでいます。",
    demoAudio: "商用デモ",
    demoAudio2: "自宅のスタジオから録音",
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

    // toggleLangButton.src = isEnglish
    //     ? 'assets/images/en-flag.png'
    //     : 'assets/images/japanflag.png';

    isEnglish = !isEnglish; // Flip the language state
});

////////////MAKING Meeting Scheduler : 


// const modal = document.getElementById('scheduleModal');
// const openModalLink = document.querySelector('a[data-key="schedule"]');
// const bookAppointmentBtn = document.getElementById('bookAppointmentBtn');

// // Open modal when either the "Schedule a Call" link or "Book Appointment" button is clicked
// openModalLink.addEventListener('click', function (event) {
//     event.preventDefault(); // Prevent default link behavior
//     modal.style.display = 'block';
// });

// bookAppointmentBtn.addEventListener('click', function () {
//     modal.style.display = 'block';
// });
