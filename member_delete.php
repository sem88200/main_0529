<?
    session_start();
?>
<meta charset="utf-8">
<?
   include "dbconn.php";

$sql="delete from join_member where id='$_SESSION[userid]'";

   mysqli_query($connect,$sql);
   mysqli_close($connect);

       echo(
        "<script>alert('[탈퇴성공] 정상적으로 회원에서 탈퇴 하셨습니다.');
                  location.href='main.html';</script>"
           );

?>