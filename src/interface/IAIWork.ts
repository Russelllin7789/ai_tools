interface IAIWork {
  create_time: string;
  description: string;
  discordId: string;
  id: string;
  imageUrl: string;
  link: string;
  model: string;
  status: boolean;
  title: string;
  type: string;
  userId: string;
}

interface IPage {
  total_pages: number;
  current_page: number;
  has_pre: boolean;
  has_next: boolean;
}

interface IAIDetails {
  status: boolean;
  ai_works: {
    page: IPage;
    data: IAIWork[];
  };
}

export type { IAIDetails, IAIWork };
