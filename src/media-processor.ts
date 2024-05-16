import { createFile, ISOFile } from "mp4box";
import { MediaInfo, MediaArrayBuffer, Sample } from "mp4box";

export class MediaProcessor {
  private mp4boxfile: ISOFile = createFile();
  private videoDecoder: VideoDecoder;

  constructor(frameContainer: Player) {
    this.videoDecoder = new VideoDecoder({
      output: frameContainer.addFrame,
      error: (e) => {
        console.error(e.message);
      },
    });
    this.mp4boxfile.onReady = frameContainer.setInfo;
    this.mp4boxfile.onSamples = this.onSamples.bind(this);
    console.log("Codec constructor");
  }
  async loadFromFile(file: File) {
    const buffer = (await file.arrayBuffer()) as MediaArrayBuffer;
    buffer.fileStart = 0;
    this.mp4boxfile.appendBuffer(buffer);
  }
  async loadFromUrl(url: string) {
    const response = await fetch(url);
    const buffer = (await response.arrayBuffer()) as MediaArrayBuffer;
    buffer.fileStart = 0;
    this.mp4boxfile.appendBuffer(buffer);
  }
  private onSamples(trackId: number, ref: {}, samples: Sample[]) {
    for (const sample of samples) {
      const type = sample.is_sync ? "key" : "delta";
      const chunk = new EncodedVideoChunk({
        type,
        timestamp: sample.cts,
        duration: sample.duration,
        data: sample.data,
      });
      this.videoDecoder.decode(chunk);
    }
  }
}

export interface Player {
  addFrame(frame: VideoFrame): void;
  setInfo(info: MediaInfo): void;
}
