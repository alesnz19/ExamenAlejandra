$("#numcta").mask("9999 9999 9999 9999");

let reg=document.getElementById('form1'),
    cta = document.getElementById('numcta'),
    belon = document.getElementById('account_client_id'),
    labcta = document.getElementById('labnumcta'),
    labbelong = document.getElementById('labbelong');

    var  rexNumb = /[^0-9]/g;

    if(cta)
    {
        cta.addEventListener('focusout', function () {
            let vr = this.value.replace(rexNumb, '');
        });

        cta.addEventListener('focusin',function (e) {
            cta.removeAttribute("style");
            labcta.style.display = "none";
        })
    }

    if(belon)
    {
        belon.addEventListener('change', function (e) {
            belon.removeAttribute('style');
            labbelong.style.display = "none";
        });
    }

    if(reg)
    {
        reg.addEventListener('submit', function (e) {

            if(cta.value.trim() == ""){
                e.preventDefault(), messagex(cta, labcta, 'red', 'mistyrose', 'danger');
            }

            if (belon.selectedIndex == 0) {
                e.preventDefault(), messagex(belon, labbelong, 'red', 'mistyrose', 'danger');
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