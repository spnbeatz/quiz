export const QuestionTitle= ({content, className}: {content: string, className?: string} ) => {
    return (
        <p className={`font-semibold text-lg text-gray-700 ${className}`}>{content}</p>
    )
}