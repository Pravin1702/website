<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
    <script src="Script1.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script>
        $(document).ready(function () {
            $('#btnOne').click(function () {
                alert('You clicked teh button');
            })
            $('#btnTwo').click(() => $('.c1').hide(1000));
        })
    </script>
</head>
<body>
    <button id="btnOne" onclick="doSomething()">Click</button>
    <button id="btnTwo">button</button>
    <input id="txtGreet" type="text" />
    <p id="p1" class="c1">
        Hello
    </p>
    <p class="c2">
        Hello
    </p>
    <p  class="c1">
        Hello
    </p>
</body>
</html>
