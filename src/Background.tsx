export const Background = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  return (
    // Remove transition-all to disable the background color transition.

    <body className="bg-white dark:bg-black transition-all">{children}</body>
  );
};
