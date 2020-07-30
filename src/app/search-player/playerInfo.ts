export class PlayerInfo{
    // _id: string;
    runs : number;
    balls_faced : number;

    wickets:number;
    catches:number;
    stumpings:number;

    constructor( runs,  balls_faced, wickets, catches,  stumpings){
        this.runs= runs;
        this.balls_faced=balls_faced;
        this.wickets=wickets;
        this.catches=catches;
        this.stumpings=stumpings;

    }
    
}