type StatisticsMessageProps = {
  children: string;
};

export const StatisticsMessage = ({ children }: StatisticsMessageProps) => {
  return (
    <footer className="flex flex-col items-center justify-center bg-light-orange py-4">
      <p className="text-xl font-semibold text-gray">{children}</p>
    </footer>
  );
};
