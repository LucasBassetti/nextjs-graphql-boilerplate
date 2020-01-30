import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Button from '@components/Button';

// export const config = { amp: true };

const BOOKS = gql`
  {
    books {
      title
    }
  }
`;

type Props = {}

const Home: NextPage<Props> = () => {
  const { loading, error, data } = useQuery(BOOKS);

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main">
        <Button>Hello</Button>
      </div>
    </div>
  );
};

export default Home;
