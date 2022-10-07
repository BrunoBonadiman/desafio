import { ItemsResponse } from './items.response';
import { PaginationResponse } from './pagination.response';
import { SummaryResponse } from './summary.response';

export interface LancamentoContaLegadoResponse {
  summary: SummaryResponse;
  pagination: PaginationResponse;
  items: Array<ItemsResponse>;
}
