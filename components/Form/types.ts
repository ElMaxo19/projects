export type PostData = {
  title: string;
  paragraph: string;
  image: File;
};

export type PostFormProps = {
  onSubmit: (data: PostData) => void;
};
