import { useState } from "react"
let check : boolean = false;
// let regix : RegExp = \b\d+(\.\d+)?\b
let reg = new  RegExp('\b\d+(\.\d+)?\b')
let sampleRegEx: RegExp = /(?:^|[+\-*/])\d*\.\d*$/;
const operators = ['+', '-', '/', 'x'];
let clickEquation : boolean = false;



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
    const cal = input.replace('x', '*');
    return {
        input,
        result : eval(cal)
    }
}

// if(operators.includes(props.input) && !props.prev.length )
//     props.prev.concat('0');1
const setVariables = (props: CheckInputType) : ReturnType =>{
    console.log(props, 'in set variable');
    if(clickEquation && operators.includes(props.input)){
        console.log('yes is true');
        return {input : props.oldInput + props.input, result : props.result}
    }
    else{
        console.log('nononononono')
    }
    const lstChar = props.oldInput[props.oldInput.length -1];

    if(props.input == '.')
        return {input : sampleRegEx.test(props.oldInput) ? props.oldInput : props.oldInput.concat(props.input), result : props.result}

    if(operators.includes(props.input) && operators.includes(lstChar)){
        let input : string = ''

        if(props.input == '-'){
            if(lstChar === 'x' || lstChar === '/'){
                (input = props.oldInput.concat(props.input));
            }
            else if(lstChar === '-'){
                (input = props.oldInput.slice(0, -1).concat('+'));
            }
            else if (lstChar === '+'){
                (input = props.oldInput.slice(0, -1).concat(props.input));
            }
            else{
                (input = props.oldInput.slice(0, -1).concat(props.input));
            }
        }
        else{
            input = props.oldInput.slice(0, -1).concat(props.input);

        }
        return {input, result: props.result}
    }

    return {input : props.oldInput == '0' ? props.input :  props.oldInput + props.input, result : props.result} ;

}
const checkAfterEquation = (props : CheckInputType): CheckInputType  =>{
    console.log('this is the click equation ', clickEquation);
    if(props.input === '=')
        clickEquation = true;
    if(props.input === 'AC' || props.input === 'C')
        clickEquation = false;

    if(clickEquation && operators.includes(props.input)){
        props.oldInput = props.result;
    }
    return props;
}


export const checkInputAndReturnResult = (props : CheckInputType): ReturnType =>  {
    props = checkAfterEquation(props);
    console.log(props);
    if(operators.includes(props.input) && !props.oldInput.length )
        props.oldInput.concat('0');

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

