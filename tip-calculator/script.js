

const btn = document.querySelector(".btn");
 const  tip = document.querySelector(".tip");
  const  total = document.querySelector(".total");
 const  error = document.querySelector(".error");

    const handError = () => {
        setTimeout(() => {
            error.style.display = "none";
        }, 3000);
    }

    const calculateTip = (e) => {
        e.preventDefault();
        const bill = document.querySelector(".bill").value;
        const rate = document.querySelector(".rate").value;
       
        if(bill===""|| rate===""){
            //console.log("error");
           error.style.display = "block";
            handError();
        }

        else if(isNaN(bill)){
            error.innerHTML = "please enter a number";
            error.style.display = "block";
            handError();
        } else{
            let tipAmt = bill * rate;
            tipAmt = Math.ceil(tipAmt);
            tip.innerHTML = `This is the tip : ${tipAmt}`;

            let totalBill = Number(bill) + tipAmt;
                total.innerHTML = `This is the total : ${totalBill}`;
        }

    };

    btn.addEventListener("click", calculateTip);