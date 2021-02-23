import {SVGAttributes} from 'react';

export function SearchIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg x='0px' y='0px' viewBox='0 0 100 100' {...props}>
            <path d='M98.1,88.9L79,69.9c5.4-7.3,8.6-16.2,8.6-26C87.7,19.6,68,0,43.8,0C19.6,0,0,19.7,0,43.8c0,24.2,19.7,43.8,43.8,43.8
		c9.7,0,18.8-3.3,26-8.6l19.1,19.1c1.3,1.3,3,1.9,4.6,1.9c1.7,0,3.4-0.6,4.6-1.9C100.6,95.7,100.6,91.5,98.1,88.9z M13,43.8
		c0-17,13.8-30.8,30.8-30.8s30.8,13.8,30.8,30.8S60.7,74.6,43.7,74.6C26.8,74.7,13,60.9,13,43.8z'/>
        </svg>
    )
}

export function CrossIcon(props: SVGAttributes<SVGElement> & { title?: string }) {
    return (
        <PlusIcon {...props} rotate={45} title={props.title}/>
    );
}

export const RemoveIcon = CrossIcon;

export function PlusIcon(props: SVGAttributes<SVGElement> & { rotate?: number, title?: string }) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='20' {...props}>
            <title>{props.title}</title>
            <g transform={`rotate(${props.rotate || 0} 50 50)`}>
                <path
                    d='M50,0A10.34,10.34,0,0,0,39.66,10.34V39.66H10.34a10.34,10.34,0,0,0,0,20.68H39.66V89.66a10.34,10.34,0,0,0,20.68,0V60.34H89.66a10.34,10.34,0,0,0,0-20.68H60.34V10.34A10.34,10.34,0,0,0,50,0Z'/>
            </g>
        </svg>
    );
}

