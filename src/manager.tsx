import React, { FC } from 'react';
import ReaderClient from './ReaderClient';
import { UseWebReaderReturn } from './useWebReader';

/**
 * The default Manager UI. This will be broken into individual components
 * that can be imported and used separately or in a customized setup.
 * It takes the return value of useWebReader as props
 */

type ManagerProps = Omit<
  UseWebReaderReturn<any, any>,
  'Renderer' | 'client'
> & { client: ReaderClient<unknown> | null };
const ManagerUI: FC<ManagerProps> = ({
  client,
  section,
  handlePrevChapter,
  handleNextChapter,
  handleNextPage,
  handlePrevPage,
  children,
}) => {
  // use the correct renderer depending on type
  if (!client) return <div>Loading...</div>;
  return (
    <div
      style={{
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'mistyrose',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 8,
        }}
      >
        <h1>{client.title}</h1>
        <button>settings</button>
      </nav>
      {children}
      <div
        style={{ padding: 8, display: 'flex', justifyContent: 'space-between' }}
      >
        <div style={{ display: 'flex' }}>
          <button onClick={handlePrevChapter}> {`<<`} chapter</button>
          <button onClick={handlePrevPage}> {`<`} page</button>
        </div>
        <div>
          Chapter: {section + 1} / {client.totalSections}
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={handleNextPage}>page {`>`}</button>
          <button onClick={handleNextChapter}>chapter {`>>`}</button>
        </div>
      </div>
    </div>
  );
};

export default ManagerUI;
