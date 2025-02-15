const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

window.onload = getLocation;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.querySelector(".location").innerText =
      "이 브라우저는 Geolocation을 지원하지 않습니다.";
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // 위도와 경도를 도-분-초 형식으로 변환
  const latitudeFormatted = convertToDMS(latitude, true);
  const longitudeFormatted = convertToDMS(longitude, false);

  document.querySelector(
    ".location"
  ).innerText = `${latitudeFormatted} ${longitudeFormatted}`;
  document.querySelector(
    ".nav .location"
  ).innerText = `${latitudeFormatted} ${longitudeFormatted}`;
}

function convertToDMS(coord, isLatitude) {
  const absolute = Math.abs(coord);
  const degrees = Math.floor(absolute);
  const minutes = Math.floor((absolute - degrees) * 60);
  const seconds = ((absolute - degrees - minutes / 60) * 3600).toFixed(2); // 소수점 포함

  const direction =
    coord >= 0 ? (isLatitude ? "N" : "E") : isLatitude ? "S" : "W";

  return `${degrees}°${minutes}′${seconds}″${direction}`;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("사용자가 위치 정보 제공을 거부했습니다.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("위치 정보를 사용할 수 없습니다.");
      break;
    case error.TIMEOUT:
      alert("요청 시간이 초과되었습니다.");
      break;
    default:
      alert("알 수 없는 오류가 발생했습니다.");
      break;
  }
}

const menuButton = document.querySelector(".btn_burger");
const nav = document.querySelector(".nav");
const navLinks = nav.querySelectorAll(".nav_link");
const burgerMenuButton = document.querySelector(".btn_burger");

const documentBody = document.querySelector(".body");


menuButton.addEventListener("click", (e) => {
  if (e.target.ariaExpanded === "false") {
    openBurgerMenu();
  } else {
    closeBurgerMenu();
  }
});

function openBurgerMenu() {
  nav.classList.add("is_active");
  burgerMenuButton.setAttribute("aria-expanded", "true");
  documentBody.classList.add("scroll_hide");
  burgerMenuButton.innerHTML = "CLOSE";
}

function closeBurgerMenu() {
  nav.classList.remove("is_active");
  burgerMenuButton.setAttribute("aria-expanded", "false");
  documentBody.classList.remove("scroll_hide");
  burgerMenuButton.innerHTML = "MENU";
}

navLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.remove("is_active");
    closeBurgerMenu()
    const targetId = item.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId); 

    if (targetElement) {
      gsap.to(window, {
        scrollTo: targetElement, 
        duration: 2,
        ease: "cubic-bezier(0.36, 0.3, 0, 1)", 
      });
    }
  });
});

const iconArrow = documentBody.querySelector(".icon_arrow svg path");
const iconTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects_wrap",
    scrub: 1,
    start: "0% 100%",
    end: "0% 0%",
    markers: false,
  },
});
iconTl.to(".icon_arrow svg path", { opacity: 0 });


const sloganTitles = document.querySelectorAll(".slogan_text");
const subSlogan = document.querySelector(".sub_slogan_text");
const groupElements = [sloganTitles[2], subSlogan];
const sloganTl = gsap.timeline({ repeat: 0 });

sloganTl
  .fromTo(
    sloganTitles[0],
    { opacity: 0, scale: 0.4 },
    { opacity: 1, scale: 1, duration: 0.3 }
  )
  .fromTo(
    sloganTitles[1],
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.2 },
    "+=0.01"
  )
  .fromTo(
    groupElements,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.2, stagger: 0 },
    "+=0.01"
  );

const inTroTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects_wrap",
    scrub: 3,
    start: "0% 80%",
    end: "0% 50%",
    markers: false,
  },
});

inTroTl
.to(".section_slogan", { opacity: 0 })

const introductionpageTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects_wrap",
    scrub: 0,
    start: "0 0",
    end: "100% 100%",
    markers: false,
  },
});

introductionpageTl
  .to(".projects_wrap .section_project:nth-child(2)", { width: "100%" }, "a")
  .to(
    ".projects_wrap .section_project:nth-child(2)",
    { transform: "translateY(0)" },
    "a+=0.1"
  )
  .to(".projects_wrap .section_project:nth-child(1)", { opacity: 0 }, "a+=0.1")

  .to(
    ".projects_wrap .section_project:nth-child(3)",
    { transform: "translateY(0)" },
    "b"
  )
  .to(".projects_wrap .section_project:nth-child(3)", { width: "100%" }, "b")
  .to(".projects_wrap .section_project:nth-child(2)", { opacity: 0 }, "b-=0.1")

  .to(
    ".projects_wrap .section_project:nth-child(4)",
    { transform: "translateY(0)" },
    "c"
  )
  .to(".projects_wrap .section_project:nth-child(4)", { width: "100%" }, "c")
  .to(".projects_wrap .section_project:nth-child(3)", { opacity: 0 }, "c-=0.1")

  .to(
    ".projects_wrap .section_project:nth-child(5)",
    { transform: "translateY(0)" },
    "d"
  )
  .to(".projects_wrap .section_project:nth-child(5)", { width: "100%" }, "d")
  .to(".projects_wrap .section_project:nth-child(4)", { opacity: 0 }, "d-=0.1")

  .to(
    ".projects_wrap .section_project:nth-child(6)",
    { transform: "translateY(0)" },
    "e"
  )
  .to(".projects_wrap .section_project:nth-child(6)", { width: "100%" }, "e")
  .to(".projects_wrap .section_project:nth-child(5)", { opacity: 0 }, "e-=0.1")

  .to(
    ".projects_wrap .section_project:nth-child(7)",
    { transform: "translateY(0)" },
    "f"
  )
  .to(".projects_wrap .section_project:nth-child(7)", { width: "100%" }, "f")
  .to(".projects_wrap .section_project:nth-child(6)", { opacity: 0 }, "f-=0.1")

  .to(
    ".projects_wrap .section_project:nth-child(8)",
    { transform: "translateY(0)" },
    "g"
  )
  .to(".projects_wrap .section_project:nth-child(8)", { width: "100%" }, "g")
  .to(".projects_wrap .section_project:nth-child(7)", { opacity: 0 }, "g-=0.1")

  .to(
    ".projects_wrap .section_project:nth-child(9)",
    { transform: "translateY(0)" },
    "h"
  )
  .to(".projects_wrap .section_project:nth-child(9)", { width: "100%" }, "h")
  .to(".projects_wrap .section_project:nth-child(8)", { opacity: 0 }, "h-=0.1")

  .to(
    ".projects_wrap .section_project:nth-child(10)",
    { transform: "translateY(0)" },
    "i"
  )
  .to(".projects_wrap .section_project:nth-child(10)", { width: "100%" }, "i")
  .to(".projects_wrap .section_project:nth-child(9)", { opacity: 0 }, "i-=0.1")

  .to(
    ".projects_wrap .section_project:nth-child(11)",
    { transform: "translateY(0)" },
    "j"
  )
  .to(".projects_wrap .section_project:nth-child(11)", { width: "100%" }, "j")
  .to(".projects_wrap .section_project:nth-child(10)", { opacity: 0 }, "j-=0.1");




