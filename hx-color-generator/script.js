    // let color = Math.random();  
    // color = Math.random().toString(16); //base 16...
    // color = Math.random().toString(16).substring(2,8); //base 16...
    
    // console.log(color);

    const hex = document.querySelector(".hex");
    const btn = document.querySelector(".generate");

    btn.addEventListener("click", function hexColor(){
        const randomColor = Math.random().toString(16).substring(2,8);
        hex.innerHTML =  "#"+randomColor;
        document.body.style.backgroundColor = "#" + randomColor;

    });

