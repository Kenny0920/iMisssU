const content = [
    // --- 第一階段：溫馨回憶與感觸 ---
    { text: "這陣子，我一直在想一件事...", color: "#f8f9fa", emojis: ["💭", "☁️", "⏳"] },
    { text: "那些和你去過的地方...", color: "#e3f2fd", emojis: ["🌍", "📍", "👣"] },
    { text: "那些和你一起做過的事...", color: "#fff9c4", emojis: ["🎨", "🍿", "🎬"] },
    { text: "一定是我最開心的時刻。", color: "#fffde7", emojis: ["✨", "😊", "☀️"] },
    { text: "提分手的那個晚上，我不停地回想...", color: "#eceff1", emojis: ["🌙", "🌌", "🌑"] },
    { text: "第一次去找你見面時的時候，", color: "#e8f5e9", emojis: ["🛤️", "🚉", "🎒"] },
    { text: "那時候是多麼奮不顧身，", color: "#f1f8e9", emojis: ["🔥", "🏃‍♂️", "💨"] },
    { text: "不顧一切隱瞞家人只為與你見一面，", color: "#fff3e0", emojis: ["🤫", "🔒", "💓"] },
    { text: "那天晚上我們一起散步、一起玩滑板，", color: "#e1f5fe", emojis: ["🛹", "🌌", "👫"] },
    { text: "我從沒想過事情會發展成現在這樣，", color: "#f3e5f5", emojis: ["🥀", "🌧️", "💔"] },
    
    // --- 第二階段：深切自省與道歉 ---
    { text: "我可能是習慣身邊有你了吧...", color: "#1a237e", emojis: ["🏠", "🌙", "🫂"] }, // 深藍
    { text: "覺得一切平平淡淡的也不錯吧", color: "#283593", emojis: ["🍃", "🌑", "🕯️"] }, 
    { text: "自以為是的以為很了解你的感受...", color: "#311b92", emojis: ["😔", "🧠", "🌀"] }, // 墨紫
    { text: "無意間忽略了很多重要的情趣，", color: "#3949ab", emojis: ["🥀", "🔇", "🌑"] },
    { text: "也無意間傷害了你的心...", color: "#263238", emojis: ["💧", "🩹", "🍂"] }, // 深灰藍
    { text: "我想為我的不負責任、無知道歉，", color: "#1a237e", emojis: ["🙇‍♂️", "🙏", "🕯️"] },
    { text: "我以為我們可以長久是因為我跟其他人有所不同，", color: "#283593", emojis: ["🌌", "💎", "🧩"] },
    { text: "是我太天真、太自以為了...", color: "#311b92", emojis: ["🤡", "🌫️", "🍂"] },
    { text: "我很抱歉...", color: "#1a237e", emojis: ["🤲", "🕊️", "💧"] },
    { text: "我讓你受了這麼多委屈卻不自知...", color: "#263238", emojis: ["😢", "🌊", "🕯️"] },

// ... 索引 0 - 20 維持原樣 ...

// --- 第三階段：黎明與承諾 (太陽升起後的顏色) ---
    { text: "我想說的是...", color: "#fff9c4", emojis: ["📢", "❤️", "✉️"] }, // 晨曦黃
    { text: "這段沒有你的時間裡，", color: "#fffde7", emojis: ["🕰️", "🗓️", "🍂"] }, 
    { text: "我深深的了解到...", color: "#fff59d", emojis: ["💡", "🔍", "📖"] }, 
    { text: "你在我心中佔據多麼大的一部分，", color: "#fff176", emojis: ["💖", "🌍", "🔐"] }, // 陽光金
    { text: "少了你，我每天都過的渾渾噩噩，", color: "#f9fbe7", emojis: ["🌫️", "🌀", "🚶‍♂️"] }, 
    { text: "我想照顧妳、回到最當初遇見你的那份熱情...", color: "#fff3e0", emojis: ["🔥", "🌹", "☀️"] }, // 溫暖橘
    { text: "我能給你妳應得的陪伴、你期待的未來，", color: "#e8f5e9", emojis: ["🏡", "💍", "🌟"] }, // 希望綠
    { text: "請你相信我!", color: "#f1f8e9", emojis: ["🤝", "🎯", "✨"] }, 
    { text: "我不會再讓我辜負你的付出!", color: "#fce4ec", emojis: ["🛡️", "💗", "🌱"] }, // 誠懇粉
    { text: "我會用行動而不是感覺相處，", color: "#f8bbd0", emojis: ["🛠️", "💪", "🌈"] },
    { text: "還記得當初說要造一個我們自己的網頁嗎?", color: "#e1f5fe", emojis: ["💻", "🌐", "👩‍💻"] }, // 夢想藍
    { text: "這是我小小行動證明，沒想到用在這個場合", color: "#e0f2f1", emojis: ["🎁", "⌨️", "🍀"] },
    { text: "如果你願意，我們一定可以更好，讓你幸福到最後", color: "#fce4ec", emojis: ["💍", "💐", "♾️"] },

    // --- 加強承諾段落 ---
    { text: "我們一起經歷過最美好的時刻...", color: "#fff9c4", emojis: ["📸", "🎠", "🍭"] },
    { text: "也一起經歷過最低潮的時刻。", color: "#fffde7", emojis: ["⛈️", "🕯️", "🫂"] },
    { text: "我不會讓你再一個人承擔情緒，", color: "#e8f5e9", emojis: ["🛡️", "🌊", "🤝"] },
    { text: "只要你需要我的地方，我一定會出現並且成為你的依靠，", color: "#f1f8e9", emojis: ["🏗️", "⚓", "🏠"] },
    { text: "這次讓我成長了不少...", color: "#fff9c4", emojis: ["🌱", "📈", "🧠"] },
    { text: "很感謝你讓我知道怎麼愛一個人", color: "#fce4ec", emojis: ["📚", "💗", "✨"] },
    { text: "現在!", color: "#fff3e0", emojis: ["⚡", "📍", "🎬"] },
    { text: "我已經準備好了!", color: "#ffecb3", emojis: ["💯", "🏁", "🔥"] },
    { text: "我不會再成為你的壓力來源", color: "#e0f2f1", emojis: ["🎈", "🧘", "🍃"] },
    { text: "我會當個100分的伴侶!", color: "#fffde7", emojis: ["🏆", "🌟", "🌹"] },
    { text: "讓我承諾你最後一次吧!", color: "#fce4ec", emojis: ["🕯️", "✋", "📜"] },
    { text: "請你放100萬個心!", color: "#e8f5e9", emojis: ["💎", "🔐", "✅"] },
    { text: "最後我想問你...", color: "#ffcdd2", emojis: ["💓", "🥁", "❓"] },
    { text: "你願意再當一次我的女朋友嗎?", color: "#ff8a80", emojis: ["💍", "🌹", "❤️", "💏"] }
];

