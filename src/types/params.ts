import { FC } from 'react';

import { ModalProps } from './props';

export type ModalParams<T> = T extends FC<infer Props> ? (Props extends ModalProps<infer TParams, infer _> ? TParams : never) : never;
