class Music {
    constructor(title, singer, img, file){
        this.title=title;
        this.singer=singer;
        this.img=img;
        this.file=file;
    }

    getName(){
        return this.title + " - " + this.singer;
    }
}

const musicList =[
    new Music("Serapmış", "Şebnem Ferah","1.jpeg", "1.mp3"),
    new Music("Dibine Kadar", "Duman", "2.jpeg", "2.mp3"),
    new Music("Bir Derdim Var", "Mor ve Ötesi", "3.jpeg", "3.mp3"),
    new Music("Bir Kadın Çizeceksin", "MaNga", "4.jpeg", "4.mp3"),
    new Music("Prensesin Uykusuyum", "Redd", "5.jpeg","5.mp3"),
    new Music("Bana Öyle Bakma","Teoman","6.jpeg","6.mp3"),
    new Music("Denize Bıraksam","Göksel","7.jpeg","7.mp3"),
    new Music("Mavi","Barış Akarsu","8.jpeg","8.mp3")
];

