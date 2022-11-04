/* define your functions here */
const tableBody = $('#table-body');

/**
 * Create a meeting row for a table.
 *
 * @param {*} meeting Meeting to create a row for.
 * @return {String} HTML string for a table row.
 */
function createRow(meeting) {
    const row = `
    <tr>
    <td>${meeting.date}</td>
    <td>${meeting.topic}</td>
    <td>${meeting.slides}</td>
    </tr>`;
    return row;
}

// Create a row for each meeting and append it to the table body.
fetch("./scripts/data/meetings.json")
    .then(response => response.json())
    .then(json => {
        for (let meeting of json) {
            console.log(createRow(meeting));
            $('#table-body tr:last').after(createRow(meeting));
        }
    });
