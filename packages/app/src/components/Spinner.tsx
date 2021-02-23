import React, {ReactElement, SVGAttributes} from 'react';

export function Spinner(props: SVGAttributes<SVGElement> & { color?: string }): ReactElement {
    const color = props.color || '#fff';

    return (
        <svg viewBox='0 45 52 10' width='20' {...props}>
            <circle fill={color} stroke='none' cx='6' cy='50' r='6'>
                <animate attributeName='opacity' dur='1s' values='0;1;0' repeatCount='indefinite' begin='0.1'/>
            </circle>
            <circle fill={color} stroke='none' cx='26' cy='50' r='6'>
                <animate attributeName='opacity' dur='1s' values='0;1;0' repeatCount='indefinite' begin='0.2'/>
            </circle>
            <circle fill={color} stroke='none' cx='46' cy='50' r='6'>
                <animate attributeName='opacity' dur='1s' values='0;1;0' repeatCount='indefinite' begin='0.3'/>
            </circle>
        </svg>
    );
}