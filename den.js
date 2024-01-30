/* require('dotenv').config()
const { env } = require("node:process");
console.log(env.METHOD.replace("${egikCizgi}", "`").replace("${ciftTirnak}", "\"")); */
/* const { DB } = require('./db.js');
const den = new DB("USERFILE");
console.log(den.get("den")); */
/* function genMethod() {
    let originalDizi = "abcçdefgğhıijklmnoöprsştuüvyzxwABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZXW1234567890|\"'`!^£#$+&/{[(])}=?*\\~.,;:<>@-_é ";
    let dizi = originalDizi.slice();
    let yenidizi = "";
    while (yenidizi.length !== 106) {
        let ind = Math.floor(Math.random() * dizi.length);
        yenidizi += dizi[ind];
        dizi = dizi.slice(0, ind) + dizi.slice(ind + 1);
    }
    return yenidizi;
}
console.log(genMethod()); */
/* let json = require("./.env.json");
console.log(json.METHOD); */
/* function getIPAddress() {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv6' && alias.address !== '127.0.0.1' && !alias.internal)
                return alias.address;
        }
    }
    return '0.0.0.0';
}
var geoip = require('geoip-lite');
var ip = getIPAddress();;
var geo = geoip.lookup(ip);
console.log(geo.country); */
/* const chars = "abcçdefgğhıijklmnoöprsştuüvyzxw".split("");
const ints = ["1","2","3","4","5","6","7","8","9","0"];
function thPassSecure(upass) {
    let secure = 0;
    let charvar = false;
    let ivar = false;
    let denpass = upass;
    if (isNaN(upass)) {secure+=2;}
    for (let ci = 0; ci < chars.length; ci++) {
        const char = chars[ci];
        if (upass.toLocaleLowerCase("tr").includes(char) && charvar==false) {charvar=true;secure++;}
        denpass=denpass.replaceAll(char, "");
    }
    for (let ii = 0; ii < ints.length; ii++) {
        if (upass.includes(ints[ii]) && ivar==false) {ivar=true;secure++;}
        denpass=denpass.replaceAll(ints[ii], "");
    }
    denpass = denpass.trimStart();
    if (denpass.length>0) secure+=2;
    if (upass.length>7) secure+=3;
    if (upass.toLocaleLowerCase("tr")!=upass || upass.toLocaleUpperCase("tr")!=upass) secure++;
    return secure;
}
console.log(thPassSecure("123")); */
console.log(__dirname);
process.chdir("C:/Users/User/Desktop");
console.log(__dirname);