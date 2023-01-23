export interface IMapperAPI<TApi, TDom> {
    fromApiToDom(item: TApi, opts?: any): any;
    fromDomToApi(item: TDom, opts?: any): any;
}
