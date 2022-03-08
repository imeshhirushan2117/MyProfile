/*===============Item party===============*/

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
/*tableload*/
function addItemData() {
    $("#tbodyItem").empty();
    for (var i of itemDB) {
        let raw = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.qty}</td><td>${i.price}</td></tr>`
        $("#tblItem").append(raw);
    }
}

/*btnClear*/
$("#btnItemClear").click(function () {
    clearFileldItem();
});
function clearFileldItem() {
    $("#txtItemID,#txtItemName,#txtItemQty,#txtItemPrice").val("");
}
/*textFeeldsForcasing*/
$("#txtItemID").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtItemName").focus();
    }
});
$("#txtItemName").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtItemQty").focus();
    }
});
$("#txtItemQty").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtItemPrice").focus();
    }
});

/*Item Search*/
$("#btnItemSearch").click(function () {
    var searchID = $("#txtItemSearch").val();
    var response = searchItem(searchID);
    if (response) {
        $("#txtItemID").val(response.id);
        $("#txtItemName").val(response.name);
        $("#txtItemQty").val(response.qty);
        $("#txtItemPrice").val(response.price);
    } else {
        alert("Invalid Item Search");
        clearFileld();
    }
});
function searchItem(id) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].id == id) {
            return itemDB[i];
        }
    }
}
$("#btnItemDelete").click(function () {

});