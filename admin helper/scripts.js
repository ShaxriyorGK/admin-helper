dq = s => document.querySelector(s)

addTr = '<tr id="add-tr">' + dq`#add-tr`.innerHTML + '</tr>'

table = dq`table`
tbody = dq`tbody`

tbody.innerHTML = localStorage.getItem('data') == null ? addTr : localStorage.getItem('data')

saveData = () => {
    localStorage.setItem('data', tbody.innerHTML)
}

addAll = () => {
    name = dq`#fullname`.innerHTML
    course = dq`#course`.children[0].value
    lessonDate = dq`#lesson-date`.children[0].value
    lessonHour = dq`#lesson-hour`.children[0].value
    telephone = dq`#telephone`.querySelector`input`.value
    address = dq`#address`.innerHTML
    payDate = dq`#pay-date`.innerHTML
    payed = dq`#payed`.children[0].value
    if (name == '' || course == '' || lessonDate == '' || payDate == '' || payed == '') { alert("Iltimos hammasini to'ldiring")}
    else {
        tbody.removeChild(tbody.lastElementChild)
        tbody.innerHTML += `
            <tr>
                <td>${name}</td>
                <td>${course}</td>
                <td>${lessonDate}</td>
                <td>${lessonHour}</td>
                <td>${telephone}</td>
                <td>${address}</td>
                <td>${payDate}</td>
                <td>${payed}</td>
                <td><button class="b1" onclick="editThis(this)">tahrirlash</button><button class="b2" onclick="delet(this)">o'chirish</button></td>
            </tr>
            ${addTr}
        `
        saveData()
        
    }
}


delet = p => {
    if (confirm("O'chirishni xohlyasizmi?")) {
        tbody.removeChild(p.parentElement.parentElement)
    }
    saveData()
}

firstTime = true
editThis = e => {
    p = e.parentElement.parentElement

    if (firstTime) {
        
        firstTime = false
        alert("Tahrirlamoqchi bo'lgan element ustiga bosib tahrirlang")
        p.style.border = 'solid 3px'
        e.innerHTML = 'tahrirla'
        

        p.children[0].setAttribute('contenteditable', 'true')

        p1 = p.children[1].innerHTML
        p.children[1].innerHTML = dq`#course`.innerHTML
        p.children[1].children[0].value = p1

        p2 = p.children[2].innerHTML
        p.children[2].innerHTML = dq`#lesson-date`.innerHTML
        p.children[2].children[0].value = p2

        p3 = p.children[3].innerHTML
        p.children[3].innerHTML = dq`#lesson-hour`.innerHTML
        p.children[3].children[0].value = p3

        p4 = p.children[4].innerHTML
        p.children[4].innerHTML = `<input type="tel" value="${p4}" id="space" oninput="addSpace()">`

        p.children[5].setAttribute('contenteditable', 'true')
        p.children[6].setAttribute('contenteditable', 'true')

        
        p7 = p.children[7].innerHTML
        p.children[7].innerHTML = dq`#payed`.innerHTML
        p.children[7].children[0].value = p7

    } else {

        firstTime = true
        p.style.border = ''
        e.innerHTML = 'tahrirlash'
        
        p.children[0].setAttribute('contenteditable', 'false')
        p.children[1].innerHTML = p.children[1].children[0].value
        p.children[2].innerHTML = p.children[2].children[0].value
        p.children[3].innerHTML = p.children[3].children[0].value
        p.children[4].innerHTML = p.children[4].children[0].value
        p.children[5].setAttribute('contenteditable', 'false')
        p.children[6].setAttribute('contenteditable', 'false')
        p.children[7].innerHTML =  p.children[7].children[0].value

        saveData()
    
    }
}

document.addEventListener('keydown', e => {
    if (e.code == 'Enter') addAll()
    else if (e.code == 'Backspace') addSpace`d`
})

login = dq`#login`
main = dq`#main`
form = dq`form`

form.onsubmit = e => {
    e.preventDefault()
    loginp = dq`#loginp`.value
    password = dq`#parol`.value
    form.reset()

    if (loginp == '' && password == '') {
        logins()
    } else {
        alert("Login yoki parol noto'g'ri. Iltimos boshqatdan urunib ko'ring yoki 'parolni unutdingizmi?'ni bosing.")
    }


}


logins = () => {
    login.style.display = 'none'
    main.style.display = 'unset'
    document.body.style.all = 'unset'
    document.body.style.overflowX = 'hidden'
}


mySearch = () => {
    
    trows = tbody.querySelectorAll`tr`
    sEl = dq`#sEl`
    
    for (i = 0; i < trows.length; i++) {
        if (trows[i].children[0].innerHTML.toUpperCase().includes(sEl.value.toUpperCase())) {
            trows[i].style.display = ''
        } else {
            trows[i].style.display = 'none'
        }
    }

}

addSpace = w => {
    n = dq`#space`
    if (w == 'd') {
        n.value = n.value.slice(0, -1)
    }
    else {    
        
        i = n.value.length
        if (i == 4 || i == 7 || i == 11 || i == 14 || i == 18 || i == 23 || i == 26 || i == 30 || i == 33) {
            n.value += ' '
        }
    }
}