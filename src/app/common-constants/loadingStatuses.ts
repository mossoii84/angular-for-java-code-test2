import {LoadingStatus} from "../common-types/loadingStatus";

export const LOADING_STATUSES: {default: LoadingStatus, loading: LoadingStatus, loaded: LoadingStatus, failed: LoadingStatus} = {
  default: {
    isLoading: false,
    isLoaded: false,
    error: null,
  },
  loading: {
    isLoading: true,
    isLoaded: false,
    error: null,
  },
  loaded: {
    isLoading: false,
    isLoaded: true,
    error: null,
  },
  failed: {
    isLoading: false,
    isLoaded: false,
    error: '',
  }
}
