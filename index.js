const fs = require('fs');
const path = require('path');
let method;
/* const cd = __dirname;
process.pkg?process.chdir(path.dirname(process.argv[0].replaceAll("\\","/"))):process.chdir(path.dirname(process.argv[0].replaceAll("\\","/"))); */
// const _ENV = ".env";
// const USERFILE = "USERFILE";
const USERFILE = process.pkg?path.join(path.dirname(process.argv[0].replaceAll("\\","/")), "USERFILE"):path.join(path.dirname(process.argv[1].replaceAll("\\","/")), "USERFILE");
const _ENV = process.pkg?path.join(path.dirname(process.argv[0].replaceAll("\\","/")), ".env"):path.join(path.dirname(process.argv[1].replaceAll("\\","/")), ".env");
const TRANSLATE = process.pkg?path.join(path.dirname(process.argv[0].replaceAll("\\","/")), "translate.txt"):path.join(path.dirname(process.argv[1].replaceAll("\\","/")), "translate.txt");
// const PACKAGE = process.pkg?path.join(path.dirname(process.argv[0].replaceAll("\\","/")), "translate.txt"):path.join(path.dirname(process.argv[1].replaceAll("\\","/")), "translate.txt");

function setMethod(thmethod) {
    method = thmethod
    try{fs.writeFileSync(USERFILE, encode(acl.join("\n\n")), {encoding:"utf-8"});}catch(e){}
    fs.writeFileSync(_ENV, "METHOD=\""+method.replace("`", "${egikCizgi}").replace("\"", "${ciftTirnak}")+"\"", { encoding:"utf-8", });
}

