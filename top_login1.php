<?
    session_start();
?>
	<div id="top_login">
  
	  
	  <?
    if(!$_SESSION['userid'] )
	{
?>
          <a href="login_form.php">로그인</a> | <a href="member_form.php">회원가입</a> | <a href="#">커뮤니티</a>
<?
	}
	else
	{
?>
		<?=$_SESSION['userid']?>
		<a href="logout.php">로그아웃</a> | <a href="member_form_modify.php">정보수정</a> | <a href="#">커뮤니티</a>
<?
	}
?>
	  
     </div>
  
