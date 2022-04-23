 let getSuffixEmail = function(email,suffix){
    let mailParts = email.split("@")
    if(suffix === undefined){
      suffix = Date.now()
    }
    return mailParts[0] + "+" + suffix + "@"+ mailParts[1]
}

let getCode = function(text){
    let codeList = text.match(/[0-9]+/g)
    let code = codeList[0]
    console.log(code)
}

let json = { _errorDetails: { password: 'password is a required field' } }

console.log(JSON.stringify(json))

console.log(JSON.parse(`{"_errorDetails":{"password":"password is a required field"}}`))