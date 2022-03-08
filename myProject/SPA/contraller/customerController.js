/*===============Customer party===============*/

/*customerAdd*/
$("#btnCustomerAdd").click(function () {
    let customerId = $("#txtCusID").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerTelNumber = $("#txtCusTP").val();

    /* var customerOB = {
         id: customerId,
         name: customerName,
         address: customerAddress,
         telNumber: customerTelNumber
     }*/

    var customerOB = new CustomerDTO(customerId, customerName, customerAddress, customerTelNumber);

    customerDB.push(customerOB);
    clearFileld();
    addCustomerData();
});

function bindCustomerRow(){
    $("#tbodyCustomer>tr").click(function () {
        let customerId = $(this).children(":eq(0)").text();
        let customerName = $(this).children(":eq(1)").text();
        let customerAddress = $(this).children(":eq(2)").text();
        let customerTelNumber = $(this).children(":eq(3)").text();

        $("#txtCusID").val(customerId);
        $("#txtCusName").val(customerName);
        $("#txtCusAddress").val(customerAddress);
        $("#txtCusTP").val(customerTelNumber);
    });
}

/*lode table*/
function addCustomerData() {
    $("#tbodyCustomer").empty();
    for (var i of customerDB) {
        let raw = `<tr><td>${i.getCustomerID()}</td><td>${i.getCustomerName()}</td><td>${i.getCustomerAddress()}</td><td>${i.getCustomerTelNumber()}</td></tr>`
        $("#tblCustomer").append(raw);
        bindCustomerRow();
    }
}

/*btnClear*/
$("#btnCustomerClear").click(function () {
    clearFileld();
});

function clearFileld() {
    $("#txtCusID,#txtCusName,#txtCusAddress,#txtCusTP").val("");
}

/*textFeeldsForcasing*/
$("#txtCusID").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCusName").focus();
    }
});
$("#txtCusName").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCusAddress").focus();
    }
});
$("#txtCusAddress").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCusTP").focus();
    }
});

/*customer Search*/
$("#btnCustomerSearch").click(function () {
    var searchID = $("#txtCustomerSearch").val();
    var response = serchCustomer(searchID);
    if (response) {
        $("#txtCusID").val(response.getCustomerID());
        $("#txtCusName").val(response.getCustomerName());
        $("#txtCusAddress").val(response.getCustomerAddress());
        $("#txtCusTP").val(response.getCustomerTelNumber());
    } else {
        alert("Invalid Customer Search");
        clearFileld();
    }
});

function serchCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCustomerID() == id) {
            return customerDB[i];
        }
    }
}

/*customer delete*/
$("#btnCustomerDelete").click(function () {

});

/*customer Update*/
$("#btnCustomerUpdate").click(function () {
    let customerId = $("#txtCusID").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerTelNumber = $("#txtCusTP").val();

    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCustomerID()==customerId){
            customerDB[i].setCustomerName(customerName);
            customerDB[i].setCustomerAddress(customerAddress);
            customerDB[i].setCustomerTelNumber(customerTelNumber);
        }
    }
    addCustomerData();
});