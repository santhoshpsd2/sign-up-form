const firstname = document.querySelector('.first');
const lastname = document.querySelector('.last');
const emailid = document.querySelector('.email');
const passwordele = document.querySelector('.password');

function validateform(){
    let first = document.signupform.first.value;
    let last = document.signupform.last.value;
    let email = document.signupform.email.value;
    let password = document.signupform.password.value;
    function blankchecking(datavalue,dataelement){   
    if (datavalue==null || datavalue=="")
    {
        dataelement.classList.add('active')
        return false
    }else{
        dataelement.classList.remove('active')
        return true;
    }
}

   let x = blankchecking(first,firstname);
   let y = blankchecking(last,lastname);
   let a = blankchecking(email,emailid);
   let b = blankchecking(password,passwordele);

    if(x & y & a & b){
        return true
    }else{
        return false;
    }

}