    $("#phon").mask("(99) 9999-9999");
    $("#birthday").mask("99/99/9999");

    jQuery(function ($) {
        $("#phon").focusout(function () {
            var valor = $(this).val();
            valor = valor.replace("(", "")
            valor = valor.replace("_", "")
            valor = valor.replace("_", "")
            valor = valor.replace(")", "")
            valor = valor.replace(" ", "")
            valor = valor.replace("_", "")
            valor = valor.replace("_", "")
            valor = valor.replace("_", "")
            valor = valor.replace("_", "")
            valor = valor.replace("-", "")
            valor = valor.replace("_", "")
            valor = valor.replace("_", "")
            valor = valor.replace("_", "")
            valor = valor.replace("_", "")

            if (valor.length < 10) {
                $("#phon").val("");
            }
        })
    });



    let reg=document.getElementById('form1'),
        name =document.getElementById("name"),
        lastp =document.getElementById("ap"),
        lastm =document.getElementById("am"),
        age =document.getElementById("birthday"),
        phon =document.getElementById("phon"),
        address =document.getElementById("add"),
        colony =document.getElementById("col"),
        numc =document.getElementById("casa"),
        town =document.getElementById("mun"),
        labname =document.getElementById("labname"),
        lablastp =document.getElementById("labap"),
        lablastm =document.getElementById("labam"),
        labage =document.getElementById("labbirthday"),
        labphon =document.getElementById("labphon"),
        labaddress =document.getElementById("labadd"),
        labcolony =document.getElementById("labcol"),
        labnumc =document.getElementById("labcasa"),
        labtown =document.getElementById("labmun");

    var rexLett = /[^a-zA-ZáéíóúNñÑÁÉÍÓÚ]/g,
        rexNumb = /[^0-9]/g;

    //>>>>>>>>>>>>>>>>>>>>>>> Validaciones de Campos >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    //********** Nombre & Apellidos *****************

    if(name)
    {
        name.addEventListener('focusout', function (e) {
            this.value=this.value.replace(rexLett, '');
        });

        name.addEventListener('focusin',function (e) {
            name.removeAttribute("style");
            labname.style.display = "none";
        })
    }

    if(lastp)
    {
        lastp.addEventListener('focusout', function (e) {
            this.value=this.value.replace(rexLett, '');
        });

        lastp.addEventListener('focusin',function (e) {
            lastp.removeAttribute("style");
            lablastp.style.display = "none";
        })
    }

    if(lastm)
    {
        lastm.addEventListener('focusout', function (e) {
            this.value=this.value.replace(rexLett, '');
        });

        lastm.addEventListener('focusin',function (e) {
            lastm.removeAttribute("style");
            lablastm.style.display = "none";
        })
    }

    //****************** Fecha Nacimiento ********************
    if (age) {
        age.addEventListener('focusin', function (e) {
            age.removeAttribute('style');
            labage.style.display = "none";
        });

        // age.addEventListener('focusout', function () {
        //     let vr = this.value.replace(rexNumb, '');
        //     vr.length < 8 && (this.value = "");
        //     calculatedAge(age, age.value);
        // });
    }

    //********************* Telefono **************************
    if (phon) {
        phon.addEventListener('input', function () {
            this.value = this.value.replace(rexNumb, '');
        });
        phon.addEventListener('focusout', function () {
            let vr = this.value.replace(rexNumb, '');
            vr.length < 10 && (this.value = "");
        });

        phon.addEventListener('focusin', function () {
            phon.removeAttribute('style');
            labphon.style.display = "none";
        });
    }
    //********************* Dirección **************************
    if(address)
    {
        address.addEventListener('focusout', function (e) {
            this.value=this.value.replace(rexLett, '');
        });

        address.addEventListener('focusin',function (e) {
            address.removeAttribute("style");
            labaddress.style.display = "none";
        })
    }

    if(colony){
        colony.addEventListener('focusout', function (e) {
            this.value=this.value.replace(rexLett, '');
        });

        colony.addEventListener('focusin',function (e) {
            colony.removeAttribute("style");
            labcolony.style.display = "none";
        })
    }

    if (numc) {
        numc.addEventListener('input', function () {
            this.value = this.value.replace(rexNumb, '');
        });
        numc.addEventListener('focusout', function (e) {
            this.value=this.value.replace(rexNumb, '');
        });
        numc.addEventListener('focusin', function () {
            numc.removeAttribute('style');
            labnumc.style.display = "none";
        });
    }

    if(town){
        town.addEventListener('focusout', function (e) {
            this.value=this.value.replace(rexLett, '');
        });

        town.addEventListener('focusin',function (e) {
            town.removeAttribute("style");
            labtown.style.display = "none";
        })
    }



    if(reg)
    {
        reg.addEventListener('submit', function (e) {

            if(name.value.trim() == ""){
                e.preventDefault(), messagex(name, labname, 'red', 'mistyrose', 'danger');
            }

            if(lastp.value.trim() == ""){
                e.preventDefault(), messagex(lastp, lablastp, 'red', 'mistyrose', 'danger');
            }
            if(lastm.value.trim() == ""){
                e.preventDefault(), messagex(lastm, lablastm, 'red', 'mistyrose', 'danger');
            }
            if(age.value.trim() == ""){
                e.preventDefault(), messagex(age, labage, 'red', 'mistyrose', 'danger');
            }
            if(phon.value.trim() == ""){
                e.preventDefault(), messagex(phon, labphon, 'red', 'mistyrose', 'danger');
            }
            if(address.value.trim() == ""){
                e.preventDefault(), messagex(address, labaddress, 'red', 'mistyrose', 'danger');
            }
            if(colony.value.trim() == ""){
                e.preventDefault(), messagex(colony, labcolony, 'red', 'mistyrose', 'danger');
            }
            if(numc.value.trim() == ""){
                e.preventDefault(), messagex(numc, labnumc, 'red', 'mistyrose', 'danger');
            }
            if(town.value.trim() == ""){
                e.preventDefault(), messagex(town, labtown, 'red', 'mistyrose', 'danger');
            }
        });

    }


    function messagex(id, lab, x1, x2, typ) {
        id.style.backgroundColor = x2;
        id.style.borderColor = x1;
        lab.style.display = "block";
        lab.style.width = "100%";
        lab.style.padding = 0;
        lab.style.margin = 0;
        lab.setAttribute("class", "label label-" + typ);
        lab.textContent = "Campo requerido";
    }

    //***************************** Funcion Edad **********************************
    //#calcular si eres mayor de edad
    function calculatedAge(id, birthday) {
        let arry = birthday.split("/");
        let birt = arry[1] + "/" + arry[0] + "/" + arry[2];
        let vr = new Date(Date.now() - new Date(birthday).getTime());
        let age = Math.abs(vr.getUTCFullYear() - 1970);
        if (age < 18 || age > 80 || Number.isNaN(age)) {
            id.value = '';
        }
    }