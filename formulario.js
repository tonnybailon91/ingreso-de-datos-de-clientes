alert("Bienvenido");
var inputs = document.getElementsByClassName('input');
for (var tonny = 0; tonny< inputs.length; tonny++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        } else{
            this.nextElementSibling.classList.remove('fijar');
        }
    })
}