// 歌詞資料庫 (時間為秒)
const lyricsData = [
    { time: 0, text: "" },
    { time: 27, text: "茫茫人海之中 我找到我的家" },
    { time: 32, text: "我不知道我們 <span class='lyric-highlight'>未來</span> 會怎樣" },
    { time: 35, text: "但有你在 我很<span class='lyric-highlight'>心安</span>" },
    { time: 37, text: "你說你想 <span class='lyric-highlight'>陪在我身旁</span>" },
    { time: 43, text: "有一天 我睜開眼 看著你的臉" },
    { time: 48, text: "<span class='lyric-highlight'>幸福</span> 的瞬間 我有點膽怯" },
    { time: 51, text: "是不是有一天 所有美麗的畫面" },
    { time: 58, text: "都有個 <span class='lyric-highlight'>終點</span>" },
    { time: 63, text: "我想 陪你 很久 很久" },
    { time: 70, text: "我常想 我哪來 的資格 去擁有" },
    { time: 80, text: "這麼 <span class='lyric-highlight'>完美的你</span> 在這不完美的世界" },
    { time: 90, text: "我不貪婪 <span class='lyric-highlight'>能遇見你</span> 就很不錯了" },
    { time: 113, text: "有一天 我睜開眼 看著你的臉" },
    { time: 118, text: "那 <span class='lyric-highlight'>幸福</span> 的瞬間 我有點膽怯" },
    { time: 123, text: "是不是有一天 所有美麗的畫面" },
    { time: 128, text: "都有個 <span class='lyric-highlight'>終點</span>" },
    { time: 134, text: "我想 <span class='lyric-highlight'>陪你</span> 很久 很久" },
    { time: 142, text: "我常想 我哪來 的資格 去擁有" },
    { time: 150, text: "這麼<span class='lyric-highlight'>完美的你</span> 在這不完美的世界" },
    { time: 161, text: "我不貪婪 <span class='lyric-highlight'>能遇見你 就很不錯了</span>" },
    { time: 171, text: "我想 陪你 <span class='lyric-highlight'>很久</span> 很久" },
    { time: 179, text: "我常想 我哪來 的資格 去擁有" },
    { time: 187, text: "這麼 <span class='lyric-highlight'>完美的你</span> 在這不完美的世界" },
    { time: 199, text: "我不貪婪 能遇見你 <span class='lyric-highlight'>就很...</span>" }
];

