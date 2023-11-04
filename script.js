// function toggleForm() {
//     var signupForm = document.getElementsByClassName("signupform")[0];
//     var loginForm = document.getElementsByClassName("loginform")[0];

//     if (signupForm.style.display === "none") {
//         signupForm.style.display = "block";
//         loginForm.style.display = "none";
//     } else {
//         signupForm.style.display = "none";
//         loginForm.style.display = "block";
//     }
// }


// ----------------------------
async function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, email: email, password: password })
    });

    const data = await response.json();
    console.log(data);
    localStorage.setItem('user',JSON.stringify(data))
}

async function handlelogin(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let result= await fetch("http://localhost:5000/login",{
        method:"post",
        body:JSON.stringify({email:email,password:password}),
        headers:{
            "Content-Type":"application/json"
        }
    })
    result= await result.json()
    console.log(result);
    if(result.name){
        localStorage.setItem('user',JSON.stringify(result))
        window.location.href = 'index.html';
      }else{
        alert("Please Enter correct Details")
      }
   

}

// -----logout 
function logout(){
    localStorage.clear();
    window.location.href = 'signup.html';
}