import { KiviPlugin } from '@kivibot/core'
import { Source_Lang_Index, Target_Lang_Index, getLangCodeByIndex } from './lang'
import { handleJobs, splitText } from './api'

const { version } = require('../package.json')
const plugin = new KiviPlugin('DeepL', version)

const config = {
  // 触发翻译词缀
  prefix: '=>'
}

plugin.onMounted(async (bot, admins) => {
  plugin.saveConfig(Object.assign(config, plugin.loadConfig()))

  if (!config.prefix) {
    await bot.sendPrivateMsg(plugin.mainAdmin, '无效的触发词缀')
  }

  let reg = generateReg(config.prefix)

  plugin.onAdminCmd('/deepl', (e, params) => {
    const [cmd, value] = params

    if (cmd === 'prefix' && value) {
      config.prefix = value
      reg = generateReg(config.prefix)
      plugin.saveConfig(config)

      return e.reply('已修改触发词缀', true)
    }

    const cmds = ['/chatgpt prefix <触发词缀>']

    return e.reply(cmds.join('\n'), true)
  })

  plugin.onMessage(async (event, bot) => {
    const { raw_message } = event

    const matchStr = raw_message.trim().match(reg)
    if (matchStr) {
      const message = raw_message.trim().replace(reg, '').trim()

      let sourceLang = getLangCodeByIndex(matchStr[0].substring(0, matchStr[0].indexOf(config.prefix) + 1))
      const targetLang = getLangCodeByIndex(matchStr[0].substring(matchStr[0].indexOf(config.prefix) + config.prefix.length))
      // detect source lang & assign
      if (!sourceLang) {
        sourceLang = await getSourceLang(message)
      }
      // translate
      const result = await translate(message, sourceLang || undefined, targetLang || undefined)

      await event.reply(result)
    }
  })
})

const generateReg = (prefix: string) => {
  const sourceRegIndex = Source_Lang_Index.map(item => item.join('|')).join('|')
  const targetRegIndex = Target_Lang_Index.map(item => item.join('|')).join('|')

  return RegExp(`^(${sourceRegIndex})?${prefix}(${targetRegIndex})?`, 'g')
}

const getSourceLang = async (text: string) => {
  const { result } = (await splitText(text)).data
  return result?.lang?.detected
}

const translate = async (text: string, sourceLang: string | undefined, targetLang: string | undefined) => {
  const { result } = (await handleJobs(text, sourceLang, targetLang)).data
  return result.translations[0].beams[0].sentences[0].text
}

export { plugin }
