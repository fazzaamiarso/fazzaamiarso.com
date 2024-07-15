import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TeamAvatar({
  profile,
  name,
  fallback,
}: {
  profile?: string;
  name: string;
  fallback: string;
}) {
  return (
    <Avatar>
      <AvatarImage src={profile} alt={name} className="grayscale" loading="lazy" />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
