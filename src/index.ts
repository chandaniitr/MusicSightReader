
function component() {
    let element = document.createElement('div');
  
    element.innerHTML = "Hello World 23";
  
    return element;
}
  
document.body.appendChild(component());