export declare class ConfigService {
    private readonly logger;
    private envPath;
    private readonly nodeEnv;
    private readonly envConfig;
    constructor();
    get(key: string): string;
}
