import { SearchInput } from '@shared/ui';
import { useSearchMovie } from '../model/useSearchMovie';

export const SearchMovie = ({ ...attrs }) => {
	const { title, onChange, search } = useSearchMovie();

	return (
		<SearchInput
			value={title}
			onChange={(e) => onChange(e.target.value)}
			onSearch={search}
			autoFocus
			placeholder="Search for movies"
			{...attrs}
		/>
	);
};
