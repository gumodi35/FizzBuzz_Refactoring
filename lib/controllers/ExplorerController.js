const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/Reader");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json")
        return ExplorerService.filterByMission(explorers, mission)
    }
    
    
    static applyFizzbuzz(score){
        return FizzbuzzService.applyValidationInNumber(score);
    }
    
    static getExplorerUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorerUsernamesByMission(explorers, mission);
    }
    
    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile('explorers.json');
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
    
}


// export module ExplorerController
module.exports = ExplorerController;