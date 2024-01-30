const { env } = require("node:process");
const fs = require('fs');
const ndiz = "abcçdefgğhıijklmnoöprsştuüvyzxwABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZXW1234567890|\"'`!^£#$+&/{[(])}=?*\\~.,;:<>@-_é ";
require('dotenv').config();
let method = env.METHOD.replace("${egikCizgi}", "`").replace("${ciftTirnak}", "\"");
function encode(arg) {
    const news= arg.replaceAll("\n", "${hebelehubelebalgamsalgamsporyenisariri}");
    let out = "";
    for (let i = 0; i < news.length; i++) {
        const char = news[i];
        out+=method[ndiz.indexOf(char)];
    }
    return out;
}
function decode(arg) {
    let out = "";
    for (let i = 0; i < arg.length; i++) {
        const char = arg[i];
        out+=ndiz[method.indexOf(char)];
    }
    return out.replaceAll("${hebelehubelebalgamsalgamsporyenisariri}", "\n");
}
let usrf = fs.readFileSync("USERFILE", { encoding:"utf-8", }).split("\n");for (let ind = 0; ind < usrf.length; ind++) {usrf[ind]=usrf[ind].replace("\r","");}
fs.writeFileSync("USERFILE", decode(usrf.join("\n")), {encoding:"utf-8"});