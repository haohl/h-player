export declare class MP4BoxStream {
  constructor(arrayBuffer: any);
  buffer: ArrayBuffer;
  dataview: DataView;
  position: number;
  /*************************************************************************
      Common API between MultiBufferStream and SimpleStream
     *************************************************************************/
  getPosition(): number;
  getEndPosition(): number;
  getLength(): number;
  seek(pos: any): boolean;
  isEos(): boolean;
  /*************************************************************************
      Read methods, simimar to DataStream but simpler
     *************************************************************************/
  readAnyInt(size: any, signed: any): number;
  readUint8(): number;
  readUint16(): number;
  readUint24(): number;
  readUint32(): number;
  readUint64(): number;
  readString(length: any): string;
  readCString(): any;
  readInt8(): number;
  readInt16(): number;
  readInt32(): number;
  readInt64(): number;
  readUint8Array(length: any): Uint8Array;
  readInt16Array(length: any): Int16Array;
  readUint16Array(length: any): Int16Array;
  readUint32Array(length: any): Uint32Array;
  readInt32Array(length: any): Int32Array;
}
/**
  DataStream reads scalars, arrays and structs of data from an ArrayBuffer.
  It's like a file-like DataView on steroids.

  @param {ArrayBuffer} arrayBuffer ArrayBuffer to read from.
  @param {Number} byteOffset Offset from arrayBuffer beginning for the DataStream.
  @param {Boolean} endianness DataStream.BIG_ENDIAN or DataStream.LITTLE_ENDIAN (the default).
  */
export declare class DataStream {
  constructor(
    arrayBuffer: ArrayBuffer,
    byteOffset?: number,
    endianness?: boolean
  );
  BIG_ENDIAN: boolean;
  LITTLE_ENDIAN: boolean;
  endianness: boolean;
  _byteOffset: any;
  buffer: ArrayBuffer;
  position: number;

  set dataView(value: any);
  get dataView(): any;
  /**
      Copies byteLength bytes from the src buffer at srcOffset to the
      dst buffer at dstOffset.
    
      @param {Object} dst Destination ArrayBuffer to write to.
      @param {number} dstOffset Offset to the destination ArrayBuffer.
      @param {Object} src Source ArrayBuffer to read from.
      @param {number} srcOffset Offset to the source ArrayBuffer.
      @param {number} byteLength Number of bytes to copy.
     */
  memcpy(
    dst: any,
    dstOffset: number,
    src: any,
    srcOffset: number,
    byteLength: number
  ): void;
  /**
      Converts array to native endianness in-place.
    
      @param {Object} array Typed array to convert.
      @param {boolean} arrayIsLittleEndian True if the data in the array is
                                           little-endian. Set false for big-endian.
      @return {Object} The converted typed array.
     */
  arrayToNative(array: any, arrayIsLittleEndian: boolean): any;
  /**
      Converts native endianness array to desired endianness in-place.
    
      @param {Object} array Typed array to convert.
      @param {boolean} littleEndian True if the converted array should be
                                    little-endian. Set false for big-endian.
      @return {Object} The converted typed array.
     */
  nativeToEndian(array: any, littleEndian: boolean): any;
  /**
      Flips typed array endianness in-place.
    
      @param {Object} array Typed array to flip.
      @return {Object} The converted typed array.
     */
  flipArrayEndianness(array: any): any;

