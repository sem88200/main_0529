<?
   session_start();
?>
<meta charset="utf-8">
<?
   include "dbconn.php";
   mysqli_query($connect, 'set names urt8');

   $id=$_POST['id'];
   $hp=$_POST['hp'];

   $sql = "select * from join_member where id='$id' AND hp='$hp'";

   $result = mysqli_query($connect,$sql);
   $num_match = mysqli_fetch_array($result);

   if(!empty($num_match)){

       echo
       "<script>alert
               ('회원님의 비밀번호는 $num_match[pass]입니다. 로그인해주세요 :-)');
               location.href='login_form.php';
        </script>";
   }
   else
   {
       echo $hp."<script>alert
                        ('비밀번호 찾기 실패');
                 </script>";
   }
   mysqli_close($connect);
       echo(
            "<script>location.href = main.html';</script>"
       );
?>
