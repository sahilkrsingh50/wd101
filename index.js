let userForm = document.getElementById("user-form");

const retrieveEntries = () => {
    let entries = localStorage.getItem("user-entries");
    if(entries){
        entries = JSON.parse(entries);
    } else {
        entries = [];
    }
    return entries;
}

let userEntries = retrieveEntries();

const displayEntries = () => {
    const entries = retrieveEntries();

    const tableEntries = entries.map((entry) => {
        const nameCell = `<td class='border px-6 py-4'>${entry.name}</td>`;
        const emailCell = `<td class='border px-6 py-4'>${entry.email}</td>`;
        const passwordCell = `<td class='border px-6 py-4'>${entry.password}</td>`;
        const dobCell = `<td class='border px-6 py-4'>${entry.dob}</td>`;
        const acceptTermsCell = `<td class='border px-6 py-4'>${entry.acceptedTermsAndconditions}</td>`;

        const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}`;
        return row;
    }).join("\n");

    const table = `<table class="table-auto w-full"><tr>
    
    <th class="px-6 py-4">Name</th>
    <th class="px-6 py-4">Email</th>
    <th class="px-6 py-4">Password</th>
    <th class="px-6 py-4">dob</th>
    <th class="px-6 py-4">accepted Terms?</th>
</tr>${tableEntries} </table>`;

let details = document.getElementById("user-entries");
details.innerHTML = table;

}

const saveUserForm = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptedTermsAndconditions = document.getElementById("acceptTerms").checked;

    const entry = {
        name,
        email,
        password,
        dob,
        acceptedTermsAndconditions
    };

    userEntries.push(entry);

    localStorage.setItem("user-entries", JSON.stringify(userEntries));
    displayEntries();

}
userForm.addEventListener("submit", saveUserForm);
displayEntries();