// --- 新增：掉落媒體清單 ---
const fallingMedia = [
    { type: 'image', src: 'photos/n1.jpg' },
    { type: 'video', src: 'photos/v2.mp4' },
    { type: 'image', src: 'photos/n3.jpg' },
    { type: 'image', src: 'photos/n4.jpg' },
    { type: 'image', src: 'photos/n5.jpg' },
    { type: 'image', src: 'photos/n6.jpg' },
    { type: 'video', src: 'photos/v7.mp4' },
    { type: 'image', src: 'photos/n8.jpg' },
    { type: 'image', src: 'photos/n9.jpg' },
    { type: 'image', src: 'photos/n10.jpg' },
    { type: 'video', src: 'photos/v11.mp4' },
    { type: 'video', src: 'photos/v12.mp4' },
    { type: 'image', src: 'photos/n13.jpg' },
    { type: 'image', src: 'photos/n14.jpg' },
    { type: 'image', src: 'photos/n15.jpg' },
    { type: 'video', src: 'photos/v16.mp4' },
    { type: 'video', src: 'photos/v17.mp4' },
    { type: 'image', src: 'photos/n18.jpg' },
    { type: 'image', src: 'photos/n19.jpg' },
    { type: 'video', src: 'photos/v20.mp4' },
    { type: 'image', src: 'photos/n21.jpg' },
    { type: 'image', src: 'photos/n22.jpg' },
    { type: 'image', src: 'photos/n23.jpg' },
    { type: 'image', src: 'photos/n24.jpg' },
    { type: 'image', src: 'photos/n25.jpg' },
    { type: 'video', src: 'photos/v26.mp4' },
    { type: 'image', src: 'photos/n27.jpg' },
    { type: 'image', src: 'photos/n28.jpg' },
    { type: 'image', src: 'photos/n29.jpg' },
    { type: 'image', src: 'photos/n30.jpg' },
    { type: 'image', src: 'photos/n31.jpg' },
    { type: 'image', src: 'photos/n32.jpg' },
    { type: 'image', src: 'photos/n33.jpg' }
];

let index = 0;
let fallingMediaIndex = 0; // 追蹤目前掉落到哪一個媒體
let currentEmojiList = ["✨", "🤍", "🌸"]; 
let emojiTimer = null;
let dropCount = 0; 
let mediaFallTimer = null; // 控制媒體掉落的定時器
let dropFromLeft = true;

// 取得 DOM 元素
const bgMusic = document.getElementById('bgMusic');
const envelope = document.getElementById('envelope');
const lightOrb = document.getElementById('lightOrb');
const openButton = document.getElementById('openButton');
const stickyNoteContainer = document.getElementById('stickyNoteContainer');
const note = document.getElementById('note');
const noteText = document.getElementById('noteText');
const lyricEl = document.getElementById('currentLyric');
const gridBg = document.getElementById('gridBg');
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');

