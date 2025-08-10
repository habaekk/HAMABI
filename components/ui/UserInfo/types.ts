export interface User {
  name: string;
  avatar?: string;
}

export interface DetailCard {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}

export interface UserInfoProps {
  user: User;
  detailCards?: DetailCard[];
  className?: string;
}
