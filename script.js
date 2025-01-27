document.getElementById('akan-name-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthday = new Date(document.getElementById('birthday').value);
    const gender = document.getElementById('gender').value;

    const dayOfWeek = calculateDayOfWeek(birthday);
    const akanName = getAkanName(dayOfWeek, gender);

    document.getElementById('result').innerText = `Your Akan name is ${akanName}`;
});

function calculateDayOfWeek(date) {
    const CC = Math.floor(date.getFullYear() / 100);
    const YY = date.getFullYear() % 100;
    const MM = date.getMonth() + 1; // Months are 0-indexed
    const DD = date.getDate();

    const dayOfWeek = ((CC / 4) - 2 * CC - 1 + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7;
    return Math.floor(dayOfWeek);
}

function getAkanName(day, gender) {
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    return gender === "male" ? maleNames[day] : femaleNames[day];
}
