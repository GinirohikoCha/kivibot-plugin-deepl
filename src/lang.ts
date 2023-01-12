export const Lang_Index = [
  ['EN', 'en', '英', '英语', 'English'],
  ['EN-GB', 'en-gb', '英英', '英式英语', 'English-British'],
  ['EN-US', 'en-us', '美英', '美式英语', 'English-American'],
  ['JA', 'ja', '日', '日语', 'Japanese'],
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
