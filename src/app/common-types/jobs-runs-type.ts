export type JobsRunsType = {
    name: string,
    tags?: string[],
    user: string,
    failedRunsCount: number,
    successRunsCount: number,
    lastRunDate: Date,
    schedule: string,
    status: number,
    id: number,
  };
  