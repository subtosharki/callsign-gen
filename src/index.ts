import type { deps } from './types'

export default class {
    private readonly fronts: { [key: deps]: string };
    constructor() {
        this.fronts = {
            cadet: 'Cadet-',
            depHeads: '1-K-',
            supervisors: '1-A-',
            sahp: '2-B-',
            bcso: '3-C-',
            lspd: '6-W-',
            dispatch: '4-D-',
            fire: '5-T-',
            civ: 'Civ-'
        }
    }
    private async getAvaliableCallsigns(dep: deps) {
        //get the callsigns that are avaliable from the sheet
    }

    private async generatecallsign(dep: deps) {
        //generate the callsign from the avaliable callsigns
    }

    public async getCadetCallsign() {
        return this.generatecallsign('cadet');
    }
    public async getDepHeadsCallsign() {
        return this.generatecallsign('depHeads');
    }
    public async getSupervisorsCallsign() {
        return this.generatecallsign('supervisors');
    }
    public async getSahpCallsign() {
        return this.generatecallsign('sahp');
    }
    public async getBcsoCallsign() {
        return this.generatecallsign('bcso');
    }
    public async getDispatchCallsign() {
        return this.generatecallsign('dispatch');
    }
    public async getFireCallsign() {
        return this.generatecallsign('fire');
    }
    public async getCivCallsign() {
        return this.generatecallsign('civ');
    }
    public async getLspdCallsign() {
        return this.generatecallsign('lspd');
    }
}