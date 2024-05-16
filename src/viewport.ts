export class Viewport {
  private _viewport: HTMLCanvasElement;
  private _context: CanvasRenderingContext2D;
  constructor(
    anchor: HTMLElement,
    width?: number | string,
    height?: number | string
  ) {
    this._viewport = document.createElement("canvas");
    this._viewport.style.width = `${width}%` || "100%";
    this._viewport.style.height = `${height}%` || "100%";
    anchor.appendChild(this._viewport);
    this._context = this._viewport.getContext("2d");
    console.debug("Viewport constructor");
  }
}
