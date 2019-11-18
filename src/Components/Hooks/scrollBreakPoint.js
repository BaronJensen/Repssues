//@flow
import  {useState, useEffect} from 'react';

const useScrollBreakPoint = (scrollDistance: number)=>{

  const [ anchor: bool, setAnchor: (newState: bool) => void] = useState(false);

  useEffect(() => {

      const scrollCallBack: EventTarget = window.addEventListener("scroll", () => {

      if (window.pageYOffset > scrollDistance)
      {
        setAnchor(true);

      } else {
        setAnchor(false);
      }

    });

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    }
    
  }, [scrollDistance]);

return anchor

}

export default useScrollBreakPoint;