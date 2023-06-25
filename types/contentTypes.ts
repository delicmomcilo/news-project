export interface TV2ContentResponse {
  docs: Doc[];
  totalDocs: number;
  limit: number;
  page: number;
  totalPages: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage?: number;
  nextPage?: number;
}

export interface Doc {
  title: string;
  content: Content[];
  byline: Byline[];
  portals: Portal[];
  category: string;
  topics: string[];
  related?: Related;
  createdBy: CreatedBy;
  flags: string[];
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  publishedBy: PublishedBy;
  id: string;
  updatedBy?: UpdatedBy;
  short?: Short;
}

export interface Content {
  type: string;
  data: any;
  files: File[];
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface File {
  filename: string;
  path: string;
  contentType: string;
  fileSize: number;
  attribution: string;
  caption: string;
  version: number;
  focalPoint: any;
  createdAt: string;
  updatedAt: string;
  id: string;
  url: string;
}

export interface Byline {
  firstName: string;
  lastName: string;
  email: string;
  _id: string;
}

export interface Portal {
  slug: string;
  name: string;
  key: string;
  id: string;
}

export interface Related {
  ntb: Ntb;
}

export interface Ntb {
  id: string;
  ntbId: string;
}

export interface CreatedBy {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
}

export interface PublishedBy {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
}

export interface UpdatedBy {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
}

export interface Short {
  title: string;
  message: string;
  expirationTime: string;
}
