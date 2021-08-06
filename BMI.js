// function calc()
// {
//     var n1 = parseFloat(document.getElementById("input1").value)
//     var n2 = parseFloat(document.getElementById("input2").value)
//     // document.getElementById('Output').value = n1+n2
//     document.getElementById('text').value = n1+n2
//     document.getElementById('div').innerHTML += '<b>'+(n1+n2)+'</b>'
// }



// var weight = parseFloat(prompt("Enter Weight in kg"))
// var height = parseFloat(prompt("Enter Height in meters"))
// var bodymassindex =   weight/(Math.pow(height,2))
// console.log(weight,height)
// console.log(bodymassindex)


window.onload = () => {
    let button = document.querySelector("#check");
    let refresh1 = document.querySelector("#refresh");
    // Function for calculating BMI
    button.addEventListener("click", check);
    refresh1.addEventListener("refresh", refreshPage);
};

function refreshPage(){
    window.location.reload();
} 

function check()
{
    var weight = parseInt(document.getElementById("weight").value)
    let weightoption = document.getElementById("weightunits")
    var idx = weightoption.selectedIndex;
    var weightopt = weightoption.options[idx].value;
    if (weightopt == "Grams") {
        weight = weight/1000
    }
    else {
        // pass
    }
    console.log(weight, weightopt)
    
    var height = parseInt(document.getElementById("height").value)
    let heightoption = document.getElementById("heightunits")
    var idx = heightoption.selectedIndex;
    var heightopt = heightoption.options[idx].value;

    if (heightopt == "centi-meters") {
        height = height/100
    }
    else {
        // pass
    }

    console.log(height, heightopt)
    
    document.getElementById('div').innerHTML +="<b>"+ (weight / (height*height))+"</b>"
    let bodymassindex = weight / (height*height)
    console.log(bodymassindex)

    if (bodymassindex <= 18.5)
    {
        // document.write("Under Weight")
        console.log("Under Weight")
        document.getElementById('div').innerHTML += '<b>'+""+" is BMI so"+" Under Weight"+'</b>'
    }
    else if(bodymassindex >= 18.5 && bodymassindex <= 24.9)
    {
        // document.write("Normal Weight")
        console.log("Normal Weight")
        document.getElementById('div').innerHTML += '<b>'+""+" is BMI so"+" Normal Weight"+'</b>'
    }
    else if(bodymassindex >= 25.0 && bodymassindex <=29.9 )
    {   
        // document.write("Over Weight")
        console.log("Over Weight")
        document.getElementById('div').innerHTML += '<b>'+""+" is BMI so"+" Over Weight"+'</b>'
    }
    else
    {
        // document.write("Obese ")
        console.log("Obese ")
        document.getElementById('div').innerHTML += ""+" is BMI so"+" <b>Obese "+'</b>'
        if(bodymassindex >= 30.0 && bodymassindex <=34.9)
        {
            // document.write("Class 1 ")
            console.log("Class 1")
            document.getElementById('div').innerHTML += '<b>'+"and Class 1"+'</b>'
        }
        else if(bodymassindex >= 35.0 && bodymassindex <=39.9 )
        {
            // document.write("Class 2")
            console.log("Class 2")
            document.getElementById('div').innerHTML += '<b>'+"and Class 2"+'</b>'
        }
        else
        {
            // document.write("Class 3")
            console.log("Class 3")
            document.getElementById('div').innerHTML += '<b>'+"and Class 3"+'</b>'
        }
    }
}