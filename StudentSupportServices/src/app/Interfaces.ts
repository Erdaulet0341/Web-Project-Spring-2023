export interface Food{
  id: number;
  name: string;
  cost: string;
  resepts: string;
  imageURL: string;
}

export interface Book{
  id: number;
  title: string;
  author: string;
  description: string;
  imageURL: string;
}

export interface Shop{
  id: number;
  name: string;
  description: string;
  cost: number
  imageURL: string;
}
