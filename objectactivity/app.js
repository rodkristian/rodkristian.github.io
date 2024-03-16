let shopdata = [];

document.getElementById('btnadd').addEventListener("click", function(){
    let Shopindex = document.getElementById("txtIndex").value;
    let Shopid = document.getElementById("skuid").value;
    let Shopitemname = document.getElementById("itemname").value;
    let Shopitemphoto = document.getElementById("itemphoto").value;
    let Shopitemprice = document.getElementById("itemprice").value;

    if(Shopindex == ""){
        if (Shopid == "" || Shopitemname == "" || Shopitemphoto == "" || Shopitemprice == "") {
            alert("Please fill in the required fields!");
            return;
        }
        if (isExists(Shopid) == false) {
            alert("Id Number already exists");
            return;
        }

        let Shoplist={
            ShopID : Shopid,
            ShopItemName : Shopitemname,
            ShopItemPhoto : Shopitemphoto,
            ShopItemPrice : Shopitemprice
        };

        shopdata.push(Shoplist);
    }else{
        let Shoplist={
            ShopID : [Shopindex][0],
            ShopItemName : Shopitemname,
            ShopItemPhoto : Shopitemphoto,
            ShopItemPrice : Shopitemprice
        };

        shopdata[Shopindex] = Shoplist;
    }
    document.getElementById("txtIndex").value = "";
    document.getElementById("skuid").value = "";
    document.getElementById("itemname").value = "";
    document.getElementById("itemphoto").value = "";
    document.getElementById("itemprice").value = "";

    drawcard();
});

function drawcard(){
    let carddraw = "<div class='row'>";
    for(let x = 0; x < shopdata.length; x++){
        carddraw += "<div class='card' style='width: 15rem;'>"
        carddraw += "<img src='" + shopdata[x].ShopItemPhoto + "'" + "class='card-img-top'" + "alt='...'>"+"</img>";
        carddraw += "<div class='card-body'>";
        carddraw += "<div class='card-title'>"+shopdata[x].ShopItemName+"</div>";
        carddraw += "<p class='card-text'>"+"₱ "+shopdata[x].ShopItemPrice+"</p>";
        carddraw += "</div";
        carddraw += "</div>";
    }
    document.getElementById("shopcard").innerHTML = carddraw;
}

function isExists(idno) {
    for (let x = 0; x < shopdata.length; x++) {
      if (shopdata[x].ShopID == idno) return false;
    }
    return true;
  }