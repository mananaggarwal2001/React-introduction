const animals = [{
        name: "cat",
        sound: "meow",
        feedingReqirements: {
            food: 2,
            water: 3
        }
    },
    {
        name: "dog",
        sound: "woof",
        feedingReqirements: {
            food: 4,
            water: 5
        }
    }
];

function useAnimals(animals) {
    return [
        animals.name,
        function() {
            console.log(animals.sound);
        }
    ];
}
export default animals;
export { useAnimals };