export interface TwirpErrorJSON {
    code: string;
    msg: string;
    meta: {
        [index: string]: string;
    };
}
export declare class TwirpError extends Error {
    code: string;
    meta: {
        [index: string]: string;
    };
    constructor(te: TwirpErrorJSON);
}
export declare const throwTwirpError: (resp: Response) => Promise<never>;
