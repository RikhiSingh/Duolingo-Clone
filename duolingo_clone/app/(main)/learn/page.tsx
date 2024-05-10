import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";

const LearnPage = () => {
    return ( 
        <div className="flex gap-[48px] px-6">
            <FeedWrapper>
                My Feed
            </FeedWrapper>
            <StickyWrapper>
                My sticky sidebar
            </StickyWrapper>
        </div>
     );
}
 
export default LearnPage;