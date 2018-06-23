$(document).ready(readyNow);

function readyNow() {
    console.log('ready');
    addClickHandlers();



}

function addClickHandlers() {
    //on click of button, submit new employee
    $('#submit').on('click', handleSubmit);
    $('#employeeChart').on('click', '.deleteBtn', handleDelete);
}

function handleSubmit() {
    //grabs input values and assigns them to variables
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let numberID = $('#numberID').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = $('#annualSalary').val();

    addEmployee(firstName, lastName, numberID, jobTitle, annualSalary);
    addWorker()
    //clear input values
    $('#firstName').val('');
    $('#lastName').val('');
    $('#numberID').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');


}

function handleDelete() {
    $(this).closest('tr').remove();
    // $('table').data('annualSalary',{})
     monthlyCost = monthlyCost // - $(this).data()??????
    $('.monthlyCost').text('Monthly Cost:' + monthlyCost)
}
let monthlyCost = 0

function addEmployee(firstName, lastName, numberID, jobTitle, annualSalary) {


    let $row = $('<tr></tr>') // creating a new row not yet on the DOM
    //appending the data from the inputs into the row, also not yet on the DOM
    $row.append(`<td>${firstName}</td>`);
    $row.append(`<td>${lastName}</td>`);
    $row.append(`<td>${numberID}</td>`);
    $row.append(`<td>${jobTitle}</td>`);
    $row.append(`<td>${annualSalary}</td>`);
    $row.append(`<td><button class = "deleteBtn">DELETE</button></td>`)

    // append the data to the actual DOM
    $('#employeeChart').append($row);
    updateMonthlyCost();

    function updateMonthlyCost() {
        monthlyCost = Math.floor(annualSalary / 12 + monthlyCost);
        $('.monthlyCost').text('Monthly Cost:' + monthlyCost)
        if (monthlyCost > 20000) {
            $('.monthlyCost').css('background-color', 'red');
        }
    }
}
class Employee {
    constructor(firstName, lastName, numberID, jobTitle, annualSalary) {
        this.firstname = firstName;
        this.lastName = lastName;
        this.numberID = numberID;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;

    }

}
let employees = []
function addWorker(){
    new Employee($('#firstName').val(), $('#lastName').val(), $('#numberID').val(), $('#jobTitle').val(), $('#annualSalary').val());
    employees.push( new Employee($('#firstName').val(), $('#lastName').val(), $('#numberID').val(), $('#jobTitle').val(), $('#annualSalary').val()));
}