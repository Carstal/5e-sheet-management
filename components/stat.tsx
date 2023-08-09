import { FC , useState, useEffect } from "react";

interface StatParams {
  name: string;
  num: number;
}

const StatBlock: FC<StatParams> = ({ name, num }) => {

    const stat = validateScore(num);
    const [count, setCount] = useState(stat);
    const [mod, setMod] = useState(calcMod(stat));
    const [modPrefix, setModPrefix] = useState(mod >= 0 ? '+': '');

    const increment = () => {
      if(count != 30)
        setCount(count + 1);
    };

    const decrement = () => {
      if(count != 0)
        setCount(count - 1);
    };

    // const updateMod = (stat: number) =>{
    //   setMod(calcMod(stat));
    //   setModPrefix(mod >= 0 ? '+': '');
    // };

    useEffect(()=>{
      setMod(calcMod(count));
      setModPrefix(mod >= 0 ? '+': '');
    },[count]);

  return (
    <div className="flex max-w-xs flex-col rounded-xl bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4 m-5 text-white hover:bg-white/20 h-32">
        <div className="flex flex-row justify-between">
          <h3 className="text-2xl font-bold">{name}</h3>
          <h3 className="pr-5 text-2xl font-bold">{modPrefix}{mod}</h3>
        </div>
        <div className="mt-5 flex h-10 w-full flex-row rounded-lg bg-transparent">
          <div className="flex flex-row w-1/2 justify-start">
            <button
              onClick={decrement}
              data-action="decrement"
              className=" h-full w-5/12 cursor-pointer rounded-l bg-gray-300 p-1 text-gray-600 outline-none hover:bg-gray-400 hover:text-gray-700 border-r-2"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <button
              onClick={increment}
              data-action="increment"
              className="h-full w-5/12 cursor-pointer rounded-r bg-gray-300 p-1 text-gray-600 hover:bg-gray-400 hover:text-gray-700 border-l-2"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
            </div>
          <div className="flex flex-row w-1/2">
          <input
            type="number"
            className="flex w-full items-center rounded-md bg-gray-300 p-1.5 text-center text-2xl font-semibold text-gray-700  outline-none hover:text-black focus:text-black  focus:outline-none mr-5"
            name="custom-input-number"
            id={name}
            value={count}
            onChange={(e)=> setCount(parseInt(e.target.value))}
          ></input>
          </div>
        </div>
      </div>
  );
};


function calcMod(score: number){
    if(score == 30){
      return 10;
    }
    else if(score > 27){
      return 9;
    }
    else if(score > 25){
      return 8;
    }
    else if(score > 23){
      return 7;
    }
    else if(score > 21){
      return 6;
    }
    else if(score > 19){
      return 5;
    }
    else if(score > 17){
      return 4;
    }
    else if(score > 15){
      return 3;
    }
    else if(score > 13){
      return 2;
    }
    else if(score > 11){
      return 1;
    }
    else if(score > 9){
      return 0;
    }
    else if(score > 7){
      return -1;
    }
    else if(score > 5){
      return -2;
    }
    else if(score > 3){
      return -3;
    }
    else if(score > 1){
      return -4;
    }
    else{
      return -5;
    }
  }

  function validateScore(score: number){
    if(score < 1)
      return 1;
    else if(score > 30)
      return 30;
    else
    return score;
  }

export default StatBlock;
