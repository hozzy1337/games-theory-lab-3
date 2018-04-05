
function init()
{
    try{
        document.getElementById("main").outerHTML = "";
        document.getElementById("but1").outerHTML = "";
        document.getElementById("but2").outerHTML = "";
    }
    catch(exception){};

    var p = parseInt(document.getElementById("param").value);
    if (p > 10) {window.rows = 10; window.columns = 10;}
    else {window.rows = p; window.columns = p;}
    window.tile=[];
    window.c = columns;
    window.r = rows;

    var cont = document.createElement('div');
    cont.setAttribute("id","main");
    cont.style.width = rows*42 + "px";
    cont.style.height = rows*27 + "px";
    cont.style.float = "left";
    cont.style.marginTop = "5px";
    document.body.appendChild(cont);



    for (i = 1; i <= rows * columns; i++) {
            tile[i] = document.createElement('input');
            tile[i].style = "height:20px; width: 35px;";
            tile[i].setAttribute("id", i.toString());
            tile[i].value = (Math.floor(Math.random() * 19) - 9) + ";" + (Math.floor(Math.random() * 19) - 9);
            document.getElementById("main").appendChild(tile[i]);
    }

    var cont2 = document.createElement('div');
    cont2.setAttribute("id","but1");
    cont2.style.width = "45px";
    cont2.style.float = "left";
    cont2.style.marginLeft = rows * (-3) + "px";
    cont2.style.marginTop = "5px";
    document.body.appendChild(cont2);

    var ind = 1001;

    for (i = 1; i <= rows; i++) {
        tile[i] = document.createElement('button');
        tile[i].style = "height:25px; width: 39px;";
        tile[i].setAttribute("id", ind.toString());
        tile[i].addEventListener("click", function() {
            var elid = this.id;
            console.log(elid);
            elid -=1001;
                var num = 1 + elid * c;
                for(i = num; i <= (num+columns); i++){
                    console.log(i);
                    try {
                        document.getElementById(i).outerHTML = "";
                    }
                    catch (e) {
                        try {
                            document.getElementById(i + 1).outerHTML = "";
                        }
                        catch (e) {
                            try {
                                document.getElementById(i + 2).outerHTML = "";
                            }
                            catch (e) {
                                try {
                                    document.getElementById(i + 3).outerHTML = "";
                                }
                                catch (e) {
                                    try {
                                        document.getElementById(i + 4).outerHTML = "";
                                    }
                                    catch (e) {
                                        try {
                                            document.getElementById(i + 5).outerHTML = "";
                                        }
                                        catch (e) {
                                            try {
                                                document.getElementById(i + 6).outerHTML = "";
                                            }
                                            catch (e) {
                                                try {
                                                    document.getElementById(i + 7).outerHTML = "";
                                                }
                                                catch (e) {
                                                    try {
                                                        document.getElementById(i + 8).outerHTML = "";
                                                    }
                                                    catch (e) {
                                                        try {
                                                            document.getElementById(i + 9).outerHTML = "";
                                                        }
                                                        catch (e) {
                                                            try {
                                                                document.getElementById(i + 10).outerHTML = "";
                                                            }
                                                            catch (e){}
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
            }
            document.getElementById("main").style.height = rows*27 + "px";
            rows--;
            document.getElementById(this.id).outerHTML = "";
        });
        document.getElementById("but1").appendChild(tile[i]);
        ind++;
    }

    var cont3 = document.createElement('div');
    cont3.setAttribute("id","but2");
    cont3.style.height = "30px";
    cont3.style.width = "100%";
    cont3.style.float = "left";
    cont3.style.marginTop = rows * (-1) + "px";
    document.body.appendChild(cont3);

    for (i = 1; i <= rows; i++) {
        tile[i] = document.createElement('button');
        tile[i].style = "height:25px; width: 39px;";
        tile[i].setAttribute("id", ind.toString());
        tile[i].addEventListener("click", function() {
            var elid = this.id;
            console.log(elid);
            elid -=1001;
            elid -= (rows-1);
                var num = elid;
                for(var i = num; i <110; i+=r){
                    console.log(i);
                    try {
                        document.getElementById(i).outerHTML = "";
                    }
                    catch (e) {
                        try {
                            document.getElementById((i + r).toString()).outerHTML = "";
                        }
                        catch (e) {
                            try {
                                document.getElementById((i + r * 2).toString()).outerHTML = "";
                            }
                            catch (e) {
                                try {
                                    document.getElementById((i + r * 3).toString()).outerHTML = "";
                                }
                                catch (e) {
                                    try {
                                        document.getElementById((i + r * 4).toString()).outerHTML = "";
                                    }
                                    catch (e) {
                                        try {
                                            document.getElementById((i + r * 5).toString()).outerHTML = "";
                                        }
                                        catch (e) {
                                            try {
                                                document.getElementById((i + r * 6).toString()).outerHTML = "";
                                            }
                                            catch (e) {
                                                try {
                                                    document.getElementById((i + r * 7).toString()).outerHTML = "";
                                                }
                                                catch (e) {
                                                    try {
                                                        document.getElementById((i + r * 8).toString()).outerHTML = "";
                                                    }
                                                    catch (e) {
                                                        try {
                                                            document.getElementById((i + r * 9).toString()).outerHTML = "";
                                                        }
                                                        catch (e) {
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
            }
            document.getElementById("main").style.width = (columns-1)*42 + "px";
            columns--;
            document.getElementById(this.id).outerHTML = "";
        });
        document.getElementById("but2").appendChild(tile[i]);
        ind++;
    }
}






