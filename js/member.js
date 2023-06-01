$(function (){
    check_id()
    {
     window.open("check_id.php?id=" + document.member_form.id.value,
        "IDcheck",
        "left=200,top=200,width=200,height=60,scrollbars=no,resizable=yes");
    }
    function check_input()
    {
     const re1 =/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,10}$/;
     const id=document.member_form.id.value;
     if(!document.member_form.id.value)
     {
         alert("아이디를 입력하세요");
         document.member_form.id.focus();
         return;
     }
     else if(!rel.test(id))
     {
         alert("6~10자의 영문자, 숫자, 특수기호를 혼합해서 사용할 수 있습니다.");
     return false;
     }

     if(!document.member_form.pass.value)
     {
         alert("비밀번호를 입력하세요");
         document.member_form.pass.focus();
         return;
     }
     if(!document.member_form.pass_confirm.value)
     {
         alert("비밀번호확인을 입력하세요");
         document.member_form.pass_confirm.focus();
         return;
     }
     if(!document.member_form.name.value)
     {
         alert("이름을 입력하세요");
         document.member_form.name.focus();
         return;
     }
     if (!document.member_form.hp.value)
      {
          alert("휴대폰 번호를 입력하세요");    
          document.member_form.hp.focus();
          return;
      }
      if(!document.member_form.email.value)
      {
          alert("Email을 입력하세요");
          document.member_form.email.focus();
          return;
      }
      if(document.member_form.pass.value !=
           document.member_form.pass_confirm.value)
      {
          alert("비밀번호가 일치하지 않습니다. \n다시 입력해 주세요.");
          document.member_form.pass.focus();
          document.member_form.pass.select();
          return;
      }
      
      //휴대전화번호 체크
      const hp1=document.member_form.hp.value;
      const re2= /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
      if (!re2.test(hp1)) {
                alert('휴대전화번호를 다시 입력해주세요.'); 
                return false;
            }

      //이메일 체크
      const email=document.member_form.email.value;
      const re=/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
      if (!re.test(email)) 
      {
          alert("@를 포함해서 입력해주세요");
          return false; 
      }
      document.member_form.submit();
    }

    function reset_form()
    {
     document.member_form.id.value="";
     document.member_form.pass.value="";
     document.member_form.pass_confirm.value="";
     document.member_form.name.value="";
     document.member_form.hp.value="";
     document.member_form.email.value="";

     document.member_form.id.focus();

     return;
    }
});