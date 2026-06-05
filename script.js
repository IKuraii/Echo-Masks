// دالة فتح النافذة المنبثقة
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

// دالة إغلاق النافذة المنبثقة
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// إغلاق النافذة عند الضغط خارج المربع الزجاجي (في المساحة المظللة)
document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal-overlay');
    
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            // التحقق مما إذا كان النقرة على الخلفية المظللة وليس على محتوى النافذة
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });

    // إضافة تفاعل للتبديل بين أيقونات الشريط السفلي (اختياري للواجهة)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
