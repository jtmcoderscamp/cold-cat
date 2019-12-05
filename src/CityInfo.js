export default class CityInfo {
  constructor(container) {
    this.container = container;
    this.images = {
      wroclaw: [
        "https://cdn.civitatis.com/polonia/breslavia/galeria/ayuntamiento-breslavia-picota.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyg_hODoBMAVyUj2iYt-DxkTNpfAYuhvn64ySubbmR_WFXRobH&s"
      ],
      gdansk: [
        "https://cdn.getyourguide.com/img/tour_img-964424-146.jpg",
        "https://osm.no/app/uploads/2019/03/Gdask.jpg"
      ],
      lublin: [
        "https://emerging-europe.com/wp-content/uploads/2019/08/ah_48_hours_1_lublin_2-990x556.jpg",
        "https://i.redd.it/dn158tivmi201.jpg"
      ],
      krakow: [
        "https://emerging-europe.com/wp-content/uploads/2019/07/bigstock-krakow-poland-august-k-257572672-990x556.jpg",
        "https://whc.unesco.org/uploads/thumbs/site_0029_0019-750-0-20151105151946.jpg"
      ],
      warszawa: [
        "https://static.polityka.pl/_resource/res/path/cf/3e/cf3e43e3-b095-43b5-85aa-14f19b3d33c3_f1400x900",
        "https://warsawcitybreak.com/wp-content/uploads/2019/09/Panorama_fot.-m.st_.-Warszawa-2.jpg"
      ],
      poznan: [
        "https://kafkadeskdotorg.files.wordpress.com/2018/08/poznan-old-town-954e0a86badefce1568e36af3cfb2ef4.jpg?w=950",
        "https://d36zfg4d500s0g.cloudfront.net/up/dt/2019/05/Event_Poznan.jpg"
      ],
      przemysl: [
        "https://upload.wikimedia.org/wikipedia/commons/f/fb/Bazylika_archikatedralna_Wniebowzi%C4%99cia_Naj%C5%9Bwi%C4%99tszej_Maryi_Panny2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/0.2014._Marktplatz_in_der_Altstadt_von_Przemysl.JPG"
      ],
      sandomierz: [
        "https://polskapogodzinach.pl/wp-content/uploads/2018/07/sandomierz-atrakcje-stare-miasto-2.jpg",
        "https://i.wpimg.pl/O/644x430/d.wpimg.pl/1426973616-114839005/sandomierz_Jacky%20Serko%20shutterstock_367161992.jpg"
      ],
      torun: [
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Toru%C5%84_-_Poczta_G%C5%82%C3%B3wna_01.jpg",
        "https://img.theculturetrip.com/768x432/wp-content/uploads/2018/01/1024px-stare_miasto_ratusz_staromiejski_w_toruniu.jpg"
      ],
      szczecin: [
        "https://static.amazon.jobs/locations/177/thumbnails/FC-Szczecin-Poland_image.jpg?1481892970",
        "https://i.wpimg.pl/O/644x362/d.wpimg.pl/990152437--1927320399/szczecin.jpg"
      ]
    };
  }
  render(city) {
    const images = this.images[city.toLowerCase()];
    this.container.innerHTML = `
      <div>
        <div class="title">Atrakcje miasta ${city}</div>
        <div class="city-images">
          ${images
            .map(
              (img, index) =>
                `<img src="${img}" alt="image ${city} nr ${index + 1}" />`
            )
            .join("")}
        </div>
      </div>
    `;
  }
}
