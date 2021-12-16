 function changeValue(){

    let option = document.querySelector('input[name="valueType"]:checked').value
    let active_input;

    //clean all the inputs and result 
    document.querySelectorAll('.formula_value').forEach(element => {
        element.value ='';
    });
     
    document.getElementById('result').innerHTML = ''

    //depend of the option, we enable/disable the inputs
    switch(option){
        case "1":
            //this will help us to clean all our inputs
            document.querySelectorAll('.formula_value').forEach(element => {
                element.removeAttribute("disabled");
            });

            //then we can disabled the input we want to calculate
            active_input = document.getElementById('present_value')
            active_input.setAttribute("disabled", "true");
            active_input.focus();

            //inserting the correct image of our calculation
            document.getElementById('img_formula').setAttribute("src","/static/present_value.png")
            
        break;
        case "2":
            document.querySelectorAll('.formula_value').forEach(element => {
                element.removeAttribute("disabled");
            });
            active_input = document.getElementById('future_value')
            active_input.setAttribute("disabled", "true");
            active_input.focus();

            document.getElementById('img_formula').setAttribute("src","/static/future_value.png")
            
        break;
        case "3":
            document.querySelectorAll('.formula_value').forEach(element => {
                element.removeAttribute("disabled");
            });
            active_input = document.getElementById('period')
            active_input.setAttribute("disabled", "true");
            active_input.focus();

            document.getElementById('img_formula').setAttribute("src","/static/period.png")
            
        break;
        case "4":
            document.querySelectorAll('.formula_value').forEach(element => {
                element.removeAttribute("disabled");
            });
            active_input = document.getElementById('interest_formula')
            active_input.setAttribute("disabled", "true");
            active_input.focus();

            document.getElementById('img_formula').setAttribute("src","/static/interest_formula.png")
            
        break;
        
    }

 }

 //make the calculation of the future value formula
 function calculate_value(){
    let option = document.querySelector('input[name="valueType"]:checked').value
    let calculated_value;

    //obtaining all the data of the inputs
    let fv = parseFloat(document.getElementById('future_value').value);
    let pv = parseFloat(document.getElementById('present_value').value);
    let n = parseFloat(document.getElementById('period').value);
    let r = parseFloat(document.getElementById('interest_formula').value);

    switch(option){
        case "1": //present value
            calculated_value =  fv / Math.pow((1+r*0.01),n)
            document.getElementById('present_value').value = calculated_value
        break;
        case "2": //future value
            calculated_value =  pv * Math.pow((1+r*0.01),n)
            document.getElementById('future_value').value = calculated_value
        break;
        case "3": //periods
            calculated_value =  Math.log(fv/pv)/Math.log(1+(r*0.01))
            document.getElementById('period').value = calculated_value
        break;
        case "4": //interest
            calculated_value =  Math.pow(fv/pv,1/n)-1
            document.getElementById('interest_formula').value = calculated_value
        break;
    }

    calculated_value = Math.round(calculated_value*100)/100;
    
    //little exception about interest (adding the percentage)
    if(option == "4") calculated_value = (calculated_value*100) + ' %'
    document.getElementById('result').innerHTML = calculated_value

    return false
 }


 //init

 //start the code by clicking the input of future
 document.getElementById('future_input').click();