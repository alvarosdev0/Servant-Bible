import { Skeleton } from "./ui/skeleton";

type SkeletonSchemeProps = {
  grid: number;
  className: string;
};

const SkeletonSchema = (props: SkeletonSchemeProps) => {
  const { grid, className } = props;
  return Array.from({ length: grid }).map((_, index) => {
    return <Skeleton className={className} key={index} />;
  });
};

export default SkeletonSchema;
