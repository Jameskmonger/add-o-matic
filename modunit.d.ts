declare function test (name: string, callback: Function, cases?: Array<Array<any>>): void;

declare module 'modunit' {
    export = test;
}