function genMethod() {
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

if (fs.readFileSync(_ENV, "utf-8").trim().replace("\n", "").replace("\r", "")=="") {
    setMethod(genMethod());
}

const { env } = require("node:process");
const ndiz = "abcçdefgğhıijklmnoöprsştuüvyzxwABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZXW1234567890|\"'`!^£#$+&/{[(])}=?*\\~.,;:<>@-_é ";
require('dotenv').config({ path: _ENV });
method = env.METHOD.replace("${egikCizgi}", "`").replace("${ciftTirnak}", "\"");
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
let usrf = decode(fs.readFileSync(USERFILE, { encoding:"utf-8", })).split("\n");for (let ind = 0; ind < usrf.length; ind++) {usrf[ind]=usrf[ind].replace("\r","");}
// let rcsf = decode(fs.readFileSync("RCS", { encoding:"utf-8", })).split("\n");for (let ind = 0; ind < rcsf.length; ind++) {rcsf[ind]=rcsf[ind].replace("\r","");}

// * --------- requires --------- * //

const { Fore } = require("./colorama.js");
const argv = process.argv;
const vw = process.stdout.columns, vh = process.stdout.rows;
// const { copy, paste } = require("copy-paste");
const inquirer = require('inquirer');
// ! Get location from ip (Convert to comment this line for disable it)
// const { whereIs, getIPAddress } = require('./ip.js'); // ! <--
// ! Get location from ip (Convert to comment this line for disable it) ^
const package = require("./package.json");
let ws = fs.readFileSync(TRANSLATE, { encoding:"utf-8", }).split("\n");for (let i = 0; i < ws.length; i++) {
    ws[i]=ws[i].replace("\r","");
    let word = ws[i];
    const regExp = /\[[^\[]*\]/g;
    let colors = word.match(regExp);
    if (colors) {
        for (let ind = 0; ind < colors.length; ind++) {
            const color = colors[ind];
            ws[i]=ws[i].startsWith("]")?Fore.Reset+ws[i].slice(1).replace(color,eval("Fore."+color.slice(1,-1)))+Fore.Reset:ws[i].replace(color,eval("Fore."+color.slice(1,-1)))+Fore.Reset;
        }
    }
}

// * --------- requires --------- * //



// * --------- consts --------- * //

const chars = "abcçdefgğhıijklmnoöprsştuüvyzxw".split("");
const ints = ["1","2","3","4","5","6","7","8","9","0"];
let tr;
try {tr = whereIs(getIPAddress());} catch (error) {tr = "tr";}
let acl = usrf.join("\n").split("\n\n");
// let rcl = rcsf.join("\n").split("\n\n");
const programName = package.programName;

// * --------- consts --------- * //



// * --------- functions --------- * //

function upUsrf() {
    fs.writeFileSync(USERFILE, encode(acl.join("\n\n")), {encoding:"utf-8"});
}

function thPassSecure(upass) {
    let secure = 0;
    let charvar = false;
    let ivar = false;
    let denpass = upass;
    if (isNaN(upass)) {secure+=2;}
    for (let ci = 0; ci < chars.length; ci++) {
        const char = chars[ci];
        if (upass.toLocaleLowerCase(tr).includes(char) && charvar==false) {charvar=true;secure++;}
        denpass=denpass.replaceAll(char, "");
    }
    for (let ii = 0; ii < ints.length; ii++) {
        if (upass.includes(ints[ii]) && ivar==false) {ivar=true;secure++;}
        denpass=denpass.replaceAll(ints[ii], "");
    }
    denpass = denpass.trimStart();
    if (denpass.length>0) secure+=2;
    if (upass.length>7) secure+=3;
    if (upass.toLocaleLowerCase(tr)!=upass || upass.toLocaleUpperCase(tr)!=upass) secure++;
    return secure;
}

function log(str, color=Fore.Reset) {
    if (vw > str.length) {
        console.log(" ".repeat((vw - str.length)/2) + color + str + Fore.Reset);
    } else {
        console.log(color + str + Fore.Reset);
    }
}

function helpmenu(tru=false) {
    log(programName + " " + package.version, Fore.Green);
    console.log("");
    log(ws[8].replace("$()", package.name));
    console.log("\n");
    log("--help / -h / ? : "+ws[9]);
    log("--create / c : "+ws[10]);
    log("--remove / r : "+ws[29]);
    log("--get / g : "+ws[11]);
    log("--accounts / as : "+ws[12]);
    log("--export / e : "+ws[13]);
    log("--import / i : "+ws[14]);
    log("--chanagemethod / cm : "+ws[15]);
    tru?process.exit(0):mainMenu();
}

/* function upRcsf(accounts) {
    let out="";
    for (let index = 0; index < accounts.length; index++) {
        const account = accounts[index];
        out+=account.join("\n");
    }
    encode(fs.writeFileSync("RCS", out, {encoding:"utf-8"}));
} */

function searchAccount(site) {
    let sites = [];
    for (let index = 0; index < acl.length; index++) {
        const ac = acl[index];
        if(ac.split("\n")[0].toLocaleLowerCase(tr).includes(site.toLocaleLowerCase(tr)) && ac.split("\n")[0]!==""){sites.push(ac.split("\n")[0]);}
    }
    return sites;
}

function accountSites() {
    let sites = [];
    for (let index = 0; index < acl.length; index++) {
        const ac = acl[index];
        sites.push(ac.split("\n")[0]);
    }
    return sites;
}

function slpit(input) {
    let result = [];
    let insideQuotes = false;
    let currentElement = '';
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === ',' && !insideQuotes) {
            result.push(currentElement.trim().startsWith('"') || currentElement.trim().startsWith("'") ? currentElement.trim().slice(1, -1) : currentElement.trim());
            currentElement = '';
        } else {
            currentElement += char;
            if (char === '"' || char === "'") {
                insideQuotes = !insideQuotes;
            }
        }
    }
    result.push(currentElement.trim());
    return result;
}

/* function searchRCS(site) {
    let sites = [];
    for (let index = 0; index < rcl.length; index++) {
        const ac = rcl[index];
        sites.push(ac[0]);
    }
    return sites;
} */

function getACdatas(site, tru=false) {
    for (let index = 0; index < acl.length; index++) {
        const ac = acl[index].split("\n");
        if (ac[0]==site) {console.log("\n"+ws[23]+Fore.Reset, ac[1]);console.log(ws[37]+Fore.Reset, ac[2]);tru?process.exit(0):mainMenu();}
    }
}

function getdatas(site, tru=false) {
    let a = searchAccount(site);
    const b = tru?ws[7]:ws[39];
    a.push(b);
    inquirer.prompt([
        {
            type: 'list',
            name: 'datas',
            message: ws[21],
            choices: a
        }
    ]).then(answers => {
        if (answers.datas == b) {
            tru?process.exit(0):mainMenu();
        } else {
            getACdatas(answers.datas, tru);
        }
    })
}

function searchMenu(tru=false) {
    /* inquirer.prompt([
        {
            type: 'list',
            name: 'semenu',
            message: ws[18],
            choices: [
                {
                    "name": ws[19],
                    "value": "ps"
                },
                {
                    "name": ws[20],
                    "value": "rc"
                }
            ]
        },
    ]).then(answers => {
        if (answers.semenu == "ps") {
            inquirer.prompt([{name:"asi",message:ws[22]}]).then(answers => {
                getdatas(answers.asi);
            })
        }
    }) */
    inquirer.prompt([{name:"asi",message:ws[22]}]).then(answers => {
        getdatas(answers.asi, tru);
    })
}

