import {NextPageContext} from 'next';
import {useRouter} from 'next/router';
import {ReactElement, useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Basic} from 'unsplash-js/dist/methods/photos/types';
import {Photos} from 'unsplash-js/dist/methods/search/types/response';
import {Header, Main, Modal, SearchForm, Spinner} from '../../../components';
import {UnsplashService} from '../../../services/UnsplashService';

interface SearchByTagPageProps {
    readonly tag: string;
}

const PhotosSection = styled.div`
  background: #fff;
  line-height: 0;
  column-count: 3;
  column-gap: 0;
  border-radius: 0 0 5px 5px;
  padding-top: 5rem;

  @media only screen and (max-width: 600px) {
    column-count: 3;
  }

  img {
    width: 100%;
    height: auto;
    padding: 0.5rem;
    cursor: pointer;
  }
`

export default function SearchByTagPage(props: SearchByTagPageProps): ReactElement {
    const [response, setResponse] = useState<Photos>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [activePhoto, setActivePhoto] = useState<Basic>(null);

    const router = useRouter();
    const unsplashService = new UnsplashService();
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                setResponse(null);
                setResponse(
                    (await unsplashService.searchByTag(router.query.tag as string)).response
                );
            } finally {
                setIsLoading(false)
            }
        })();
    }, [router])

    const handleImageClick = useCallback((photo: Basic) => () => setActivePhoto(photo), []);

    return (
        <>
            <Header/>
            <Main>
                <SearchForm isLoading={isLoading}/>

                {activePhoto &&
                <Modal isActive={true} onModalClose={() => setActivePhoto(null)}>
                    <img
                        alt={activePhoto.alt_description}
                        src={activePhoto.urls.regular}
                        width='100%'
                        height='100%'/>
                </Modal>}

                <PhotosSection>
                    {response &&
                    response.results.map((photo: Basic) => (
                        <div className='image-holder' key={photo.id}>
                            <img
                                src={photo.urls.thumb}
                                alt={photo.alt_description}
                                onClick={handleImageClick(photo)}/>
                        </div>
                    ))}
                </PhotosSection>

            </Main>
        </>
    )
}

export function getServerSideProps(ctx: NextPageContext): any
{
    return {
        props: {
            tag: ctx.query.tag,
        }
    }
}