let inputOutput = {
    'input[id="cardholder-name"]': 'section[id="card-name"]',
    'input[id="card-number"]': 'section[id="card-body"]',
    'input[id="card-month"]': 'span[id="expiry-month"]',
    'input[id="card-year"]': 'span[id="expiry-year"]',
    'input[id="cyc"]': "section[id='card-cyc']"
};
for (const key in inputOutput) {
    document.querySelector(key).addEventListener('input', (e) => {
        document.querySelector(inputOutput[key]).innerHTML = e.target.value;
        addValidationErrorAttribute(e.target);
    })
}
/**
 * @param element
 * Input element to be validated
*/

const addValidationErrorAttribute = (element) => {
    console.log(element.validity)
    for (const key in element.validity) {
        if (element.validity[key] == true) {
            element.setAttribute(key, true);
        } else {
            element.removeAttribute(key);
        }
    }
}
document.querySelector('button[id="card-details-submit"]').addEventListener('click', (e) => {
    e.preventDefault();
    const form = e.target.parentElement;
    if (form.checkValidity() == false) {
        form.reportValidity();
    } else {
        document.querySelector('section[class="form-area"]').style.display = "none";
        document.querySelector('section[class="complete-card"]').style.display = "grid";
    }
})