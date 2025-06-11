/// <reference types="react" />
import { Props as CircularTrackProps } from './CircularTrack';
declare type Props = JSX.IntrinsicElements['circle'] & CircularTrackProps & {
    strokeDasharray?: undefined;
    strokeDashoffset?: undefined;
    transform?: undefined;
};
export declare const CircularProgress: ({ stroke, ...rest }: Props) => JSX.Element;
export {};
