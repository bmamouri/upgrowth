import {UnsplashService} from './UnsplashService';

// @ts-ignore
test('UnsplashService.searchByTag', async () => {
    const unsplashService = new UnsplashService();
    const result = await unsplashService.searchByTag('city', 1);

    // @ts-ignore
    expect(result.status).toBe(200);
})