
// getting field Price
function GetFieldPrice(fieldName){
    const fieldPriceText=document.getElementById(fieldName+"-cost-field").innerText;
    const fieldprice=parseFloat(fieldPriceText);
    return fieldprice;
}

// total price field update
function TotalpriceField(){
    const baseCost=GetFieldPrice("base");
    const memoryExtraCost=GetFieldPrice("memory");
    const storageExtraCost=GetFieldPrice("storage");
    const delivaryExtraCost=GetFieldPrice("delivery");
    const totalCost=baseCost+memoryExtraCost+storageExtraCost+delivaryExtraCost;
    document.getElementById("total-price").innerText=totalCost;
    document.getElementById("final-total-cost").innerText=totalCost;
}

// price field update function
function UpdatePriceField(item,price){
    const PriceField=document.getElementById(item+"-cost-field");
    PriceField.innerText=price;
    TotalpriceField();
}

// memory buttons handle
document.getElementById("memory-8gb").addEventListener('click',function(){
    UpdatePriceField("memory",0)
})
document.getElementById("memory-16gb").addEventListener('click',function(){
    UpdatePriceField("memory",180)
})

// storage buttons handle
document.getElementById("storage-256gb").addEventListener('click',function(){
    UpdatePriceField("storage",0)
})
document.getElementById("storage-500gb").addEventListener('click',function(){
    UpdatePriceField("storage",100)
})
document.getElementById("storage-1tb").addEventListener('click',function(){
    UpdatePriceField("storage",180)
})

// delibvery buttons 
document.getElementById("delivary-wednesday").addEventListener('click',function(){
    UpdatePriceField("delivery",0)
})
document.getElementById("delivary-friday").addEventListener('click',function(){
    UpdatePriceField("delivery",100)
})