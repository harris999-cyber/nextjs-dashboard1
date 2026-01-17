import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';

export default function Pagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const generatePageLinks = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const allPages = generatePageLinks();

  return (
    <div className="inline-flex">
      {/* Previous Button */}
      <PaginationArrow
        direction="left"
        href={`/dashboard/invoices?page=${currentPage - 1}`}
        isDisabled={currentPage <= 1}
      />

      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          if (page === '...') {
            return (
              <div
                key={`ellipsis-${index}`}
                className="flex h-10 w-10 items-center justify-center border border-gray-200 text-sm"
              >
                ...
              </div>
            );
          }

          const pageNumber = page as number;
          return (
            <PaginationNumber
              key={pageNumber}
              href={`/dashboard/invoices?page=${pageNumber}`}
              page={pageNumber}
              isActive={currentPage === pageNumber}
            />
          );
        })}
      </div>

      {/* Next Button */}
      <PaginationArrow
        direction="right"
        href={`/dashboard/invoices?page=${currentPage + 1}`}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
}: {
  page: number;
  href: string;
  isActive: boolean;
}) {
  const className = clsx(
    'flex h-10 min-w-[2.25rem] items-center justify-center rounded text-sm border',
    {
      'border-gray-300': !isActive,
      'z-10 border-blue-600 bg-blue-50 text-blue-600': isActive,
      'hover:bg-gray-100': !isActive,
    },
  );

  return isActive ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled: boolean;
}) {
  const className = clsx(
    'flex h-10 items-center rounded border border-gray-200 bg-white px-3 text-sm font-medium text-gray-500 hover:bg-gray-100',
    {
      'pointer-events-none opacity-50': isDisabled,
      'mr-2': direction === 'left',
      'ml-2': direction === 'right',
    },
  );

  const icon =
    direction === 'left' ? (
      <ChevronLeftIcon className="w-4" />
    ) : (
      <ChevronRightIcon className="w-4" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link href={href} className={className}>
      {icon}
    </Link>
  );
}
