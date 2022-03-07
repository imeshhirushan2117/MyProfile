/*Customer party*/

/*customerAdd*/
$("#btnCustomerAdd").click(function () {
    let customerId = $("#txtCusID").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerTelNumber = $("#txtCusTP").val();

    var customerOB = {
        id: customerId,
        name: customerName,
        address: customerAddress,
        telNumber: customerTelNumber
    }
    customerDB.push(customerOB);
    clearFileld();
    addCustomerData();

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
});

function addCustomerData() {
    $("#tbodyCustomer").empty();
    for (var i of customerDB) {
        let raw = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.telNumber}</td></tr>`
        $("#tblCustomer").append(raw);
    }
}

function clearFileld() {
    $("#txtCusID,#txtCusName,#txtCusAddress,#txtCusTP").val("");
}

$("#btnCustomerClear").click(function () {
    clearFileld();
});

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
/*customer Customer*/
$("#btnCustomerSearch").click(function () {
    var searchID = $("#txtCustomerSearch").val();
    var response = serchCustomer(searchID);
    if (response) {
        $("#txtCusID").val(response.id);
        $("#txtCusName").val(response.name);
        $("#txtCusAddress").val(response.address);
        $("#txtCusTP").val(response.telNumber);
    } else {
        alert("Invalid Customer Search");
        clearFileld();
    }
});

function serchCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == id) {
            return customerDB[i];
        }
    }
}

/*customer delete*/
$("#btnCustomerDelete").click(function () {

});

/*Item party*/
/*addItem*/
$("#btnItemAdd").click(function () {
    let itemId = $("#txtItemID").val();
    let itemName = $("#txtItemName").val();
    let itemQty = $("#txtItemQty").val();
    let itemPrice = $("#txtItemPrice").val();

    var itemOB = {
        id: itemId,
        name: itemName,
        qty: itemQty,
        price: itemPrice
    }
    itemDB.push(itemOB);
    clearFileldItem();
    addItemData();

    $("#tbodyItem>tr").click(function () {
        let itemId = $(this).children(":eq(0)").text();
        let itemName = $(this).children(":eq(1)").text();
        let itemQty = $(this).children(":eq(2)").text();
        let itemPrice = $(this).children(":eq(3)").text();

        $("#txtItemID").val(itemId);
        $("#txtItemName").val(itemName);
        $("#txtItemQty").val(itemQty);
        $("#txtItemPrice").val(itemPrice);
    });
});

function addItemData() {
    $("#tbodyItem").empty();
    for (var i of itemDB) {
        let raw = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.qty}</td><td>${i.price}</td></tr>`
        $("#tblItem").append(raw);
    }
}

function clearFileldItem() {
    $("#txtItemID,#txtItemName,#txtItemQty,#txtItemPrice").val("");
}
/*btnClear*/
$("#btnItemClear").click(function () {
    clearFileldItem();
});