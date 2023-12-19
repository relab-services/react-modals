import { FC } from 'react';

import { ModalProps } from './props';

export type ModalResult<T> = T extends FC<infer Props> ? (Props extends ModalProps<infer _, infer TResult> ? TResult : never) : never;