// 初始化背景格子
if(gridBg) {
    for (let i = 0; i < 100; i++) gridBg.appendChild(document.createElement('div'));
}
startContinuousFalling();

// --- 新增：創建並掉落媒體框 ---
function createFallingMedia() {
    if (!fallingMedia.length) return;
    
    const mediaItem = fallingMedia[fallingMediaIndex];
    const frame = document.createElement('div');
    frame.className = 'falling-media-frame';
    
    // --- 左右交替掉落位置邏輯 (維持你之前的需求) ---
    const frameWidth = 150;
    const margin = 50;
    let leftPos;
    if (dropFromLeft) {
        leftPos = Math.random() * (window.innerWidth * 0.3) + margin;
    } else {
        leftPos = Math.random() * (window.innerWidth * 0.3) + (window.innerWidth * 0.6);
    }
    frame.style.left = Math.min(leftPos, window.innerWidth - frameWidth - 20) + 'px';
    dropFromLeft = !dropFromLeft;

    // --- 隨機旋轉邏輯：有時往左，有時往右 ---
    // 設定初始角度 (例如 -20度 到 +20度)
    const startRot = Math.random() * 40 - 20;
    // 設定旋轉方向與幅度 (讓它旋轉 30~60 度，方向隨機)
    const rotAmount = (Math.random() * 30 + 30) * (Math.random() > 0.5 ? 1 : -1);
    const endRot = startRot + rotAmount;

    // 將隨機角度傳給 CSS 變數
    frame.style.setProperty('--start-rotate', `${startRot}deg`);
    frame.style.setProperty('--end-rotate', `${endRot}deg`);

    // --- 掉落速度 (慢速優雅) ---
    const duration = Math.random() * 6 + 9; 
    frame.style.animationDuration = duration + 's';

    // 媒體內容載入 (維持原樣)
    let contentElement;
    if (mediaItem.type === 'image') {
        contentElement = document.createElement('img');
        contentElement.src = mediaItem.src;
    } else {
        contentElement = document.createElement('video');
        contentElement.src = mediaItem.src;
        contentElement.muted = true;
        contentElement.autoplay = true;
        contentElement.loop = true;
        contentElement.playsInline = true;
        contentElement.load();
        contentElement.oncanplay = () => { contentElement.play().catch(e => {}); };
    }
    
    frame.appendChild(contentElement);
    document.body.appendChild(frame);

    setTimeout(() => { frame.remove(); }, (duration + 1) * 1000);
    fallingMediaIndex = (fallingMediaIndex + 1) % fallingMedia.length;
}

// --- 點擊「開啟」按鈕 ---
openButton.addEventListener('click', () => {
    // 1. 播放音樂
    if (bgMusic) {
        bgMusic.volume = 0.05;
        bgMusic.play().catch(e => console.log("Music blocked"));
    }

    // 2. 啟動照片/影片掉落 (每5秒一個)
    if (!mediaFallTimer) {
        createFallingMedia(); // 先掉一個
        mediaFallTimer = setInterval(createFallingMedia, 9000); // 每5秒掉一個
    }
    
    // 3. 信封開啟動畫
    envelope.classList.add('opened');
    openButton.style.opacity = '0';
    setTimeout(() => { openButton.style.display = 'none'; }, 500);

    // 4. 啟動光點
    setTimeout(() => {
        if(lightOrb) lightOrb.classList.add('active');
    }, 600);

    // 5. 銜接便利貼彈出
    setTimeout(() => {
        stickyNoteContainer.classList.remove('hidden');
        stickyNoteContainer.classList.add('active');
        document.getElementById('envelopeWrapper').style.opacity = '0';

        setTimeout(() => {
            stickyNoteContainer.style.opacity = '1';
            note.classList.add('appear');
            
            noteText.innerText = content[0].text;
            document.body.style.backgroundColor = content[0].color; // 背景色跟隨便利貼
            currentEmojiList = content[0].emojis;
            index = 1;
        }, 50);
        
        setTimeout(() => { document.getElementById('envelopeWrapper').classList.add('hidden'); }, 1000);
    }, 3800); 
});
// --- 新增：歌詞同步處理邏輯 ---
// --- 歌詞同步處理邏輯 (修正版) ---
// --- 歌詞同步處理邏輯 (終極穩定版) ---
let currentLyricsText = ""; 

