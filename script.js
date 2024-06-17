// ارایه برای لیست
let shoppingList = [];

// تابع اضافه کردن ایتم جدید
function addItem() {
    // مقدار رو از ورودی میگیره
    let item = document.getElementById('add').value;
    // بررسی اینکه آیا مقدار وارد شده خالی نیست
    if (item) {
        // ایتم رو اضافه میکنه به لیست
        shoppingList.push(item);
        // مقدار اون کادر ورودی برابر باخالی میشود
        document.getElementById('add').value = '';
        alert(`${item} به لیست اضافه شد.`);
        displayList();
    } else {
        alert('لطفاً موردی را وارد کنید.');
    }
}

// متد حذف
function removeItem() {
    
    let item = document.getElementById('remove').value;
    // ایندکس موردی که اضافه کردیم به لیست
    let index = shoppingList.indexOf(item);
    
    if (index == 0) {
        // یک عنصر رو بر اساس ایندکس از لیست حذف میکنه
        shoppingList.splice(index, 1);
        document.getElementById('remove').value = '';
        alert(`${item} از لیست حذف شد.`);
        displayList();
    } else {
        alert(`${item} در لیست پیدا نشد.`);
    }
}

// متد نمایش
function displayList() {
    // یک فضایی رو از htmlمیگره برای نمایش 
    let listDiv = document.getElementById('shoppingList');
    // محتوای قبل رو پاک میکنه به جهت این که لیست تکراری نشه
    listDiv.innerHTML = '<h2>لیست خرید:</h2>';
    // لیست خالی هست یا نه
    if (shoppingList.length == 0) {
        listDiv.innerHTML += '<p>لیست خرید خالی است.</p>';
    } else {
        // این کامنتش طولانی میشه
        let ul = document.createElement('ul');
        for (let i = 0; i < shoppingList.length; i++) {
            let li = document.createElement('li');
            li.textContent = shoppingList[i];
            ul.appendChild(li);
        }
        listDiv.appendChild(ul);
    }
}

// تو رویداد onload متد display اجرا میشه
window.onload = displayList;
