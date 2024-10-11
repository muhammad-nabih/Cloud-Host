'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

const SearchArticlesInput = () => {
	const [search, setSearch] = useState<null | string>(null);

	const handleSearchArticles = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setSearch(e.target.value);
	};

	return (
		<form>
			<Input className='py-8 text-lg font-bold shadow-lg' type='search' placeholder='search articles...' onChange={(e) => handleSearchArticles} />
		</form>
	);
};

export default SearchArticlesInput;
