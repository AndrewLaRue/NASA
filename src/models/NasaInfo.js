export class NasaInfo {
  constructor(data) {
    this.title = data.title
    this.explanation = data.explanation
    this.img = data.url
    this.mediaType = data.media_type
    this.date = data.date
  }
}