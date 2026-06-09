document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. البيانات الديناميكية (Dynamic Injection)
    // ==========================================
    
    const playerData = {
        name: "Shadow", // يمكن تغييره أو سحبه من قاعدة البيانات لاحقاً
        history: [
            { opponent: "الخصم المجهول", result: "انتصار سحيق", isWin: true },
            { opponent: "حارس الظلال", result: "انسحاب", isWin: false }
        ]
    };

    // تعبئة دائرة الأفتار بالحرف الأول من الاسم
    const avatarInitial = document.getElementById('playerAvatarInitial');
    if(avatarInitial && playerData.name) {
        avatarInitial.textContent = playerData.name.charAt(0).toUpperCase();
    }

    // تعبئة سجل المواجهات (مربوطة بـ IDs فارغة في الـ HTML)
    document.getElementById('historyName1').textContent = `ضد: ${playerData.history[0].opponent}`;
    document.getElementById('historyResult1').textContent = playerData.history[0].result;
    document.getElementById('historyResult1').style.color = playerData.history[0].isWin ? 'var(--snow-white)' : 'var(--text-muted)';

    document.getElementById('historyName2').textContent = `ضد: ${playerData.history[1].opponent}`;
    document.getElementById('historyResult2').textContent = playerData.history[1].result;
    document.getElementById('historyResult2').style.color = playerData.history[1].isWin ? 'var(--snow-white)' : 'var(--text-muted)';

    // ==========================================
    // 2. التفاعلات البصرية (UI Interactions)
    // ==========================================
    
    // تفعيل أزرار ترسانة الأقنعة
    const maskBtns = document.querySelectorAll('.mask-btn');
    maskBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            maskBtns.forEach(b => b.classList.remove('active-mask'));
            this.classList.add('active-mask');
        });
    });

    // تفعيل أيقونات الشريط الجانبي
    const navIcons = document.querySelectorAll('.nav-icon');
    navIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            navIcons.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

});
