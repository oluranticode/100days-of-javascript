// varaible

 const btn = document.querySelector(".btn");
 const coupon = document.querySelector(".input-text");
 const generate = document.querySelector(".generate");

    generate.addEventListener("click", generateCoupon);

    function generateCoupon(){
        let gen = Math.random();
       coupon.value = gen;
    }

//  arrow function
    const copyText = (e) => {
        e.preventDefault();
        // alert("winner!");
        coupon.select();
        coupon.setSelectionRange(0, 999999);
        document.execCommand("copy");

        btn.textContent = "Copied!!!";

        setTimeout(() => {
            btn.textContent = "Copy"
        }, 3000);
    };

    btn.addEventListener("click", copyText);


    

    