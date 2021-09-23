var dod1="";
var dod2="";
var dod3="";
var dod4="";
var dod5="";
var dod6="";
var dod7="";
var dod8="";

window.onbeforeunload = function() 
{
    localStorage.setItem("prv", JSON.stringify(dod1));
    localStorage.setItem("vtor", JSON.stringify(dod2));
    localStorage.setItem("tret",JSON.stringify(dod3));
    localStorage.setItem("chetvrt", JSON.stringify(dod4));
    localStorage.setItem("petti", JSON.stringify(dod5));
    localStorage.setItem("shesti",JSON.stringify(dod6));
    localStorage.setItem("sedmi", JSON.stringify(dod7));
    localStorage.setItem("osmi", JSON.stringify(dod8));
}

window.onload = function() 
{
    var s_1 = JSON.parse(localStorage.getItem("prv"));
    var s_2 = JSON.parse(localStorage.getItem("vtor"));
    var s_3 = JSON.parse(localStorage.getItem("tret"));
    var s_4 = JSON.parse(localStorage.getItem("chetvrt"));
    var s_5 = JSON.parse(localStorage.getItem("petti"));
    var s_6 = JSON.parse(localStorage.getItem("shesti"));
    var s_7 = JSON.parse(localStorage.getItem("sedmi"));
    var s_8 = JSON.parse(localStorage.getItem("osmi"));

    if(s_1 != null) dod1=s_1;
    if(s_2 != null) dod2=s_2;
    if(s_3 != null) dod3=s_3; 
    if(s_4 != null) dod4=s_4;
    if(s_5 != null) dod5=s_5;
    if(s_6 != null) dod6=s_6; 
    if(s_7 != null) dod7=s_7;
    if(s_8 != null) dod8=s_8;
}

function start()
{
    document.getElementById("monday").value = dod1;
    document.getElementById("tuesday").value = dod2;
    document.getElementById("wednesday").value = dod3;
    document.getElementById("thursday").value = dod4;
    document.getElementById("friday").value = dod5;
    document.getElementById("saturday").value = dod6;
    document.getElementById("sunday").value = dod7;
    document.getElementById("other").value = dod8;
    var r1 = document.getElementById("monday");
    r1.addEventListener("mouseleave",add1,false);
    r1.addEventListener("mouseenter",add1,false);
    r1.addEventListener("keyup",add1,false);
    var r2 = document.getElementById("tuesday");
    r2.addEventListener("mouseleave",add2,false);
    r2.addEventListener("mouseenter",add2,false);
    r2.addEventListener("keyup",add2,false);
    var r3 = document.getElementById("wednesday");
    r3.addEventListener("keyup",add3,false);
    r3.addEventListener("mouseleave",add3,false);
    r3.addEventListener("mouseenter",add3,false);
    var r4 = document.getElementById("thursday");
    r4.addEventListener("keyup",add4,false);
    r4.addEventListener("mouseleave",add4,false);
    r4.addEventListener("mouseenter",add4,false);
    var r5 = document.getElementById("friday");
    r5.addEventListener("keyup",add5,false);
    r5.addEventListener("mouseenter",add5,false);
    r5.addEventListener("mouseleave",add5,false);
    var r6 = document.getElementById("saturday");
    r6.addEventListener("keyup",add6,false);
    r6.addEventListener("mouseenter",add6,false);
    r6.addEventListener("mouseleave",add6,false);
    var r7 = document.getElementById("sunday");
    r7.addEventListener("keyup",add7,false);
    r7.addEventListener("mouseleave",add7,false);
    r7.addEventListener("mouseenter",add7,false);
    var r8 = document.getElementById("other");
    r8.addEventListener("keyup",add8,false);
    r8.addEventListener("mouseenter",add8,false);
    r8.addEventListener("mouseleave",add8,false);
}

function add1()
{
    var m = document.getElementById("monday");
    var tx = m.value;
    dod1=tx;
    m.value=dod1;
}

function add2()
{
    var t = document.getElementById("tuesday");
    var tx = t.value;
    dod2=tx;
    t.value=dod2;
}

function add3()
{
    var w = document.getElementById("wednesday");
    var tx = w.value;
    dod3=tx;
    w.value=dod3;
}

function add4()
{
    var th = document.getElementById("thursday");
    var tx = th.value;
    dod4=tx;
    th.value=dod4;
}

function add5()
{
    var f = document.getElementById("friday");
    var tx = f.value;
    dod5=tx;
    f.value=dod5;
}

function add6()
{
    var st = document.getElementById("saturday");
    var tx = st.value;
    dod6=tx;
    st.value=dod6;
}

function add7()
{
    var sn = document.getElementById("sunday");
    var tx = sn.value;
    dod7=tx;
    sn.value=dod7;
}

function add8()
{
    var ot = document.getElementById("other");
    var tx = ot.value;
    dod8=tx;
    ot.value=dod8;
}

window.addEventListener("load",start,false);



