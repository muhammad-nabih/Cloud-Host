import { Article } from '@/utils/types';
import { useEffect, useState } from 'react';

interface Params {
  params: { id: string };
}

const SingleArticlePage = ({ params }: Params) => {
  const { id } = params;

  return (
    <div>
      <h1 className="text-3xl font-bold">{id}</h1>
    </div>
  );
};

export default SingleArticlePage;
