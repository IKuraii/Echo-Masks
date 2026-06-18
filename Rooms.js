document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. البيانات الديناميكية (إحصائيات وسجل)
    // ==========================================
    const playerData = {
        name: "Shadow",
        stats: {
            maskLevel: 24,       // مستوى القناع
            resonanceProgress: 82, // نسبة التعبئة (%)
            soulFragments: "3,150"
        },
        history: [
            { opponent: "الخصم المجهول", result: "انتصار سحيق", isWin: true },
            { opponent: "حارس الظلال", result: "انسحاب", isWin: false }
        ]
    };

    // تعبئة البيانات في واجهة الإحصائيات
    document.getElementById('maskLevelText').textContent = `Lv. ${playerData.stats.maskLevel}`;
    document.getElementById('soulFragmentsText').textContent = `شظايا الأرواح: ${playerData.stats.soulFragments}`;
    
    // حركة شريط التقدم السلسة
    setTimeout(() => {
        const progressFill = document.getElementById('resonanceProgressFill');
        if (progressFill) {
            progressFill.style.width = `${playerData.stats.resonanceProgress}%`;
        }
    }, 300);

    // حقن بيانات سجل المواجهات
    document.getElementById('historyName1').textContent = `ضد: ${playerData.history[0].opponent}`;
    document.getElementById('historyResult1').textContent = playerData.history[0].result;
    document.getElementById('historyResult1').style.color = playerData.history[0].isWin ? 'var(--text-pure)' : 'var(--text-muted)';

    document.getElementById('historyName2').textContent = `ضد: ${playerData.history[1].opponent}`;
    document.getElementById('historyResult2').textContent = playerData.history[1].result;
    document.getElementById('historyResult2').style.color = playerData.history[1].isWin ? 'var(--text-pure)' : 'var(--text-muted)';


    // ==========================================
    // 2. إدارة نافذة الإعدادات (Popover) وتبديل الصور
    // ==========================================
    const settingsNavIcon = document.getElementById('settingsNavIcon');
    const settingsPopover = document.getElementById('settingsPopover');
    const themeToggleCheckbox = document.getElementById('themeToggleCheckbox');
    const entityShowcase = document.getElementById('entityShowcase');

    // إظهار/إخفاء النافذة عند النقر على الترس
    if (settingsNavIcon) {
        settingsNavIcon.addEventListener('click', (e) => {
            e.stopPropagation(); // منع إغلاق النافذة فوراً
            settingsPopover.classList.toggle('show');
        });
    }

    // إغلاق النافذة عند النقر في أي مكان آخر خارجها
    window.addEventListener('click', (e) => {
        if (settingsPopover && !settingsPopover.contains(e.target) && !settingsNavIcon.contains(e.target)) {
            settingsPopover.classList.remove('show');
        }
    });

    // تبديل الوضع الكريستالي وصورة الكيان
    if (themeToggleCheckbox) {
        themeToggleCheckbox.addEventListener('change', function() {
            if (this.checked) {
                // تفعيل الوضع المضيء الكريستالي
                document.body.classList.add('light-theme');
                // تغيير صورة الكيان للمضيئة
                entityShowcase.style.backgroundImage = "url('MainThem(Light).png')";
            } else {
                // العودة للوضع المظلم
                document.body.classList.remove('light-theme');
                // استرجاع صورة الكيان المظلمة
                entityShowcase.style.backgroundImage = "url('MainTheme.png')";
            }
        });
    }

    // ==========================================
    // 3. تفاعل أيقونات شريط التنقل
    // ==========================================
    const navIcons = document.querySelectorAll('.nav-icon');
    navIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            // استثناء أيقونة الإعدادات من التحديد المباشر
            if (this.id === 'settingsNavIcon') return;
            
            navIcons.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

});