  getPosition(): number;
  /**
      Internal function to resize the DataStream buffer when required.
      @param {number} extra Number of bytes to add to the buffer allocation.
      @return {null}
      */
  _realloc(extra: number): null;
  _byteLength: number;
  /**
      Internal function to trim the DataStream buffer when required.
      Used for stripping out the extra bytes from the backing buffer when
      the virtual byteLength is smaller than the buffer byteLength (happens after
      growing the buffer with writes and not filling the extra space completely).
    
      @return {null}
      */
  _trimAlloc(): null;
  get byteLength(): number;
  set byteOffset(value: any);
  get byteOffset(): any;
  /**
      Sets the DataStream read/write position to given position.
      Clamps between 0 and DataStream length.
    
      @param {number} pos Position to seek to.
      @return {null}
      */
  seek(pos: number): null;
  /**
      Returns true if the DataStream seek pointer is at the end of buffer and
      there's no more data to read.
    
      @return {boolean} True if the seek pointer is at the end of the buffer.
      */
  isEof(): boolean;
  /**
      Maps a Uint8Array into the DataStream buffer.
    
      Nice for quickly reading in data.
    
      @param {number} length Number of elements to map.
      @param {?boolean} e Endianness of the data to read.
      @return {Object} Uint8Array to the DataStream backing buffer.
      */
  mapUint8Array(length: number): any;
  /**
      Reads an Int32Array of desired length and endianness from the DataStream.
    
      @param {number} length Number of elements to map.
      @param {?boolean} e Endianness of the data to read.
      @return {Object} The read Int32Array.
     */
  readInt32Array(length: number, e: boolean | null): any;
  /**
      Reads an Int16Array of desired length and endianness from the DataStream.
    
      @param {number} length Number of elements to map.
      @param {?boolean} e Endianness of the data to read.
      @return {Object} The read Int16Array.
     */
  readInt16Array(length: number, e: boolean | null): any;
  /**
      Reads an Int8Array of desired length from the DataStream.
    
      @param {number} length Number of elements to map.
      @param {?boolean} e Endianness of the data to read.
      @return {Object} The read Int8Array.
     */
  readInt8Array(length: number): any;
  /**
      Reads a Uint32Array of desired length and endianness from the DataStream.
    
      @param {number} length Number of elements to map.
      @param {?boolean} e Endianness of the data to read.
      @return {Object} The read Uint32Array.
     */
  readUint32Array(length: number, e: boolean | null): any;
  /**
      Reads a Uint16Array of desired length and endianness from the DataStream.
    
      @param {number} length Number of elements to map.
      @param {?boolean} e Endianness of the data to read.
      @return {Object} The read Uint16Array.
     */
  readUint16Array(length: number, e: boolean | null): any;
  /**
      Reads a Uint8Array of desired length from the DataStream.
    
      @param {number} length Number of elements to map.
      @param {?boolean} e Endianness of the data to read.
      @return {Object} The read Uint8Array.
     */
  readUint8Array(length: number): any;
  /**
      Reads a Float64Array of desired length and endianness from the DataStream.
    
      @param {number} length Number of elements to map.
      @param {?boolean} e Endianness of the data to read.
      @return {Object} The read Float64Array.
     */
  readFloat64Array(length: number, e: boolean | null): any;
  /**
      Reads a Float32Array of desired length and endianness from the DataStream.
    
      @param {number} length Number of elements to map.
      @param {?boolean} e Endianness of the data to read.
      @return {Object} The read Float32Array.
     */
  readFloat32Array(length: number, e: boolean | null): any;
  /**
      Reads a 32-bit int from the DataStream with the desired endianness.
    
      @param {?boolean} e Endianness of the number.
      @return {number} The read number.
     */
  readInt32(e: boolean | null): number;
  /**
      Reads a 16-bit int from the DataStream with the desired endianness.
    
      @param {?boolean} e Endianness of the number.
      @return {number} The read number.
     */
  readInt16(e: boolean | null): number;
  /**
      Reads an 8-bit int from the DataStream.
    
      @return {number} The read number.
     */
  readInt8(): number;
  /**
      Reads a 32-bit unsigned int from the DataStream with the desired endianness.
    
      @param {?boolean} e Endianness of the number.
      @return {number} The read number.
     */
  readUint32(e: boolean | null): number;
  /**
      Reads a 16-bit unsigned int from the DataStream with the desired endianness.
    
      @param {?boolean} e Endianness of the number.
      @return {number} The read number.
     */
  readUint16(e: boolean | null): number;
  /**
      Reads an 8-bit unsigned int from the DataStream.
    
      @return {number} The read number.
     */
  readUint8(): number;
  /**
      Reads a 32-bit float from the DataStream with the desired endianness.
    
      @param {?boolean} e Endianness of the number.
      @return {number} The read number.
     */
  readFloat32(e: boolean | null): number;
  /**
      Reads a 64-bit float from the DataStream with the desired endianness.
    
      @param {?boolean} e Endianness of the number.
      @return {number} The read number.
     */
  readFloat64(e: boolean | null): number;
  /**
      Seek position where DataStream#readStruct ran into a problem.
      Useful for debugging struct parsing.
    
      @type {number}
     */
  failurePosition: number;
  /**
      Read a string of desired length and encoding from the DataStream.
    
      @param {number} length The length of the string to read in bytes.
      @param {?string} encoding The encoding of the string data in the DataStream.
                                Defaults to ASCII.
      @return {string} The read string.
     */
  readString(length: number, encoding: string | null): string;
  /**
      Read null-terminated string of desired length from the DataStream. Truncates
      the returned string so that the null byte is not a part of it.
    
      @param {?number} length The length of the string to read.
      @return {string} The read string.
     */
  readCString(length: number | null): string;
  readInt64(): number;
  readUint64(): number;
  readUint24(): number;
  /**
      Saves the DataStream contents to the given filename.
      Uses Chrome's anchor download property to initiate download.
     
      @param {string} filename Filename to save as.
      @return {null}
      */
  save(filename: string): null;
  /**
      Whether to extend DataStream buffer when trying to write beyond its size.
      If set, the buffer is reallocated to twice its current size until the
      requested write fits the buffer.
      @type {boolean}
      */
  _dynamicSize: boolean;
  set dynamicSize(value: boolean);
  get dynamicSize(): boolean;
  /**
      Internal function to trim the DataStream buffer when required.
      Used for stripping out the first bytes when not needed anymore.
    
      @return {null}
      */
  shift(offset: any): null;
  /**
      Writes an Int32Array of specified endianness to the DataStream.
    
      @param {Object} arr The array to write.
      @param {?boolean} e Endianness of the data to write.
     */
  writeInt32Array(arr: any, e: boolean | null): void;
  /**
      Writes an Int16Array of specified endianness to the DataStream.
    
      @param {Object} arr The array to write.
      @param {?boolean} e Endianness of the data to write.
     */
  writeInt16Array(arr: any, e: boolean | null): void;
  /**
      Writes an Int8Array to the DataStream.
    
      @param {Object} arr The array to write.
     */
  writeInt8Array(arr: any): void;
  /**
      Writes a Uint32Array of specified endianness to the DataStream.
    
      @param {Object} arr The array to write.
      @param {?boolean} e Endianness of the data to write.
     */
  writeUint32Array(arr: any, e: boolean | null): void;
  /**
      Writes a Uint16Array of specified endianness to the DataStream.
    
      @param {Object} arr The array to write.
      @param {?boolean} e Endianness of the data to write.
     */
  writeUint16Array(arr: any, e: boolean | null): void;
  /**
      Writes a Uint8Array to the DataStream.
    
      @param {Object} arr The array to write.
     */
  writeUint8Array(arr: any): void;
  /**
      Writes a Float64Array of specified endianness to the DataStream.
    
      @param {Object} arr The array to write.
      @param {?boolean} e Endianness of the data to write.
     */
  writeFloat64Array(arr: any, e: boolean | null): void;
  /**
      Writes a Float32Array of specified endianness to the DataStream.
    
      @param {Object} arr The array to write.
      @param {?boolean} e Endianness of the data to write.
     */
  writeFloat32Array(arr: any, e: boolean | null): void;
  /**
      Writes a 32-bit int to the DataStream with the desired endianness.
    
      @param {number} v Number to write.
      @param {?boolean} e Endianness of the number.
     */
  writeInt32(v: number, e: boolean | null): void;
  /**
      Writes a 16-bit int to the DataStream with the desired endianness.
    
      @param {number} v Number to write.
      @param {?boolean} e Endianness of the number.
     */
  writeInt16(v: number, e: boolean | null): void;
  /**
      Writes an 8-bit int to the DataStream.
    
      @param {number} v Number to write.
     */
  writeInt8(v: number): void;
  /**
      Writes a 32-bit unsigned int to the DataStream with the desired endianness.
    
      @param {number} v Number to write.
      @param {?boolean} e Endianness of the number.
     */
  writeUint32(v: number, e: boolean | null): void;
  /**
      Writes a 16-bit unsigned int to the DataStream with the desired endianness.
    
      @param {number} v Number to write.
      @param {?boolean} e Endianness of the number.
     */
  writeUint16(v: number, e: boolean | null): void;
  /**
      Writes an 8-bit unsigned  int to the DataStream.
    
      @param {number} v Number to write.
     */
  writeUint8(v: number): void;
  /**
      Writes a 32-bit float to the DataStream with the desired endianness.
    
      @param {number} v Number to write.
      @param {?boolean} e Endianness of the number.
     */
  writeFloat32(v: number, e: boolean | null): void;
  /**
      Writes a 64-bit float to the DataStream with the desired endianness.
    
      @param {number} v Number to write.
      @param {?boolean} e Endianness of the number.
     */
  writeFloat64(v: number, e: boolean | null): void;
  /**
      Write a UCS-2 string of desired endianness to the DataStream. The
      lengthOverride argument lets you define the number of characters to write.
      If the string is shorter than lengthOverride, the extra space is padded with
      zeroes.
    
      @param {string} str The string to write.
      @param {?boolean} endianness The endianness to use for the written string data.
      @param {?number} lengthOverride The number of characters to write.
     */
  writeUCS2String(
    str: string,
    endianness: boolean | null,
    lengthOverride: number | null
  ): void;
  /**
      Writes a string of desired length and encoding to the DataStream.
    
      @param {string} s The string to write.
      @param {?string} encoding The encoding for the written string data.
                                Defaults to ASCII.
      @param {?number} length The number of characters to write.
     */
  writeString(s: string, encoding: string | null, length: number | null): void;
  /**
      Writes a null-terminated string to DataStream and zero-pads it to length
      bytes. If length is not given, writes the string followed by a zero.
      If string is longer than length, the written part of the string does not have
      a trailing zero.
    
      @param {string} s The string to write.
      @param {?number} length The number of characters to write.
     */
  writeCString(s: string, length: number | null): void;
  /**
      Writes a struct to the DataStream. Takes a structDefinition that gives the
      types and a struct object that gives the values. Refer to readStruct for the
      structure of structDefinition.
    
      @param {Object} structDefinition Type definition of the struct.
      @param {Object} struct The struct data object.
      */
  writeStruct(structDefinition: any, struct: any): void;
  /**
      Writes object v of type t to the DataStream.
    
      @param {Object} t Type of data to write.
      @param {Object} v Value of data to write.
      @param {Object} struct Struct to pass to write callback functions.
      */
  writeType(t: any, v: any, struct: any): any;
  writeUint64(v: any): void;
  writeUint24(v: any): void;
  adjustUint32(position: any, value: any): void;
  /**
      Maps an Int32Array into the DataStream buffer, swizzling it to native
      endianness in-place. The current offset from the start of the buffer needs to
      be a multiple of element size, just like with typed array views.
    
      Nice for quickly reading in data. Warning: potentially modifies the buffer
      contents.
    
      @param {number} length Number of elements to map.
      @param {?boolean} e Endianness of the data to read.
      @return {Object} Int32Array to the DataStream backing buffer.
      */
  mapInt32Array(length: number, e: boolean | null): any;
  /**
      Maps an Int16Array into the DataStream buffer, swizzling it to native
      endianness in-place. The current offset from the start of the buffer needs to
      be a multiple of element size, just like with typed array views.
    
      Nice for quickly reading in data. Warning: potentially modifies the buffer
      contents.
    
      @param {number} length Number of elements to map.
      @param {?boolean} e Endianness of the data to read.
      @return {Object} Int16Array to the DataStream backing buffer.
      */
  mapInt16Array(length: number, e: boolean | null): any;
  /**
      Maps an Int8Array into the DataStream buffer.
    
      Nice for quickly reading in data.
    
      @param {number} length Number of elements to map.
      @param {?boolean} e Endianness of the data to read.
      @return {Object} Int8Array to the DataStream backing buffer.
      */
  mapInt8Array(length: number): any;
  /**
      Maps a Uint32Array into the DataStream buffer, swizzling it to native
      endianness in-place. The current offset from the start of the buffer needs to
      be a multiple of element size, just like with typed array views.
    
      Nice for quickly reading in data. Warning: potentially modifies the buffer
      contents.
    
      @param {number} length Number of elements to map.
      @param {?boolean} e Endianness of the data to read.
      @return {Object} Uint32Array to the DataStream backing buffer.
      */
  mapUint32Array(length: number, e: boolean | null): any;
  /**
      Maps a Uint16Array into the DataStream buffer, swizzling it to native
      endianness in-place. The current offset from the start of the buffer needs to
      be a multiple of element size, just like with typed array views.
    
      Nice for quickly reading in data. Warning: potentially modifies the buffer
      contents.
    
      @param {number} length Number of elements to map.
      @param {?boolean} e Endianness of the data to read.
      @return {Object} Uint16Array to the DataStream backing buffer.
      */
  mapUint16Array(length: number, e: boolean | null): any;
  /**
      Maps a Float64Array into the DataStream buffer, swizzling it to native
      endianness in-place. The current offset from the start of the buffer needs to
      be a multiple of element size, just like with typed array views.
    
      Nice for quickly reading in data. Warning: potentially modifies the buffer
      contents.
    
      @param {number} length Number of elements to map.
      @param {?boolean} e Endianness of the data to read.
      @return {Object} Float64Array to the DataStream backing buffer.
      */
  mapFloat64Array(length: number, e: boolean | null): any;
  /**
      Maps a Float32Array into the DataStream buffer, swizzling it to native
      endianness in-place. The current offset from the start of the buffer needs to
      be a multiple of element size, just like with typed array views.
    
      Nice for quickly reading in data. Warning: potentially modifies the buffer
      contents.
    
      @param {number} length Number of elements to map.
      @param {?boolean} e Endianness of the data to read.
      @return {Object} Float32Array to the DataStream backing buffer.
      */
  mapFloat32Array(length: number, e: boolean | null): any;
}
/**
 * MultiBufferStream is a class that acts as a SimpleStream for parsing
 * It holds several, possibly non-contiguous ArrayBuffer objects, each with a fileStart property
 * containing the offset for the buffer data in an original/virtual file
 *
 * It inherits also from DataStream for all read/write/alloc operations
 */
