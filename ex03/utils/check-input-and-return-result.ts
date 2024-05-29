import { useState } from "react"
let check : boolean = false;
// let regix : RegExp = \b\d+(\.\d+)?\b
let reg = new  RegExp('\b\d+(\.\d+)?\b')
let sampleRegEx: RegExp = /(?:^|[+\-*/])\d*\.\d*$/;


import { ClearInput, ReturnType, CheckInputType, RemoveLastCharType, CheckDoubleZeroType } from "./interfaces"



const clearInput = ({result} : ClearInput) : ReturnType =>{

    return {input: '0', result : '0'}
}

const removeLastChar = ({oldInput, result} : RemoveLastCharType ) : ReturnType =>{
    if(oldInput.length == 1)
        return {input : '0', result}
    return {input : oldInput.slice(0, -1), result}
}

const checkDoubleZero = ({input ,oldInput, result} : CheckDoubleZeroType) : ReturnType =>{
    if(oldInput.length === 1 && oldInput === '0')
        return {input : oldInput, result}
    return {
        input:oldInput.concat(input),result
    }
}




const calculate = (input : string) : ReturnType =>{
    const cal = input.replace('x', '*').replace('+-','-').replace('-+', '+');
    console.log(cal , 'this is the calc');
    const check = cal.replace(/[^0-9]/g, '')
    console.log('this is the check');
    return {
        input,
        result : eval(cal)
    }
}

const setVariables = (props: CheckInputType) : ReturnType =>{

    console.log(sampleRegEx.test(props.oldInput))
    // console.log(
    //     check , 'when '
    // )
    // const operators = ['+', '-', '/', 'x'];
    
    // if(props.input === '.' && check){
    //     console.log('11111')
    //     return {input : props.oldInput, result : props.result}
    // }
    // console.log(check, 'this is the first one');
    // if (props.input === '.' && !check){
    //     console.log('22222222')
    //     check = true;
    //     console.log(check , 'this is the check ')
    //     return {input : props.oldInput.concat(props.input), result : props.result};
    // }
    

    // if(props.oldInput[props.oldInput.length - 1] === props.input)
    //     return {input : props.oldInput, result: props.result}

    return {input : props.oldInput == '0' ? props.input :  props.oldInput + props.input, result : props.result} ;

}



export const checkInputAndReturnResult = (props : CheckInputType): ReturnType =>  {
    let number : 0;

    switch(props.input){
        case '=':
            return calculate(props.oldInput);
        case 'AC':
            return clearInput({input : props.input, result: props.result})
        case 'C':
            return removeLastChar({oldInput: props.oldInput, result: props.result});
        case '00':
            return checkDoubleZero(props);
        default:
            return setVariables(props);

    }
}

