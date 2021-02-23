import nodeFetch from 'node-fetch';
import {createApi} from 'unsplash-js';
import config from '../config';

export class UnsplashService {
    public async searchByTag(tag: string, page: number) {
        const unsplash = createApi({
            accessKey: config.unsplash.accessKey,
            fetch: nodeFetch,
        });

        return unsplash
            .search
            .getPhotos({
                query: tag,
                page,
            })
    }
}