export interface ImdbObject {
  id: string;
  resultType: string;
  image: string;
  title: string;
  description: string;
}

export interface ResponseImdbTitle {
  searchType: string;
  expression: string;
  results: ImdbObject[];
}
