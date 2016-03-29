declare module 'modunit' {
    function modunit (name: string, callback: Function, cases?: Array<Array<any>>): void;
    export = modunit;
}
