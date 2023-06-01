<? 
	  session_start(); 
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
	<link rel="stylesheet" href="css/reset.css">

	<style>
		body,html {width:100%;height:100%;}
		body{background-color:#eee9d2;}
		#join_mem {width:350px;height:150px;border:2px solid #494949; padding:10px 5px;
				         position:absolute;left:50%;top:50%;
             margin-left:-125px;margin-top:-60px;
             background:transparent;}
		#join_mem  #join2 {margin-bottom:10px;}
		#join_mem #join2 li {width:100%;height:28px; 
                       padding-left:8px;padding-top:6px;color:#fff;}
		label.b2{ padding-right:7px;}
		#a2 {padding-bottom:3px;}
		#form_join #join2 input {width:150px;height:18px;border:none;}
		#join2 input.hp {width:73%;height:18px;border:none;}
		#write_button {text-align:center;}
		input[type=submit] {width: 8.5em;padding: 6px 2px 6px 2px;border:none;
                            margin-top: 10px;cursor: pointer;/*text-transform: uppercase;*/}
	</style>

<script></script>

</head>

<body>

    <div id="join_mem">
         <form  name="member_form" method="post" action="pw_search.php">

	     <div id="join2">
		      <ul>
			        <li><input type="text" id="pid" name="id" placeholder="ID" id="a1"></p></li>
		        	<li><input type="tel" class="hp" name="hp" placeholder="HP"> </li>
		      </ul>
	     </div>

	     <div id="write_button"><input type="submit" value="SUBMIT"></div>

		      </form>
	    </div>
  
  
</body>
</html>