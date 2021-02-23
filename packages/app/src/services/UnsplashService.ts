import axios from 'axios';

export class UnsplashService {
    public async searchByTag(tag: string) {
        const result = await axios
            .get(new URL(`/images/tag/${tag}`, process.env.NEXT_PUBLIC_API_SERVER).href);

        return result.data;
    }
}