import { handleJobs, splitText } from './api'

splitText('你好，世界！').then(res => {
  console.log(res.data)
}).catch(err => {
  console.log(err)
})

handleJobs('Meow Meow Meow').then(res => {
  console.log(JSON.stringify(res.data))
}).catch(err => {
  console.log(err)
})
