import Link from "next/link";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "3rem", flexWrap: "wrap", direction: "ltr" }}>
      {currentPage < totalPages && (
        <Link href={`/blog?page=${currentPage + 1}`} className="btn btn-outline" style={{ padding: "0.5rem 1rem", minWidth: "80px", textAlign: "center" }}>
          بعدی ←
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).reverse().map((page) => (
        <Link
          key={page}
          href={`/blog?page=${page}`}
          className={page === currentPage ? "btn btn-primary" : "btn btn-outline"}
          style={{ padding: "0.5rem 1rem", minWidth: "40px", textAlign: "center" }}
        >
          {page}
        </Link>
      ))}

      {currentPage > 1 && (
        <Link href={`/blog?page=${currentPage - 1}`} className="btn btn-outline" style={{ padding: "0.5rem 1rem", minWidth: "80px", textAlign: "center" }}>
          → قبلی
        </Link>
      )}
    </div>
  );
}
