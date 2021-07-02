const {red, redF, green, greenF, greenFmt, printFile, blue, yellow, black, purple, cyan, white, gray, custom, autoC,
    greenC} = require('./index.js');

    black('输出黑色文本', '多参数')
    red('输出红色文本', '多参数', 8)
    green('输出绿色文本')
    yellow('输出黄色文本')
    blue('输出蓝色文本')
    purple('输出紫色/酒红色文本')
    cyan('输出蓝绿色文本')
    white('输出白色文本')
    gray('输出灰色文本')


// let s1 = 'this is red '
// let s2 = '34'
// green(1, 2, 3, 4 )
// // yellow(11, 22, 23, 44 )

custom({cyan:'浅蓝色',red:'组合红', green:'组合绿'})
    greenF('参数1', '参数2', '参数3') // 将以多个'-'符号作为分割线输出内容

    greenFmt('参数1', '参数2', '参数3', '=')
    autoC('参数1', '参数2', '参数3')

// function aa (){
//     console.log(11)
// }
// autoC([2, 3, 4,11], aa, {a: 22, fil: { a: 2235}},54444)
// // printFile('测试效果测试试效果测试效果测')
// redF(1, 2, 3, 4 )

// greenC([2, 3, 4,11], aa, {a: 22, fil: { a: 2235}},54444)
// greenF('this text is green', 11, 'params')
// greenF({
//     f: 1,
//     fa:71
// }, '+')
// if (a.a) console.log(222)
