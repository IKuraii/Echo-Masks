document.addEventListener('DOMContentLoaded', () => {
    const maskCircles = document.querySelectorAll('.mask-circle');
    const loginBtn = document.getElementById('loginBtn');
    const nameInput = document.getElementById('playerName');
    const loginBox = document.getElementById('loginBox');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const errorMsg = document.getElementById('errorMsg');

    let selectedMask = null;

    // منطق اختيار القناع
    maskCircles.forEach(circle => {
        circle.addEventListener('click', function() {
            maskCircles.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedMask = this.getAttribute('data-mask'); 
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
                window.location.href = 'rooms.html';
            }, 2500); 

        }, 1000); 
    });
});
