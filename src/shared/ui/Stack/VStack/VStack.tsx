import type { FlexProps } from '../Flex/Flex';
import { Flex, FlexAlign, FlexDirection } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const VStack = ({
  children,
  align = FlexAlign.Start,
  ...restProps
}: HStackProps) => <Flex direction={FlexDirection.Column} align={align} {...restProps}>{children}</Flex>;
