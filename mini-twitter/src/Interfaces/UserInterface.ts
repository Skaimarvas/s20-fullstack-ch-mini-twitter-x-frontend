export interface UserState {
  id: number;
  email: string;
  fullName: string;
  password: string;
  userName: string;
  tweets: any[];
  likedTweets: any[];
  retweetedTweets: any[];
}
