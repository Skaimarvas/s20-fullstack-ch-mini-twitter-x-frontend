export interface TweetGetType {
  id: number;
  content: string;
  likedCount: number;
  likedByUser: any[];
  retweetCount: number;
  retweetedByUser: any[];
}
