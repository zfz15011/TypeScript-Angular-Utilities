import * as angular from 'angular';
import { ITransformFunction } from '../baseDataService/baseData.service';
export declare var moduleName: string;
export declare var factoryName: string;
export interface IBaseSingletonDataService<TDataType> {
    get(): angular.IPromise<TDataType>;
    update(domainObject: TDataType): angular.IPromise<TDataType>;
    useMock: boolean;
    logRequests: boolean;
}
export declare class BaseSingletonDataService<TDataType> implements IBaseSingletonDataService<TDataType> {
    private $http;
    private $q;
    endpoint: string;
    private mockData;
    private transform;
    useMock: boolean;
    logRequests: boolean;
    constructor($http: angular.IHttpService, $q: angular.IQService, endpoint: string, mockData: TDataType, transform: ITransformFunction<TDataType>, useMock: boolean, logRequests: boolean);
    get(): angular.IPromise<TDataType>;
    update(domainObject: TDataType): angular.IPromise<TDataType>;
    private log(requestName, data);
}
export interface IBaseSingletonDataServiceFactory {
    getInstance<TDataType>(endpoint: string, mockData?: TDataType, transform?: ITransformFunction<TDataType>, useMock?: boolean): IBaseSingletonDataService<TDataType>;
}
export declare function baseSingletonDataServiceFactory($http: angular.IHttpService, $q: angular.IQService): IBaseSingletonDataServiceFactory;
