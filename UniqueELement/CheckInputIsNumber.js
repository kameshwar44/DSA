// Check Input is Integer Or Number ...

function CheckInt(inp){
    let patttern = /^[0-9]+$/;
    let result = patttern.test(inp);
    return result;
}

CheckInt("1234");