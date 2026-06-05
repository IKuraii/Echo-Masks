// وظيفة لتبديل الحالة النشطة بين أيقونات شريط التنقل
function setActive(clickedElement) {
    // إزالة الفئة النشطة (active) من جميع العناصر
    const items = document.querySelectorAll('.nav-item');
    items.forEach(item => item.classList.remove('active'));
    
    // إضافة الفئة النشطة للعنصر الذي تم النقر عليه
    clickedElement.classList.add('active');
}
