document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. البيانات الديناميكية للإحصائيات والسجل
    // ==========================================
    
    const playerData = {
        name: "Shadow",
        stats: {
            resonanceLevel: 14,
            resonanceProgress: 68, // النسبة المئوية للامتلاء (%)
            soulFragments: "1,540"
        },
        history: [
            { opponent: "الخصم المجهول", result: "انتصار سحيق", isWin: true },
            { opponent: "حارس الظلال", result: "انسحاب", isWin: false }
        ]
    };

    // أ) تعبئة إحصائيات اللاعب في التجويف السفلي
    document.getElementById('resonanceLevelText').textContent = `Lv. ${playerData.stats.resonanceLevel}`;
    document.getElementById('soulFragmentsText').textContent = `شظايا الأرواح: ${playerData.stats.soulFragments}`;
    
    // تحريك شريط التقدم بلمسة انسيابية بعد تحميل الصفحة
    setTimeout(() => {
        const progressFill = document.getElementById('resonanceProgressFill');
        if (progressFill) {
            progressFill.style.width = `${playerData.stats.resonanceProgress}%`;
        }
    }, 300);

    // ب) حقن بيانات سجل المواجهات
    document.getElementById('historyName1').textContent = `ضد: ${playerData.history[0].opponent}`;
    document.getElementById('historyResult1').textContent = playerData.history[0].result;
    document.getElementById('historyResult1').style.color = playerData.history[0].isWin ? 'var(--snow-white)' : 'var(--text-muted)';

    document.getElementById('historyName2').textContent = `ضد: ${playerData.history[1].opponent}`;
    document.getElementById('historyResult2').textContent = playerData.history[1].result;
    document.getElementById('historyResult2').style.color = playerData.history[1].isWin ? 'var(--snow-white)' : 'var(--text-muted)';

    // ==========================================
    // 2. التفاعلات البصرية
    // ==========================================
    
    // تفعيل أيقونات الشريط الجانبي
    const navIcons = document.querySelectorAll('.nav-icon');
    navIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            navIcons.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

});