if (bgMusic && lyricEl) {
    bgMusic.addEventListener('timeupdate', () => {
        let targetHTML = "";
        
        for (let i = 0; i < lyricsData.length; i++) {
            if (bgMusic.currentTime >= lyricsData[i].time) {
                targetHTML = lyricsData[i].text;
            }
        }
        
        // 提取純文字進行比對
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = targetHTML;
        const targetPlainText = tempDiv.textContent || tempDiv.innerText || "";

        // 只有文字內容改變時，才執行一次性的淡入淡出
        if (currentLyricsText !== targetPlainText) {
            currentLyricsText = targetPlainText;
            
            lyricEl.style.opacity = 0;
            
            setTimeout(() => {
                lyricEl.innerHTML = targetHTML;
                lyricEl.style.opacity = 1;
            }, 400);
        }
    });
}

// --- 便利貼點擊 ---
// 取得新元素的 DOM
const subNoteText = document.getElementById('subNoteText');

// --- 修正後的點擊監聽器 ---
note.addEventListener('click', () => {
    // 1. 立即停止之前的打字計時器，防止衝突
    clearTimeout(typingTimer);
    
    // 2. 移除淡出動畫類別，避免與打字機衝突導致閃爍
    noteText.classList.remove('fade-out');
    
    // 3. 稍微延遲清空文字，讓切換背景色與太陽月亮的動作先執行
    if (index < content.length) {
        const current = content[index];
        
        // 更新背景色與 Emoji 列表
        document.body.style.backgroundColor = current.color;
        currentEmojiList = current.emojis;

        // --- 太陽、月亮轉場邏輯 ---
        if (index >= 11 && index <= 20) {
            if (moon) { moon.classList.add('moon-visible'); moon.classList.remove('moon-hidden'); }
            if (sun) { sun.classList.add('sun-hidden'); sun.classList.remove('sun-visible'); }
        } 
        else if (index >= 21) {
            if (moon) { moon.classList.add('moon-hidden'); moon.classList.remove('moon-visible'); }
            if (sun) { sun.classList.add('sun-visible'); sun.classList.remove('sun-hidden'); }
            if (index === 21) document.body.style.backgroundColor = "#fff9c4"; 
        } 
        else {
            if (moon) { moon.classList.add('moon-hidden'); moon.classList.remove('moon-visible'); }
            if (sun) { sun.classList.add('sun-hidden'); sun.classList.remove('sun-visible'); }
        }

        // --- 開始打字 (不再使用淡入淡出，直接清空並打字) ---
        noteText.innerHTML = ""; 
        typeWriter(current.text, 0);

        // 噴發少量 Emoji
        for (let i = 0; i < 8; i++) createEmoji(current.emojis);
        index++;
    } else {
        // --- 最終告白階段 ---
        if (moon) { moon.classList.add('moon-hidden'); moon.classList.remove('moon-visible'); }
        if (sun) { sun.classList.add('sun-hidden'); sun.classList.remove('sun-visible'); }

        document.body.style.backgroundColor = "#ff8a80";
        noteText.innerHTML = "";
        
        typeWriter("讓我們一起寫下更多故事，好嗎？", 0, () => {
            launchConfetti();
            setTimeout(() => {
                if (subNoteText) {
                    subNoteText.classList.remove('hidden');
                    subNoteText.innerText = "如果你願意就快打電話給他吧!\n他很想妳!!";
                    setTimeout(() => subNoteText.classList.add('show'), 50);
                }
            }, 2000);
        });

        currentEmojiList = ["❤️", "🥰", "💌", "💍"];
    }
});

// --- Emoji 掉落邏輯 (不變) ---
function startContinuousFalling() {
    if (emojiTimer) return;
    emojiTimer = setInterval(() => { createEmoji(currentEmojiList); }, 300);
}

