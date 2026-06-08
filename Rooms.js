document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. البيانات الديناميكية (لا يوجد أسماء ثابتة في HTML)
    // ==========================================
    
    const playerData = {
        name: "Shadow", // يتم جلبه لاحقاً من قاعدة البيانات
        history: [
            { opponent: "الخصم المجهول", result: "انتصار سحيق", isWin: true },
            { opponent: "حارس الظلال", result: "انسحاب", isWin: false }
        ]
    };

    // وضع الحرف الأول من اسم اللاعب في دائرة الأفتار
    const avatarInitial = document.getElementById('playerAvatarInitial');
    if(avatarInitial && playerData.name) {
        avatarInitial.textContent = playerData.name.charAt(0).toUpperCase();
    }

    // حقن بيانات سجل المواجهات في الخانات الفارغة
    document.getElementById('historyName1').textContent = `ضد: ${playerData.history[0].opponent}`;
    document.getElementById('historyResult1').textContent = playerData.history[0].result;
    document.getElementById('historyResult1').style.color = playerData.history[0].isWin ? 'var(--snow-white)' : 'var(--text-muted)';

    document.getElementById('historyName2').textContent = `ضد: ${playerData.history[1].opponent}`;
    document.getElementById('historyResult2').textContent = playerData.history[1].result;
    document.getElementById('historyResult2').style.color = playerData.history[1].isWin ? 'var(--snow-white)' : 'var(--text-muted)';


    // ==========================================
    // 2. التفاعلات البصرية
    // ==========================================
    
    // تفاعل أزرار الأقنعة
    const maskBtns = document.querySelectorAll('.mask-btn');
    maskBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            maskBtns.forEach(b => b.classList.remove('active-mask'));
            this.classList.add('active-mask');
        });
    });

    // تفاعل أيقونات الشريط الجانبي
    const navIcons = document.querySelectorAll('.nav-icon');
    navIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            navIcons.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

});
