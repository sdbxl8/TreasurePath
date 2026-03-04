export interface mychartDataset{
    label:string;
    data:number[];
    backgroundColor?:string[] | string;
}

export interface myChartDataType{
    labels:string[];
    datasets: mychartDataset[];
}