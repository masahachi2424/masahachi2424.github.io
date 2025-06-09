import { data } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // 作品の表示
    displayWorks(data.works);
    // コラボレーションの表示
    displayCollaborations(data.collaborations);
    // コンタクトの表示
    displayContact(data.contact);

    // 作品の初期表示
    const tabButtons = document.querySelectorAll('.tab-btn');
    if (tabButtons.length > 0) {
        tabButtons[0].click(); // 最初のタブをクリックして初期表示
    }
});

// 作品の表示関数
function displayWorks(works) {
    const tabButtons = document.querySelectorAll('.tab-btn');

    function showWorks(filter = 'all') {
        const workItems = document.querySelectorAll('.work-item');
        workItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                showWorks(button.dataset.category);
            });
        });
        showWorks('all');
    }
}

// コラボレーションの表示関数
function displayCollaborations(collaborations) {
    const collabList = document.querySelector('.collab-list');
    if (!collabList) return;

    collabList.innerHTML = collaborations.map(collab => `
        <div class="collab-item">
            <div class="collab-year">${collab.year}</div>
            <div class="collab-content">
                <div class="collab-image">
                    <img src="${collab.image}" alt="${collab.title}">
                </div>
                <div class="collab-text">
                    <h3>${collab.title}</h3>
                    <p>${collab.description}</p>
                    ${collab.youtubeVideoId ? `
                        <div class="youtube-embed">
                            <iframe width="100%" height="200" src="https://www.youtube.com/embed/${collab.youtubeVideoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    ` : ''}
                    ${collab.spotifyUrl ? `<a href="${collab.spotifyUrl}" target="_blank" class="work-link spotify-link"><i class="fa-brands fa-spotify"></i> Spotify</a>` : ''}
                    ${collab.appleMusicUrl ? `<a href="${collab.appleMusicUrl}" target="_blank" class="work-link apple-link"><i class="fa-brands fa-apple"></i> Apple Music</a>` : ''}
                    ${collab.youtubeMusicUrl ? `<a href="${collab.youtubeMusicUrl}" target="_blank" class="work-link youtube-link"><i class="fa-brands fa-youtube"></i> YouTube Music</a>` : ''}
                    ${collab.link ? `<a href="${collab.link}" target="_blank" class="collab-link">Listen on Audiostock</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// コンタクトの表示関数
function displayContact(contact) {
    const contactContent = document.querySelector('.contact-content');
    if (!contactContent) return;

    contactContent.innerHTML = `
        <p>${contact.description}</p>
        <div class="contact-buttons">
            ${contact.buttons.map(button => `
                <button class="contact-btn" data-type="${button.type}">${button.text}</button>
            `).join('')}
        </div>
        <p class="sns-note">DMはこちらから</p>
        <div class="contact-sns-icons">
            ${contact.sns.map(sns => `
                <a href="${sns.url}" target="_blank" class="contact-icon ${sns.platform.toLowerCase()}-icon"><i class="fa-brands ${sns.icon}"></i></a>
            `).join('')}
        </div>
    `;

    // お問い合わせフォームの表示
    const contactButtons = document.querySelectorAll('.contact-btn');
    const contactModal = document.getElementById('contact-modal');
    const inquiryTypeInput = document.getElementById('inquiry-type-input');

    contactButtons.forEach(button => {
        button.addEventListener('click', () => {
            contactModal.classList.remove('hidden');
            inquiryTypeInput.value = button.dataset.type;
            const modalTitle = contactModal.querySelector('h3');
            modalTitle.textContent = `お問い合わせフォーム - ${button.dataset.type}`;
        });
    });
}
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // ヘッダーの高さを考慮
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- お問い合わせモーダル機能 ---
    const modal = document.getElementById('contact-modal');
    const contactButtons = document.querySelectorAll('.contact-btn');
    const closeModalBtn = document.querySelector('.modal-close');
    const modalInquiryType = document.querySelector('.modal-content h3'); 
    const inquiryTypeInput = document.getElementById('inquiry-type-input');
    const contactForm = document.getElementById('main-contact-form');
    
    if (modal) {
        contactButtons.forEach(button => {
            button.addEventListener('click', () => {
                const type = button.dataset.type;
                modalInquiryType.textContent = `【 ${type} 】`;
                inquiryTypeInput.value = type;
                modal.classList.remove('hidden');
            });
        });

        const closeModal = () => modal.classList.add('hidden');
        closeModalBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            try {
                // メール送信用のデータを準備
                const emailData = {
                    to: 'rareworkss@gmail.com',
                    subject: `お問い合わせ: ${data['inquiry-type']}`,
                    body: `名前: ${data.name}\n\nメール: ${data.email}\n\nメッセージ:\n${data.message}`
                };

                // メール送信APIのエンドポイント（実際のAPIエンドポイントに置き換えてください）
                const response = await fetch('https://api.example.com/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(emailData)
                });

                if (response.ok) {
                    alert('メッセージを送信しました！ありがとうございます。');
                    contactForm.reset();
                    closeModal();
                } else {
                    throw new Error('メールの送信に失敗しました');
                }
            } catch (error) {
                console.error('エラー:', error);
                alert('メッセージの送信に失敗しました。後でもう一度お試しください。');
            }
        });
    }

    // ページ読み込み時に実行
    window.addEventListener('load', () => {
        // CSSファイルを再読み込み
        const links = document.getElementsByTagName('link');
        for (let link of links) {
            if (link.rel === 'stylesheet') {
                link.href = link.href.replace(/\?v=\d+/, '') + '?v=' + Date.now();
            }
        }

        // キャンバスの初期化
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // パーティクルの設定
        const particles = [];
        const particleCount = 100;
        const colors = ['#00ADB5', '#F95738'];

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * 2;
                this.speedY = (Math.random() - 0.5) * 2;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // 境界のチェック
                if (this.x > canvas.width || this.x < 0) {
                    this.speedX *= -1;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.speedY *= -1;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color.slice(1)}, ${this.opacity})`;
                ctx.fill();
            }
        }

        // パーティクルの生成
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // アニメーションの更新
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        }

        animate();

        // ウィンドウサイズ変更時の処理
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles.forEach(particle => {
                particle.x = Math.random() * canvas.width;
                particle.y = Math.random() * canvas.height;
            });
        });
    });
});