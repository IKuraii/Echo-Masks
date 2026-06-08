document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. تفاعل القائمة الجانبية (Sidebar Navigation)
    // ==========================================
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ==========================================
    // 2. تغذية الواجهة بالبيانات (Dynamic Data Injection)
    // ==========================================
    
    /* هنا نقوم بمحاكاة جلب البيانات من السيرفر (API) 
      لاحقاً يمكنك استبدال هذه البيانات الوهمية ببيانات حقيقية من قاعدة البيانات
    */
    const playerData = {
        name: "Muzushi", // الاسم الذي سيدخل به اللاعب
        lastGame: {
            word: "قناع",
            result: "فوز",
            points: "+150 نقطة"
        },
        friends: [
            { name: "ShadowWalker", status: "في غرفة الانتظار", isOnline: true },
            { name: "NightFox", status: "يلعب المستوى الأول", isOnline: true },
            { name: "RavenX", status: "متاح", isOnline: true },
            { name: "GrimReaper", status: "متاح", isOnline: true }
        ]
    };

    // أ) تحديث اسم اللاعب في الهيدر
    document.getElementById('playerNameDisplay').textContent = playerData.name;

    // ب) تحديث تفاصيل آخر لعبة
    document.getElementById('lastGameDetails').textContent = `الكلمة: ${playerData.lastGame.word} | النتيجة: ${playerData.lastGame.result}`;
    document.getElementById('lastGamePoints').textContent = playerData.lastGame.points;

    // ج) تحديث قائمة الأصدقاء
    const friendsListContainer = document.getElementById('friendsListContainer');
    const onlineFriendsCount = document.getElementById('onlineFriendsCount');
    
    // تفريغ القوالب المؤقتة من الـ HTML
    friendsListContainer.innerHTML = '';
    
    // تحديث عداد الأصدقاء
    onlineFriendsCount.textContent = playerData.friends.length;

    // بناء قائمة الأصدقاء برمجياً
    playerData.friends.forEach(friend => {
        const friendElement = document.createElement('div');
        friendElement.classList.add('friend-item');
        
        friendElement.innerHTML = `
            <div class="friend-avatar">
                ${friend.isOnline ? '<div class="online-dot"></div>' : ''}
            </div>
            <div class="friend-info">
                <h4 class="friend-name">${friend.name}</h4>
                <p class="friend-status">${friend.status}</p>
            </div>
        `;
        
        friendsListContainer.appendChild(friendElement);
    });

});
