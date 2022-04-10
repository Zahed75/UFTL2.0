
/* -------------------------- Select Asset Part Starts Here -------------------------- */

let selectedAsset = null; // ---------- this is to store the selected asset

const selectAsset = () => {

    const item = event.currentTarget.innerHTML;
    const selected = document.getElementById('selectedAsset');
    selected.innerHTML = item;
    selected.classList.toggle('active');    // ---------- this is to close the dropdown on selecting an asset

    selectedAsset = event.currentTarget.getAttribute('data-value');
}


document.getElementById('selectedAsset').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active'); // ---------- this is to open the dropdown
});




/* -------------------------- Select Time Part Starts Here -------------------------- */


let selectedTime = null; // ---------- this is to store the selected time


const check_re = () => {
    const unchecked = document.querySelectorAll('.checkbox__re:not(:checked)');
    const checked = event.currentTarget.children[0];

    unchecked.forEach(unchecked => {
        const unchecked_parent = unchecked.parentElement;
        const unchecked_parent_class = unchecked_parent.classList;
        unchecked_parent_class.remove('selected_time');
    });

    if (checked.disabled === false) {
        checked.parentElement.classList.add('selected_time')
        selectedTime = checked.value;
    }

    event.preventDefault(); // ---------- this is to prevent the bubble event from the parent element
}

document.querySelectorAll('.checkbox__re').forEach(checkbox => {
    if (checkbox.disabled) {
        checkbox.parentElement.classList.add('disabled_time');
    }
});