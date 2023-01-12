# DeepL for KiviBot

[![npm-version](https://img.shields.io/npm/v/kivibot-plugin-deepl?color=006494&label=kivibot-plugin-deepl&style=flat-square)](https://npm.im/kivibot-plugin-deepl)
[![dm](https://shields.io/npm/dm/kivibot-plugin-deepl?color=006494&style=flat-square)](https://npm.im/kivibot-plugin-deepl)

[`KiviBot`](https://beta.kivibot.com) 的 [DeepL](https://www.deepl.com/) 插件，DeepL翻译 - 全世界最准确的翻译。无需注册 DeepL 账号，通过调用 DeepL 的公开接口实现源语言自动识别和翻译功能。

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
🚧 施工中
```

**配置**

编辑 `框架目录/data/plugins/deepl/config.json` 文件。

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
