import SingleFeedCardGrid from "@/components/shared/common/singlefeedcardgrid";
import { feeds } from "@/data/dummyData";

const Feeds = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">blog post</h1>
        <h1 className="heading">latest newsfeeds</h1>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    mt-10  md:px-15 lg:px-32">
        {" "}
        {feeds.slice(0, 3).map((feed) => (
          <SingleFeedCardGrid key={feed.id} {...feed} />
        ))}
      </div>
    </div>
  );
};

export default Feeds;
