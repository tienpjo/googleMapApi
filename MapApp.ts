import { User } from './src/User';
import { Company } from './src/Company';
type MapInfor = User & Company;
export class MapApp {
  private googleMap;
  constructor(id: string) {
    //@ts-ignore

    this.googleMap = new google.maps.Map(
      document.getElementById(id) as HTMLElement,
      {
        //35.6684103, lng: 139.5760575 TOkyo
        center: { lat: 35.6684103, lng: 139.5760575 },
        zoom: 5,
      }
    );
  }

  addMaker(maker: MapInfor): void {
    const makerMap = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: maker.location.lat,
        lng: maker.location.lng,
      },
    });
    this.googleMap.setCenter({
      lat: maker.location.lat,
      lng: maker.location.lng,
    });
    makerMap.addListener('click', () => {
      const info = new google.maps.InfoWindow({
        content: maker.name
          ? maker.name
          : `${maker.companyName}
             ${maker.catchPhrase}`,
      });
      info.open(this.googleMap, makerMap);
    });
  }
}

// export async function initMap(id: string): Promise<google.maps.Map> {
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary('maps');
//   return new Map(document.getElementById(id) as HTMLElement, {
//     //35.6684103, lng: 139.5760575 TOkyo
//     center: { lat: 35.6684103, lng: 139.5760575 },
//     zoom: 10,
//   });
//}
