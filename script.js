document.querySelectorAll(".like-click").forEach(function(element){
    element.addEventListener("click", function() {
        const lifeline = document.getElementById("life");
        lifeline.innerText = parseInt(lifeline.innerText) + 1;
    });
});


document.getElementById("copy-click1").addEventListener("click",function(e){
    e.preventDefault()
    const copycount=document.getElementById("copy");
    let count=parseInt(copycount.innerText);
    copycount.innerText=count+1;
    const numberEl = document.getElementById("service1num");
    const number = numberEl.innerText.trim(); 
    navigator.clipboard.writeText(number);
    alert(number + " Have Been Copied");

})

document.getElementById("call-click1").addEventListener("click",function(e){
    e.preventDefault()
    const coincount=document.getElementById("coin");
    let coins=parseInt(coincount.innerText);
    if (coins<=20){
        alert("Not enough coin available!")
    }
    else{
        coincount.innerText=coins-20;
        const service=document.getElementById("service1").innerText;
        const number=document.getElementById("service1num").innerText;
        alert("Calling " + service + " " + number + " .....");
    }
})


document.getElementById("copy-click2").addEventListener("click",function(e){
    e.preventDefault()
    const copycount=document.getElementById("copy");
    let count=parseInt(copycount.innerText);
    copycount.innerText=count+1;
    const numberEl = document.getElementById("service2num");
    const number = numberEl.innerText.trim(); 
    navigator.clipboard.writeText(number);
    alert(number + " Have Been Copied");

})

document.getElementById("call-click2").addEventListener("click",function(e){
    e.preventDefault()
    const coincount=document.getElementById("coin");
    let coins=parseInt(coincount.innerText);
    if (coins<=20){
        alert("Not enough coin available!")
    }
    else{
        coincount.innerText=coins-20;
        const service=document.getElementById("service2").innerText;
        const number=document.getElementById("service3num").innerText;
        alert("Calling " + service + " " + number + " .....");
    }
})


document.getElementById("copy-click3").addEventListener("click",function(e){
    e.preventDefault()
    const copycount=document.getElementById("copy");
    let count=parseInt(copycount.innerText);
    copycount.innerText=count+1;
    const numberEl = document.getElementById("service3num");
    const number = numberEl.innerText.trim(); 
    navigator.clipboard.writeText(number);
    alert(number + " Have Been Copied");

})

document.getElementById("call-click3").addEventListener("click",function(e){
    e.preventDefault()
    const coincount=document.getElementById("coin");
    let coins=parseInt(coincount.innerText);
    if (coins<=20){
        alert("Not enough coin available!")
    }
    else{
        coincount.innerText=coins-20;
        const service=document.getElementById("service3").innerText;
        const number=document.getElementById("service3num").innerText;
        alert("Calling " + service + " " + number + " .....");
    }
})


document.getElementById("copy-click4").addEventListener("click",function(e){
    e.preventDefault()
    const copycount=document.getElementById("copy");
    let count=parseInt(copycount.innerText);
    copycount.innerText=count+1;
    const numberEl = document.getElementById("service4num");
    const number = numberEl.innerText.trim(); 
    navigator.clipboard.writeText(number);
    alert(number + " Have Been Copied");

})

document.getElementById("call-click4").addEventListener("click",function(e){
    e.preventDefault()
    const coincount=document.getElementById("coin");
    let coins=parseInt(coincount.innerText);
    if (coins<=20){
        alert("Not enough coin available!")
    }
    else{
        coincount.innerText=coins-20;
        const service=document.getElementById("service4").innerText;
        const number=document.getElementById("service4num").innerText;
        alert("Calling " + service + " " + number + " .....");
    }
})


document.getElementById("copy-click5").addEventListener("click",function(e){
    e.preventDefault()
    const copycount=document.getElementById("copy");
    let count=parseInt(copycount.innerText);
    copycount.innerText=count+1;
    const numberEl = document.getElementById("service5num");
    const number = numberEl.innerText.trim(); 
    navigator.clipboard.writeText(number);
    alert(number + " Have Been Copied");

})

