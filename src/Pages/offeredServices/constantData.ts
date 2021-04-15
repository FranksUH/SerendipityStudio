import { IServiceItem } from "../../Domain/ServicesItem";

export const services: IServiceItem[] = [
    { Id: '1' , Name: "Manicure" , Description: "Description of the hands painting service", Price: 20.5, Likes: 105, ImageURL: 'assets/images/manicury2.jpg' },
    { Id: '2' , Name: "Pedicure" , Description: "Description of the foot painting service", Price: 22, Likes: 73, ImageURL: 'assets/images/pedicury2.jpg' },
    { Id: '3' , Name: "Hair removal" , Description: "Description of the depilation service", Price: 50, Likes: 113 , ImageURL: 'assets/images/depilacion1.jpg'},
    { Id: '4' , Name: "Masage" , Description: "Description of the body massage service", Price: 34.5, Likes: 18, ImageURL: 'assets/images/pedicury1.jpg' },
    { Id: '5' , Name: "Hair cut" , Description: "Description of the hair styling service", Price: 80, Likes: 202, ImageURL: 'assets/images/peluqueria1.jpg' },
    { Id: '6' , Name: "Facial" , Description: "Description of the facial service", Price: 46, Likes: 308, ImageURL: 'assets/images/depilacion2.jpg' }
] 