'use client';

import style from './search.module.scss';

export default function Search({ placeholder }: { placeholder: string }) {
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();

  // const handleSearch = useDebouncedCallback((term) => {
  //   const params = new URLSearchParams(searchParams);

  //   params.set('page', '1');

  //   if (term) {
  //     params.set('query', term);
  //   } else {
  //     params.delete('query');
  //   }

  //   replace(`${pathname}?${params.toString()}`);
  // }, 350);

  return (
    <div className={`${style.searchContainer} form-element`}>
      <label htmlFor="search">
        Palabra Mágica
      </label>
      <input
        placeholder={placeholder}
        // onChange={e => { handleSearch(e.target.value) }}
        // defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
}