document.getElementById("call-click5").addEventListener("click",function(e){
    e.preventDefault()
    const coincount=document.getElementById("coin");
    let coins=parseInt(coincount.innerText);
    if (coins<=20){
        alert("Not enough coin available!")
    }
    else{
        coincount.innerText=coins-20;
        const service=document.getElementById("service5").innerText;
        const number=document.getElementById("service5num").innerText;
        alert("Calling " + service + " " + number + " .....");
    }
})


document.getElementById("copy-click6").addEventListener("click",function(e){
    e.preventDefault()
    const copycount=document.getElementById("copy");
    let count=parseInt(copycount.innerText);
    copycount.innerText=count+1;
    const numberEl = document.getElementById("service6num");
    const number = numberEl.innerText.trim(); 
    navigator.clipboard.writeText(number);
    alert(number + " Have Been Copied");

})

document.getElementById("call-click6").addEventListener("click",function(e){
    e.preventDefault()
    const coincount=document.getElementById("coin");
    let coins=parseInt(coincount.innerText);
    if (coins<=20){
        alert("Not enough coin available!")
    }
    else{
        coincount.innerText=coins-20;
        const service=document.getElementById("service6").innerText;
        const number=document.getElementById("service6num").innerText;
        alert("Calling " + service + " " + number + " .....");
    }
})



document.getElementById("copy-click7").addEventListener("click",function(e){
    e.preventDefault()
    const copycount=document.getElementById("copy");
    let count=parseInt(copycount.innerText);
    copycount.innerText=count+1;
    const numberEl = document.getElementById("service7num");
    const number = numberEl.innerText.trim(); 
    navigator.clipboard.writeText(number);
    alert(number + " Have Been Copied");

})

document.getElementById("call-click7").addEventListener("click",function(e){
    e.preventDefault()
    const coincount=document.getElementById("coin");
    let coins=parseInt(coincount.innerText);
    if (coins<=20){
        alert("Not enough coin available!")
    }
    else{
        coincount.innerText=coins-20;
        const service=document.getElementById("service7").innerText;
        const number=document.getElementById("service7num").innerText;
        alert("Calling " + service + " " + number + " .....");
    }
})



document.getElementById("copy-click8").addEventListener("click",function(e){
    e.preventDefault()
    const copycount=document.getElementById("copy");
    let count=parseInt(copycount.innerText);
    copycount.innerText=count+1;
    const numberEl = document.getElementById("service8num");
    const number = numberEl.innerText.trim(); 
    navigator.clipboard.writeText(number);
    alert(number + " Have Been Copied");

})

document.getElementById("call-click8").addEventListener("click",function(e){
    e.preventDefault()
    const coincount=document.getElementById("coin");
    let coins=parseInt(coincount.innerText);
    if (coins<=20){
        alert("Not enough coin available!")
    }
    else{
        coincount.innerText=coins-20;
        const service=document.getElementById("service8").innerText;
        const number=document.getElementById("service8num").innerText;
        alert("Calling " + service + " " + number + " .....");
    }
})

document.getElementById("copy-click9").addEventListener("click",function(e){
    e.preventDefault()
    const copycount=document.getElementById("copy");
    let count=parseInt(copycount.innerText);
    copycount.innerText=count+1;
    const numberEl = document.getElementById("service9num");
    const number = numberEl.innerText.trim(); 
    navigator.clipboard.writeText(number);
    alert(number + " Have Been Copied");

})

document.getElementById("call-click9").addEventListener("click",function(e){
    e.preventDefault()
    const coincount=document.getElementById("coin");
    let coins=parseInt(coincount.innerText);
    if (coins<=20){
        alert("Not enough coin available!")
    }
    else{
        coincount.innerText=coins-20;
        const service=document.getElementById("service9").innerText;
        const number=document.getElementById("service9num").innerText;
        alert("Calling " + service + " " + number + " .....");
    }
})

document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        const number = btn.dataset.number;
        navigator.clipboard.writeText(number);
        alert(number + " Have Been Copied");

        const copycount = document.getElementById("copy");
        copycount.innerText = parseInt(copycount.innerText) + 1;
    });
});
