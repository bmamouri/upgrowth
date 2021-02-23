import {useRouter} from 'next/router';
import {PropsWithChildren} from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import {Icons, Spinner} from '../components';

interface SearchFormProps {
    readonly isLoading?: boolean;
}

interface SearchFormData {
    readonly keyword: string;
}

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 100px;
  box-shadow: 0 0 2rem rgb(0 0 0 / 10%);
  border-radius: 5px 5px 0 0;
  background: #eee;

  input[name=keyword] {
    background: none;
    width: 100%;
    padding: 0.75rem;
    border-radius: 5px 5px 0 0;
    border: none;
    font-size: 1.1rem;
    outline: none;

    ::placeholder {
      color: #ccc;
      font-size: 0.9rem;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0 5px 0 0;
    font-size: 1.1rem;
    cursor: pointer;
    transition: 0.3s;
    background: none;

    svg {
      margin-right: 0.2rem;
    }

    :hover {
      background: rgb(2,0,36);
      background: linear-gradient(180deg, rgba(9,9,121,0.5) 0%, rgba(0,212,255,0.5) 100%);
    }
  }
`

export function SearchForm(props: SearchFormProps) {
    const {register, handleSubmit} = useForm<SearchFormData>();

    const router = useRouter()

    const onSubmit = (data: SearchFormData) => router.push(`/tags/${data.keyword}`)

    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <input name='keyword' placeholder='Enter a keyword to search photos' ref={register}/>
            <button type='submit'>
                {props.isLoading
                    ? <Spinner color='#d02020' width={30} style={{marginLeft: '1rem'}}/>
                    : (
                        <>
                            <Icons.SearchIcon width='16'/>
                            Search
                        </>
                    )}
            </button>
        </FormStyled>
    )
}