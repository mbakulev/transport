import { useEffect, useState } from "react"
import Inspector from "../inspector"
import Passengers from "../passengers"
import Advert from "../socialAdvert"
import Admin from "../admin"
import './style.css'

const Controller = () => {

    const [passengersCount, setPassengersCount] = useState(0)
    const [notPassengersCount, setNotPassengersCount] = useState(0)
    const [screenNumber, setScreenNumber] = useState(0)
    // const [counter, setCounter] = useState(30);
    useEffect(
      () => {
        const id = setInterval(() => {
          // setCounter(getRandomInt(10));
          // console.log(notPassengersCount)
          // setPassengersCount(getRandomInt(10) + 10)
          // setNotPassengersCount(getRandomInt(10))
          // setScreenNumber(calculateScreenNumber())
          // console.log(screenNumber)
          all()
          // calculateScreenNumber()
        }, 2000);
        return () => {
          clearInterval(id);
        };
      },
      [] // empty dependency array
    );

    const all = () => {
        let pass = getRandomInt(10) + 10
        let freePass = getRandomInt(10)
        setPassengersCount(pass)
        setNotPassengersCount(freePass)
        if (freePass  > pass / 2) {
            setScreenNumber(1)
        } else {
            setScreenNumber(0)
        }
    }

    const calculateScreenNumber = () => {
        // console.log("screen number before= ", screenNumber)
        // if (screenNumber == 0) return 1
        // if ((screenNumber == 1) && (notPassengersCount > passengersCount / 2)) {
        //     return 2
        // } else {
        //     return 0
        // }
        if (notPassengersCount  > passengersCount / 2) {
            return 2
        } else {
            return 0
        }
        // if (setScreenNumber == 2) setScreenNumber(0)
        // console.log("screen number after = ", screenNumber)
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const returnScreenData = () => {
        const result = []
        // console.log("screen number = ", screenNumber)
        switch(screenNumber) {
            case 0: {
                result.push(<Passengers
                    passengersCount={passengersCount}
                    notPassengersCount={notPassengersCount}
                    />)
                result.push(<Advert />)
                break
            }
            // case 1: {
            //     result.push(<Passengers
            //         passengersCount={passengersCount}
            //         notPassengersCount={notPassengersCount}
            //         />)
            //     result.push(<Advert />)
            //     break
            // }
            case 2: {
                result.push(<Passengers
                    passengersCount={passengersCount}
                    notPassengersCount={notPassengersCount}
                    />)
                result.push(<Inspector />)
                break
            }
            // default: {
            //     result.push(<Passengers
            //         passengersCount={passengersCount}
            //         notPassengersCount={notPassengersCount}
            //         />)
            //     result.push(<Advert />)
            //     break
            // }
        }

        // console.log(result)
        return result
    }

    return (
        <>
            <Admin />
            {/* <div class="container"
                style={{ "display": "flex", "justify-content": "center", "align-items": "center", "height": "100vh", "paddingLeft": "300px" }}>
                <Passengers
                    passengersCount={passengersCount}
                    notPassengersCount={notPassengersCount}
                />
                {screenNumber ? <Inspector /> : <Advert />}
            </div> */}
        </>
    )
}

export default Controller