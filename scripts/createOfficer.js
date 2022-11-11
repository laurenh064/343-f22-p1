/* define your functions here */
const tableBody = $('#table-body');

/**
 * Create an officer card.
 *
 * @param {*} officer Officer to create a card for.
 * @return {String} HTML string for a card.
 */
function createRow(officer) {
    const row = `
    <div class="card">
        <!-- <img src="${officer.img}" class="card-img-top" alt="${officer.role}"> -->
        <svg class="bd-placeholder-img" role="img" focusable="false"><title>${officer.role}</title><rect width="100%" height="100%" fill="#777"></rect></svg>
        <div class="card-body text-center">
            <div class="card-title fw-bold">${officer.role}</div>
            <p class="card-text">${officer.name}</p>
        </div>
    </div>`;
    return row;
}

// Create a card for each officer
fetch("./scripts/data/officers.json")
    .then(response => response.json())
    .then(json => {
        for (let officer of json) {
            console.log(officer);
            $('#cards').append(createRow(officer));
        }
    });