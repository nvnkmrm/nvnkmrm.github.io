interface Props {
  tags: string[];
}

/**
 * Display a list of tags
 */
export default function TagList({ tags }: Props) {
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}
