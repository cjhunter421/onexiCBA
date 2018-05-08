<html>

<h1 id="school">School name: <?php echo htmlspecialchars($_GET['f4']); ?></h1>
<br>
<p id="school"><p>
<br>
Field of study: <?php echo (int)$_GET['f5']; ?>


<script>
    console.log('helloooo');
    var school = document.getElementById('school').innerHTML;
    console.log(school);
    </script>

</html>





