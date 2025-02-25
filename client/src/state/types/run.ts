// Copyright Schulich Racing FSAE
// Written by Justin Tijunelis

import { Comment } from "./";

export type Run = {
  _id: string;
  name: string;
  startTime: string;
  endTime: string;
  comments?: Comment[];
};
