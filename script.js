function convert()
{
    str1 = document.form1.txt.value;
    var d;
    var a = str1.length;
    var b ="";
    var c ="";
    for(var i = 0; i <= a;i++){
        if(str1.substring(i-1,i) == str1.substring(i-1,i).toUpperCase()){
            b = str1.substring(i-1,i).toLowerCase();
        }
        else{
            b = str1.substring(i-1,i).toUpperCase();
        }
        c += b;    
    }
    document.form1.txt.value = c;

}