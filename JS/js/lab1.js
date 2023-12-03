let expositions = [
        {
            theme: "Тематика виставки 1",
            location: "Місце проведення 1",
            date: new Date("2023-11-01"),
            organizer: "Організатор 1"
        },
        {
            theme: "Тематика виставки 2",
            location: "Місце проведення 2",
            date: new Date("2023-11-15"),
            organizer: ""
        },
        {
            theme: "Тематика виставки 3",
            location: "Місце проведення 3",
            date: new Date("2024-01-01"),
            organizer: "Організатор 3"
        }
    ];


function getDaysStatus(date) {
    let today = new Date();
    let daysUntil = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
    return daysUntil;
}

function updateTableRow(exposition, row) {
    const daysStatus = getDaysStatus(exposition.date);

    row.innerHTML = `
        <td>${exposition.theme}</td>
        <td>${exposition.location}</td>
        <td>${exposition.date.toDateString()}</td>
        <td>${exposition.organizer || 'Організатор не вказаний'}</td>
    `;

    if (daysStatus === 0) {
        row.style.fontWeight = 'bold';
    }

    if (daysStatus < 0) {
    let tdElements = row.querySelectorAll('td'); 
        tdElements[2].style.backgroundColor = "red"; 
    }
}

function updateInformation() {
    const tableBody = document.querySelector('.table tbody');
    tableBody.innerHTML = ''; 

    expositions.forEach(exposition => {
        const row = document.createElement('tr');
        updateTableRow(exposition, row);
        tableBody.appendChild(row);
    });
}
