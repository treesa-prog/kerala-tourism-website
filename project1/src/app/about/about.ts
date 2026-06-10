import { Component } from '@angular/core';
import { Card } from "../card/card";

@Component({
  selector: 'app-about',
  imports: [Card],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  cardData: any[] = [
    {
      id:1,
      title:"Tanjiro Kamado",
      description:"Tanjiro Kamado (竈門かまど 炭たん治じ郎ろう Kamado Tanjirō?) is the main protagonist of Demon Slayer: Kimetsu no Yaiba. He is a Demon Slayer in the Demon Slayer Corps who joined to find a remedy to turn his sister, Nezuko Kamado, back into a human and to hunt down and kill demons,[7] and later swore to defeat Muzan Kibutsuji,[8] the Demon......",
      image:"https://www.mordeo.org/files/uploads/2025/09/Tanjiro-Kamado-Infinity-Castle-Demon-Slayer-Kimetsu-No-Yaiba-scaled.webp"
    },
     { id:2,
      title:"Nezuko Kamado",
      description:"Nezuko Kamado (竈門かまど 禰ね豆ず子こ Kamado Nezuko?) is the deuteragonist of Demon Slayer: Kimetsu no Yaiba. She is the younger sister of Tanjiro Kamado, one of the two remaining members of the Kamado family, and an informal member of the Demon Slayer Corps. Formerly a human, she was attacked and transformed into a demon by Muzan Kibutsuji.",
      image:"https://rukminim2.flixcart.com/image/480/640/kpu3frk0/poster/8/d/b/large-nezuko-kamado-wall-sticker-poster-selfadhesive-anime-original-imag3zkfzxcpyys7.jpeg?q=90"
    }
    ,{
      id:3,
      title:"Zenitsu Agatsuma",
      description:"Zenitsu is a young man of average height with fair skin, a muscular build, and downward-sloped, worried-looking eyes that fade from soft brown to a brilliant gold and golden, forked eyebrows that sharply fade into a warm orange color. He has short, yellow hair of varying lengths, cutting off squarely at the ends where it fades to ...........",
      image:"https://www.mordeo.org/files/uploads/2025/09/Zenitsu-Agatsuma-Infinity-Castle-Demon-Slayer-Kimetsu-No-Yaiba-scaled.webp"
    },
    {
      id:4,
      title:"Kanao Tsuyuri",
      description:"Kanao is a young woman of short stature, with large and gentle eyes of a dark lilac color that turns to a lighter color at the lower of the irises and a purple center along with notable bright light reflecting, that are framed by thick eyelashes, and pink lips in contrast to her pale complexion. She has medium-length, thin raven-black.......",
      image:"https://www.mordeo.org/files/uploads/2025/09/Kanao-Tsuyuri-Infinity-Castle-Demon-Slayer-Kimetsu-No-Yaiba.jpg"
    }
  ]

  
}
