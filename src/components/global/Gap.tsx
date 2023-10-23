interface GapProps {
  width?: number | string;
  height?: number | string;
}

export default function Gap({ width = "0", height = "0" }: GapProps) {
  return <div style={{ width, height }} />;
}
