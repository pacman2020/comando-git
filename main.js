let textname = document.querySelector("#textName")
let btn = document.querySelector("#btn")
let btn2 = document.querySelector("#btn2")
let sideout = document.querySelector("#sideout")


const addname = async () => {

    if (textname.value == '' || textname.value == undefined) {
        sideout.innerHTML = 'preencha o campo'
        return setTimeout(() => {
            sideout.innerHTML = ''

        }, 2000)
    }
    if(textname.value.length < 3){
        
        sideout.innerHTML = 'name task very small'
        return setTimeout(() => {
            sideout.innerHTML = ''

        }, 2000)
    }

    const url = `http://localhost:3000/task`;
    const data = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: textname.value })

    })
    
    textname.value = ''
    getteste()
}

const getteste = async () => {
    const url = `http://localhost:3000/task`;
    const dados = await fetch(url);
    const task = await dados.json();
    let tasks = []
    task.forEach(element => {
        tasks.push(JSON.stringify(element.title))
    });
    console.log(tasks)
    sideout.innerHTML = tasks

}

// getteste()
btn.addEventListener("click", addname, false)

btn2.addEventListener("click", getteste, false)