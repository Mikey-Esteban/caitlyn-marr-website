import React, { useState, useRef, useEffect } from "react";

import { ArrowLeftShort } from '@styled-icons/bootstrap/ArrowLeftShort';
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort';
import styled from "styled-components";

const Wrapper = styled.div`
  height: 450px;
  max-width: 100%;
  width: 100%;
  margin: 20px auto;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  position: relative;

  display: flex;
  justify-content: flex-start;
`;

const Slider = styled.div`
  /* width needs to be length of array * 100 for photos */
  width: 500%;

  display: flex;
  flex-shrink: 0;
  transition: all 1s;

  section {
    flex: 1;
  }
`;

const Controls = styled.div`
  .arrow {
    position: absolute;
    top: 40%;

    cursor: pointer;
  }

  .arrow.prev {
    left: 5rem;
  }
  .arrow.next {
    right: 5rem;
  }

  @media only screen and (max-width: 1000px) {
    .arrow.prev {
      left: 4rem;
    }
    .arrow.next {
      right: 4rem;
    }
  }

  @media only screen and (max-width: 850px) {
    .arrow.prev {
      left: 3rem;
    }
    .arrow.next {
      right: 3rem;
    }
  }

  @media only screen and (max-width: 800px) {
    .arrow.prev {
      left: 2rem;
    }
    .arrow.next {
      right: 2rem;
    }
  }

  @media only screen and (max-width: 750px) {
    .arrow.prev {
      left: 1rem;
    }
    .arrow.next {
      right: 1rem;
    }
  }

  @media only screen and (max-width: 675px) {
    .arrow.prev {
      left: 0;
    }
    .arrow.next {
      right: 0;
    }
  }
`;



const Carousel = ({multiMedia, isPhoto}) => {
  // useRefs
  const sliderRef = useRef(null);
  const carouselRef = useRef(null);
  const section1Ref = useRef(null);

  useEffect(() => {
    // add event listening for clicks
    const section1 = section1Ref.current;

    const slider = sliderRef.current;
    const carousel = carouselRef.current;
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let direction;

    // translate to the left
    prev.addEventListener("click", () => {
      // if direction is changing
      direction === "right" && slider.appendChild(slider.firstElementChild);

      carousel.style.justifyContent = "flex-end";

      // divide by length of array
      slider.style.transform = `translateX(${100.0 / multiMedia.length}%)`;
    });

    // translate to the right
    next.addEventListener("click", () => {
      // if direction is changing
      direction === "left" && slider.prepend(slider.lastElementChild);

      carousel.style.justifyContent = "flex-start";
      slider.style.transform = `translateX(-${100.0 / multiMedia.length}%)`;
    });

    slider.addEventListener("transitionend", () => {
      console.log("SLIDER RUNNING");
      carousel.style.justifyContent === "flex-start"
        ? (direction = "right")
        : (direction = "left");

      // find if left or right move
      direction === "right"
        ? // move 0th element to the end
          slider.appendChild(slider.firstElementChild)
        : // move last element to the beginning
          slider.prepend(slider.lastElementChild);

      // shift the translate back to 0
      slider.style.transition = "none";
      slider.style.transform = "translateX(0)";

      setTimeout(() => {
        slider.style.transition = "all 1s";
      }, 10);
    });
  }, []);

  const section0Style = {
    background: `url(${multiMedia[0]})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };

  const section1Style = {
    background: `url(${multiMedia[1]})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const section2Style = {
    background: `url(${multiMedia[2]})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };

  const section3Style = {
    background: `url(${multiMedia[3]})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };

  const section4Style = {
    background: `url(${multiMedia[4]})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };

  return (
    <Wrapper>
      <CarouselWrapper ref={carouselRef}>
        { isPhoto &&
          <Slider ref={sliderRef} isPhoto={true} >
            <section style={section0Style}>
            </section>
            <section style={section1Style} ref={section1Ref}>
            </section>
            <section style={section2Style}>
            </section>
            <section style={section3Style}>
            </section>
            <section style={section4Style}>
            </section>
          </Slider>
        }
        <Controls isPhoto={isPhoto} >
          <span className="arrow prev">
            <ArrowLeftShort size={48} />
          </span>
          <span className="arrow next">
            <ArrowRightShort size={48} />
          </span>
        </Controls>
      </CarouselWrapper>
    </Wrapper>
  );
};

export default Carousel;
