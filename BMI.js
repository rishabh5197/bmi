var bodymassindex =   parseFloat(prompt("Enter Body Mass Index (BMI) in KG/m2"))
if (bodymassindex <= 18.5)
{
    document.write("Under Weight")
    console.log("Under Weight")
}
else if(bodymassindex >= 18.5 && bodymassindex <= 24.9)
{
    document.write("Normal Weight")
    console.log("Normal Weight")
}
else if(bodymassindex >= 25.0 && bodymassindex <=29.9 )
{   
    document.write("Over Weight")
    console.log("Over Weight")
}
else
{
    document.write("Obese ")
    console.log("Obese ")
    if(bodymassindex >= 30.0 && bodymassindex <=34.9)
    {
        document.write("Class 1 ")
        console.log("Class 1")
    }
    else if(bodymassindex >= 35.0 && bodymassindex <=39.9 )
    {
        document.write("Class 2")
        console.log("Class 2")
    }
    else
    {
        document.write("Class 3")
        console.log("Class 3")
    }
}