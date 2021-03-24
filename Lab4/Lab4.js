
function CalculateCommission(){
    var topCommission = 0;
    var topSalesPerson = "Nobody yet";
    let commission1 =0;
    let commission2 =0;
    let commission3 =0;
    let commission4 =0;
    let commission5 =0;
    let commission6 =0;
    let commission7 =0;
    
    var salesPerson = ['Brad', 'Nila', 'Joseph', 'Kesh', 'Lydia', 'Devon', 'Miller'];


    function sumOfBrad(arr){
        let sum=0;
        for(let a of arr)
            sum += a;
            return sum;
    }
    salesPerson[0] = (sumOfBrad([1500,10000,8000]))
    commission1 = salesPerson[0] * .05
    console.log(salesPerson[0]);
    console.log(commission1 + 'c');

    const Brad =[1500,10000,8000];
    let total1 = 0;
    for(var i = 0; i < Brad.length; i++) {
        total1 += Brad[i] / Brad.length
        
    }
    console.log(total1 + 'ab');

////////////////////////////////////////////

    function sumOfNila(arr){
        let sum=0;
        for(let a of arr)
        sum += a;
        return sum;
    }
    salesPerson[1] = (sumOfNila([15000,25000,7500]))
    commission2 = salesPerson[1] * .08
    console.log(salesPerson[1]);
    console.log(commission2 + 'c')

    const Nila =[15000,25000,7500];
    let total2 = 0;
    for(var i = 0; i < Nila.length; i++) {
        total2 += Nila[i] / Nila.length
        
    }
    console.log(total2 + 'ab');


///////////////////////////////////////////


    function sumOfJoseph(arr){
        let sum=0;
        for(let a of arr)
        sum += a;
        return sum;
    }

    salesPerson[2] = (sumOfJoseph([30000,20000,45000]))
    commission3 = salesPerson[2] * .08
    console.log(salesPerson[2]);
    console.log(commission3 + 'c')

    const Joseph =[30000,20000,45000];
    let total3 = 0;
    for(var i = 0; i < Joseph.length; i++) {
        total3 += Joseph[i] / Joseph.length
        
    }
    console.log(total3 + 'ab');


    ////////////////////////////////////////


    function sumOfKesh(arr){
        let sum=0;
        for(let a of arr)
        sum += a;
        return sum;
    }

    salesPerson[3] = (sumOfKesh([12000,14000,10000]))
    commission4 = salesPerson[3] * .08
    console.log(salesPerson[3]);
    console.log(commission4 + 'c')

    const Kesh =[12000,14000,10000];
    let total4 = 0;
    for(var i = 0; i < Kesh.length; i++) {
        total4 += Kesh[i] / Kesh.length
        
    }
    console.log(total4 + 'ab');


    ///////////////////////////////////////////


    function sumOfLydia(arr){
        let sum=0;
        for(let a of arr)
        sum += a;
        return sum;
    }

    salesPerson[4] = (sumOfLydia([45000,30000,38000]))
    commission5 = salesPerson[4] * .08
    console.log(salesPerson[4]);
    console.log(commission5 + 'c')

    const Lydia =[45000,30000,38000];
    let total5 = 0;
    for(var i = 0; i < Lydia.length; i++) {
        total5 += Lydia[i] / Lydia.length
        
    }
    console.log(total5 + 'ab');



    /////////////////////////////////////////////



    function sumOfDevon(arr){
        let sum=0;
        for(let a of arr)
        sum += a;
        return sum;
    }
    salesPerson[5] = (sumOfDevon([25000,16000,22000]))
    commission6 = salesPerson[5] * .08
    console.log(salesPerson[5]);
    console.log(commission6 + 'c')

    const Devon =[25000,16000,22000];
    let total6 = 0;
    for(var i = 0; i < Devon.length; i++) {
        total6 += Devon[i] / Devon.length
        
    }
    console.log(total6 + 'ab');


    ///////////////////////////////////////////////



    function sumOfMiller(arr){
        let sum=0;
        for(let a of arr)
        sum += a;
        return sum;
    }
    salesPerson[6] = (sumOfMiller([8000,30000,15000]))
    commission7 = salesPerson[6] * .08
    console.log(salesPerson[6]);
    console.log(commission7 + 'c')

    const Miller =[8000,30000,15000];
    let total7 = 0;
    for(var i = 0; i < Miller.length; i++) {
        total7 += Miller[i] / Miller.length
        
    }
    console.log(total7 + 'ab');







    document.write("SalesMan"+ '&nbsp &nbsp &nbsp &nbsp &nbsp' + 'Commission'
        + '&nbsp &nbsp &nbsp &nbsp &nbsp' + "AverageCommission");
    document.write("<br>" + '----------------------------------------------------------------------' + '<br>');

    document.write('Brad' + '&nbsp &nbsp &nbsp &nbsp &nbsp' + commission1 + '&nbsp &nbsp &nbsp &nbsp &nbsp' +
    + total1);
    document.write('<br>');
    document.write('<br>');

    document.write('Nila' + '&nbsp &nbsp &nbsp &nbsp &nbsp' + commission2 + '&nbsp &nbsp &nbsp &nbsp &nbsp' + 
    + total2);
    document.write('<br>');
    document.write('<br>');

    document.write('Joseph' + '&nbsp &nbsp &nbsp &nbsp &nbsp' + commission3 + '&nbsp &nbsp &nbsp &nbsp &nbsp' +
    total3);
    document.write('<br>');
    document.write('<br>');

    document.write('Kesh' + '&nbsp &nbsp &nbsp &nbsp &nbsp' + commission4 + '&nbsp &nbsp &nbsp &nbsp &nbsp' +
    total4);
    document.write('<br>');
    document.write('<br>');

    document.write('Lydia' + '&nbsp &nbsp &nbsp &nbsp &nbsp' + commission5 + '&nbsp &nbsp &nbsp &nbsp &nbsp' +
    total5);
    document.write('<br>');
    document.write('<br>');

    document.write('Devon' + '&nbsp &nbsp &nbsp &nbsp &nbsp' + commission6 + '&nbsp &nbsp &nbsp &nbsp &nbsp' +
    total6);
    document.write('<br>');
    document.write('<br>');

    document.write('Miller' + '&nbsp &nbsp &nbsp &nbsp &nbsp' + commission7 + '&nbsp &nbsp &nbsp &nbsp &nbsp' +
    total7);
    document.write('<br>' +  '----------------------------------------------------------------------');
   
    alert("Top salesperson is Lydia and her top commission amount is $37,666.66");


}
    




   
   


   
    
    


    
   
    



   

   
    


    /*let combinedArray1 = salesperson[0] + DecemberSales[0] + JanuarySales[0] + FebuarySales[0];*/

   



    //Your code goes here
    /*
    Here's the pseudocode in case you are wondering how to get started:
    1. Save salesperson names in an array
    2. Save December sales amount in an array
    3. Save January sales amount in an array
    4. Save February sales amount in an array
    5. In a "For" loop, for each person
        Calculate Total sales = December sale + January sale + February sale
        
        Calculate commission: 
        if total sales is greater than 30000 then commission = total sales * 0.08 
        If total sales is greater than 15000).....etc
        Continue the if condition for the remaining as specified in the requirement for commission %
        
        Calculate average commission:
        Avg commission = Total commission / 3
        Display sales person name, commission and average commission
        Store the commission to a "topCommission" variable.
        Each time compare topCommission to commission of current salesperson 
        to determine if this is the top commission
    6. Outside the "For" loop, display topCommission and topSalesperson name.
*/


