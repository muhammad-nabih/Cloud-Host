import { Params } from '@/types/types';
import ArticleDetails from './ArticleDetails';

const SingleArticlePage = ({ params }: Params) => {
	return (
		<section className='container mx-auto px-3'>
			<ArticleDetails params={params} />
		</section>
	);
};
export default SingleArticlePage;
