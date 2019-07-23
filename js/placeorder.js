function loadcustId() {
    $('#custID').empty();
    $.ajax({
        url: "api/Customer.php",
        method: "GET",
        async: true,
        dataType: "json"
    }).done(function (resp) {
        for (var i in resp) {

            var temp = resp[i];
                var row = "<option>" + temp[0] + "</option>";
                $('#custID').append(row);

        }

    });
};
loadcustId();

$('#custID').click(function () {

    $.ajax({
        url: "api/Customer.php",
        method: "GET",
        async: true,
        dataType: "json"
    }).done(function (resp) {
        for (var i in resp) {

            var temp = resp[i];
            if ($('#custID').val()==temp[0]){
                $('#custName').val(temp[1]+"  "+temp[2])

            }


        }

    });
});


function loadItemCode() {
    $('#itemCode').empty();
    $.ajax({
        url: "api/AddItem.php",
        method: "GET",
        async: true,
        dataType: "json"
    }).done(function (resp) {
        for (var i in resp) {

            var temp = resp[i];
            var row = "<option>" + temp[0] + "</option>";
            $('#itemCode').append(row);

        }

    });
};
loadItemCode();

$('#itemCode').click(function () {

    $.ajax({
        url: "api/AddItem.php",
        method: "GET",
        async: true,
        dataType: "json"
    }).done(function (resp) {
        for (var i in resp) {
            var temp = resp[i];
            if ($('#itemCode').val()==temp[0]){
                $('#itemName').val(temp[1])
                $('#unitPrice').val(temp[2])
                $('#qtyonHand').val(temp[3])
            }
        }
    });
});
let array =new Array();

$('#btnaddcart').click(function () {
    let itemcode=$('#itemCode').val();
    let itemname=$('#itemName').val();
    let orderedqty=$('#OrderedQty').val();
    let unitprice=$('#unitPrice').val();
    let amount=orderedqty*unitprice;
    array.push(new Array({itemcode,itemname,orderedqty,unitprice,amount}));

    var row = "<tr><td>" +itemcode + "</td><td>" + itemname + "</td><td>" + orderedqty + "</td><td>" + unitprice + "</td><td>" + amount + "</td></tr>";
    $('#cartTable').append(row);
});

$('#btndel').click(function () {
    console.log(array);
    for (var i in array){
        var temp=array[i] ;
        for (var row in temp){
            let val=temp[row];
            alert(val[1]);
            // console.log(row);
        }
    }
});
