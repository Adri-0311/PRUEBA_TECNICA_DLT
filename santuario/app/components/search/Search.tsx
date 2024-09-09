'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import style from './search.module.scss';

export default function Search({ placeholder }: { placeholder: string }) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((term) => {
		const params = new URLSearchParams(searchParams);

		if (term) {
			params.set('query', term);
		} else {
			params.delete('query');
		}

		replace(`${pathname}?${params.toString()}`);
	}, 350);

	return (
		<div className={`${style.searchContainer} form-element`}>
			<label htmlFor='search'>Palabra Mágica</label>
			<input
				placeholder={placeholder}
				onChange={(e) => {
					handleSearch(e.target.value);
				}}
				defaultValue={searchParams.get('query')?.toString()}
			/>
		</div>
	);
}
