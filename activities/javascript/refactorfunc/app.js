function mathopt(operations){
    let firstNum = document.getElementById('num-first-number').value;
    let secondNum = document.getElementById('num-second-number').value;
    if(operations === 'addition'){
        let add = parseInt(firstNum) + parseInt(secondNum);
        document.getElementById('num-total').value = add;
        //console.log(add);
    }
    if(operations === 'subtraction'){
        let sub = parseInt(firstNum) - parseInt(secondNum);
        document.getElementById('num-total').value = sub;
        //console.log(add);
    }
    if(operations === 'multiplication'){
        let mul = parseInt(firstNum) * parseInt(secondNum);
        document.getElementById('num-total').value = mul;
        //console.log(add);
    }
    if(operations === 'division'){
        let div = parseInt(firstNum) / parseInt(secondNum);
        document.getElementById('num-total').value = div;
        //console.log(add);
    }
}

// document.getElementById('btnadd').addEventListener("click",mathopt('addition'));
// document.getElementById('btnsub').addEventListener("click",mathopt('subtraction'));
// document.getElementById('btnmul').addEventListener("click",mathopt('multiplication'));
// document.getElementById('btndiv').addEventListener("click",mathopt('division'));