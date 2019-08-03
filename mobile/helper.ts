import Constant from 'expo-constants'


export const backendApi = (params: string) => {
  const ip = Constant.manifest.debuggerHost.split(':').shift().concat(':8000')
  const uri = `http://${ip}/api` + params
  return uri
}