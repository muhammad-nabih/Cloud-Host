import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

export function ArticlePagination() {
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href='#' />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href='page-1'>1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href='page-2' isActive>
						2
					</PaginationLink>
				</PaginationItem>

				<PaginationItem>
					<PaginationLink href='page-3'>3</PaginationLink>
				</PaginationItem>

				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>

				<PaginationItem>
					<PaginationNext href='#' />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
