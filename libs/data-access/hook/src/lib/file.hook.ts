import { getFile } from '@libs/data-access/service';
import { FileType } from '@libs/types';
import { useMutationBase, useQueryBase } from './base-query.hook';

export const useQueryGetFile = (fileId: number) => {
  const query = useQueryBase(['getFile', fileId], async () => {
    const data = await getFile(fileId);
    return data;
  });

  return {
    query,
    file: query.data,
    isLoading: query.isPending,
    isError: query.isError,
    error: query.error,
  };
};

export const useMutateGetFile = (fileId: number) => {
  const mutation = useMutationBase<FileType, Blob>(async () => {
    return await getFile(fileId);
  });

  return {
    mutation,
    file: mutation.data,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
};
