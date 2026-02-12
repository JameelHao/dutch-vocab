# 🇳🇱 Dutch Vocabulary - 荷兰语记忆曲线

基于间隔重复算法（SM-2）的荷兰语单词记忆应用。

## 功能特点

- 📚 **间隔重复**：根据记忆曲线自动安排复习
- 🔊 **荷兰语发音**：Web Speech API 自动发音
- 📝 **词性标注**：名词标注 het/de
- 📖 **例句支持**：每个单词配例句
- 🔢 **单复数**：名词显示单数/复数形式
- 💾 **本地存储**：数据保存在浏览器

## 快速开始

### 方法1：直接打开
```bash
open index.html
```

### 方法2：本地服务器
```bash
cd ~/.openclaw/workspace/projects/dutch-vocab-app
python3 -m http.server 8080
# 然后访问 http://localhost:8080
```

## 使用说明

### 复习模式
1. 看到荷兰语单词，点击🔊听发音
2. 想一想中文意思
3. 点击"显示答案"
4. 根据记忆程度选择：
   - 😵 忘了 - 1分钟后再复习
   - 😓 困难 - 间隔缩短
   - 😊 记得 - 正常间隔
   - 😎 简单 - 间隔延长

### 添加单词
1. 选择词性（名词需选 de/het）
2. 输入荷兰语单词
3. 名词填写复数形式
4. 填写中文意思
5. 添加例句（可选）

## 间隔重复算法

基于 SM-2 算法：
- 第1次记住 → 1分钟
- 第2次记住 → 10分钟
- 第3次记住 → 1天
- 之后 → 间隔 × 难度因子

## 技术栈

- HTML5 / CSS3 / JavaScript (ES6+)
- Web Speech API (荷兰语发音)
- LocalStorage (数据持久化)

## 文件结构

```
dutch-vocab-app/
├── index.html    # 主页面
├── style.css     # 样式
├── app.js        # 逻辑
└── README.md     # 说明
```

## 预置示例单词

首次打开会加载5个示例单词：
- het huis (huizen) - 房子
- de man (mannen) - 男人
- eten - 吃
- de vrouw (vrouwen) - 女人
- het boek (boeken) - 书
