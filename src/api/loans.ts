import { Axios } from 'axios';
import { LoanOverviewResponseDto } from './response/loans';

export const searchAllLoans = async (
  client: Axios,
  filters: {
    type: string;
    loanNumber: string;
    status: string;
  },
  rowsPerPage: number,
  currentPage: number
) => {
  return client.get<LoanOverviewResponseDto>('/loans/search', {
    params: { ...filters, size: rowsPerPage, page: currentPage },
  });
};
