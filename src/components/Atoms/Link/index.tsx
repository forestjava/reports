import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

export type Props = RouterLinkProps;

export const Link: React.FunctionComponent<Props> = (props: Props) => <RouterLink {...props} />;
