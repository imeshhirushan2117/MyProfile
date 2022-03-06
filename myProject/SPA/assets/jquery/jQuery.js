/*Customer party*/
$("#btnCustomerAdd").click(function (){
    let customerId = $("#txtCusID").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerTelNumber = $("#txtCusTP").val();

    var customerOB = {
        id:customerId,
        name:customerName,
        address:customerAddress,
        telNumber:customerTelNumber
    }
    customerDB.push(customerOB);
    clearFileld();
    addCustomerData();

    $("#tbodyCustomer>tr").click(function (){
        let customerId= $(this).children(":eq(0)").text();
        let customerName= $(this).children(":eq(1)").text();
        let customerAddress= $(this).children(":eq(2)").text();
        let customerTelNumber= $(this).children(":eq(3)").text();

        $("#txtCusID").val(customerId);
        $("#txtCusName").val(customerName);
        $("#txtCusAddress").val(customerAddress);
        $("#txtCusTP").val(customerTelNumber);
    });
});

function addCustomerData(){
    $("#tbodyCustomer").empty();
    for(var i of customerDB){
        let raw = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.telNumber}</td></tr>`
        $("#tblCustomer").append(raw);
    }
}function clearFileld(){
    $("#txtCusID,#txtCusName,#txtCusAddress,#txtCusTP").val("");

}
$("#btnCustomerClear").click(function (){
    clearFileld();
});

