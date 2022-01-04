function validasi(){
    var username = document.forms["myForm"]["username"].value;
    var password = document.forms["myForm"]["password"].value;
    if( username == "ahmad2017" && password == "integrity"){
      return true;
    }
    else if(username =="" || password ==""){
      alert("Masukan username dan password Anda");
      return false;
    }
    else{
      alert("Username atau password yang Anda masukan SALAH");
      return false;
    }
  }