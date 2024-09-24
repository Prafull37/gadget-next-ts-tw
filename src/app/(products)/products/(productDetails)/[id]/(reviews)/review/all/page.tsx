import Reviews from "@/pageTemplates/products/[id]/reviews/all/Reviews";
import { Review } from "@/types/Reviews";

async function getProductReviews(id: string): Promise<{
    reviews:Review[];
  }> {
    try {
      const res = await fetch(
        `${process.env.NEXT_JS_API_ORIGIN}/api/products/${id}/reviews`
      );
      const data = await res.json();

      return data;
    } catch (e) {
      console.error(e);
  
      return {
       reviews:[]
      };
    }
  }


type PageProps = {
    params:{id:string}
}
  

export default  async function Page(props:PageProps){
    const {id} = props.params;
    const {reviews} = await getProductReviews(id);
    
    return <div>
        <Reviews reviews={reviews}/>
    </div>
}