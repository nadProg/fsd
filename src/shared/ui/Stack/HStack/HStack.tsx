import type { FlexProps } from '../Flex/Flex';
import { Flex, FlexDirection } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = ({
  children,
  ...restProps
}: HStackProps) => <Flex direction={FlexDirection.Row} {...restProps}>{children}</Flex>;
