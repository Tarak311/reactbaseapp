const env = process.env;

var mongourl   = process.env.ENVURI ||  "mongodb+srv://usera:userb@littlemongocluster.ge3qg.mongodb.net/nimbusapp?retryWrites=true&w=majority"
var secretpswd = process.env.ENVPSD ||  "notsoobivios"


module.exports =
{
    url : mongourl ,
    pswd : secretpswd,
}
