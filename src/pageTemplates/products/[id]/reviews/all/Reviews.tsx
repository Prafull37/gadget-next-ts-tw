import _map from 'lodash/map'
import _get from 'lodash/get'


import { Review } from "@/types/Reviews"
import { twMerge } from "tailwind-merge";
import Card from "../../components/Card/Card";
import { FaUser } from "react-icons/fa6";

type ReviewProps = {
    reviews: Review[]
}

const RATING_STATUS_VS_COLOR = {
    '1': 'bg-red-500',
    '2': 'bg-orange-500',
    '3': 'bg-yellow-500',
    '4': 'bg-green-400',
    '5': 'bg-green-500',
};


export default function Reviews(props: ReviewProps) {
    const { reviews } = props;
    return (<Card>
        {_map(reviews, (reviewObject: Review, index: number) => (<div key={_get(reviewObject, 'id')} className={twMerge("w-full p-2", index > 0 ? "border-t" : "")}>
            <div className={"flex justify-between"}>
                <span className={twMerge("text-xs mr-2 p-2 h-8 flex  items-center text-white", _get(RATING_STATUS_VS_COLOR, `${Math.floor(_get(reviewObject, 'rating'))}`))}>
                    <span className="mr-2">&#9733;</span>
                    <span>{_get(reviewObject, 'rating')}</span>
                </span>
                <span className="text-xs">{_get(reviewObject, 'review')}</span>
            </div>
            <div className="flex items-center mt-3">
                <span className="text-xs flex mr-2">
                    <FaUser className="mr-2" />
                    {_get(reviewObject, 'user')}
                </span>
                <span className='text-xs mr-2'>on</span>
                <span className="text-xs">{new Date(_get(reviewObject, 'date')).toLocaleDateString()}</span>
            </div>
        </div>))}
    </Card>)
}