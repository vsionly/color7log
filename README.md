### 1、简介
    设置node中console.log的输出文字颜色, 输出日志文件 7的意思是&键盘符
### 2、使用说明
    npm install color7log
```javascript
    const {green} = require('color7log')

    const {black, red, green, yellow, blue, purple, cyan, white,
    gray} = require('color7log') // 支持多个参数 demo如下

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

    theme.red('这个是红色的')
    ...

```
![Image text](http://www.vsionly.com:3000/img/1.png)

    #### 1）定义输出多个颜色
```javascript
    const {custom} = require('color7log')
    custom({cyan:'浅蓝色',red:'组合红', green:'组合绿'}) // 支持多个组合输出
```
![Image text](http://www.vsionly.com:3000/img/2.png)

    #### 2）默认以字符'-'分隔每个参数 每个颜色方法后加F 例如
```javascript
    const {greenF} = require('color7log')
    greenF('参数1', '参数2', '参数3') // 将以多个'-'符号作为分割线输出内容
```
![Image text](http://www.vsionly.com:3000/img/3.png)

    #### 3）自定义格式化字符 每个颜色方法后加Fmt 最后一个参数必须是格式化字符
```javascript
    const {greenFmt} = require('color7log')

    // 将以多个'='符号作为分割线分别输出内容
    greenFmt('参数1', '参数2', '参数3', '=')
```
![Image text](http://www.vsionly.com:3000/img/4.png)

    #### 4）自动选择颜色函数 依次从'red', 'green', 'yellow', 'blue', 'purple'
    , 'cyan','white', 'gray'选取颜色, 分隔符'-'
```javascript
    const {autoC} = require('color7log')
    autoC('参数1', '参数2', '参数3') // 会依次输出 红色，绿色，黄色
```
![Image text](http://www.vsionly.com:3000/img/5.png)

    #### 5）日志文件方法 默认在根目录下的log目录中按日期记录文件
```javascript
    const {printFile} = require('color7log')
    printFile('测试效果') // 会在/log/2020-9-11.txt中记录内容
```
    （个人感觉一般的系统没必要像log4js那样记录复杂的日志，认知有限，还在成长）

    如果命令窗或者bash工具窗（如git bash）中输出文字乱码，
    请在对应工具的选项的子菜单中 修改text设置为cn utf8
    有问题欢迎反馈 liwsh666@126.com

[git地址 https://github.com/vsionly/color7log](https://github.com/vsionly/color7log)

### 1、abstract
    Make some settings only for the output text color of console.log
### 2、instuctment
    npm install color7log
```javascript
    const {green} = require('color7log') // use one fun
    const {black, red, green, yellow, blue, purple, cyan, white,
           gray} = require('color7log')
     // Support multiple parameters

    const theme = require('color7log') // theme.green('this text is green')
    red('red 1', 'red 2', 'red 1')
```
#### 1) Add multi-color settings
```javascript
    const {custom} = require('color7log')
    custom({cyan:'this text color is cyan', red:'this text color is red' ,
        green:'this text color is green'})
```

#### 2) Add the default formatting character '-' to each method followed by F
```javascript
    Const {redF} = require('color7log')    
    redF ('output gray text') // will output content with multiple '-' symbols
    // as split lines
```

#### 3) New You can define formatting characters. Add Fmt after each color method.
```javascript
    Const {redFmt} = require('color7log')

    // will output content with multiple '=' symbols as split lines
    redFmt ('output gray text', '=')
```

#### 4) Automatically select color function Select colors from'red','green','yellow','blue',
'purple','cyan','white', and'gray' in sequence
```javascript
    const {autoC} = require('color7log')
    autoC(1, 2, 3) // will output red, green and yellow in turn
```

#### 5) the log file method logs files by date in the log directory under the root directory
```javascript
    const {printFile} = require('color7log')
    printFile('test effect') // will record the content in /log/2020-9-11.txt
```

    (Personally, I feel that the general system does not need to record
    complex logs like log4js, the knowledge is limited and itis still growing)

    If the input text is garbled in the command window or git bash,
    modify the encoding of the command tool to your own standard encoding.
    If you have any questions, please send a message to liwsh666@126.com

[git https://github.com/vsionly/color7log](https://github.com/vsionly/color7log)
