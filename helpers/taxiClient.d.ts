export default class TaxiClient {
    private baseUrl;
    private pathPrefix;
    defaultOptions: {
        method: string;
        headers: {
            'Content-Type': string;
        };
    };
    url: string;
    constructor(baseUrl: string);
    getAssetEstimate(pset: string, assetHash: string): Promise<any>;
    topupWithAsset(orderId: string, pset: string, assetHash: string): Promise<any>;
}
