# DeepL for KiviBot

[![npm-version](https://img.shields.io/npm/v/kivibot-plugin-deepl?color=006494&label=kivibot-plugin-deepl&style=flat-square)](https://npm.im/kivibot-plugin-deepl)
[![dm](https://shields.io/npm/dm/kivibot-plugin-deepl?color=006494&style=flat-square)](https://npm.im/kivibot-plugin-deepl)

[`KiviBot`](https://beta.kivibot.com) 的 [DeepL](https://www.deepl.com/) 插件，DeepL 翻译 - 全世界最准确的翻译。

本插件通过抓取调用 DeepL 的公开接口实现源语言自动识别和翻译功能，无需注册复杂的 DeepL 账号。

**特征**

+ 支持自动识别多达源27种语言并互通翻译
    ```
    中文、英语、日语、德语、爱沙尼亚语、保加利亚语、波兰语、丹麦语、俄语、芬兰语、法语 、荷兰语、捷克语、拉脱维亚语、立陶宛语、罗马尼亚语、葡萄牙语、瑞典语、斯洛伐克语、斯洛文尼亚语、土耳其语、乌克兰语、西班牙语、希腊语、匈牙利语、意大利语和印尼语。
    ```
+ 🚧[计划中的功能] 非自动检测语言目前仅支持 ```德、英、日、中、法、西、俄```，后续更新中将补充完善
+ 在神经网络和最前沿的人工智能创新的支持下，DeepL 的技术甚至可以捕捉到最细微的差别，并在翻译中体现。
+ 丰富的语言关键词匹配，支持语言代码 ```ZH/zh```、中文简称 ```中```、中文全称 ```美式英语```、英文全称 ```Japanese```
+ 轻量级且高质量的代码
+ 🚧[计划中的功能] 指定翻译的 口语化<=>书面化 等级
+ 🚧[计划中的功能] 默认翻译目标语言设置
+ 🚧 ......

**安装**

```shell
/plugin add deepl
```

**启用**

```shell
/plugin on deepl
```

**使用**

```
# 自动检测源语言并翻译为中文
=> balabalbablablablbala

# 指定源语言翻译为中文
英=> <balabalbablablablbala>
JA=> <balabalbablablablbala>
Japanese=> <balabalbablablablbala>

# 指定源语言翻译为目标语言
EN=>ZH <balabalbablablablbala>
中=>English-British <balabalbablablablbala>
Japanese=>中文 <balabalbablablablbala>
```

**配置**

1. 使用指令修改词缀（无需重载插件）
```
/deepl prefix <词缀>
```

2. 或者编辑 `框架目录/data/plugins/deepl/config.json` 文件。

```jsonc
{
  // 触发翻译词缀
  prefix: '=>'
}
```

然后使用以下命令重载插件生效。

```shell
/plugin reload deepl
```
