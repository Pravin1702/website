function doSomething() {
    //var num1 = 10;
    //num1 = num1 + "10";
    //alert(num1);
    greet().then(
        function (value) { display(value); },
        function (error) { display(error) }
    );
    console.log("Check");
}
function display(msg) {
    document.getElementById("p1").innerHTML = msg;
}
function checkDelay() {
    return new Promise((resolve) => setTimeout(resolve(10), 1000));
}
async function greet() {
    var data = document.getElementById("txtGreet");;
    if (data.value == '')
        throw new Error("Name is empty");
    let number = await checkDelay();
    return "Hello from greet to " + data.value + " " + number;
}
