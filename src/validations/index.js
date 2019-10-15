function notMatchRegex(value, regex, message){
    if(!regex.test(value)){
        throw new Error(message);
    }
   
}

export default Object.freeze({
    notMatchRegex
})