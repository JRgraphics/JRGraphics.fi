import avaruus from "./assets/images/avaruus_poster-min.jpg";
import cccp from "./assets/images/CCCP_poster-min.jpg";
import disko from "./assets/images/disko_poster-min.jpg";
import fwr from "./assets/images/FWR_poster-min.jpg";
import ghetto from "./assets/images/ghetto_poster-min.jpg";
import jungle from "./assets/images/jungle_poster-min.jpg";
import melt from "./assets/images/melt_poster-min.jpg";

export const slides = [
  {
    key: 0,
    content: <img className="fade-in" src={avaruus} alt="1" />,
  },
  {
    key: 1,
    content: <img className="fade-in" src={cccp} alt="2" />,
  },
  {
    key: 2,
    content: <img className="fade-in" src={disko} alt="3" />,
  },
  {
    key: 3,
    content: <img className="fade-in" src={fwr} alt="4" />,
  },
  {
    key: 4,
    content: <img className="fade-in" src={ghetto} alt="5" />,
  },
  {
    key: 5,
    content: <img className="fade-in" src={jungle} alt="6" />,
  },
  {
    key: 6,
    content: <img className="fade-in" src={melt} alt="7" />,
  },
];
