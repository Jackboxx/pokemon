export function BasicButton({
  text,
  classes,
  onClick,
}: {
  text: string;
  classes?: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`h-fit rounded-lg bg-gradient-to-bl from-purple-600 to-purple-500 p-4 text-xl text-white ${classes}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
