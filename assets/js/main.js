const cardsData = [
    {
      id: 1,
      title:
        "Multiply Your Blessings This Ramadan – Donate to Saylani | Faysal Quraishi",
      date: "Mon Feb 17 2025",
      category: "#Organisation",
      image:
        "https://res.cloudinary.com/saylani-welfare/image/upload/v1739778712/website-images/dynamic/1dc54952-2bce-4ac9-a857-f392a168fe29.png",
      playButton: "download.png",
      videoUrl: "https://www.youtube.com/watch?v=lTBJwItjGXc",
    },
    {
      id: 2,
      title:
        "Saylani Entrepreneurship Certificate Program | IBA - Institute of Business Administration",
      date: "Wed Nov 20 2024",
      category: "#Organisation",
      image:
        "https://res.cloudinary.com/saylani-welfare/image/upload/v1732089529/website-images/dynamic/1c501b97-2ac8-4804-8ac5-8b758acbc5ee.png",
      playButton: "download.png",
      videoUrl: "https://www.youtube.com/watch?v=SbRUVJslyXc",
    },
    {
      id: 3,
      title:
        "Empowering Pakistan's Tech Future with Saylani's SMIT Program | Gitex Global",
      date: "Thu Oct 17 2024",
      category: "#Organisation",
      image:
        "https://res.cloudinary.com/saylani-welfare/image/upload/v1729174555/website-images/dynamic/1934b974-e7e2-4adc-9897-e03c25e4daf1.png",
      playButton: "download.png",
      videoUrl: "https://www.youtube.com/watch?v=xwy8loTLztY",
    },
    {
      id: 4,
      title: "Learn Turkish Language with Saylani | Enroll Now",
      date: "Thu Oct 17 2024",
      category: "#Organisation",
      image:
        "https://res.cloudinary.com/saylani-welfare/image/upload/v1729173280/website-images/dynamic/5b0e8edb-5db9-4cc4-9b36-79967f12841a.png",
      playButton: "download.png",
      videoUrl: "https://www.youtube.com/watch?v=3If-o-yQ8X8",
    },
    {
      id: 5,
      title:
        "System Design & Architecture Course | Saylani Mass IT Training | Zaitoon Ashraf IT Park by Saylani",
      date: "Sun Oct 06 2024",
      category: "#Organisation",
      image:
        "https://res.cloudinary.com/saylani-welfare/image/upload/v1728225865/website-images/dynamic/f550b3f7-814a-43c9-8e29-e0f825c25991.png",
      playButton: "download.png",
      videoUrl: "https://www.youtube.com/watch?v=wn_oAwP_EKY",
    },
    {
      id: 6,
      title: "Mobile on easy installment | Maulana Bashir Farooq Qadri",
      date: "Sun Oct 06 2024",
      category: "#Organisation",
      image:
        "https://res.cloudinary.com/saylani-welfare/image/upload/v1728225743/website-images/dynamic/fbf3bb3b-5dcc-41a9-9e47-8f8ccebc4f95.png",
      playButton: "download.png",
      videoUrl: "https://www.youtube.com/watch?v=aNgs5T205Rg",
    },
    {
      id: 7,
      title:
        "Saylani Welfare's REVOLUTIONARY Approach to Saving the Planet in 2024",
      date: "Sun Oct 06 2024",
      category: "#Organisation",
      image:
        "https://res.cloudinary.com/saylani-welfare/image/upload/v1728225401/website-images/dynamic/f2dddb69-7f09-4155-8d56-821a00343dc8.png",
      playButton: "download.png",
      videoUrl: "https://www.youtube.com/watch?v=qlaGquTSW9s",
    },
    {
      id: 8,
      title:
        "Saylani's 2024 Documentary | Shining Light Through Countless Initiatives",
      date: "Sun Oct 06 2024",
      category: "#Organisation",
      image:
        "https://res.cloudinary.com/saylani-welfare/image/upload/v1728224848/website-images/dynamic/aee01074-6fe9-4bff-aec9-0c8b6133904d.png",
      playButton: "download.png",
      videoUrl: "https://www.youtube.com/watch?v=Nepg8S-4wHQ",
    },
  ];

  // Function to convert YouTube URL to embed URL
  function getYouTubeEmbedUrl(url) {
    const videoId = url.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // Function to display cards dynamically
  function displayCards() {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";

    cardsData.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.className =
        "relative w-80 h-[400px] flex flex-col justify-between  ";

      cardElement.innerHTML = `
                <div class="relative w-full h-[240px] rounded-lg bg-cover bg-center overflow-hidden flex items-center justify-center group"
                    style="background-image: url('${card.image}');">
                    
                    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>
                    
                    <!-- Date Badge -->
                    <div class="date-badge">
                        <span class="text-sm font-medium text-black">${card.date}</span>
                    </div>

                    <!-- Play Button -->
                    <button class="absolute transform scale-90 opacity-90 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 play-btn" data-id="${card.id}">
                        <i class="fa-solid fa-play"></i>
                    </button>
                </div>

                <div class="relative w-full h-[150px] bg-white custom-border-radius rounded-tr-none shadow-lg">
                    <div class="absolute top-[-80px] right-0 w-1/2 h-20 bg-white border-t-[10px] border-l-[10px] border-yellow-800 rounded-tl-2xl overflow-hidden">
                        <span class="block px-4 py-2 mt-4 mx-3 text-center text-sm font-semibold text-white bg-green-500 rounded-lg">
                            ${card.category}
                        </span>
                    </div>
                    <div class="flex flex-col items-center justify-center h-full text-purple-400 px-4">
                        <p class="text-lg font-medium text-pink-700 text-center line-clamp-2">${card.title}</p>
                    </div>
                </div>
            `;

      cardContainer.appendChild(cardElement);
    });
  }

  // Function to open modal and show video
  function openModal(card) {
    const embedUrl = getYouTubeEmbedUrl(card.videoUrl);
    document.getElementById("modalTitle").textContent = card.title;
    document.getElementById("modalDate").textContent = card.date;
    document.getElementById("modalCategory").textContent = card.category;
    document.getElementById("modalVideo").src = embedUrl;
    document.getElementById("modal").classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  // Function to close modal
  function closeModal() {
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("modalVideo").src = "";
    document.body.style.overflow = "auto";
  }

  // Event Listeners
  document.addEventListener("DOMContentLoaded", displayCards);

  document.addEventListener("click", function (event) {
    const playBtn = event.target.closest(".play-btn");
    if (playBtn) {
      const cardId = playBtn.getAttribute("data-id");
      const selectedCard = cardsData.find((card) => card.id == cardId);
      openModal(selectedCard);
    }
  });

  // Close button event listener
  document
    .getElementById("closeModal")
    .addEventListener("click", closeModal);

  // Background click event listener
  document.getElementById("modal").addEventListener("click", (event) => {
    if (event.target.id === "modal") {
      closeModal();
    }
  });

  // Handle escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll(".num");
    
    counters.forEach((counter) => {
      let target = +counter.getAttribute("data-val");
      let count = 0;
      let speed = target / 50; 
    
      function updateCount() {
        if (count < target) {
          count += speed;
          counter.textContent = Math.floor(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target;
        }
      }
    
      updateCount();
    });
  });