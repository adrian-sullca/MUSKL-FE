export function Separator({ text }: { text: string }) {
  return (
    <div className="flex items-center m-0">
      <div className="flex-grow border-t border-borderSecondaryColor" />
      <span className="mx-1 text-gray-600 text-xs">{text}</span>
      <div className="flex-grow border-t border-borderSecondaryColor" />
    </div>
  );
}