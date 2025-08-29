export declare class GPU {
    vram: Uint16Array<ArrayBuffer>;
    status: number;
    private inCmd;
    private parmWordsNeeded;
    private parms;
    private imageWordsRemaining;
    private imageStoreQueue;
    private clipLeft;
    private clipTop;
    private clipRight;
    private clipBottom;
    private drawOffX;
    private drawOffY;
    private texBaseX;
    private texBaseY;
    private texAddrWrap;
    private texW;
    private texH;
    writeGP0(val: number): void;
    writeGP1(val: number): void;
    readGP0(): number;
    readGP1(): number;
    clearVRAM(color?: number): void;
    private reset;
    private decodeXY;
    private decodeSize;
    private vramIndex;
    private fillRect;
    private writeImageWord;
    private readRectToWords;
    private fillTri;
    private fillTriTextured;
    private fillTriTexturedGouraud;
    private fillTriGouraud;
    serialize(): any;
    deserialize(s: any): void;
}
//# sourceMappingURL=gpu.d.ts.map