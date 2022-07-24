export type CardProps = {
  views: number;
  favorite: boolean;
  imageSrc: string;
  name: string;
  description: string;
  ingredients: string[];
  onClick: () => void;
};