function createEmoji(emojiList) {
    const e = document.createElement('div');
    e.className = 'emoji';
    e.innerText = emojiList[Math.floor(Math.random() * emojiList.length)];
    let column = (dropCount % 2 === 0) ? [0,2,4,6,8][Math.floor(Math.random()*5)] : [1,3,5,7,9][Math.floor(Math.random()*5)];
    e.style.left = (column * 10 + Math.random() * 8) + 'vw';
    dropCount++;
    const duration = Math.random() * 2 + 5;
    e.style.animationDuration = duration + 's';
    e.style.fontSize = (Math.random() * 0.5 + 1.5) + 'rem';
    e.style.opacity = Math.random() * 0.4 + 0.6;
    document.body.appendChild(e);
    setTimeout(() => { e.remove(); }, duration * 1000);
}

// --- 新增：禮炮噴發函式 ---
function launchConfetti() {
    const burstCount = 60; // 一次噴發的數量
    const emojis = ["❤️", "💖", "✨", "🌹", "💍", "🥰", "💏"];
    
    for (let i = 0; i < burstCount; i++) {
        setTimeout(() => {
            const c = document.createElement('div');
            c.className = 'confetti';
            c.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            
            // 設定隨機的噴發路徑
            const targetX = (Math.random() * 100 - 50) + 'vw'; // 左右偏移 -50vw 到 50vw
            const targetY = (Math.random() * -100 - 20) + 'vh'; // 向上噴 20vh 到 120vh
            const targetRotate = (Math.random() * 720 - 360) + 'deg';
            
            c.style.setProperty('--target-x', targetX);
            c.style.setProperty('--target-y', targetY);
            c.style.setProperty('--target-rotate', targetRotate);
            
            // 讓顏色或大小有些微差異
            c.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';
            
            document.body.appendChild(c);
            
            // 移除元素
            setTimeout(() => {
                c.remove();
            }, 3000);
        }, i * 20); // 稍微錯開每顆 Emoji 的發射時間，讓噴發更有層次感
    }
}
function createStars() {
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 1 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        document.body.appendChild(star);
    }
}
createStars(); // 開啟時呼叫

// --- 在一起時間計時器 ---

// 1. 設定你們開始在一起的時間點 (請自行修改)
// 範例：2024年 12月 20日 18時 30分 0秒
const startDate = new Date(2022, 6, 1, 0, 0, 0); 

function updateTime() {
    const now = new Date();
    const diff = now - startDate; // 取得毫秒差

    // 計算各單位
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    // 更新到畫面
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('minutes');
    const secsEl = document.getElementById('seconds');

    if (daysEl) daysEl.innerText = d;
    if (hoursEl) hoursEl.innerText = h;
    if (minsEl) minsEl.innerText = m;
    if (secsEl) secsEl.innerText = s;
}

// 每秒更新一次
setInterval(updateTime, 1000);
// 網頁開啟立刻跑一次
updateTime();

let typingTimer; // 控制打字機節奏

// --- 進階打字機函式 (修正閃爍問題) ---
function typeWriter(text, i, fnCallback) {
    const noteText = document.getElementById('noteText');
    if (i < text.length) {
        // 處理 HTML 標籤
        if (text.substring(i, i + 1) === '<') {
            let endTag = text.indexOf('>', i);
            noteText.innerHTML = text.substring(0, endTag + 1);
            typingTimer = setTimeout(() => typeWriter(text, endTag + 1, fnCallback), 50);
        } else {
            noteText.innerHTML = text.substring(0, i + 1);
            
            let char = text.substring(i, i + 1);
            let delay = 150; // 基礎打字速度

            // 頓點感設定
            if (/[，。！？、…；]/.test(char)) {
                delay = 800; 
            } else if (/[ ]/.test(char)) {
                delay = 400; 
            }

            typingTimer = setTimeout(() => typeWriter(text, i + 1, fnCallback), delay);
        }
    } else if (typeof fnCallback == 'function') {
        fnCallback();
    }
}