// scrolling effect
document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
});

// format phone number input
function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, ""); // Remove non-digit characters
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}

function phoneNumberFormatter(e) {
  const input = e.target;
  const cleaned = input.value.replace(/[^\d]/g, ""); // Keep only digits
  input.value = formatPhoneNumber(cleaned);
}

document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", phoneNumberFormatter);
});

// slider on small screens
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//successful msg fade out
setTimeout(() => {
  const msg = document.getElementById("msg");
  if (msg) {
    msg.classList.remove("opacity-100");
    msg.classList.add("opacity-0");

    // Hide completely after fade-out
    setTimeout(() => {
      msg.style.display = "none";
    }, 500); // Match this to your duration-500
  }
}, 1500);
