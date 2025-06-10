// データ構造を整理
export const data = {
    // 作品データ
    works: [
        { 
            title: 'MAURE Wave', 
            category: 'lofi', 
            image: 'images/maure-wave.jpg', 
            year: 2023, 
            description: 'Tapeサチュレーションとアナログシンセの温かみが特徴。', 
            url: 'https://share.amuse.io/track/otodoke-sound-maure-wave', 
            spotifyUrl: 'https://open.spotify.com/intl-ja/track/1rr0X5PaMziJzYGhNDqZLB?utm_source=1101lBnYGnYf&utm_medium=Indie_Amuse&utm_campaign=labelaffiliate', 
            appleMusicUrl: 'https://music.apple.com/us/album/maure-wave/1697116173?i=1697116175', 
            youtubeMusicUrl: 'https://music.youtube.com/watch?v=-PVDalXifCI' 
        },
        { 
            title: 'AinuEra', 
            category: 'world', 
            image: 'images/ainuera.jpg', 
            year: 2022, 
            description: 'アイヌ民族楽器のトンコリとムックリを重ねたLo-FIサウンド。', 
            url: 'https://share.amuse.io/track/otodoke-sound-ainuera', 
            spotifyUrl: 'https://open.spotify.com/intl-ja/track/0DsAOozzAJEDro1b9p9zsE?utm_source=1101lBnYGMWw&utm_medium=Indie_Amuse&utm_campaign=labelaffiliate', 
            appleMusicUrl: 'https://music.apple.com/us/album/ainuera/1607462052?i=1607462056', 
            youtubeMusicUrl: 'https://music.youtube.com/watch?v=6c4Fvvodqws' 
        },
        { 
            title: 'Night Cruise on the Chao Phraya River', 
            category: 'bgm', 
            image: 'images/oriental-20.jpg', 
            year: 2022, 
            description: '『Oriental Vol.20』収録。ライセンス向けにミックスを最適化。', 
            isLicensed: true, 
            spotifyUrl: 'https://open.spotify.com/intl-ja/track/4NRlzIyYrjUYwDYkDJO1Fn?si=37a14beb80634212', 
            appleMusicUrl: 'https://music.apple.com/us/song/night-cruise-on-the-chao-phraya-river/1629016063', 
            youtubeMusicUrl: 'https://music.youtube.com/watch?v=0Zb5L1Z7jnc&si=wEiFYyfazozFitZ6' 
        },
        { 
            title: 'Tape Stop Nostalgic', 
            category: 'lofi', 
            image: 'images/rb-11.jpg', 
            year: 2021, 
            description: '『R&B Vol.11』収録。テープストップと分厚いRhodesサウンド。', 
            isLicensed: true, 
            spotifyUrl: 'https://open.spotify.com/intl-ja/track/2c1KLNO44UFcRlxKjPhL2p?si=864547d003eb4e6e', 
            appleMusicUrl: 'https://music.apple.com/us/song/tape-stop-nostalgic/1609519295', 
            youtubeMusicUrl: 'https://music.youtube.com/watch?v=uVrlnba133s&si=bFLtA6f2X96LAmWW' 
        },
        { 
            title: 'Thailand ホリッカーズ', 
            category: 'lofi', 
            image: 'images/thailand-horikachers.jpg', 
            year: 2021, 
            description: 'タイの街の喧騒をチルホップに昇華。', 
            isLicensed: true, 
            spotifyUrl: 'https://open.spotify.com/intl-ja/track/0AhdNOukewssSaV0wV6WPT?si=efcd297e75cc4a75', 
            appleMusicUrl: 'https://music.apple.com/us/album/thailand-%E3%83%9B%E3%83%AA%E3%83%83%E3%82%AB%E3%83%BC%E3%82%BA-single/1596368915', 
            youtubeMusicUrl: 'https://music.youtube.com/watch?v=VmiujMgh87Y&si=1A_8ABUlYcQsC3Aa' 
        }
    ],

    // コラボレーションデータ
    collaborations: [
        {
            year: '2025',
            title: 'とっととトムヤムクン (feat. SomtumGoto)',
            image: 'images/tomyumkung.jpg',
            description: 'タイ・フードカルチャーをテーマにした多国籍コラボ。TomyumJimmyのスパイシーなリリックに、ソムタム後藤のブルージーなボーカルが絡み、タイの熱気を4Kで真空パックしたMVが映える。',
            spotifyUrl: 'https://open.spotify.com/intl-ja/track/0JDvIdKTCrVn4g3fAeN704?si=366e59352ec34ad2',
            appleMusicUrl: 'https://music.apple.com/us/album/%E3%81%A8%E3%81%A3%E3%81%A8%E3%81%A8%E3%83%88%E3%83%A0%E3%83%A4%E3%83%A0%E3%82%AF%E3%83%B3-feat-somtumgoto-single/1743784760',
            youtubeMusicUrl: 'https://music.youtube.com/watch?v=ETHI-25_sB4&si=FmtEtO6eMGmdTXHp',
            youtubeVideoId: 'u_Lox5_e2ZA'
        },
        {
            year: '2022~',
            title: 'Audiostock 公式コンピレーション',
            image: 'images/audiostock.jpg',
            description: '『Oriental Vol.20』『R&B Vol.11』に楽曲が採用。BGMライブラリでの採用実績は、クオリティの証明です。',
            link: 'https://audiostock.jp/bgm?audio_search%5Bkeywords%5D=otodoke+sound&audio_category=0&button='
        }
    ],

    // コンタクトデータ
    contact: {
        title: 'Contact Me',
        description: 'BGM制作のご依頼、コラボレーションのご相談など、お気軽にご連絡ください。',
        buttons: [
            { type: 'BGM制作依頼', text: 'BGM制作依頼' },
            { type: 'コラボ相談', text: 'コラボ相談' },
            { type: 'その他', text: 'その他' }
        ],
        sns: [
            { platform: 'Twitter', url: 'https://twitter.com/otodokesound', icon: 'fa-x-twitter' },
            { platform: 'Instagram', url: 'https://instagram.com/otodokesound', icon: 'fa-instagram' }
        ]
    }
};
