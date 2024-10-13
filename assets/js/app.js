var cl = console.log;

const loginForm = document.getElementById('loginForm');

const emailControl = document.getElementById('email');
const passwordControl = document.getElementById('password');


const snackBar = (msg, icon) => {
    Swal.fire({
        title: msg,
        icon : icon,
        timer:2500,
    })
}

const loginApi = (obj) => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
           if(obj.email === "james12@gmail.com" && obj.password === "james"){
            resolve('Login Successfully !!!')
           }else{
            reject('Invalid Email or Password')
           }

        },500)
    })
    
}

const onLogin = (eve) => {
    eve.preventDefault();

    let obj = {
        email : emailControl.value,
        password : passwordControl.value,
    }
    
    cl(obj)
    loginApi(obj)
      .then(msg => {
        snackBar(msg, "success")
        // Swal.fire({
        //     title: "msg",
        //     icon: "success",
        //     timer:2500
        //   });
          
      })
      .catch((err) => {
        snackBar(err, "error")
        // Swal.fire({
        //     title: "err",
        //     icon: "error",
        //     timer:2500
        //   });
          
      })
      .finally(() => {
        loginForm.reset()
    })
}




loginForm.addEventListener('submit' , onLogin)