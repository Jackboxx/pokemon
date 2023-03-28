export function BasicButton({ text, classes, onClick }: { text: string, classes?: string, onClick: () => void }) {
    return <button className={`h-fit bg-gradient-to-bl from-purple-600 to-purple-500 p-4 text-white text-xl rounded-lg ${classes}`}
        onClick={onClick}>
        {text}
    </button>
}
