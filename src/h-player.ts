import { MediaInfo } from "../types/mp4box";
import { MediaProcessor, Player } from "./media-processor";
import { Viewport } from "./viewport";

export class HPlayer implements Player {
  processor: MediaProcessor;
  viewport: Viewport;
  options: Options;

  mediaInfo: MediaInfo;
  videoTrackId: number;
  audioTrackId: number;

  constructor(anchor: HTMLElement, options?: Options) {
    this.viewport = new Viewport(anchor);
    this.processor = new MediaProcessor(this);
    this.options = options || DEFAULT_OPTIONS;
    console.log("HPlayer constructor");
  }

  async load(src: string | File) {
    src instanceof File
      ? await this.processor.loadFromFile(src as File)
      : await this.processor.loadFromUrl(src as string);
    if (this.options.autoplay) this.play();
  }

  play() {
    console.log("HPlayer play");
  }

  addFrame(frame: VideoFrame): void {
    throw new Error("Method not implemented.");
  }

  setInfo(mediaInfo: MediaInfo): void {
    this.mediaInfo = mediaInfo;
    this.videoTrackId = mediaInfo.videoTracks?.[0]?.id;
    this.audioTrackId = mediaInfo.audioTracks?.[0]?.id;
  }
}

export interface Options {
  autoplay?: boolean;
  loop?: boolean;
}

const DEFAULT_OPTIONS: Options = {
  autoplay: false,
  loop: false,
};
