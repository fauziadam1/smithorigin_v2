import { PostCard } from "./post-card";

export function Post() {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-muted-foreground -tracking-tighter text-sm">
          OUR BLOG
        </h1>
        <h1 className="font-bold text-4xl">Smith Origin Posts.</h1>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}
