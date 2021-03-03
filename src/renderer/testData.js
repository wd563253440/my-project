let testData = `
# 开发环境的配置

## 安装python3
\`\`\`

\`\`\`

## 下载相应模块
\`\`\`

\`\`\`

# pyqt界面的开发

## 报错记录
\`\`\`
1.解决 No module named 'PyQt5.QtWebEngineWidgets'
    方法一：安装高版本的pyqt5
    pip install pyqt5==5.10.1 -i https://pypi.douban.com/simple
    方法二：单独安装WebEngine
    pip install PyQtWebEngine -i https://pypi.douban.com/simple
\`\`\`
`

export default testData
