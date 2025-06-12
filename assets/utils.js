function generateID(prefix){
    prefix = (prefix ? prefix : 'app');
    return prefix + '-' + crypto.randomUUID().toString().substring(0,8);
}



export {generateID};