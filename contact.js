function validateform(){  
    var name=document.myform.name.value;  
    var tx=document.myform.txt.value;  
    var E=document.myform.em.value
    var pass=document.myform.pass.value;
  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(!isNaN(name)){
    alert(" Invalid Name ");
    return false;
    }else if(pass.length<8 ||pass==""||pass==null){
      alert("Password Invalid");
      return false;
    }else if(tx==""||tx==null){  
      alert("Message null??");  
      return false;  
      }else if(E==""||E==null){  
      alert("Email can't be blank");  
      return false; 
      } 
    }






    