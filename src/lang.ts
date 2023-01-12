export const Lang_Index = [
  ['DE', 'de', '德', '德语', 'German'],
  ['EN', 'en', '英', '英语', 'English'],
  ['EN-GB', 'en-gb', '英英', '英式英语', 'English-British'],
  ['EN-US', 'en-us', '美英', '美式英语', 'English-American'],
  ['ES', 'es', '西', '西班牙语', 'Spanish'],
  ['FR', 'fr', '法', '法语', 'French'],
  ['JA', 'ja', '日', '日语', 'Japanese'],
  ['RU', 'ru', '俄', '俄语', 'Russian'],
  ['ZH', 'zh', '中', '中文', 'Chinese'],
]

export const getLangCodeByIndex = (index: string) => {
  let result = null
  Lang_Index.find(lang => {
    if (lang.find(item => item === index)) {
      result = lang[0]
    }
  })
  return result
}
