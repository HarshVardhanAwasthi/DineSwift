import { useEffect, useState } from "react";
import { RESITM_URL } from "./common";

const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    console.log("calling api");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(RESITM_URL + resId);

    const json = await response.json();
    const data = json?.data?.cards[2]?.card?.card?.info;
    const data2 =json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards


    // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    setResMenu(data2);
    setResInfo(data);
  };

  return { resInfo, resMenu };
};

export default useRestaurantInfo;
