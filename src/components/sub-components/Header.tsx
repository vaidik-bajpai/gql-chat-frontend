interface TitleProps {
    title: string
}

export function Title({title}: TitleProps) {
    return (
        <div className="font-bold text-3xl mb-1.5">
            {title}
        </div>
    )
};