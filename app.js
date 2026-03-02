console.log("hello");
let url = "https://catfact.ninja/fact"
async function getfact(){
    try {
        let res = await axios.get(url);
        return res.data.fact ;
    }
    catch(e){
        console.log( "error was caught", e);
        return "No facts found" ;
    }
}


let btn = document.querySelector("button");
let p = document.querySelector("#result")
btn.addEventListener("click", async ()=>{
    console.log("button was clicked");
    let fact1 = await getfact();
    console.log(fact1);
    p.innerText= fact1;
    
});
