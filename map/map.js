const container = document.querySelector('#container')
const mapHolder = document.querySelector('#map')

let daysMap = new Map()
daysMap.set('1','Monday')
daysMap.set('2','Tuesday')
daysMap.set('3','Wednesday')
daysMap.set('4','Thursday')
daysMap.set('5','Friday')

console.log(daysMap)

mapHolder.innerHTML = '';
for(const [key,value] of daysMap){
    const dayElement = document.createElement('div');
    dayElement.textContent = `${key}: ${value}`;
    mapHolder.appendChild(dayElement);

}
