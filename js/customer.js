var rIndex,
    table = document.getElementById("table");


function selectedRow() {
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            document.getElementById("customerID").value = this.cells[0].innerHTML;
            document.getElementById("custFirstName").value = this.cells[1].innerHTML;
            document.getElementById("custLastName").value = this.cells[2].innerHTML;
            document.getElementById("custAddress").value = this.cells[3].innerHTML;
            document.getElementById("custSalary").value = this.cells[4].innerHTML;

        };
    }
}


selectedRow();

function removeRow() {
    let customerForm = $('#customerForm').serialize();
    $.ajax({
        url: "api/DeleteCustomer.php",
        method: "POST",
        async: true,
        data: customerForm
    }).done(function (res) {
        if (res == 1) {
            alert("Delete Sucessfully");
            loadAllCustomers();
        } else {
            alert("Delete Not Sucessfully");
        }

    });
}




function updatedetails() {
    let customerForm = $('#customerForm').serialize();
    $.ajax({
        url: "api/UpdateCustomer.php",
        method: "POST",
        async: true,
        data: customerForm
    }).done(function (res) {
        if (res == 1) {
            alert("Update Sucessfully");
            loadAllCustomers();
        } else {
            alert("Update Not Sucessfully");
        }

    });
}

function loadAllCustomers() {

    $('#CustomerBody').empty();
    $.ajax({
        url: "api/Customer.php",
        method: "GET",
        async: true,
        dataType: "json"
    }).done(function (resp) {
        for (var i in resp) {
            var temp = resp[i];
            var row = "<tr><td>" + temp[0] + "</td><td>" + temp[1] + "</td><td>" + temp[2] + "</td><td>" + temp[3] + "</td><td>" + temp[4] + "</td></tr>";
            $('#CustomerBody').append(row);
        }

    });
};

loadAllCustomers();
function addCustomer() {
    let customerForm = $('#customerForm').serialize();
    $.ajax({
        url: "api/Customer.php",
        method: "POST",
        async: true,
        data: customerForm
    }).done(function (res) {
        if (res == 1) {
            alert("Added Sucessfully");
            loadAllCustomers();
        } else {
            alert("Added Not Sucessfully");
        }

    });

}

$("#customerID").keypress(function (event) {
    if (event.which == 13) {
        $.ajax({
            url: "api/Customer.php",
            method: "GET",
            async: true,
            dataType: "json"
        }).done(function (resp) {
            let a=false;
            for (var i in resp) {
                var temp = resp[i];

                if (temp[0] == $('#customerID').val()) {
                    $('#custFirstName').val(temp[1]);
                    $('#custLastName').val(temp[2]);
                    $('#custAddress').val(temp[3]);
                    $('#custSalary').val(temp[4]);
                }else{
                   a=true;
                }
            }
            // if (a){
            //     alert("no any Customer Like");
            // }

        });
    }
});

