document.addEventListener('DOMContentLoaded', async () => {
  const worksDiv = document.getElementById('worksDiv');
  try {
    const response = await fetch("./works.json");
    const worksContent = await response.json();

    for (let i = 0; i < worksContent.length; i++) {
        const works = worksContent[i];
        worksDiv.innerHTML += `
          <div class="work-item" data-category="${works.category}">
            <img src="${works.image}" alt="${works.title}">
            <div class="work-item-content">
              <h3>${works.title}</h3>
              <p>${works.description}</p>
              <div class="work-links">
                <a href="${works.spotifyUrl}" target="_blank" class="work-link spotify-link"><i class="fa-brands fa-spotify"></i>Spotify</a> 
                <a href="${works.appleMusicUrl}" target="_blank" class="work-link apple-link"><i class="fa-brands fa-apple"></i>Apple Music</a>
                <a href="${works.youtubeMusicUrl}" target="_blank" class="work-link youtube-link"><i class="fa-brands fa-youtube"></i>YouTube Music</a>
              </div>
            </div>
          </div>
      `;
    }
  } catch (error) {
    console.error('JSONの読み込み失敗:', error);
  }
});

