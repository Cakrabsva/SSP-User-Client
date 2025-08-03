import "../index.css"
import sampleImport1 from "../assets/sample1.jpg"
import sampleImport2 from "../assets/sample2.jpg"
import sampleImport3 from "../assets/sample3.jpg"
import { useKeenSlider } from "keen-slider/react"
import { Link } from 'react-router-dom';
import "keen-slider/keen-slider.min.css"

export default function PromotionSlider() {
  // const [sliderRef] = useKeenSlider({
  //   loop: true,
  //   slides: {
  //     perView: 1,
  //   },
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center px-6">
          <p className="text-xl font-semibold">Promotions</p>
          <Link className="text-blue-500 font-semibold">View all</Link>
      </div>
      <div ref={sliderRef} className="keen-slider relative z-0">
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
    </div>
  )
}