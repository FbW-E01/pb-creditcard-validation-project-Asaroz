function validateCreditCard(creditCardNum) {
    creditCardNum=creditCardNum.replace(/-/g,"")
    creditCardNum=creditCardNum.replace(/ /g,"")
    var validation = {valid:"is Valid",number:creditCardNum,error:""}
    if(!(creditCardNum.length==16)){
        validation.valid = "invalid"
        validation.error = validation.error + " There must be 16 digits"
    }
    if(isNaN(parseInt(creditCardNum))){
        validation.valid = "invalid"
        validation.error = validation.error + " Only Numbers allowed"
    }
    if(parseInt(creditCardNum.charAt(creditCardNum.length -1)) % 2 != 0){
        validation.valid = "invalid"
        validation.error = validation.error + " Last Digit must be even"
    }
    var sum = 0
    for (i=0 ; i< creditCardNum.length;i++){
        sum = sum + parseInt(creditCardNum.charAt(i))
    }
    if(sum <16){
        validation.valid = "invalid"
        validation.error = validation.error + " The sum of digits must be 16 or greater"
    }
    validation.error = validation.error + ""

    return validation

};

/**** tests *****/
console.log(validateCreditCard('9999- 7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
console.log(validateCreditCard('6666-6666-6666-1663')); //{ valid: true, number: '6666-6666-6666-1666' }
console.log(validateCreditCard('a923-3211-9c01-1112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
console.log(validateCreditCard('0000-1111-1111-1112')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
console.log(validateCreditCard('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }




