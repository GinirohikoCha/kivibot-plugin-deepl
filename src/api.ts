import { axios } from '@kivibot/core'

const request = axios.create({
  baseURL: 'https://www2.deepl.com/jsonrpc',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export async function splitText(text: string) {
  return await request.post('', `{
      "jsonrpc": "2.0",
      "method": "LMT_split_text",
      "params": {
          "texts": [
              "${text}"
          ],
          "commonJobParams": {
              "mode": "translate"
          },
          "lang": {
              "lang_user_selected": "auto"
          }
      }
  }`, {
    params: {
      method: 'LMT_split_text'
    }
  })
}

export async function handleJobs(text: string, sourceLang: string = 'EN', targetLang: string = "ZH") {
  return await request.post('', `{
    "jsonrpc": "2.0",
    "method": "LMT_handle_jobs",
    "params": {
      "jobs": [
        {
          "kind": "default",
          "sentences": [
            {
              "text": "${text}",
              "id": 0,
              "prefix": ""
            }
          ],
          "preferred_num_beams": 1
        }
      ],
      "lang": {
        "preference": {
          "weight": {},
          "default": "default"
        },
        "source_lang_computed": "${sourceLang}",
        "target_lang": "${targetLang}"
      },
      "priority": 1,
      "commonJobParams": {
        "mode": "translate",
        "browserType": 1,
        "formality": null
      },
      "timestamp": ${new Date().getTime()}
    }
  }`, {
    params: {
      method: 'LMT_handle_jobs'
    }
  })
}