function getRandomCharacter(characterSet) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    return characterSet.charAt(randomIndex);
}

function shuffleString(string) {
    const array = string.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}

function genPass(length) {
    const characters = "abcçdefgğhıijklmnoöprsştuüvyzxwABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZXW1234567890|\"'`!^£#$+&/{[(])}=?*\\~.,;:<>@-_é";
    const lowerCaseLetters = "abcçdefgğhıijklmnoöprsştuüvyzxw";
    const upperCaseLetters = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZXW";
    const numbers = "1234567890";
    const symbols = "|\"'`!^£#$+&/{[(])}=?*\\~.,;:<>@-_é";
    let password = "";
    password += getRandomCharacter(lowerCaseLetters);
    password += getRandomCharacter(upperCaseLetters);
    password += getRandomCharacter(numbers);
    password += getRandomCharacter(symbols);
    for (let i = password.length; i < length; i++) {
        password += getRandomCharacter(characters);
    }
    password = shuffleString(password);
    return password;
}

function readPass(answers, tru=false) {
    inquirer.prompt([{name:"pass",message:ws[37]+Fore.Reset}]).then(answer => {
        if(thPassSecure(answer.pass)>4) {
            acl.push(answers.site+"\n"+answers.nick+"\n"+answer.pass);
            upUsrf();
            console.log(Fore.Green, ws[27]);
            tru?process.exit(0):mainMenu();
        } else {
            inquirer.prompt([{
                type: 'list',
                name: 'emin',
                message: ws[38],
                choices: [
                    {
                        "name": ws[31],
                        "value": true
                    },
                    {
                        "name": ws[32],
                        "value": false
                    },
                    {
                        "name": ws[40],
                        "value": false
                    }
                ]
            }]).then(answe => {
                if(answe.emin) {
                    acl.push(answers.site+"\n"+answers.nick+"\n"+answer.pass);
                    upUsrf();
                    console.log(Fore.Green, ws[27]);
                    tru?process.exit(0):mainMenu();
                } else {readPass(answers);}
            })
        }
    })
}

function saveMenu(tru=false) {
    inquirer.prompt([{name:"site",message:ws[26]+Fore.Reset},{name:"nick",message:ws[23]+Fore.Reset},{type: 'list',name:"kenpass",message:ws[24]+Fore.Reset,choices:[{name:ws[34],value:true},{name:ws[35],value:false}]}]).then(answers => {
        if (answers.kenpass) {
            inquirer.prompt([{type:'number',name:"passlen",message:ws[36]+Fore.Reset,default:33}]).then(answer => {
                let sif=genPass(answer.passlen);
                acl.push(answers.site+"\n"+answers.nick+"\n"+sif);
                console.log(Fore.Yellow+ws[41],Fore.Gray+sif);
                upUsrf();
                console.log(Fore.Green, ws[27]);
                tru?process.exit(0):mainMenu();
            })
        } else {
            readPass(answers, tru);
        }
    })
}

function remMenu(tru=false) {
    inquirer.prompt([
        {
            type: 'list',
            name: 'rem',
            message: ws[21],
            choices: accountSites()
        },
        {
            type: 'list',
            name: 'admin',
            message: ws[30],
            choices: [
                {
                    "name": ws[31],
                    "value": true
                },
                {
                    "name": ws[32],
                    "value": false
                },
                {
                    "name": ws[40],
                    "value": false
                }
            ]
        }
    ]).then(answers => {
        if(answers.admin) {
            for (let index = 0; index < acl.length; index++) {
                const site = acl[index];
                if (site.split("\n")[0] == answers.rem) {
                    acl.splice(index, 1);
                    upUsrf();
                    console.log(Fore.Green, ws[33]);
                    tru?process.exit(0):mainMenu();
                }
            }
        } else {tru?process.exit(0):mainMenu();}
    })
}

function cm(tru=false) {
    inquirer.prompt([
        {
            type: 'list',
            name: 'admin',
            message: ws[30],
            choices: [
                {
                    "name": ws[31],
                    "value": true
                },
                {
                    "name": ws[32],
                    "value": false
                },
                {
                    "name": ws[40],
                    "value": false
                }
            ]
        }]).then(answers => {
        if(answers.admin) {
            setMethod(genMethod());
            console.log(Fore.Green, ws[43]);
            tru?process.exit(0):mainMenu();
        } else {
            tru?process.exit(0):mainMenu();
        }
    })
}

