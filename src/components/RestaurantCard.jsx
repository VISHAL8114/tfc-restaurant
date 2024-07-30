import { CDN_URL } from "../utils/constants";

const Rescard = (props) => {
    const { resData } = props;
    const {name,cloudinaryImageId,cuisines,avgRating,costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info.sla;

    return (
        <div className="w-52 h-[488px] bg-white rounded-lg cursor-pointer hover:shadow-2xl p-4">
            <img
                className="w-full rounded-t-lg hover:opacity-80"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <div className="flex flex-col text-left mt-4">
                <h3 className="text-xl font-bold">{name}</h3>
                <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
                <h4 className="text-gray-600">Rating: {avgRating}</h4>
                <h4 className="text-gray-600">{costForTwo}</h4>
                <h4 className="text-gray-600">{deliveryTime} minutes</h4>
            </div>
        </div>
    );
};

export default Rescard;
