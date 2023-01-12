import { handleJobs, splitText } from './api'

const getSourceLang = async (text: string) => {
  const { result } = (await splitText(text)).data
  return result?.lang?.detected
}
getSourceLang('Hello world!').then(res => console.log(res))

const translate = async (text: string, sourceLang: string | undefined, targetLang: string | undefined) => {
  const { result } = (await handleJobs(text, undefined, undefined)).data
  return result.translations[0].beams[0].sentences[0].text
}
translate('Meow Meow Meow', undefined, undefined).then(res => console.log(res))
