import React, {PropsWithChildren, useEffect, useMemo} from 'react';
import styled from 'styled-components';
import {Icons} from '../components';

interface ModalProps {
    /**
     * Should the modal be displayed?
     */
    readonly isActive?: boolean;

    /**
     * Event handler for modal close
     */
    readonly onModalClose?: () => void;
}

const Container = styled.div`
  position: absolute;
  left: calc((100% - 1000px) / 2);
  top: 10%;
  margin-bottom: 50px;
  width: 1000px;
  z-index: 10000;
  overflow: scroll;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px;
  background-color: #fff;

  .body {
    padding: 0.8rem 1.5rem 1rem 1.5rem;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    left: 0;
  }
`;

const DimBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const TopBar = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 0.7rem 1.5rem 0 1.5rem;
  align-items: center;

  .title {
    h2 {
      margin: 0;
      padding: 0;
    }
  }

  .buttons {
    text-align: right;

    svg {
      cursor: pointer;
      fill: #222;
    }
  }
`;

export function Modal(props: PropsWithChildren<ModalProps>) {
    const memoChildren = useMemo(() => props.children, [props.children]);

    const closeModal = () => {
        if (props.onModalClose) props.onModalClose();
    };

    useEffect(() => {
        window.onkeydown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };

        return () => {
            window.onkeydown = null;
        };
    }, []);

    return (
        <div style={{display: props.isActive ? 'block' : 'none'}}>
            <Container>
                <TopBar>
                    <div className='title'/>
                    <div className='buttons'>
                        <Icons.CrossIcon onClick={closeModal}/>
                    </div>
                </TopBar>
                <div className='body'>
                    {memoChildren}
                </div>
            </Container>

            <DimBackground onClick={closeModal}/>
        </div>
    );
}
