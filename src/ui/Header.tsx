import React from 'react';
import SettingsCard from './SettingsButton';
import {
  Flex,
  Link,
  HStack,
  Button as ChakraButton,
  Text,
} from '@chakra-ui/react';
import { Icon, IconNames } from '@nypl/design-system-react-components';
import { WebpubManifest, ReaderState, Navigator } from '../types';

export type HeaderProps = {
  logo?: any;
  manifest: WebpubManifest; // for TOC?
  readerState: ReaderState;
  navigator: Navigator;
};

export default function Header(props: HeaderProps) {
  const { logo, readerState, navigator } = props;

  return (
    <Flex
      alignContent="space-between"
      alignItems="center"
      py={2}
      px={8}
      border="1px solid"
      borderColor="gray.100"
    >
      <Link
        href="/"
        aria-label="Return to Digital Research Books"
        tabIndex={0}
        fontSize={0}
        py={1}
        textTransform="uppercase"
        color="gray.700"
        d="flex"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        {logo ? (
          logo
        ) : (
          <Icon decorative name={IconNames.headset} modifiers={['small']} />
        )}
        <Text variant="headerNav">Return to Digital Research Books</Text>
      </Link>
      <HStack ml="auto" spacing={1}>
        <SettingsCard navigator={navigator} state={readerState} />
        <ChakraButton variant="headerNav">
          <Icon decorative name={IconNames.search} modifiers={['small']} />
          <Text variant="headerNav">Toggle Fullscreen</Text>
        </ChakraButton>
      </HStack>
    </Flex>
  );
}
