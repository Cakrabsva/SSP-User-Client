import "../index.css"
import sampleImport1 from "../assets/sample1.jpg"
import sampleImport2 from "../assets/sample2.jpg"
import sampleImport3 from "../assets/sample3.jpg"
import { useKeenSlider } from "keen-slider/react"

export default function PromotionSlider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider ">
        <div className="keen-slider__slide flex items-center justify-center">
            <img className="rounded-3xl" src={sampleImport1} alt="" />
        </div>
        <div className="keen-slider__slide flex items-center justify-center">
            <img className="rounded-3xl" src={sampleImport2} alt="" />
        </div>
        <div className="keen-slider__slide flex items-center justify-center">
            <img className="rounded-3xl" src={sampleImport3} alt="" />
        </div>
    </div>
  )
}