/* define your functions here */
const tableBody = $('#table-body');

/**
 * Create a competition row for a table.
 *
 * @param {*} comp Competition to create a row for.
 * @return {String} HTML string for a table row.
 */
function createRow(comp) {
    const row = `
    <tr>
    <td>${comp.date}</td>
    <td>${comp.name}</td>
    <td>${comp.location}</td>
    </tr>`;
    return row;
}

// Create a row for each meeting and append it to the table body.
fetch("./scripts/data/competitions.json")
    .then(response => response.json())
    .then(json => {
        for (let meeting of json) {
            console.log(createRow(meeting));
            $('#table-body tr:last').after(createRow(meeting));
        }
    });
