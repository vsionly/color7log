### 1、简介
    设置node中console.log的输出文字颜色
### 2、使用说明
    npm install color7log
    const {green} = require('color7log')
    const {black, red, green, yellow, blue, purple, cyan, white, gray} = require('color7log') // 支持多个参数 demo如下
    const theme = require('color7log') // theme.green('这里输入绿色文本')
    black('输出黑色文本', '多参数')
    red('输出红色文本', '多参数', 8)
    green('输出绿色文本')
    yellow('输出黄色文本')
    blue('输出蓝色文本')
    purple('输出紫色/酒红色文本')
    cyan('输出蓝绿色文本')
    white('输出白色文本')
    gray('输出灰色文本')

    #### 1）新增 可以定义输出多个颜色
    const {custom} = require('color7log')
    const theme = require('color7log') // theme.custom({cyan:'浅蓝色', red:'组合红', green:'组合绿'})
    custom({cyan:'组合浅蓝色', red:'组合红', green:'组合绿'}) 支持多个组合输出

    #### 2）新增可以定义格式化字符 每个颜色方法后加Fmt 例如
    const {redFmt} = require('color7log')
    redFmt('输出灰色文本', '-')  将以多个‘-’符号作为分割线输出内容

    #### 3）新增默认格式化字符'-' 每个颜色方法后加F 例如
    const {redF} = require('color7log')
    redF('输出灰色文本')  将以多个‘-’符号作为分割线输出内容

    #### 4）优化格式化字符的样式
    redFmt('参数1', '参数2', '-')  将以多个‘-’符号作为分割线分别输出内容，看上去更容易区别

    如果命令窗或者bash工具窗（如git bash）中输出文字乱码，
    请在对应工具的选项的子菜单中 修改text设置为cn utf8
    有问题欢迎反馈 liwsh666@126.com

    git地址 https://github.com/vsionly/ootb/tree/master/color7log

### 1、abstract
    Make some settings only for the output text color of console.log
### 2、instuctment
    npm install color7log
    const {green} = require('color7log') // use one fun
    const {black, red, green, yellow, blue, purple, cyan, white, gray} = require('color7log') // Support multiple parameters
    const theme = require('color7log') // theme.green('this text is green')
    red('red 1', 'red 2', 'red 1')

    #### 1) Add multi-color settings
    const {custom} = require('color7log')
    const theme = require('color7log') // theme.custom({cyan:'this text'color is cyan', red:'this text'color is red', green:'this text'color is green'})

    #### 2) New You can define formatting characters. Add Fmt after each color method. for example
    Const {redFmt} = require('color7log')
    redFmt ('output gray text', '-') will output content with multiple '-' symbols as split lines

    #### 3) Add the default formatting character '-' to each method followed by F
    Const {redF} = require('color7log')    
    redF ('output gray text') will output content with multiple ‘-’ symbols as split lines

    #### 4) Optimize the style of formatting characters
    redFmt('parameter 1', 'parameter 2', '-') will output parameter 1 and parameter 2 with multiple ‘-’ symbols as split lines, which seems to be easier to distinguish

    If the input text is garbled in the command window or git bash,
    modify the encoding of the command tool to your own standard encoding.
    If you have any questions, please send a message to liwsh666@126.com

    git https://github.com/vsionly/ootb/tree/master/color7log
