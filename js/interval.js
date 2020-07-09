setInterval(generateToken, 60*60*1000);
//setInterval(generateToken, 10000);

function generateToken(){	
    var postData = {
        userNameOrEmailAddress: "api", 
        password: "1q2w3e*"
    };
    
    axios.post('https://cors-anywhere.herokuapp.com/https://portal.plugin.ke/api/TokenAuth/Authenticate', postData)
    .then(function (response) {
        console.log(response);
        token = response.data.result.accessToken;
        getToken(token)
    })
    .catch(function (error) {
        console.log('reached error');
        console.log(error);
    });
}


function getToken(token){
    return authToken = token;
    // console.log("reached token");
    // console.log(authToken);
}