const createSwiper = (selector, options) => new Swiper(selector, options);

const commonA11ySettings = {
  enabled: true,
  containerMessage: "프로모션 슬라이드 영역입니다.",
  slideLabelMessage:
    "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.",
  firstSlideMessage: "첫번째 슬라이드입니다.",
  lastSlideMessage: "마지막 슬라이드입니다.",
  paginationBulletMessage: "{{index}}번째 슬라이드로 이동합니다.",
  containerRoleDescriptionMessage: "Carousel",
  itemRoleDescriptionMessage: "Slide",
  slideRole: "listitem",
};

createSwiper(".section_log .swiper", {
  a11y: commonA11ySettings,
  pagination: { el: ".pagination", clickable: true },
  navigation: {
    nextEl: ".btn_next",
    prevEl: ".btn_prev",
  },

  slidesPerView: 2,
});

const goalArea = gsap.utils.toArray(".goal_area");
const goalHeadline = document.querySelector(".section_goal .headline_wrap");

ScrollTrigger.matchMedia({
  "(min-width: 921px)": function () {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section_goal .headline_wrap",
        start: "0% 20%",
        end: `+=${(goalArea.length - 1) * window.innerHeight}`,
        pin: true,
        pinSpacing: false,
        scrub: 1,
        markers: false,
      },
    });
    goalArea.forEach((element, index) => {
      if (index !== goalArea.length - 1) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "0% 20%",
            end: "bottom 20%",
            pin: true,
            pinSpacing: false,
            scrub: 1,
            markers: false,
          },
        });
        timeline.to(element, { opacity: 0 });
      }
    });
  },
  "(max-width: 920px)": function () {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section_goal .headline_wrap",
        start: "0% 15%",
        end: `+=${(goalArea.length - 1) * window.innerHeight}`,
        pin: true,
        pinSpacing: false,
        scrub: 1,
        markers: false,
      },
    });
    goalArea.forEach((element, index) => {
      if (index !== goalArea.length - 1) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "0% 45%",
            end: "100% 0%",
            pin: true,
            pinSpacing: false,
            scrub: 1,
            markers: false,
            onEnter: () => console.log(index),
          },
        });
        timeline.to(element, { opacity: 0 });
      }
    });
  },
});

const panels = document.querySelectorAll(".to_right_text");
const topPanel = document.querySelector(".to_right");
const bottomPanel = document.querySelector(".to_left");
const reversePanels = document.querySelectorAll(".to_left_text");

gsap.to(panels, {
  xPercent: -50 * (panels.length - 1),
  scrollTrigger: {
    trigger: topPanel,
    start: "0% 100%",
    end: "100% 0%",
    markers: false,
    scrub: 1,
    end: () => `+=${topPanel.offsetWidth}`,
  },
});

gsap.from(reversePanels, {
  xPercent: -50 * (reversePanels.length - 1),
  scrollTrigger: {
    trigger: bottomPanel,
    start: "0% 100%",
    end: "100% 0%",
    markers: false,
    scrub: 1,
    end: () => `+=${bottomPanel.offsetWidth}`,
  },
});

function scrambleText(element, originalText, duration = 200) {
  const intervalTime = 50;
  const iterations = duration / intervalTime;
  let currentIteration = 0;

  const scrambleInterval = setInterval(() => {
    let scrambledText = "";

    for (let i = 0; i < originalText.length; i++) {
      if (currentIteration < iterations) {
        scrambledText +=
          originalText[Math.floor(Math.random() * originalText.length)];
      } else {
        scrambledText = originalText;
        clearInterval(scrambleInterval);
      }
    }
    element.textContent = scrambledText;
    currentIteration++;
  }, intervalTime);
}

const profileItems = document.querySelectorAll(".profile_item");

profileItems.forEach((item) => {
  const textElement = item.querySelector(".text");
  const dateElement = item.querySelector(".date");

  const originalText = textElement.textContent;
  const originalDate = dateElement.textContent;

  item.addEventListener("mouseenter", () => {
    scrambleText(textElement, originalText, 200);
    scrambleText(dateElement, originalDate, 200);
  });

  item.addEventListener("mouseleave", () => {
    textElement.textContent = originalText;
    dateElement.textContent = originalDate;
  });
});
