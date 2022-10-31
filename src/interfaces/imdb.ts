import {Nullable} from './generic';

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
interface IdName {
  id: string;
  name: string;
}
interface KeyValue {
  key: string;
  value: string;
}
interface Actors extends IdName {
  image: string;
  asCharacter: string;
}
interface similars {
  id: string;
  title: string;
  image: string;
  imDbRating: string;
}
export interface ResponseImdbTitleDetail {
  id: string;
  title: string;
  originalTitle: string;
  fullTitle: string;
  type: string;
  year: string;
  image: string;
  releaseDate: string;
  runtimeMins: string;
  runtimeStr: string;
  plot: string;
  plotLocal: string;
  plotLocalIsRtl: false;
  awards: string;
  directors: string;
  directorList: IdName[];
  writers: string;
  writerList: IdName[];
  stars: string;
  starList: IdName[];
  actorList: Actors[];
  fullCast: Nullable<string>;
  genres: string;
  genreList: KeyValue[];
  companies: string;
  companyList: IdName[];
  countries: string;
  countryList: KeyValue[];
  languages: string;
  languageList: KeyValue[];
  contentRating: string;
  imDbRating: string;
  imDbRatingVotes: string;
  metacriticRating: string;
  ratings: Nullable<string>;
  wikipedia: Nullable<string>;
  posters: Nullable<string>;
  images: Nullable<string>;
  trailer: {
    imDbId: string;
    title: string;
    fullTitle: string;
    type: string;
    year: string;
    videoId: string;
    videoTitle: string;
    videoDescription: string;
    thumbnailUrl: string;
    uploadDate: string;
    link: string;
    linkEmbed: string;
    errorMessage: string;
  };
  boxOffice: {
    budget: string;
    openingWeekendUSA: string;
    grossUSA: string;
    cumulativeWorldwideGross: string;
  };
  tagline: Nullable<string>;
  keywords: string;
  keywordList: string[];
  similars: similars[];
  tvSeriesInfo: Nullable<string>;
  tvEpisodeInfo: Nullable<string>;
  errorMessage: Nullable<string>;
}
