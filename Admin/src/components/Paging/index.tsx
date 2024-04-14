import './style.css';
type PagingProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Paging = ({ totalPages, currentPage, onPageChange }: PagingProps) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };
  return (
    <div className="paging-container">
      <button
        className="paging-button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        {'<'}
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`paging-button ${page === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(page)}>
          {page}
        </button>
      ))}
      <button
        className="paging-button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        {'>'}
      </button>
    </div>
  );
};
