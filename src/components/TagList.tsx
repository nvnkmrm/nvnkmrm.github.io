import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

interface Props {
  tags: string[];
}

/**
 * Display a list of tags using MUI Chips
 */
export default function TagList({ tags }: Props) {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      {tags.map((tag) => (
        <Chip key={tag} label={tag} size="small" />
      ))}
    </Stack>
  );
}
