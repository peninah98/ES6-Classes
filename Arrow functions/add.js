const container = document.getElementById('container')

const add =(x,y)=>{
    return x + y
}

container.innerHTML =`The result of addition ${add(4,5)}` 

const monthsOfYear = ["Jan", "Feb", "Mar"]
const monthsOfYear1 = ["Jan", "Feb", "Mar"]
const monthsOfYear2 = ["Jan", "Feb", "Mar"]

const months = [...monthsOfYear,...monthsOfYear1,...monthsOfYear2]

const list = document.createElement('div')
container.appendChild(list)

list.innerHTML = months.join(' ')

