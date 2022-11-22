import type { FlexProps } from '../Flex/Flex';
import { Flex, FlexDirection } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const VStack = ({
  children,
  ...restProps
}: HStackProps) => <Flex direction={FlexDirection.Column} {...restProps}>{children}</Flex>;
