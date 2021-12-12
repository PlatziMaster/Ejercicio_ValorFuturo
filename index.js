var vf = 0;
var vp = 0;
var  i = 0;
var  n = 0;

function updateValues() {
    vf = parseInt(document.querySelector('#future_value').value);
    vp = parseInt(document.querySelector('#present_value').value);
    i = parseInt(document.querySelector('#interest').value);
    n = parseInt(document.querySelector('#period').value);   
}


function futureValue() {
    let vfValue = document.querySelector('#future_value');
    let  vfForm = vp*(1+(i/100))**n;
     vfValue.value = vfForm; 
     vf = vfForm; 
 }

 function calculateVariables (){
   let  id = document.querySelector('#findVariable').value;
   let  labelText = document.querySelector('#variable_label');
    
     valueVar = 0 ;
     switch (id) {
         case 'vp':
             valueVar = Math.round(vf / ((1+(i/100))**n));
             labelText.textContent = `el valor de ${id} es : ${valueVar} `;
             document.querySelector('#present_value').value = valueVar;
             document.querySelector('#findVariable').value = ' ';
             break;
        case 'i':
            valueVar = Math.round((((vf/vp)**(1/n))-1)*100);
            labelText.textContent = `el valor de ${id} es : ${valueVar} %`;
            document.querySelector('#interest').value = valueVar;
            document.querySelector('#findVariable').value = ' ';
             break;
        case 'n':
            valueVar = Math.round((Math.log10(vf/vp))/(Math.log10(1+(i/100)))) ;
            labelText.textContent = `el valor de ${id} es : ${valueVar}`;
            document.querySelector('#period').value = valueVar;
            document.querySelector('#findVariable').value = ' ';
            break;    
     }
 }