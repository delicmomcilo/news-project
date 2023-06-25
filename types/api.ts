export interface TV2Response {
  docs: Doc[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage?: number;
  nextPage?: number;
}

export interface Doc {
  _id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  theme: string;
  hidden: boolean;
  deleted: boolean;
  key: string;
  adUnitPath: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  cover?: Cover;
  lastPostPublishedAt: string;
  video?: Video;
  baseUrl?: string;
  id: string;
  newCount: number;
  archived?: boolean;
  background?: Background;
}

export interface Cover {
  filename: string;
  path: string;
  contentType: string;
  fileSize: number;
  attribution?: string;
  caption?: string;
  version: number;
  focalPoint: any;
  createdAt: string;
  updatedAt: string;
  id: string;
  url: string;
}

export interface Video {
  assetId: string;
  visible: boolean;
  title: string;
  live: boolean;
  thumbSrc: string;
  autoplay: boolean;
  showAds: boolean;
  teaseText?: string;
  teaseStartTime: any;
  teaseEndTime: any;
  hidePlaylist?: boolean;
  duration?: number;
}

export interface Background {
  filename: string;
  path: string;
  contentType: string;
  fileSize: number;
  attribution?: string;
  version: number;
  createdAt: string;
  updatedAt: string;
  id: string;
  url: string;
}
