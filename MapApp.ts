import { User } from './src/User';
import { Company } from './src/Company';
export class MapApp {
  private googleMap;
  constructor(id: string) {
    //@ts-ignore

    this.googleMap = new google.maps.Map(
      document.getElementById(id) as HTMLElement,
      {
        //35.6684103, lng: 139.5760575 TOkyo
        center: { lat: 35.6684103, lng: 139.5760575 },
        zoom: 10,
      }
    );
  }

  addUserMaker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.long,
      },
    });
  }
  addCompanyMaker(company: Company): void {
    new google.maps.Marker({});
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
