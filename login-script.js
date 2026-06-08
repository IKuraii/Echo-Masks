document.addEventListener('DOMContentLoaded', () => {
    const mainAvatarBtn = document.getElementById('mainAvatarBtn');
    const masksPopup = document.getElementById('masksPopup');
    const maskOptions = document.querySelectorAll('.mask-option');
    const loginBtn = document.getElementById('loginBtn');
    const nameInput = document.getElementById('playerName');
    const loginBox = document.getElementById('loginBox');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const errorMsg = document.getElementById('errorMsg');

    let selectedMask = null;

    // فتح وإغلاق قائمة الأقنعة عند الضغط على الدائرة الرئيسية
    mainAvatarBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // منع إغلاق القائمة فوراً
        masksPopup.classList.toggle('show');
    });

    // إغلاق القائمة عند النقر في أي مكان آخر بالشاشة
    document.addEventListener('click', (e) => {
        if (!masksPopup.contains(e.target) && !mainAvatarBtn.contains(e.target)) {
            masksPopup.classList.remove('show');
        }
    });

    // منطق اختيار القناع من القائمة المنبثقة
    maskOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation(); // منع انتقال الحدث
            
            selectedMask = this.getAttribute('data-mask'); 
            
            // نسخ أيقونة الـ SVG من القناع المختار
            const selectedSvg = this.querySelector('.mask-svg').outerHTML;
            
            // وضع الأيقونة داخل الدائرة الرئيسية وتعديل خصائصها لتناسب الحجم الجديد
            mainAvatarBtn.innerHTML = selectedSvg;
            const newSvg = mainAvatarBtn.querySelector('.mask-svg');
            newSvg.style.width = '55px';
            newSvg.style.height = '55px';
            newSvg.style.color = 'var(--snow-white)';
            
            // إضافة تأثير التحديد للدائرة الرئيسية
            mainAvatarBtn.classList.add('has-mask');
            
            // إخفاء القائمة ورسالة الخطأ
            masksPopup.classList.remove('show');
            errorMsg.classList.remove('show');
        });
    });

    // إخفاء رسالة الخطأ عند بدء الكتابة
    nameInput.addEventListener('input', () => {
        errorMsg.classList.remove('show');
    });

    // منطق زر الدخول والتحويل التلقائي
    loginBtn.addEventListener('click', () => {
        const playerName = nameInput.value.trim(); 

        // التحقق من الشروط
        if (!selectedMask || playerName === '') {
            errorMsg.classList.add('show');
            return; 
        }

        // إضافة كلاس التلاشي لإخفاء مربع الدخول
        loginBox.classList.add('fade-out');

        // بعد انتهاء التلاشي (1 ثانية)، نعرض الترحيب وننتقل
        setTimeout(() => {
            welcomeMessage.textContent = `مرحباً، ${playerName}`;
            welcomeMessage.classList.add('show');
            
            // الانتقال الفعلي لصفحة اللوبي بعد عرض رسالة الترحيب بـ 2.5 ثانية
            setTimeout(() => {
                window.location.href = 'lobby.html';
            }, 2500); 

        }, 1000); 
    });
});