function exportMenu(tru=false) {
    inquirer.prompt([{name:"path",message:ws[42]+Fore.Reset},]).then(answers => {
        fs.writeFileSync(answers.path,encode(acl.join("\n\n"))+"\n"+method.replace("`", "${egikCizgi}").replace("\"", "${ciftTirnak}"), 'utf8');
        console.log(Fore.Green+ws[44].replace("$()", path.basename(answers.path)));
        tru?process.exit(0):mainMenu();
    })
}

function importMenu(tru=false) {
    inquirer.prompt([{name:"path",message:ws[48]+Fore.Reset},{type:'list',name:"so",message:ws[45]+Fore.Reset,choices:[{name:ws[46],value:true},{name:ws[47],value:false}]}]).then(answers => {
        if(answers.path.replace("\\","/").toLocaleLowerCase(tr).endsWith(".csv")){
            let data = fs.readFileSync(answers.path, 'utf-8').trim().split("\n").slice(1);
            for (let index = 0; index < data.length; index++) {
                let dat = slpit(data[index].replace("\r",""));
                data[index]=[dat[0],dat[2],dat[3]].join("\n");
            }
            acl=answers.so?acl.concat(data):data;
            upUsrf();
            console.log(Fore.Green+ws[49].replace("$()", path.basename(answers.path)));
            tru?process.exit(0):mainMenu();
        } else {
            let data = fs.readFileSync(answers.path, 'utf-8').split("\n");
            setMethod(data.pop().replace("\r","").replace("${egikCizgi}", "`").replace("${ciftTirnak}", "\"")); // 
            data=decode(data[0]).split("\n\n");
            for (let index = 0; index < data.length; index++) {
                data[index]=data[index].replace("\r","");
            }
            acl=answers.so?acl.concat(data):data;
            upUsrf();
            console.log(Fore.Green+ws[49].replace("$()", path.basename(answers.path)));
            tru?process.exit(0):mainMenu();
        }
    })
}

function mainMenu() {
    console.log("\n");
    inquirer.prompt([
        {
            type: 'list',
            name: 'menus',
            message: ws[16],
            choices: [
                {
                    "name": ws[0],
                    "value": "h"
                },
                {
                    "name": ws[1],
                    "value":"search"
                },
                {
                    "name": ws[2],
                    "value":"save"
                },
                {
                    "name": ws[28],
                    "value":"rem"
                },
                {
                    "name": ws[3],
                    "value":"accounts"
                },
                {
                    "name": ws[4],
                    "value":"ex"
                },
                {
                    "name": ws[5],
                    "value":"im"
                },
                {
                    "name": ws[6],
                    "value":"cm"
                },
                {
                    "name": ws[7],
                    "value":"e"
                },
            ],
        },
    ]).then(answers => {
        switch (answers.menus) {
            case "h":
                helpmenu();
                break;
            case "search":
                searchMenu();
                break;
            case "save":
                saveMenu();
                break;
            case "accounts":
                // for(let index=0;index<acl.length;index++){console.log(acl[index].split("\n")[0]);}
                getdatas("");
                break;
            case "rem":
                remMenu();
                break;
            case "ex":
                exportMenu();
                break;
            case "im":
                importMenu();
                break;
            case "cm":
                cm();
                break;
            default:
                process.exit(0);
        }
    });
}

// * --------- functions --------- * //



// * --------- main --------- * //

if (argv.length==2) {
    console.log("");
    log(programName + " " + package.version, Fore.Green);
    mainMenu();
} else {
    switch (argv[2].toLocaleLowerCase(tr)) {
        case "--help":
        case "-h":
        case "h":
        case "?":
            helpmenu(true);
            break;
        case "--create":
        case "-c":
        case "c":
            saveMenu(true);
            break;
        case "--remove":
        case "-r":
        case "r":
            remMenu(true);
            break;
        case "--get":
        case "-g":
        case "g":
            searchMenu(true);
            break;
        case "--accounts":
        case "-as":
        case "as":
            getdatas("", true);
            break;
        case "--export":
        case "-e":
        case "e":
            exportMenu(true);
            break;
        case "--import":
        case "-i":
        case "i":
            importMenu(true);
            break;
        case "--chanagemethod":
        case "-cm":
        case "cm":
            cm(true);
            break;
        default:
            helpmenu(true);
            break;
    }
}

// * --------- main --------- * //