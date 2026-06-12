document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. البيانات الديناميكية (Dynamic Injection)
    // ==========================================
    const playerData = {
        name: "Shadow",
        stats: {
            maskLevel: 18,        // تم تحديث المسمى برمجياً
            resonanceProgress: 74, // نسبة تعبئة الشريط (%)
            soulFragments: "2,890"
        },
        history: [
            { opponent: "الخصم المجهول", result: "انتصار سحيق", isWin: true },
            { opponent: "حارس الظلال", result: "انسحاب", isWin: false }
        ]
    };

    // تعبئة إحصائيات مستوى القناع
    document.getElementById('maskLevelText').textContent = `Lv. ${playerData.stats.maskLevel}`;
    document.getElementById('soulFragmentsText').textContent = `شظايا الأرواح: ${playerData.stats.soulFragments}`;
    
    // إطلاق حركة شريط التقدم الفضي/الثلجي
    setTimeout(() => {
        const progressFill = document.getElementById('resonanceProgressFill');
        if (progressFill) {
            progressFill.style.width = `${playerData.stats.resonanceProgress}%`;
        }
    }, 300);

    // حقن سجل المواجهات
    document.getElementById('historyName1').textContent = `ضد: ${playerData.history[0].opponent}`;
    document.getElementById('historyResult1').textContent = playerData.history[0].result;
    document.getElementById('historyResult1').style.color = playerData.history[0].isWin ? 'var(--text-pure)' : 'var(--text-muted)';

    document.getElementById('historyName2').textContent = `ضد: ${playerData.history[1].opponent}`;
    document.getElementById('historyResult2').textContent = playerData.history[1].result;
    document.getElementById('historyResult2').style.color = playerData.history[1].isWin ? 'var(--text-pure)' : 'var(--text-muted)';


    // ==========================================
    // 2. إدارة نافذة الإعدادات والوضع الكريستالي
    // ==========================================
    const settingsNavIcon = document.getElementById('settingsNavIcon');
    const settingsModal = document.getElementById('settingsModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const themeToggleCheckbox = document.getElementById('themeToggleCheckbox');

    // فتح النافذة المنبثقة عند النقر على الترس
    if (settingsNavIcon) {
        settingsNavIcon.addEventListener('click', () => {
            settingsModal.classList.add('show');
        });
    }

    // إغلاق النافذة عند النقر على علامة X
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            settingsModal.classList.remove('show');
        });
    }

    // إغلاق النافذة عند النقر خارج الصندوق الزجاجي
    window.addEventListener('click', (e) => {
        if (e.target === settingsModal) {
            settingsModal.classList.remove('show');
        }
    });

    // تبديل الوضع بين المظلم والمضيء الكريستالي عبر متغيرات الـ CSS
    if (themeToggleCheckbox) {
        themeToggleCheckbox.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('light-theme');
            } else {
                document.body.classList.remove('light-theme');
            }
        });
    }


    // ==========================================
    // 3. تفاعل أيقونات شريط التنقل
    // ==========================================
    const navIcons = document.querySelectorAll('.nav-icon');
    navIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            // لا نطبق الحالة النشطة على الترس لأنه يفتح نافذة منبثقة فقط
            if (this.id === 'settingsNavIcon') return;
            
            navIcons.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

});
