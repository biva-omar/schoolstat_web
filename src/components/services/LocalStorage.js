export function getItem(item){
    return localStorage.getItem(item)
}

export function addItem(key, value){
    localStorage.setItem(key, value)
}

export function removeItem(item){
    localStorage.removeItem(item)
}