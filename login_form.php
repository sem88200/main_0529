<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/login.css">
    <style>

    </style>
</head>
<body>

<div id="log_body">
    <div class="backBtn" onclick="history.go(-1);return false;">뒤로가기</div>
    <div id="log_header">
        <h1 class="logo"><a href="#"><img src="img/log_logo.png" alt="로고"></a></h1>
            <h2>로그인</h2>
                <p class="top">Welcome, to, ColorYourLife</p>
    </div>
    
    <div id="login">
            <form name="member_form" method="post" action="login.php">
                <p><input type="text" id="name" name="id"placeholder="아이디"></p>
                <p><input type="password" id="pwd" name="pass"placeholder="비밀번호"></p>
    
                   <input type="submit" value="기존 회원 로그인">

                <p class="center"> 
                    <a href="id_screen.php" class="mm">아이디 찾기</a> 
                    <a href="pw_screen.php" class="mm">비밀번호 찾기</a>
                    <a href="member_form.php" class="mm">가입하기</a>
                </p>
            </form>
    </div>
    
    <div id="log_footer">
        <div class="foot">
            <a href="#"><img src="img/login_footer.jpg" alt="푸터배너이미지"></a>
        </div>
    </div>
  </div>
</body>

</html>