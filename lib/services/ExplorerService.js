// create ExplorerService class
class ExplorerService {

    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission;
    }

}

// Export the ExplorerService class
module.exports = ExplorerService;