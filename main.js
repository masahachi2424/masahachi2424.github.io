document.addEventListener('DOMContentLoaded', () => {

    // --- 作品データ ---
    const worksData = [
        // 画像パスを実際のファイル名に更新
        { title: 'MAURE Wave', category: 'lofi', image: 'images/maure-wave.jpg', year: 2023, description: 'Tapeサチュレーションとアナログシンセの温かみが特徴。', isLicensed: false },
        { title: 'AinuEra', category: 'world', image: 'images/ainuera.jpg', year: 2022, description: '民族フルート・伝統打楽器・環境音をレイヤー。', isLicensed: false },
        { title: 'Night Cruise on the Chao Phraya River', category: 'bgm', image: 'images/oriental-20.jpg', year: 2022, description: '『Oriental Vol.20』収録。ライセンス向けにミックスを最適化。', isLicensed: true },
        { title: 'Tape Stop Nostalgic', category: 'lofi', image: 'images/rb-11.jpg', year: 2021, description: '『R&B Vol.11』収録。テープストップと分厚いRhodesサウンド。', isLicensed: true },
    ];

    const workGrid = document.querySelector('.work-grid');
    const tabButtons = document.querySelectorAll('.tab-btn');

    function displayWorks(filter = 'all') {
        if (!workGrid) return;
        workGrid.innerHTML = '';
        const filteredWorks = (filter === 'all')
            ? worksData
            : worksData.filter(work => work.category === filter);

        filteredWorks.forEach(work => {
            const workItem = document.createElement('div');
            workItem.className = 'work-item show';
            workItem.innerHTML = `
                <img src="${work.image}" alt="${work.title}">
                <div class="work-item-content">
                    ${work.isLicensed ? '<span class="licensed-badge">Licensed ★</span>' : ''}
                    <h3>${work.title} (${work.year})</h3>
                    <p>${work.description}</p>
                </div>
            `;
            workGrid.appendChild(workItem);
        });
    }

    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                displayWorks(button.dataset.category);
            });
        });
        displayWorks('all');
    }

    // --- スムーズスクロール ---
    const navLinks = document.querySelectorAll('.nav-links a');
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

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            console.log('フォームデータ:', data);
            alert('メッセージを送信しました！ありがとうございます。');
            contactForm.reset();
            closeModal();
        });
    }
});