//유효성체크 
const id = document.getElementById(id);
const password = document.getElementById(password);
const passwordcheck = document.getElementById(passwordcheck);

function validateForm(){

    if (id.value == " ") {
        alert("ID는 필수 입력 항목입니다.")
        //document.write("ID는 필수 입력 항목입니다.")
        return false; 
    }

    if (password.value == " ") {
        alert("PW는 필수 입력 항목입니다.")
        document.write("PW는 필수 입력 항목입니다.")
        //document.appendChild(); 
        return false;
    }

    if (passwordcheck.value == " ") {
        alert("PW는 필수 입력 항목입니다.")
        document.write("PW는 필수 입력 항목입니다.")
        return false;
    }

    return true;
    
    
};
