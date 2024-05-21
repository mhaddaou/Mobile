import { ClearInput, ReturnType, CheckInputType, RemoveLastCharType, CheckDoubleZeroType } from "./interfaces"



const clearInput = ({result} : ClearInput) : ReturnType =>{
    console.log('here')
    return {input: '0', result}
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



const convert = (input : string) =>{

    console.log('this is the input', input)
} 


const calculate = (input : string) : ReturnType =>{
    console.log(input, ' the is the input for result');
    convert(input)
    return {input , result : input}

}

export const checkInputAndReturnResult = (props : CheckInputType): ReturnType =>  {
    let number : 0;

    switch(props.input){
        case '=':
            return calculate(props.oldInput);
            break;
        case 'AC':
            return clearInput({input : props.input, result: props.result})
        case 'C':
            return removeLastChar({oldInput: props.oldInput, result: props.result});
            break;
        case '00':
            return checkDoubleZero(props);
        default:
            return {input : props.oldInput == '0' ? props.input :  props.oldInput + props.input, result : props.result} ;

    }
}

