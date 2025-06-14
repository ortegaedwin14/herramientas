interface GreetRow {
    id: number;
    greet: string;
    language: string;
}
interface StatsResult {
    total: number;
    countsByLanguage: Array<{
        language: string;
        count: number;
    }>;
}
export type Param = {
    greet: string;
    language: string;
};
declare class BaseDeDatos {
    private pool;
    getAll(): Promise<GreetRow[]>;
    getById(id: number): Promise<GreetRow | null>;
    create(data: Param): Promise<number>;
    update(id: number, data: Param): Promise<void>;
    delete(id: number): Promise<void>;
    stats(): Promise<StatsResult>;
    close(): Promise<void>;
}
declare const _default: BaseDeDatos;
export default _default;
