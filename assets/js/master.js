document.getElementById('inp_card_number').addEventListener('input', (e) => {
    let _value = e.target.value
    if (
        (_value.search(/[ا-ی , a-z]/)) >= 0
    ) {
        e.target.value = _value.substring(0, _value.length - 1)
        document.getElementById('show_card_number').innerHTML = _value.length - 1
    }

    if (_value.length > 16) {
        e.target.value = _value.substring(0, 16)
    } else {
        if (e.target.value.length > 12) {
            document.getElementById('show_card_number').innerHTML = _value.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        } else if (e.target.value.length > 8) {
            document.getElementById('show_card_number').innerHTML = _value.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
        } else if (e.target.value.length > 4) {
            document.getElementById('show_card_number').innerHTML = _value.replace(/(\d{4})(\d{0,4})/, "$1 $2");
        } else {

            document.getElementById('show_card_number').innerHTML = _value
        }
    }
})
//----------------Finish Card Nubmer----------------------

document.getElementById('inp_card_name').addEventListener('input', (e) => {
    let name_value = e.target.value
    if (name_value.length > 20 || (name_value.search(/[ا-ی ,0-9,!@#$%^&*()_+-.~'"><]/)) >= 0) {
        // e.target.value = name_value.substring(0, 24)
        e.target.value = name_value.substring(0, name_value.length - 1)
        document.getElementById('show_card_name').innerHTML = name_value.substring(0, name_value.length - 1)
    } else {
        document.getElementById('show_card_name').innerHTML = name_value
    }
})
//--------------- Finish Card Name-------------------------
document.getElementById('inp_date_year').addEventListener('input', (e) => {
    let year_value = e.target.value
    if (year_value.length > 2 || (year_value.search(/[ا-ی ,a-z,!@#$%^&*()_+-.~'"><]/)) >= 0) {
        e.target.value = year_value.substring(0, year_value.length - 1)
        if (Number(year_value) <= 9) {
            document.getElementById('show_card_year').innerHTML = "0" + year_value.substring(0, year_value.length - 1)
        }
    } else {
        if (Number(year_value) <= 9) {
            document.getElementById('show_card_year').innerHTML = "0" + year_value
        } else {
            alert('Please Enter A Year Between 0 And 9')
            document.getElementById('inp_date_year').value = null
            document.getElementById('show_card_year').innerHTML = "00"

        }
    }
})
//--------------- Finish Year-------------------------
document.getElementById('inp_date_month').addEventListener('input', (e) => {
    let month_value = e.target.value
    if (month_value.length > 2 || (month_value.search(/[ا-ی ,a-z,!@#$%^&*()_+-.~'"><]/)) >= 0) {
        e.target.value = month_value.substring(0, month_value.length - 1)
        if (Number(month_value) <= 31) {
            document.getElementById('show_card_month').innerHTML = month_value.substring(0, month_value.length - 1)
        }
    } else {
        if (Number(month_value) <= 31) {
            document.getElementById('show_card_month').innerHTML = month_value
        } else {
            alert('Please Enter A Month Between 1 And 31')
            document.getElementById('inp_date_month').value = null
            document.getElementById('show_card_month').innerHTML = "00"
        }
    }
})
//--------------- Finish Month----------------------------------------
let _inp = document.querySelectorAll('.div_form >input,.date_cvv>.div_date>input')
_inp.forEach((val) => {
    val.addEventListener('focus', () => {
        document.getElementsByClassName('card')[0].style.transform = "translateY(-50%) rotateY(0deg)"
    })
})
//--------------- Finish Rotate Front Page Card-------------------------
document.getElementById('inp_cvv').addEventListener('focus', (e) => {
    document.getElementsByClassName('card')[0].style.transform = "translateY(-50%) rotateY(180deg)"
})
//--------------- Finish Rotate Back Page Card-------------------------
document.getElementById('inp_cvv').addEventListener('input', (e) => {
    let cvv_value = e.target.value
    if (cvv_value.length > 3 || (cvv_value.search(/[ا-ی ,a-z,!@#$%^&*()_+-.~'"><]/)) >= 0) {
        e.target.value = show_cvv.substring(0, cvv_value.length - 1)
        document.getElementById('show_cvv').innerHTML = cvv_value.substring(0, cvv_value.length - 1)
        
    } else {
        document.getElementById('show_cvv').innerHTML = cvv_value
    }
})
//--------------- Finish Cvv-----------------------------------------