/**
 * Constructor
 */
export declare class MultiBufferStream {
  constructor(buffer: any);
  buffers: any[];
  bufferIndex: number;
  /************************************************************************************
      Methods for the managnement of the buffers (insertion, removal, concatenation, ...)
     ***********************************************************************************/
  initialized(): boolean;
  buffer: any;
  /**
   * Reduces the size of a given buffer, but taking the part between offset and offset+newlength
   * @param  {ArrayBuffer} buffer
   * @param  {Number}      offset    the start of new buffer
   * @param  {Number}      newLength the length of the new buffer
   * @return {ArrayBuffer}           the new buffer
   */
  reduceBuffer(
    buffer: ArrayBuffer,
    offset: number,
    newLength: number
  ): ArrayBuffer;
  /**
   * Inserts the new buffer in the sorted list of buffers,
   *  making sure, it is not overlapping with existing ones (possibly reducing its size).
   *  if the new buffer overrides/replaces the 0-th buffer (for instance because it is bigger),
   *  updates the DataStream buffer for parsing
   */
  insertBuffer(ab: any): void;
  /**
   * Displays the status of the buffers (number and used bytes)
   * @param  {Object} info callback method for display
   */
  logBufferLevel(info: any): void;
  cleanBuffers(): void;
  mergeNextBuffer(): boolean;
  /*************************************************************************
      Seek-related functions
     *************************************************************************/
  /**
   * Finds the buffer that holds the given file position
   * @param  {Boolean} fromStart    indicates if the search should start from the current buffer (false)
   *                                or from the first buffer (true)
   * @param  {Number}  filePosition position in the file to seek to
   * @param  {Boolean} markAsUsed   indicates if the bytes in between the current position and the seek position
   *                                should be marked as used for garbage collection
   * @return {Number}               the index of the buffer holding the seeked file position, -1 if not found.
   */
  findPosition(
    fromStart: boolean,
    filePosition: number,
    markAsUsed: boolean
  ): number;
  /**
   * Finds the largest file position contained in a buffer or in the next buffers if they are contiguous (no gap)
   * starting from the given buffer index or from the current buffer if the index is not given
   *
   * @param  {Number} inputindex Index of the buffer to start from
   * @return {Number}            The largest file position found in the buffers
   */
  findEndContiguousBuf(inputindex: number): number;
  /**
   * Returns the largest file position contained in the buffers, larger than the given position
   * @param  {Number} pos the file position to start from
   * @return {Number}     the largest position in the current buffer or in the buffer and the next contiguous
   *                      buffer that holds the given position
   */
  getEndFilePositionAfter(pos: number): number;
  /*************************************************************************
      Garbage collection related functions
     *************************************************************************/
  /**
   * Marks a given number of bytes as used in the current buffer for garbage collection
   * @param {Number} nbBytes
   */
  addUsedBytes(nbBytes: number): void;
  /**
   * Marks the entire current buffer as used, ready for garbage collection
   */
  setAllUsedBytes(): void;
  /*************************************************************************
      Common API between MultiBufferStream and SimpleStream
     *************************************************************************/
  /**
   * Tries to seek to a given file position
   * if possible, repositions the parsing from there and returns true
   * if not possible, does not change anything and returns false
   * @param  {Number}  filePosition position in the file to seek to
   * @param  {Boolean} fromStart    indicates if the search should start from the current buffer (false)
   *                                or from the first buffer (true)
   * @param  {Boolean} markAsUsed   indicates if the bytes in between the current position and the seek position
   *                                should be marked as used for garbage collection
   * @return {Boolean}              true if the seek succeeded, false otherwise
   */
  seek(filePosition: number, fromStart: boolean, markAsUsed: boolean): boolean;
  position: number;
  /**
   * Returns the current position in the file
   * @return {Number} the position in the file
   */
  getPosition(): number;
  /**
   * Returns the length of the current buffer
   * @return {Number} the length of the current buffer
   */
  getLength(): number;
  getEndPosition(): any;
}
export declare class SingleItemTypeReferenceBox {
  constructor(type: any, size: any, hdr_size: any, start: any);
  hdr_size: any;
  start: any;
}
export declare class SingleItemTypeReferenceBoxLarge {
  constructor(type: any, size: any, hdr_size: any, start: any);
  hdr_size: any;
  start: any;
}
export declare class TrackReferenceTypeBox {
  constructor(type: any, size: any, hdr_size: any, start: any);
  hdr_size: any;
  start: any;
}
export declare class ISOFile {
  constructor(stream: any);
  stream: any;
  boxes: any[];
  mdats: any[];
  moofs: any[];
  isProgressive: boolean;
  moovStartFound: boolean;
  onMoovStart: any;
  moovStartSent: boolean;
  onReady: any;
  readySent: boolean;
  onSegment: any;
  onSamples: any;
  onError: any;
  sampleListBuilt: boolean;
  fragmentedTracks: any[];
  extractedTracks: any[];
  isFragmentationInitialized: boolean;
  sampleProcessingStarted: boolean;
  nextMoofNumber: number;
  itemListBuilt: boolean;
  onSidx: any;
  sidxSent: boolean;
  _sweep(type: any, result: any, returnEarly: any): void;
  initSampleGroups(
    trak: any,
    traf: any,
    sbgps: any,
    trak_sgpds: any,
    traf_sgpds: any
  ): void;
  setSampleGroupProperties(
    trak: any,
    sample: any,
    sample_number: any,
    sample_groups_info: any
  ): void;
  process_sdtp(sdtp: any, sample: any, number: any): void;
  writeInitializationSegment(
    ftyp: any,
    moov: any,
    total_duration: any,
    sample_duration: any
  ): ArrayBuffer;
  setSegmentOptions(id: any, user: any, options: any): void;
  unsetSegmentOptions(id: any): void;
  setExtractionOptions(id: any, user: any, options: any): void;
  unsetExtractionOptions(id: any): void;
  parse(): void;
  checkBuffer(ab: any): boolean;
  appendBuffer(ab: any, last: any): any;
  nextSeekPosition: any;
  getInfo(): {
    hasMoov: boolean;
    duration: any;
    timescale: any;
    isFragmented: boolean;
    fragment_duration: any;
    isProgressive: boolean;
    hasIOD: boolean;
    brands: any;
    created: Date;
    modified: Date;
    tracks: any[];
    audioTracks: any[];
    videoTracks: any[];
    subtitleTracks: any[];
    metadataTracks: any[];
    hintTracks: any[];
    otherTracks: any[];
    mime: string;
  };
  processSamples(last: any): void;
  getBox(type: any): any;
  getBoxes(type: any, returnEarly: any): any[];
  getTrackSamplesInfo(track_id: any): any;
  getTrackSample(track_id: any, number: any): any;
  releaseUsedSamples(id: any, sampleNum: any): void;
  start(): void;
  stop(): void;
  flush(): void;
  seekTrack(
    time: any,
    useRap: any,
    trak: any
  ): {
    offset: number;
    time: number;
  };
  seek(
    time: any,
    useRap: any
  ): {
    offset: number;
    time: number;
  };
  equal(b: any): boolean;
  lastBoxStartPosition: any;
  parsingMdat: any;
  nextParsePosition: any;
  discardMdatData: boolean;
  processIncompleteBox(ret: any): boolean;
  hasIncompleteMdat(): boolean;
  processIncompleteMdat(): boolean;
  restoreParsePosition(): any;
  saveParsePosition(): void;
  updateUsedBytes(box: any, ret: any): void;
  add: any;
  addBox: any;
  init(_options: any): this;
  addTrack(_options: any): any;
  addSample(
    track_id: any,
    data: any,
    _options: any
  ): {
    number: any;
    track_id: any;
    timescale: any;
    description_index: number;
    description: any;
    data: any;
    size: any;
    alreadyRead: any;
    duration: any;
    cts: any;
    dts: any;
    is_sync: any;
    is_leading: any;
    depends_on: any;
    is_depended_on: any;
    has_redundancy: any;
    degradation_priority: any;
    offset: number;
    subsamples: any;
  };
  createSingleSampleMoof(sample: any): any;
  lastMoofIndex: number;
  samplesDataSize: number;
  resetTables(): void;
  initial_duration: any;
  buildSampleLists(): void;
  buildTrakSampleLists(trak: any): void;
  updateSampleLists(): void;
  getSample(trak: any, sampleNum: any): any;
  releaseSample(trak: any, sampleNum: any): any;
  getAllocatedSampleDataSize(): number;
  getCodecs(): string;
  getTrexById(id: any): any;
  getTrackById(id: any): any;
  items: any[];
  itemsDataSize: number;
  flattenItemInfo(): void;
  getItem(item_id: any): any;
  releaseItem(item_id: any): any;
  processItems(callback: any): void;
  hasItem(name: any): any;
  getMetaHandler(): any;
  getPrimaryItem(): any;
  itemToFragmentedTrackFile(_options: any): ISOFile;
  write(outstream: any): void;
  createFragment(track_id: any, sampleNumber: any, stream_: any): any;
  save(name: any): void;
  getBuffer(): ArrayBuffer;
  initializeSegmentation(): {}[];
  print(output: any): void;
}
export declare class Log {
  getDurationString(duration: any, _timescale: any): string;
  printRanges(ranges: any): string;
}
interface ArrayBuffer {
  readonly byteLength: number;
  slice(begin: number, end?: number): ArrayBuffer;
  readonly [Symbol.toStringTag]: string;
}
export declare class MPEG4DescriptorParser {
  getDescriptorName: (tag: any) => any;
  parseOneDescriptor: (stream: any) => any;
}
export namespace BoxParser {
  let TKHD_FLAG_ENABLED: number;
  let TKHD_FLAG_IN_MOVIE: number;
  let TKHD_FLAG_IN_PREVIEW: number;
  let TFHD_FLAG_BASE_DATA_OFFSET: number;
  let TFHD_FLAG_SAMPLE_DESC: number;
  let TFHD_FLAG_SAMPLE_DUR: number;
  let TFHD_FLAG_SAMPLE_SIZE: number;
  let TFHD_FLAG_SAMPLE_FLAGS: number;
  let TFHD_FLAG_DUR_EMPTY: number;
  let TFHD_FLAG_DEFAULT_BASE_IS_MOOF: number;
  let TRUN_FLAGS_DATA_OFFSET: number;
  let TRUN_FLAGS_FIRST_FLAG: number;
  let TRUN_FLAGS_DURATION: number;
  let TRUN_FLAGS_SIZE: number;
  let TRUN_FLAGS_FLAGS: number;
  let TRUN_FLAGS_CTS_OFFSET: number;
  function parseUUID(stream: any): any;
  function parseHex16(stream: any): string;
  function parseOneBox(
    stream: any,
    headerOnly: any,
    parentSize: any
  ):
    | {
        code: number;
        type?: undefined;
        size?: undefined;
        hdr_size?: undefined;
        start?: undefined;
        box?: undefined;
      }
    | {
        code: number;
        type: any;
        size: any;
        hdr_size: number;
        start: any;
        box?: undefined;
      }
    | {
        code: number;
        box: any;
        size: any;
        type?: undefined;
        hdr_size?: undefined;
        start?: undefined;
      };
  let SAMPLE_ENTRY_TYPE_VISUAL: string;
  let SAMPLE_ENTRY_TYPE_AUDIO: string;
  let SAMPLE_ENTRY_TYPE_HINT: string;
  let SAMPLE_ENTRY_TYPE_METADATA: string;
  let SAMPLE_ENTRY_TYPE_SUBTITLE: string;
  let SAMPLE_ENTRY_TYPE_SYSTEM: string;
  let SAMPLE_ENTRY_TYPE_TEXT: string;
  class SingleItemTypeReferenceBox {
    constructor(type: any, size: any, hdr_size: any, start: any);
    parse(stream: any): void;
  }
  class SingleItemTypeReferenceBoxLarge {
    constructor(type: any, size: any, hdr_size: any, start: any);
    parse(stream: any): void;
  }
  class TrackReferenceTypeBox {
    constructor(type: any, size: any, hdr_size: any, start: any);
    parse(stream: any): void;
    write(stream: any): void;
  }
  function decimalToHex(d: any, padding: any): string;
  let DIFF_BOXES_PROP_NAMES: string[];
  let DIFF_PRIMITIVE_ARRAY_PROP_NAMES: string[];
  function boxEqualFields(box_a: any, box_b: any): boolean;
  function boxEqual(box_a: any, box_b: any): boolean;
}
export declare class XMLSubtitlein4Parser {
  parseSample(sample: any): {
    resources: any[];
    documentString: string;
    document: Document;
  };
}
export declare class Textin4Parser {
  parseSample(sample: any): string;
  parseConfig(data: any): any;
}
export function createFile(_keepMdatData: any, _stream: any): ISOFile;
