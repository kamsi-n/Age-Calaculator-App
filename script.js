const submit = document.getElementById('calculate');

submit.addEventListener('click', function validateAge() {
    const label = document.querySelector('label');
    const day = document.getElementById('day').value;
    const dayError = document.getElementById('errormsg-D');
    if (!day) {
        dayError.innerHTML = 'this field is required';
        label.style.color ='red';
    } else if (day < 1 || day > 31) {
        dayError.innerHTML = 'must be a valid day';
        label.style.color ='red';
    } else {
        dayError.style.visibility = 'hidden';
        label.style.color ='hsl(0, 1%, 44%);';
    };

    const month = document.getElementById('month').value;
    const monthError = document.getElementById('errormsg-M');
    if (!month) {
        monthError.innerHTML = 'this field is required';
        label.style.color ='red';
    } else if (month < 1 || month > 12) {
        monthError.innerHTML = 'must be a valid month';
        label.style.color ='red';
    } else {
        monthError.style.visibility = 'hidden';
        label.style.color ='hsl(0, 1%, 44%);';
    };

    const year = document.getElementById('year').value;
    const yearError = document.getElementById('errormsg-Y');
    if (!year) {
        yearError.innerHTML = 'this field is required'; 
        label.style.color ='red';
    } else if (year < 1900 || year > 2022) {   
        yearError.innerHTML = 'must be in the past';
        label.style.color ='red';
    } else {
        yearError.style.visibility = 'hidden';
        label.style.color ='hsl(0, 1%, 44%);';
    };
    
    const date = new Date();
    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();
    
    const finalYear = document.getElementById('finalYear');
    const finalMonth = document.getElementById('finalMonth');
    const finalDay = document.getElementById('finalDay');

    finalYear.innerHTML = currentYear - year;
    finalMonth.innerHTML = currentMonth - month;
    finalDay.innerHTML = currentDay - day;
}); 