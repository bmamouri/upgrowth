import {NextFunction, Request, Response} from 'express';
import {UnsplashService} from '../../services';

export async function searchByTag(request: Request, response: Response, next: NextFunction) {
    const unsplashService = new UnsplashService();

    const result = await unsplashService.searchByTag(request.params.tag, Number(request.params.page));

    if (result.status !== 200)
        response
            .status(result.status)
            .send(result)
    else
        response
            .json(result);

    next();
}
