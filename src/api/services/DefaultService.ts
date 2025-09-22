/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Returns status of the service
     * @returns any : string, "version": string, "date": Date} JSON-object indicating service status.
     * @throws ApiError
     */
    public static getHealth(): CancelablePromise<{
        date: string;
        version: string;
        status: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/health',
        });
    }
}
