/* tslint:disable */
/* eslint-disable */
/**
 * SUT SA Example API Patient
 * This is a sample server for SUT SE 2563
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    EntDepartment,
    EntDepartmentFromJSON,
    EntDepartmentToJSON,
    EntEmployee,
    EntEmployeeFromJSON,
    EntEmployeeToJSON,
    EntPlace,
    EntPlaceFromJSON,
    EntPlaceToJSON,
    EntTitlename,
    EntTitlenameFromJSON,
    EntTitlenameToJSON,
} from '../models';

export interface CreateDepartmentRequest {
    department: EntDepartment;
}

export interface CreateEmployeeRequest {
    employee: EntEmployee;
}

export interface CreatePlaceRequest {
    place: EntPlace;
}

export interface CreateTitlenameRequest {
    titlename: EntTitlename;
}

export interface GetDepartmentRequest {
    id: number;
}

export interface GetPlaceRequest {
    id: number;
}

export interface GetTitlenameRequest {
    id: number;
}

export interface ListDepartmentRequest {
    limit?: number;
    offset?: number;
}

export interface ListEmployeeRequest {
    limit?: number;
    offset?: number;
}

export interface ListPlaceRequest {
    limit?: number;
    offset?: number;
}

export interface ListTitlenameRequest {
    limit?: number;
    offset?: number;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Create department
     * Create department
     */
    async createDepartmentRaw(requestParameters: CreateDepartmentRequest): Promise<runtime.ApiResponse<EntDepartment>> {
        if (requestParameters.department === null || requestParameters.department === undefined) {
            throw new runtime.RequiredError('department','Required parameter requestParameters.department was null or undefined when calling createDepartment.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/departments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EntDepartmentToJSON(requestParameters.department),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntDepartmentFromJSON(jsonValue));
    }

    /**
     * Create department
     * Create department
     */
    async createDepartment(requestParameters: CreateDepartmentRequest): Promise<EntDepartment> {
        const response = await this.createDepartmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create employee
     * Create employee
     */
    async createEmployeeRaw(requestParameters: CreateEmployeeRequest): Promise<runtime.ApiResponse<EntEmployee>> {
        if (requestParameters.employee === null || requestParameters.employee === undefined) {
            throw new runtime.RequiredError('employee','Required parameter requestParameters.employee was null or undefined when calling createEmployee.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/employees`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EntEmployeeToJSON(requestParameters.employee),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntEmployeeFromJSON(jsonValue));
    }

    /**
     * Create employee
     * Create employee
     */
    async createEmployee(requestParameters: CreateEmployeeRequest): Promise<EntEmployee> {
        const response = await this.createEmployeeRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create place
     * Create place
     */
    async createPlaceRaw(requestParameters: CreatePlaceRequest): Promise<runtime.ApiResponse<EntPlace>> {
        if (requestParameters.place === null || requestParameters.place === undefined) {
            throw new runtime.RequiredError('place','Required parameter requestParameters.place was null or undefined when calling createPlace.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/places`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EntPlaceToJSON(requestParameters.place),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntPlaceFromJSON(jsonValue));
    }

    /**
     * Create place
     * Create place
     */
    async createPlace(requestParameters: CreatePlaceRequest): Promise<EntPlace> {
        const response = await this.createPlaceRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create titlename
     * Create titlename
     */
    async createTitlenameRaw(requestParameters: CreateTitlenameRequest): Promise<runtime.ApiResponse<EntTitlename>> {
        if (requestParameters.titlename === null || requestParameters.titlename === undefined) {
            throw new runtime.RequiredError('titlename','Required parameter requestParameters.titlename was null or undefined when calling createTitlename.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/titlenames`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EntTitlenameToJSON(requestParameters.titlename),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntTitlenameFromJSON(jsonValue));
    }

    /**
     * Create titlename
     * Create titlename
     */
    async createTitlename(requestParameters: CreateTitlenameRequest): Promise<EntTitlename> {
        const response = await this.createTitlenameRaw(requestParameters);
        return await response.value();
    }

    /**
     * get department by ID
     * Get a department entity by ID
     */
    async getDepartmentRaw(requestParameters: GetDepartmentRequest): Promise<runtime.ApiResponse<EntDepartment>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getDepartment.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/departments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntDepartmentFromJSON(jsonValue));
    }

    /**
     * get department by ID
     * Get a department entity by ID
     */
    async getDepartment(requestParameters: GetDepartmentRequest): Promise<EntDepartment> {
        const response = await this.getDepartmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * get place by ID
     * Get a place entity by ID
     */
    async getPlaceRaw(requestParameters: GetPlaceRequest): Promise<runtime.ApiResponse<EntPlace>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getPlace.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/places/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntPlaceFromJSON(jsonValue));
    }

    /**
     * get place by ID
     * Get a place entity by ID
     */
    async getPlace(requestParameters: GetPlaceRequest): Promise<EntPlace> {
        const response = await this.getPlaceRaw(requestParameters);
        return await response.value();
    }

    /**
     * get titlename by ID
     * Get a titlename entity by ID
     */
    async getTitlenameRaw(requestParameters: GetTitlenameRequest): Promise<runtime.ApiResponse<EntTitlename>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getTitlename.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/titlenames/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntTitlenameFromJSON(jsonValue));
    }

    /**
     * get titlename by ID
     * Get a titlename entity by ID
     */
    async getTitlename(requestParameters: GetTitlenameRequest): Promise<EntTitlename> {
        const response = await this.getTitlenameRaw(requestParameters);
        return await response.value();
    }

    /**
     * list department entities
     * List department entities
     */
    async listDepartmentRaw(requestParameters: ListDepartmentRequest): Promise<runtime.ApiResponse<Array<EntDepartment>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/departments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntDepartmentFromJSON));
    }

    /**
     * list department entities
     * List department entities
     */
    async listDepartment(requestParameters: ListDepartmentRequest): Promise<Array<EntDepartment>> {
        const response = await this.listDepartmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * list employee entities
     * List employee entities
     */
    async listEmployeeRaw(requestParameters: ListEmployeeRequest): Promise<runtime.ApiResponse<Array<EntEmployee>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/employees`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntEmployeeFromJSON));
    }

    /**
     * list employee entities
     * List employee entities
     */
    async listEmployee(requestParameters: ListEmployeeRequest): Promise<Array<EntEmployee>> {
        const response = await this.listEmployeeRaw(requestParameters);
        return await response.value();
    }

    /**
     * list place entities
     * List place entities
     */
    async listPlaceRaw(requestParameters: ListPlaceRequest): Promise<runtime.ApiResponse<Array<EntPlace>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/places`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntPlaceFromJSON));
    }

    /**
     * list place entities
     * List place entities
     */
    async listPlace(requestParameters: ListPlaceRequest): Promise<Array<EntPlace>> {
        const response = await this.listPlaceRaw(requestParameters);
        return await response.value();
    }

    /**
     * list titlename entities
     * List titlename entities
     */
    async listTitlenameRaw(requestParameters: ListTitlenameRequest): Promise<runtime.ApiResponse<Array<EntTitlename>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/titlenames`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntTitlenameFromJSON));
    }

    /**
     * list titlename entities
     * List titlename entities
     */
    async listTitlename(requestParameters: ListTitlenameRequest): Promise<Array<EntTitlename>> {
        const response = await this.listTitlenameRaw(requestParameters);
        return await response.value();
    }

}