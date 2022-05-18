// export ExplorerService
const ExplorerService = require("./../../lib/services/ExplorerService");

// test for ExplorerService
describe("Tets para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una mission determinada", ()=>{
        const explorers = [{ mission: "node" }]
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1)
    })
})