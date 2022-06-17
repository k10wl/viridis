export type CardT = {
  views: number;
  favorite: boolean;
  imageSrc: string;
  name: string;
  description: string;
  tags: string[];
  onClick: () => void;
};
