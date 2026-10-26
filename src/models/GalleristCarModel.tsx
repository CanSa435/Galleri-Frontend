import type CarModel from "./CarModel";
import type GalleristModel from "./GalleristModel";

export default interface GalleristCarModel {
    id:number,
    dtoCar:CarModel,
    dtoGallerist:GalleristModel
}