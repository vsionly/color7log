const color = {
    black: '\033[40;30m',
    red: '\033[40;31m',
    green: '\033[40;32m',
    yellow: '\033[40;33m',
    blue: '\033[40;34m',
    purple: '\033[40;35m',
    cyan: '\033[40;36m',
    white: '\033[40;37m',
    gray: '\033[40;90m'
};
let keys = Object.keys(color);
const log = {};

// 输出不同颜色的信息
for (let k of keys) {
    log[k] = (...txt) => {
        logFun(txt, k)
    }
    log[k+'Fmt'] = (...txt) => {
        let sign = txt.pop()
        let arr = []
        arr.length = 31
        txt.map((v, i) => {
            console.log(color[k], '\n' + arr.join(sign))
            console.log(color[k], '\n', v);
            console.log(color[k], '\n' + arr.join(sign) + '\n', '\033[40;37m')
        })
    }
    log[k+'F'] = (...txt) => {
        log[k+'Fmt'](...txt, '-')
    }
}

const logFun = (txt, k) => {
    txt.map((v, i) => {
        console.log(color[k], '\n', v);
    })
}

// 支持多个组合输出 custom({cyan:'组合浅蓝色', red:'组合红', green:'组合绿'})
log.custom = (param) => {
    let logTxt = '';
    Object.keys(param).map((v, k) => {
    let tem = ''
        if( k==0 ) {

            logTxt += color[v] + tem + ' '
        }
        logTxt += color[v] + param[v].replace('\n', '') + ' '
    })
    console.log('\n' + logTxt);
}

module.exports = log;
