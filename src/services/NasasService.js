import { AppState } from "../AppState.js"
import { NasaInfo } from "../models/NasaInfo.js";
import { nasaApi } from "./AxiosService.js"



class NasasService {

  async getNasaInfo() {
    let res = await nasaApi.get('')

    AppState.nasaInfo = new NasaInfo(res.data)
    console.log(AppState.nasaInfo);
  }
  
}

export const nasasService = new NasasService()